import React, { useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { subjectConfig, levelsConfig } from "../config/subjectConfig";
import { generateCourseData } from "../config/courseContent";

const LecturePage = () => {
  const { subjectId, levelId, subLevelId, chapterId, lectureId } = useParams();
  const navigate = useNavigate();

  // --- DATA RETRIEVAL ---

  const activeSubject = useMemo(() => {
    return subjectConfig[subjectId] || subjectConfig.matematika;
  }, [subjectId]);

  const activeLevelConfig = useMemo(() => {
    return activeSubject.levelsData
      ? activeSubject.levelsData[levelId]
      : levelsConfig[levelId] || { title: levelId, level: "Unknown" };
  }, [activeSubject, levelId]);

  // Parse subLevel from URL if present (it might be part of the route or not)
  // The route structure I'm planning is /predmety/:subjectId/:levelId/lekce/:chapterId/:lectureId
  // But wait, subLevelId is part of the course route: /predmety/:subjectId/:levelId/:subLevelId
  // So I should probably support that in the lecture route too.
  // Let's assume the route will be flexible or I'll handle it.

  const subLevel =
    subLevelId === "2-stupen" ? 2 : subLevelId === "1-stupen" ? 1 : null;

  const courseData = useMemo(() => {
    return generateCourseData(activeSubject, activeLevelConfig, subLevel);
  }, [activeSubject, activeLevelConfig, subLevel]);

  const currentChapter = courseData.chapters.find((ch) => ch.id === chapterId);
  const currentLecture = currentChapter?.lessons.find(
    (l) => l.id === lectureId
  );

  // --- NAVIGATION HANDLERS ---

  const getLectureUrl = (chId, lId) => {
    let url = `/kurz/${subjectId}/${levelId}`;
    if (subLevelId) {
      url += `/${subLevelId}`;
    }
    url += `/${chId}/${lId}`;
    return url;
  };

  const handleBack = () => {
    // Navigate back to the course page
    let url = `/predmety/${subjectId}/${levelId}`;
    if (subLevelId) {
      url += `/${subLevelId}`;
    }
    navigate(url);
  };

  const handleNextLecture = () => {
    // Logic to find next lecture
    if (!currentChapter) return;

    const currentLessonIdx = currentChapter.lessons.findIndex(
      (l) => l.id === lectureId
    );
    if (currentLessonIdx < currentChapter.lessons.length - 1) {
      // Next lesson in same chapter
      const nextLesson = currentChapter.lessons[currentLessonIdx + 1];
      navigate(getLectureUrl(chapterId, nextLesson.id));
    } else {
      // Next chapter?
      const currentChapterIdx = courseData.chapters.findIndex(
        (ch) => ch.id === chapterId
      );
      if (currentChapterIdx < courseData.chapters.length - 1) {
        const nextChapter = courseData.chapters[currentChapterIdx + 1];
        if (nextChapter.lessons.length > 0) {
          const nextLesson = nextChapter.lessons[0];
          navigate(getLectureUrl(nextChapter.id, nextLesson.id));
        }
      }
    }
  };

  const handlePrevLecture = () => {
    // Logic to find prev lecture
    if (!currentChapter) return;

    const currentLessonIdx = currentChapter.lessons.findIndex(
      (l) => l.id === lectureId
    );
    if (currentLessonIdx > 0) {
      const prevLesson = currentChapter.lessons[currentLessonIdx - 1];
      navigate(getLectureUrl(chapterId, prevLesson.id));
    } else {
      // Prev chapter
      const currentChapterIdx = courseData.chapters.findIndex(
        (ch) => ch.id === chapterId
      );
      if (currentChapterIdx > 0) {
        const prevChapter = courseData.chapters[currentChapterIdx - 1];
        if (prevChapter.lessons.length > 0) {
          const prevLesson =
            prevChapter.lessons[prevChapter.lessons.length - 1];
          navigate(getLectureUrl(prevChapter.id, prevLesson.id));
        }
      }
    }
  };

  if (!currentLecture) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Lekce nenalezena</h2>
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Zpět na kurz
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = LucideIcons[activeSubject.icon] || LucideIcons.BookOpen;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 flex flex-col">
      {/* Top Bar */}
      <header className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg text-gray-600 dark:text-gray-400 transition-colors"
          >
            <LucideIcons.ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {courseData.title}
            </h1>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
              {currentLecture.title}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevLecture}
            className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg text-gray-600 dark:text-gray-400 disabled:opacity-50"
            disabled={false /* TODO: check if first */}
          >
            <LucideIcons.ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNextLecture}
            className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg text-gray-600 dark:text-gray-400 disabled:opacity-50"
            disabled={false /* TODO: check if last */}
          >
            <LucideIcons.ChevronRight size={20} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full p-4 md:p-8">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-800 overflow-hidden min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center mb-6 text-gray-400 dark:text-gray-500">
            {currentLecture.type === "video" ? (
              <LucideIcons.Play size={40} />
            ) : (
              <LucideIcons.FileQuestion size={40} />
            )}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Obsah lekce: {currentLecture.title}
          </h2>

          {currentLecture.content ? (
            <div className="text-lg text-gray-800 dark:text-gray-200 max-w-2xl mb-8 p-6 bg-gray-50 dark:bg-zinc-800/50 rounded-xl border border-gray-100 dark:border-zinc-800">
              {currentLecture.content}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mb-8">
              Zde bude zobrazen samotný obsah lekce - video přehrávač,
              interaktivní cvičení nebo textový materiál.
            </p>
          )}

          <div className="flex gap-4">
            <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
              Spustit {currentLecture.type === "video" ? "video" : "cvičení"}
            </button>
            <button className="px-6 py-2.5 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 text-gray-900 dark:text-white font-medium rounded-lg transition-colors">
              Označit jako dokončené
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LecturePage;
