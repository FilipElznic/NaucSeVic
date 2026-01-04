import { useState, useEffect } from "react";
import { httpsCallable } from "firebase/functions";
import { functions } from "../config/firebase";
import { toast } from "react-toastify";

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

      setLoading(true);
      setError(null);

      try {
        const getCourseData = httpsCallable(functions, "getCourseData");
        const response = await getCourseData({
          subjectId,
          levelId,
          subLevelId: subLevelId || null,
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
