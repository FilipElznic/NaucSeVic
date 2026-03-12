import { useState, useEffect, useRef } from "react";
import { httpsCallable } from "firebase/functions";
import { functions } from "../config/firebase";
import { toast } from "react-toastify";

// Module-level cache for course data to persist across component mounts
const courseDataCache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export const useCourseData = (subjectId, levelId, subLevelId) => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      if (!subjectId || !levelId) {
        setLoading(false);
        return;
      }

      const cacheKey = `${subjectId}_${levelId}_${subLevelId || ""}`;
      const cached = courseDataCache.get(cacheKey);
      if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
        setCourseData(cached.data);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const getCourseData = httpsCallable(functions, "getCourseData");
        const response = await getCourseData({
          subjectId,
          levelId,
          subLevelId: subLevelId || null,
        });

        courseDataCache.set(cacheKey, {
          data: response.data,
          timestamp: Date.now(),
        });
        setCourseData(response.data);
      } catch (err) {
        console.error("Error fetching course data:", err);
        setError(err);
        toast.error("Nepodařilo se načíst obsah kurzu.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [subjectId, levelId, subLevelId]);

  return { courseData, loading, error };
};
