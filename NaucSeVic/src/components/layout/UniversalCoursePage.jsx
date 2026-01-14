import React, { useState, useEffect } from "react";
import * as LucideIcons from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCourseData } from "../../hooks/useCourseData";
import { useUserProfile } from "../../hooks/useUserProfile";
import LoadingSpinner from "../ui/LoadingSpinner";
import { getAuth } from "firebase/auth";
import userService from "../../services/userService";
import { toast } from "react-toastify";

// --- COMPONENT ---

const UniversalCoursePage = ({ subject, level, subLevel }) => {
  const navigate = useNavigate();
  const { courseData, loading, error } = useCourseData(
    subject.id,
    level.id,
    subLevel
  );
  const { userProfile, refreshProfile } = useUserProfile();

  // State for loading animation on the button
  const [updatingFavorite, setUpdatingFavorite] = useState(false);
  const [expandedChapter, setExpandedChapter] = useState(null);

  // Set first chapter expanded when data loads
  useEffect(() => {
    if (courseData?.chapters?.length > 0) {
      setExpandedChapter(courseData.chapters[0].id);
    }
  }, [courseData]);

  const toggleChapter = (chapterId) => {
    setExpandedChapter(expandedChapter === chapterId ? null : chapterId);
  };

  const handleStartLesson = (chapter, lesson) => {
    let url = `/kurz/${subject.id}/${level.id}`;
    if (subLevel) {
      url += `/${subLevel}-stupen`;
    }
    // Use short URL format: ch{order}/l{order}
    const chSlug = chapter.order ? `ch${chapter.order}` : chapter.id;
    const lSlug = lesson.order ? `l${lesson.order}` : lesson.id;
    url += `/${chSlug}/${lSlug}`;
    navigate(url);
  };

  const handleStartCourse = () => {
    if (!courseData?.chapters) return;

    const completedLessonIds = userProfile?.completedLessons || [];

    // Find first lesson that is not completed
    for (const chapter of courseData.chapters) {
      if (!chapter.lessons) continue;

      for (const lesson of chapter.lessons) {
        // Check if lesson is completed by checking ID in user profile
        const isCompleted = completedLessonIds.includes(lesson.id);

        if (!isCompleted) {
          handleStartLesson(chapter, lesson);
          return;
        }
      }
    }

    // Fallback: If all are completed, start from the beginning
    if (
      courseData.chapters.length > 0 &&
      courseData.chapters[0].lessons?.length > 0
    ) {
      handleStartLesson(
        courseData.chapters[0],
        courseData.chapters[0].lessons[0]
      );
    }
  };

  // 1. Generate a stable Course ID based on props
  const courseId = subLevel
    ? `${subject.id}_${level.id}_${subLevel}`
    : `${subject.id}_${level.id}`;

  // 2. Check if currently favorite
  const isFavorite = userProfile?.favoriteCourses?.includes(courseId);

  // 3. Handle the toggle action
  const handleToggleFavorite = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      toast.info("Pro uložení kurzu se musíte přihlásit.");
      navigate("/prihlaseni");
      return;
    }

    setUpdatingFavorite(true);
    try {
      // Call the service method we saw in userService.js
      await userService.toggleFavoriteCourse(user.uid, courseId, !isFavorite);
      await refreshProfile();

      toast.success(
        isFavorite
          ? "Kurz odebrán z oblíbených."
          : "Kurz byl uložen do oblíbených."
      );
    } catch (error) {
      console.error("Error toggling favorite:", error);
      toast.error("Nepodařilo se změnit stav oblíbených.");
    } finally {
      setUpdatingFavorite(false);
    }
  };

  const IconComponent = LucideIcons[subject.icon] || LucideIcons.BookOpen;

  // Dynamic styles
  const themeColor = subject.themeColor || "blue";

  // Helper to get Tailwind classes dynamically (safelist might be needed in real app, but this works for now if classes exist)
  // We'll use style objects for colors to be safe against purging if not configured
  const getThemeColor = (opacity = 1) => {
    // Simple mapping for demo purposes, ideally use Tailwind classes
    const colors = {
      blue: `rgba(59, 130, 246, ${opacity})`,
      green: `rgba(34, 197, 94, ${opacity})`,
      purple: `rgba(168, 85, 247, ${opacity})`,
      red: `rgba(239, 68, 68, ${opacity})`,
      orange: `rgba(249, 115, 22, ${opacity})`,
      teal: `rgba(20, 184, 166, ${opacity})`,
      pink: `rgba(236, 72, 153, ${opacity})`,
      emerald: `rgba(16, 185, 129, ${opacity})`,
      yellow: `rgba(234, 179, 8, ${opacity})`,
      cyan: `rgba(6, 182, 212, ${opacity})`,
      red: `rgba(239, 68, 68, ${opacity})`,
    };
    return colors[themeColor] || colors.blue;
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error || !courseData) {
    return (
      <div className="text-center py-20 text-gray-500">
        Nepodařilo se načíst obsah kurzu.
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500">
      {/* Course Header Card */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-200 dark:border-zinc-800 shadow-xl mb-10 relative overflow-hidden">
        {/* Background Decoration */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 -translate-y-1/2 translate-x-1/3 pointer-events-none"
          style={{ backgroundColor: getThemeColor() }}
        />

        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg shrink-0"
            style={{
              backgroundColor: getThemeColor(0.1),
              color: getThemeColor(),
            }}
          >
            <IconComponent size={48} />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400">
                Kurz
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                style={{ backgroundColor: getThemeColor() }}
              >
                {level.title}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {courseData.title}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-6">
              {courseData.description}
            </p>

            {/* Progress Bar */}
            <div className="max-w-md">
              <div className="flex justify-between text-sm font-medium mb-2">
                <span className="text-gray-700 dark:text-gray-300">
                  Váš postup
                </span>
                <span style={{ color: getThemeColor() }}>
                  {courseData.progress}%
                </span>
              </div>
              <div className="h-3 w-full bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${courseData.progress}%`,
                    backgroundColor: getThemeColor(),
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 min-w-[200px]">
            <button
              onClick={handleStartCourse}
              className="px-6 py-3 rounded-xl font-bold text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              style={{ backgroundColor: getThemeColor() }}
            >
              <LucideIcons.PlayCircle size={20} />
              Pokračovat
            </button>
            <button
              onClick={handleToggleFavorite}
              disabled={updatingFavorite}
              className="px-6 py-3 rounded-xl font-bold bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-all flex items-center justify-center gap-2"
            >
              {isFavorite ? (
                <LucideIcons.Star className="w-5 h-5 text-yellow-500" />
              ) : (
                <LucideIcons.Star className="w-5 h-5 text-gray-400" />
              )}
              {updatingFavorite
                ? "Ukládám..."
                : isFavorite
                ? "Uloženo"
                : "Uložit kurz"}
            </button>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Column: Chapters */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <LucideIcons.List className="w-6 h-6" />
            Obsah kurzu
          </h2>

          <div className="space-y-4">
            {courseData.chapters.map((chapter) => (
              <div
                key={chapter.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
                        expandedChapter === chapter.id
                          ? "text-white"
                          : "bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400"
                      }`}
                      style={
                        expandedChapter === chapter.id
                          ? { backgroundColor: getThemeColor() }
                          : {}
                      }
                    >
                      {chapter.id.split("-")[1]}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                        {chapter.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {chapter.lessons.length} lekcí
                      </p>
                    </div>
                  </div>
                  <LucideIcons.ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      expandedChapter === chapter.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Lessons List */}
                {expandedChapter === chapter.id && (
                  <div className="border-t border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50">
                    {chapter.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between p-4 pl-20 hover:bg-white dark:hover:bg-zinc-800 transition-colors border-b border-gray-100 dark:border-zinc-800 last:border-0 group cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`
                            w-8 h-8 rounded-full flex items-center justify-center
                            ${
                              lesson.status === "completed"
                                ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                                : lesson.status === "locked"
                                ? "bg-gray-100 text-gray-400 dark:bg-zinc-800 dark:text-zinc-600"
                                : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                            }
                          `}
                          >
                            {lesson.status === "completed" ? (
                              <LucideIcons.Check size={16} />
                            ) : lesson.status === "locked" ? (
                              <LucideIcons.Lock size={16} />
                            ) : (
                              <LucideIcons.Play size={16} className="ml-0.5" />
                            )}
                          </div>
                          <div>
                            <h4
                              className={`font-medium ${
                                lesson.status === "locked"
                                  ? "text-gray-400 dark:text-zinc-600"
                                  : "text-gray-900 dark:text-white"
                              }`}
                            >
                              {lesson.title}
                            </h4>
                            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                              <span className="flex items-center gap-1">
                                <LucideIcons.Clock size={12} />
                                {lesson.duration}
                              </span>
                              <span className="flex items-center gap-1 capitalize">
                                {lesson.type === "video" ? (
                                  <LucideIcons.Video size={12} />
                                ) : (
                                  <LucideIcons.FileQuestion size={12} />
                                )}
                                {lesson.type}
                              </span>
                            </div>
                          </div>
                        </div>

                        {lesson.status !== "locked" && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStartLesson(chapter, lesson);
                            }}
                            className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 text-xs font-medium bg-white dark:bg-zinc-700 border border-gray-200 dark:border-zinc-600 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-zinc-600"
                          >
                            Spustit
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: Stats & Info */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200 dark:border-zinc-800 shadow-sm">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">
              O kurzu
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <LucideIcons.BarChart2 size={16} /> Obtížnost
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {level.title}
                </span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <LucideIcons.Book size={16} /> Počet kapitol
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {courseData.chapters.length}
                </span>
              </li>

              <li className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <LucideIcons.Calendar size={16} /> Poslední aktualizace
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {new Date(
                    courseData.updatedAt || Date.now()
                  ).toLocaleDateString("cs-CZ", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversalCoursePage;
