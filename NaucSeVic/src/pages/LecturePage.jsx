import React, { useMemo, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { subjectConfig, levelsConfig } from "../config/subjectConfig";
import { useCourseData } from "../hooks/useCourseData";
import { useUserProfile } from "../hooks/useUserProfile";
import { useDarkMode } from "../contexts/DarkModeContext";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import QuizComponent from "../components/lecture/QuizComponent";
import ErrorBoundary from "../components/guards/ErrorBoundary";
import SplineViewer from "../components/ui/SplineViewer";
import LatexRenderer from "../components/shared/LatexRenderer";

import { httpsCallable } from "firebase/functions";
import { functions } from "../config/firebase";
import { toast } from "react-toastify";

const LecturePage = () => {
  const { subjectId, levelId, subLevelId, chapterId, lectureId } = useParams();
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { userProfile, refreshProfile } = useUserProfile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [expandedChapters, setExpandedChapters] = useState({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [completing, setCompleting] = useState(false);

  // --- DATA RETRIEVAL ---

  const activeSubject = useMemo(() => {
    return subjectConfig[subjectId] || subjectConfig.matematika;
  }, [subjectId]);

  const subLevel =
    subLevelId === "2-stupen" ? 2 : subLevelId === "1-stupen" ? 1 : null;

  const { courseData, loading, error } = useCourseData(
    subjectId,
    levelId,
    subLevel
  );

  const currentChapter = useMemo(() => {
    if (!courseData?.chapters) return null;
    // Try to match by ID first (legacy/long)
    let found = courseData.chapters.find((ch) => ch.id === chapterId);
    if (found) return found;

    // Try to match by short slug "chX"
    const match = chapterId.match(/^ch(\d+)$/);
    if (match) {
      const order = parseInt(match[1], 10);
      return courseData.chapters.find((ch) => ch.order === order);
    }
    return null;
  }, [courseData, chapterId]);

  const currentLecture = useMemo(() => {
    if (!currentChapter?.lessons) return null;
    // Try to match by ID first
    let found = currentChapter.lessons.find((l) => l.id === lectureId);
    if (found) return found;

    // Try to match by short slug "lX"
    const match = lectureId.match(/^l(\d+)$/);
    if (match) {
      const order = parseInt(match[1], 10);
      return currentChapter.lessons.find((l) => l.order === order);
    }
    return null;
  }, [currentChapter, lectureId]);

  // Initialize expanded chapters
  useEffect(() => {
    if (currentChapter) {
      setExpandedChapters((prev) => ({ ...prev, [currentChapter.id]: true }));
    }
  }, [currentChapter]);

  // Reset quiz state when lecture changes
  useEffect(() => {
    setShowQuiz(false);
  }, [currentLecture?.id]);

  // --- NAVIGATION HANDLERS ---

  const getLectureUrl = (chapter, lesson) => {
    let url = `/kurz/${subjectId}/${levelId}`;
    if (subLevelId) {
      url += `/${subLevelId}`;
    }
    const chSlug = chapter.order ? `ch${chapter.order}` : chapter.id;
    const lSlug = lesson.order ? `l${lesson.order}` : lesson.id;
    url += `/${chSlug}/${lSlug}`;
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

  const toggleChapter = (chId) => {
    setExpandedChapters((prev) => ({ ...prev, [chId]: !prev[chId] }));
  };

  const handleCompleteLesson = async () => {
    setCompleting(true);
    try {
      const completeLesson = httpsCallable(functions, "completeLesson");
      const result = await completeLesson({ lessonId: currentLecture.id });

      if (result.data.xpGained > 0) {
        toast.success(`Lekce dokončena! +${result.data.xpGained} XP`);
      } else {
        toast.success("Lekce označena jako dokončená.");
      }

      await refreshProfile();
    } catch (error) {
      console.error("Error completing lesson:", error);
      toast.error("Nepodařilo se dokončit lekci.");
    } finally {
      setCompleting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950">
        <LoadingSpinner size="xl" />
      </div>
    );
  }

  if (error || !courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Chyba při načítání kurzu</h2>
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Zpět na přehled
          </button>
        </div>
      </div>
    );
  }

  if (!currentLecture) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Lekce nenalezena</h2>
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Zpět na přehled
          </button>
        </div>
      </div>
    );
  }

  const handleNextLecture = () => {
    // Logic to find next lecture
    if (!currentChapter) return;

    const currentLessonIdx = currentChapter.lessons.findIndex(
      (l) => l.id === currentLecture.id
    );
    if (currentLessonIdx < currentChapter.lessons.length - 1) {
      // Next lesson in same chapter
      const nextLesson = currentChapter.lessons[currentLessonIdx + 1];
      navigate(getLectureUrl(currentChapter, nextLesson));
    } else {
      // Next chapter?
      const currentChapterIdx = courseData.chapters.findIndex(
        (ch) => ch.id === currentChapter.id
      );
      if (currentChapterIdx < courseData.chapters.length - 1) {
        const nextChapter = courseData.chapters[currentChapterIdx + 1];
        if (nextChapter.lessons.length > 0) {
          const nextLesson = nextChapter.lessons[0];
          navigate(getLectureUrl(nextChapter, nextLesson));
        }
      }
    }
  };

  const handlePrevLecture = () => {
    // Logic to find prev lecture
    if (!currentChapter) return;

    const currentLessonIdx = currentChapter.lessons.findIndex(
      (l) => l.id === currentLecture.id
    );
    if (currentLessonIdx > 0) {
      const prevLesson = currentChapter.lessons[currentLessonIdx - 1];
      navigate(getLectureUrl(currentChapter, prevLesson));
    } else {
      // Prev chapter
      const currentChapterIdx = courseData.chapters.findIndex(
        (ch) => ch.id === currentChapter.id
      );
      if (currentChapterIdx > 0) {
        const prevChapter = courseData.chapters[currentChapterIdx - 1];
        if (prevChapter.lessons.length > 0) {
          const prevLesson =
            prevChapter.lessons[prevChapter.lessons.length - 1];
          navigate(getLectureUrl(prevChapter, prevLesson));
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
    <div className="h-screen bg-slate-50 dark:bg-zinc-950 flex flex-col overflow-hidden relative">
      {/* Background decoration for light mode */}
      <div className="absolute inset-0 z-0 pointer-events-none dark:hidden overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-gradient-to-br from-indigo-50/40 to-purple-50/0 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-gradient-to-tr from-blue-50/40 to-slate-50/0 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Top Bar */}
      <header className="bg-white/80 backdrop-blur-md dark:bg-zinc-900/90 border-b border-gray-200/50 dark:border-zinc-800 px-4 py-3 flex items-center justify-between shrink-0 z-50 relative">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg text-gray-600 dark:text-gray-400 transition-colors"
          >
            <LucideIcons.Menu size={20} />
          </button>
          <button
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg text-gray-600 dark:text-gray-400 transition-colors"
          >
            <LucideIcons.ArrowLeft size={20} />
          </button>
          <div className="hidden md:block">
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

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all duration-300 ml-2"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <LucideIcons.Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <LucideIcons.Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <aside
          className={`
          absolute md:relative z-40 h-full bg-white/60 backdrop-blur-xl dark:bg-zinc-900/95 border-r border-gray-200/50 dark:border-zinc-800
          transition-all duration-300 ease-in-out overflow-y-auto overflow-x-hidden
          ${
            isSidebarOpen
              ? "w-80 translate-x-0"
              : "w-0 -translate-x-full md:translate-x-0 md:w-0"
          }
        `}
        >
          <div className="p-4 space-y-4 w-80">
            <h3 className="font-bold text-gray-900 dark:text-white px-2 flex items-center gap-2">
              <LucideIcons.List size={18} />
              Obsah kurzu
            </h3>
            <div className="space-y-2">
              {courseData.chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="rounded-xl overflow-hidden border border-gray-100 dark:border-zinc-800"
                >
                  <button
                    onClick={() => toggleChapter(chapter.id)}
                    className="w-full flex items-center justify-between p-3 bg-slate-50/80 dark:bg-zinc-800/50 hover:bg-white dark:hover:bg-zinc-800 transition-colors text-left backdrop-blur-sm"
                  >
                    <span className="font-medium text-sm text-gray-900 dark:text-white line-clamp-1">
                      {chapter.title}
                    </span>
                    <LucideIcons.ChevronDown
                      size={16}
                      className={`text-gray-400 transition-transform shrink-0 ${
                        expandedChapters[chapter.id] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedChapters[chapter.id] && (
                    <div className="bg-white/40 dark:bg-zinc-900/40">
                      {chapter.lessons.map((lesson) => {
                        const isActive = lesson.id === currentLecture.id;
                        const isCompleted =
                          userProfile?.completedLessons?.includes(lesson.id);

                        return (
                          <button
                            key={lesson.id}
                            onClick={() =>
                              navigate(getLectureUrl(chapter, lesson))
                            }
                            className={`w-full flex items-center gap-3 p-3 text-left text-sm transition-colors border-l-2 ${
                              isActive
                                ? "bg-blue-50/80 dark:bg-blue-900/20 border-blue-500 text-blue-700 dark:text-blue-300"
                                : "border-transparent hover:bg-white/50 dark:hover:bg-zinc-800/50 text-gray-600 dark:text-gray-400"
                            }`}
                          >
                            {isCompleted ? (
                              <LucideIcons.CheckCircle2
                                size={16}
                                className="text-green-500 shrink-0"
                              />
                            ) : isActive ? (
                              <LucideIcons.PlayCircle
                                size={16}
                                className="text-blue-500 shrink-0"
                              />
                            ) : (
                              <LucideIcons.Circle
                                size={16}
                                className="text-gray-300 dark:text-zinc-700 shrink-0"
                              />
                            )}
                            <span
                              className={`truncate ${
                                isCompleted
                                  ? "text-green-700 dark:text-green-400 font-medium"
                                  : ""
                              }`}
                            >
                              {lesson.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 w-full bg-transparent dark:bg-zinc-950 relative z-10">
          <div className="max-w-6xl mx-auto">
            <ErrorBoundary>
              <div className="bg-white/90 backdrop-blur-sm dark:bg-zinc-900 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-zinc-800 overflow-hidden min-h-[60vh] flex flex-col items-center justify-center p-8 md:p-12 text-center">
                {showQuiz && currentLecture?.content?.tasks?.length > 0 ? (
                  <div className="w-full max-w-4xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Procvičování: {currentLecture.title}
                      </h2>
                      <button
                        onClick={() => setShowQuiz(false)}
                        className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                      >
                        Zpět k lekci
                      </button>
                    </div>
                    <QuizComponent
                      tasks={currentLecture.content.tasks}
                      lessonId={currentLecture.id}
                      onComplete={async () => {
                        await refreshProfile();
                      }}
                    />
                  </div>
                ) : (
                  <>
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

                    {currentLecture.content?.splineUrl && (
                      <div className="w-full max-w-4xl mx-auto mb-8 h-[500px]">
                        <SplineViewer url={currentLecture.content.splineUrl} />
                      </div>
                    )}

                    {currentLecture.content ? (
                      typeof currentLecture.content === "string" ? (
                        <div className="text-lg text-gray-800 dark:text-gray-200 max-w-2xl mb-8 p-6 bg-gray-50 dark:bg-zinc-800/50 rounded-xl border border-gray-100 dark:border-zinc-800">
                          <LatexRenderer text={currentLecture.content} />
                        </div>
                      ) : (
                        <div className="w-full max-w-4xl text-left space-y-12 mb-12">
                          {currentLecture.content.sections &&
                            currentLecture.content.sections.map(
                              (section, idx) => (
                                <div key={idx} className="space-y-6">
                                  {section.heading && (
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-zinc-800 pb-2">
                                      {section.heading}
                                    </h3>
                                  )}

                                  {section.text && (
                                    <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                      <LatexRenderer text={section.text} />
                                    </div>
                                  )}

                                  {section.image && (
                                    <div className="my-6 rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-700 shadow-sm">
                                      <img
                                        src={section.image}
                                        alt={section.heading || "Obrázek lekce"}
                                        className="w-full h-auto object-cover max-h-[500px]"
                                        loading="lazy"
                                        onError={(e) => {
                                          e.target.style.display = "none";
                                          // Fallback to placeholder if image fails to load
                                          e.target.nextSibling.style.display =
                                            "flex";
                                        }}
                                      />
                                      <div
                                        className="hidden bg-gray-100 dark:bg-zinc-800 aspect-video items-center justify-center p-8"
                                        style={{ display: "none" }}
                                      >
                                        <div className="text-center text-gray-500 dark:text-gray-400">
                                          <LucideIcons.Image
                                            size={48}
                                            className="mx-auto mb-2 opacity-50"
                                          />
                                          <span className="text-sm">
                                            Nepodařilo se načíst obrázek:{" "}
                                            {section.image}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {section.video && (
                                    <div className="my-6 bg-black rounded-xl overflow-hidden aspect-video flex items-center justify-center relative group cursor-pointer">
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                      <div className="relative z-10 text-center text-white">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                          <LucideIcons.Play
                                            size={32}
                                            className="ml-1"
                                          />
                                        </div>
                                        <span className="text-sm font-medium">
                                          Video: {section.video}
                                        </span>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )
                            )}
                        </div>
                      )
                    ) : (
                      <div className="py-12">
                        <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center mx-auto mb-6 text-gray-300 dark:text-zinc-700">
                          <LucideIcons.Ghost size={48} />
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
                          Tato lekce zatím nemá žádný obsah.
                        </p>
                      </div>
                    )}

                    <div className="flex gap-4">
                      {currentLecture.content?.tasks &&
                      currentLecture.content.tasks.length > 0 ? (
                        <button
                          onClick={() => setShowQuiz(true)}
                          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                        >
                          Spustit cvičení
                        </button>
                      ) : (
                        <button
                          onClick={handleCompleteLesson}
                          disabled={completing}
                          className="px-6 py-2.5 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 text-gray-900 dark:text-white font-medium rounded-lg transition-colors disabled:opacity-50"
                        >
                          {completing
                            ? "Ukládání..."
                            : "Označit jako dokončené"}
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            </ErrorBoundary>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LecturePage;
