import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  CheckCircle2,
  Circle,
  Play,
  Lightbulb,
  HelpCircle,
  Award,
  ArrowRight,
  Moon,
  Sun,
} from "lucide-react";
import courseData from "../../data/geometryCourseContent.json";
import { useDarkMode } from "../../contexts/DarkModeContext";

// Simple Math Renderer using KaTeX
const MathText = ({ text }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && window.katex) {
      // Replace block math $$...$$
      let processedText = text.replace(/\$\$(.*?)\$\$/g, (match, math) => {
        try {
          return window.katex.renderToString(math, { displayMode: true });
        } catch (e) {
          return match;
        }
      });

      // Replace inline math $...$
      processedText = processedText.replace(/\$(.*?)\$/g, (match, math) => {
        try {
          return window.katex.renderToString(math, { displayMode: false });
        } catch (e) {
          return match;
        }
      });

      containerRef.current.innerHTML = processedText;
    } else if (containerRef.current) {
      containerRef.current.innerText = text;
    }
  }, [text]);

  return <span ref={containerRef} className="math-content inline-block" />;
};

const QuizCard = ({ question, options, correctAnswer, onComplete }) => {
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  // Reset state when question changes
  useEffect(() => {
    setSelected(null);
    setIsCorrect(null);
  }, [question]);

  const handleCheck = (index) => {
    setSelected(index);
    const correct = index === correctAnswer;
    setIsCorrect(correct);
    if (correct && onComplete) onComplete();
  };

  return (
    <div className="mt-8 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
          <HelpCircle size={20} />
        </div>
        <h3 className="font-semibold text-lg">Ověření znalostí</h3>
      </div>
      <p className="mb-6 text-gray-700 dark:text-gray-300">{question}</p>
      <div className="space-y-3">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleCheck(idx)}
            disabled={isCorrect === true}
            className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex justify-between items-center
              ${
                selected === idx
                  ? isCorrect
                    ? "bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-400"
                    : "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-400"
                  : "bg-gray-50 dark:bg-zinc-800/50 border-gray-200 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800"
              }
            `}
          >
            <span>{option}</span>
            {selected === idx &&
              (isCorrect ? (
                <CheckCircle2 className="text-green-500" />
              ) : (
                <X className="text-red-500" />
              ))}
          </button>
        ))}
      </div>
      {isCorrect && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium"
        >
          Správně! Skvělá práce.
        </motion.div>
      )}
    </div>
  );
};

const DidYouKnowCard = ({ text }) => (
  <div className="my-8 p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-10">
      <Lightbulb size={100} className="text-amber-500" />
    </div>
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-3 text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider text-xs">
        <Lightbulb size={16} />
        Věděli jste?
      </div>
      <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
        <MathText text={text} />
      </p>
    </div>
  </div>
);

const GeometryCourse = () => {
  const [activeChapterId, setActiveChapterId] = useState(courseData[0].id);
  const [activeSectionId, setActiveSectionId] = useState(
    courseData[0].sections[0].id
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [completedSections, setCompletedSections] = useState([]);
  const { darkMode, toggleDarkMode } = useDarkMode();

  // Find current chapter and section objects
  const currentChapter = courseData.find((c) => c.id === activeChapterId);
  const currentSection = currentChapter?.sections.find(
    (s) => s.id === activeSectionId
  );

  // Calculate progress
  const totalSections = courseData.reduce(
    (acc, chapter) => acc + chapter.sections.length,
    0
  );
  const progress = (completedSections.length / totalSections) * 100;

  // Handle navigation
  const handleSectionChange = (chapterId, sectionId) => {
    setActiveChapterId(chapterId);
    setActiveSectionId(sectionId);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (!completedSections.includes(sectionId)) {
      setCompletedSections((prev) => [...prev, sectionId]);
    }
  };

  const handleNext = () => {
    const currentChapterIndex = courseData.findIndex(
      (c) => c.id === activeChapterId
    );
    const currentSectionIndex = currentChapter.sections.findIndex(
      (s) => s.id === activeSectionId
    );

    if (currentSectionIndex < currentChapter.sections.length - 1) {
      handleSectionChange(
        activeChapterId,
        currentChapter.sections[currentSectionIndex + 1].id
      );
    } else if (currentChapterIndex < courseData.length - 1) {
      const nextChapter = courseData[currentChapterIndex + 1];
      handleSectionChange(nextChapter.id, nextChapter.sections[0].id);
    }
  };

  const handlePrev = () => {
    const currentChapterIndex = courseData.findIndex(
      (c) => c.id === activeChapterId
    );
    const currentSectionIndex = currentChapter.sections.findIndex(
      (s) => s.id === activeSectionId
    );

    if (currentSectionIndex > 0) {
      handleSectionChange(
        activeChapterId,
        currentChapter.sections[currentSectionIndex - 1].id
      );
    } else if (currentChapterIndex > 0) {
      const prevChapter = courseData[currentChapterIndex - 1];
      handleSectionChange(
        prevChapter.id,
        prevChapter.sections[prevChapter.sections.length - 1].id
      );
    }
  };

  // Mock quiz data generator (in a real app, this would come from the JSON)
  const getQuizForSection = (sectionId) => {
    // Simple mock logic
    if (sectionId.includes("1"))
      return {
        question: "Co znamená slovo 'geometrie'?",
        options: [
          "Měření Země",
          "Počítání hvězd",
          "Stavba pyramid",
          "Kreslení tvarů",
        ],
        correctAnswer: 0,
      };
    if (sectionId.includes("2"))
      return {
        question: "Kolik dimenzí má bod?",
        options: ["1", "2", "0", "3"],
        correctAnswer: 2,
      };
    if (sectionId.includes("3"))
      return {
        question: "Jaký je součet úhlů v trojúhelníku?",
        options: ["90°", "180°", "360°", "270°"],
        correctAnswer: 1,
      };
    return {
      question: "Které těleso má jen jednu podstavu?",
      options: ["Hranol", "Válec", "Jehlan", "Krychle"],
      correctAnswer: 2,
    };
  };

  const quiz = getQuizForSection(activeSectionId);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 flex relative overflow-hidden transition-colors duration-300">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-80 bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 
          transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto flex flex-col
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <div className="p-6 border-b border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <BookOpen className="w-6 h-6" />
              Kurz Geometrie
            </h2>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-500 dark:text-gray-400 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium text-gray-500 dark:text-gray-400">
              <span>Váš postup</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 w-full bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="p-4 space-y-6 flex-1">
          {courseData.map((chapter) => (
            <div key={chapter.id} className="space-y-2">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2 py-1">
                {chapter.title}
              </h3>
              <div className="space-y-1">
                {chapter.sections.map((section) => {
                  const isActive = activeSectionId === section.id;
                  const isCompleted = completedSections.includes(section.id);

                  return (
                    <button
                      key={section.id}
                      onClick={() =>
                        handleSectionChange(chapter.id, section.id)
                      }
                      className={`
                        w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-3 group
                        ${
                          isActive
                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-medium shadow-sm"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800"
                        }
                      `}
                    >
                      <div
                        className={`
                        flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors
                        ${
                          isActive
                            ? "text-blue-600 dark:text-blue-400"
                            : isCompleted
                            ? "text-green-500"
                            : "text-gray-300 dark:text-zinc-600"
                        }
                      `}
                      >
                        {isActive ? (
                          <Play className="w-3 h-3 fill-current" />
                        ) : isCompleted ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : (
                          <Circle className="w-3 h-3" />
                        )}
                      </div>
                      <span className="truncate group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                        {section.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 relative h-screen overflow-y-auto scroll-smooth">
        <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20 pb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSectionId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
                <span>{currentChapter.title}</span>
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
                <span className="text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-md">
                  {currentSection.title}
                </span>
              </nav>

              {/* Header */}
              <header className="space-y-6 border-b border-gray-200 dark:border-zinc-800 pb-8">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                  {currentSection.title}
                </h1>
                {currentChapter.subtitle && (
                  <p className="text-xl text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                    {currentChapter.subtitle}
                  </p>
                )}
              </header>

              {/* Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-img:rounded-2xl">
                {currentSection.content.split("\n\n").map((paragraph, idx) => {
                  // Check if paragraph is a list item
                  if (paragraph.trim().startsWith("-")) {
                    return (
                      <ul key={idx} className="list-disc pl-6 space-y-2 my-4">
                        {paragraph.split("\n").map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-700 dark:text-gray-300"
                          >
                            <MathText text={item.replace("-", "").trim()} />
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p
                      key={idx}
                      className="leading-relaxed text-gray-700 dark:text-gray-300"
                    >
                      <MathText text={paragraph} />
                    </p>
                  );
                })}
              </div>

              {/* Interactive Elements */}
              <DidYouKnowCard text="Věděli jste, že slovo **geometrie** pochází z řečtiny a znamená měření země? Původně sloužila k vyměřování polí po záplavách Nilu." />

              <QuizCard
                question={quiz.question}
                options={quiz.options}
                correctAnswer={quiz.correctAnswer}
                onComplete={() => {
                  if (!completedSections.includes(activeSectionId)) {
                    setCompletedSections((prev) => [...prev, activeSectionId]);
                  }
                }}
              />

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-12 border-t border-gray-200 dark:border-zinc-800 mt-12">
                <button
                  onClick={handlePrev}
                  disabled={
                    activeChapterId === "1" && activeSectionId === "1.1"
                  }
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all
                    ${
                      activeChapterId === "1" && activeSectionId === "1.1"
                        ? "opacity-50 cursor-not-allowed text-gray-400"
                        : "hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-300"
                    }
                  `}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Předchozí
                </button>

                <button
                  onClick={handleNext}
                  className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  Další lekce
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default GeometryCourse;
