import { useState, useEffect } from "react";
import { httpsCallable } from "firebase/functions";
import { functions } from "../config/firebase";
import { toast } from "react-toastify";

// Module-level cache for course data to persist across component mounts
const courseDataCache = new Map();
const pendingRequests = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export const useCourseData = (subjectId, levelId, subLevelId) => {
  const cacheKey = `${subjectId}_${levelId}_${subLevelId || ""}`;
  const cached = courseDataCache.get(cacheKey);
  const hasFreshCache = cached && Date.now() - cached.timestamp < CACHE_TTL;

  const [courseData, setCourseData] = useState(
    hasFreshCache ? cached.data : null,
  );
  const [loading, setLoading] = useState(!hasFreshCache);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchCourseData = async () => {
      if (!subjectId || !levelId) {
        setLoading(false);
        return;
      }

      // Check cache again (may have been populated by another instance)
      const cached = courseDataCache.get(cacheKey);
      if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
        if (isMounted) {
          setCourseData(cached.data);
          setLoading(false);
        }
        return;
      }

      if (isMounted) {
        setLoading(true);
        setError(null);
      }

      try {
        // Deduplicate in-flight requests
        let request = pendingRequests.get(cacheKey);
        if (!request) {
          const getCourseData = httpsCallable(functions, "getCourseData");
          request = getCourseData({
            subjectId,
            levelId,
            subLevelId: subLevelId || null,
          });
          pendingRequests.set(cacheKey, request);
        }

        const response = await request;
        pendingRequests.delete(cacheKey);

        courseDataCache.set(cacheKey, {
          data: response.data,
          timestamp: Date.now(),
        });
        if (isMounted) {
          setCourseData(response.data);
        }
      } catch (err) {
        pendingRequests.delete(cacheKey);
        console.error("Error fetching course data:", err);
        if (isMounted) {
          setError(err);
          toast.error("Nepodařilo se načíst obsah kurzu.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCourseData();

    return () => {
      isMounted = false;
    };
  }, [subjectId, levelId, subLevelId, cacheKey]);

  return { courseData, loading, error };
};
