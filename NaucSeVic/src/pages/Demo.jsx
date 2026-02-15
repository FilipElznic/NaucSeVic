import React, { useState } from "react";
import {
  BookOpen,
  CheckCircle,
  Play,
  ArrowLeft,
  Trophy,
  ChevronDown,
  ChevronRight,
  Zap,
  RotateCcw,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CharacterAssistant from "../components/CharacterAssistant";
import { useDarkMode } from "../contexts/DarkModeContext";

// --- MOCK DATA ---

const DEMO_COURSE = {
  id: "demo_math",
  title: "Základy matematiky (Demo)",
  description:
    "Vítejte v demo verzi kurzu! Vyzkoušejte si, jak funguje naše výuka. Projděte si lekce, splňte kvízy a sledujte svůj pokrok.",
  icon: "Calculator",
  color: "#8b5cf6", // Purple
  chapters: [
    {
      id: "ch1",
      title: "Kapitola 1: Základy aritmetiky",
      description: "Seznámení se základními početními operacemi.",
      lessons: [
        {
          id: "l1",
          title: "Úvod do sčítání",
          type: "theory",
          duration: "5 min",
          content: `
            <h3>Co je to sčítání?</h3>
            <p>Sčítání je jedna ze základních matematických operací. Používáme ho, když chceme zjistit celkový počet věcí, když dáme dvě nebo více skupin dohromady.</p>
            <p>Znakem pro sčítání je plus (+).</p>
            <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 my-4">
              <strong>Příklad:</strong> Pokud máte 2 jablka a kamarád vám dá další 3 jablka, kolik jablek máte dohromady?
              <br/>
              <center class="text-xl font-bold mt-2">2 + 3 = 5</center>
            </div>
            <p>Výsledek sčítání se nazývá <strong>součet</strong>. Čísla, která sčítáme, se nazývají <strong>sčítance</strong>.</p>
          `,
          quiz: [
            {
              id: "q1",
              question: "Kolik je 5 + 3?",
              options: ["7", "8", "9", "10"],
              correctIndex: 1,
            },
            {
              id: "q2",
              question: "Jak se nazývá výsledek sčítání?",
              options: ["Rozdíl", "Součin", "Součet", "Podíl"],
              correctIndex: 2,
            },
          ],
        },
        {
          id: "l2",
          title: "Sčítání do 20",
          type: "practice",
          duration: "10 min",
          content: `
            <h3>Počítání přes desítku</h3>
            <p>Když sčítáme čísla a výsledek je větší než 10, mluvíme o přechodu přes desítku.</p>
            <p>Je dobré si jedno číslo rozdělit tak, abychom doplnili do deseti, a pak přičíst zbytek.</p>
            <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-100 dark:border-purple-800 my-4">
              <strong>Příklad: 8 + 5</strong>
              <ul class="list-disc ml-6 mt-2">
                <li>Kolik chybí 8 do 10? Chybí 2.</li>
                <li>Rozdělíme 5 na 2 a 3.</li>
                <li>8 + 2 = 10</li>
                <li>10 + 3 = 13</li>
              </ul>
            </div>
          `,
          quiz: [
            {
              id: "q_l2_1",
              question: "Vypočítej: 8 + 6",
              options: ["12", "13", "14", "15"],
              correctIndex: 2,
            },
            {
              id: "q_l2_2",
              question: "Vypočítej: 12 + 5",
              options: ["16", "17", "18", "19"],
              correctIndex: 1,
            },
            {
              id: "q_l2_3",
              question: "Doplň řadu: 2, 4, 6, 8, ?",
              options: ["9", "10", "11", "12"],
              correctIndex: 1,
            },
          ],
        },
        {
          id: "l3",
          title: "Slovní úlohy",
          type: "test",
          duration: "15 min",
          content:
            "<p>Nyní si vyzkoušíme, co jsme se naučili, na praktických příkladech ze života.</p>",
          quiz: [
            {
              id: "q_l3_1",
              question:
                "Petr má 5 autíček. Dostal k narozeninám další 3. Kolik autíček má nyní?",
              options: ["7", "8", "9", "53"],
              correctIndex: 1,
            },
            {
              id: "q_l3_2",
              question:
                "Na stromě sedělo 10 ptáčků. 4 odletěli. Kolik ptáčků zůstalo?",
              options: ["4", "5", "6", "14"],
              correctIndex: 2,
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      title: "Kapitola 2: Geometrie",
      description: "Základní geometrické útvary a jejich vlastnosti.",
      lessons: [
        {
          id: "l4",
          title: "Poznáváme tvary",
          type: "theory",
          duration: "5 min",
          content: `
            <h3>Základní rovinné útvary</h3>
            <p>Kolem sebe vidíme spoustu tvarů. Mezi ty základní v geometrii patří:</p>
            <ul class="list-disc ml-6 space-y-2 mt-2">
                <li><strong>Čtverec</strong> - má 4 stejně dlouhé strany a pravé úhly.</li>
                <li><strong>Obdélník</strong> - má 4 strany, protější jsou stejně dlouhé.</li>
                <li><strong>Trojúhelník</strong> - má 3 strany a 3 vrcholy.</li>
                <li><strong>Kruh</strong> - nemá žádné rohy, je to "kulatý" tvar.</li>
            </ul>
          `,
          quiz: [
            {
              id: "q_l4_1",
              question: "Kolik stran má trojúhelník?",
              options: ["2", "3", "4", "Žádnou"],
              correctIndex: 1,
            },
            {
              id: "q_l4_2",
              question: "Který útvar má všechny strany stejně dlouhé?",
              options: ["Obdélník", "Čtverec", "Kruh", "Trojúhelník (obecný)"],
              correctIndex: 1,
            },
          ],
        },
        {
          id: "l5",
          title: "Obvod a obsah",
          type: "practice",
          duration: "12 min",
          content: `
            <h3>Co je to obvod?</h3>
            <p>Obvod je délka hranice útvaru. Představte si, že jdete okolo hřiště - to, co ujdete, je obvod.</p>
            <p>U čtverce se stranou <strong>a</strong> je obvod: <br/> <strong class="text-xl">O = 4 · a</strong></p>
          `,
          quiz: [
            {
              id: "q_l5_1",
              question: "Jaký je obvod čtverce se stranou 5 cm?",
              options: ["10 cm", "20 cm", "25 cm", "15 cm"],
              correctIndex: 1,
            },
          ],
        },
        {
          id: "l6",
          title: "Závěrečný test geometrie",
          type: "test",
          duration: "20 min",
          content: "<p>Prověřte své znalosti o geometrických tvarech.</p>",
          quiz: [
            {
              id: "q_l6_1",
              question: "Který předmět má tvar kruhu?",
              options: ["Kniha", "Mince", "Stůl", "Mobil"],
              correctIndex: 1,
            },
            {
              id: "q_l6_2",
              question: "Může mít trojúhelník 4 vrcholy?",
              options: ["Ano", "Ne", "Jen někdy", "Záleží na barvě"],
              correctIndex: 1,
            },
            {
              id: "q_l6_3",
              question: "Kolik pravých úhlů má obdélník?",
              options: ["2", "3", "4", "0"],
              correctIndex: 2,
            },
          ],
        },
      ],
    },
  ],
};

// --- COMPONENTS ---

// 1. QUIZ COMPONENT (Local)
const LocalQuiz = ({ quizData, onComplete, onReset }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState({}); // { 0: 1, 1: 0 ... }
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = quizData[currentQuestionIdx];

  const handleSelectOption = (optionIdx) => {
    setAnswers((prev) => ({ ...prev, [currentQuestionIdx]: optionIdx }));
  };

  const handleNext = () => {
    if (currentQuestionIdx < quizData.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      // Finish
      calculateResults();
    }
  };

  const handlePrev = () => {
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx((prev) => prev - 1);
    }
  };

  const calculateResults = () => {
    let correctCount = 0;
    quizData.forEach((q, idx) => {
      if (answers[idx] === q.correctIndex) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResult(true);
    if (correctCount / quizData.length >= 0.5) {
      // Pass threshold 50%
      onComplete();
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentQuestionIdx(0);
    setShowResult(false);
    setScore(0);
    onReset?.();
  };

  if (showResult) {
    const passed = score / quizData.length >= 0.5;
    return (
      <div className="bg-white  dark:bg-zinc-800 rounded-2xl p-8 text-center border border-gray-500 dark:border-zinc-700 shadow-xl max-w-xl mx-auto  animate-in zoom-in-50">
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${passed ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"}`}
        >
          {passed ? <Trophy size={40} /> : <RotateCcw size={40} />}
        </div>
        <h3 className="text-2xl font-bold dark:text-white mb-2">
          {passed ? "Gratulujeme!" : "Zkuste to znovu"}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Získali jste {score} z {quizData.length} bodů.
        </p>
        <button
          onClick={passed ? onComplete : resetQuiz}
          className={`px-8 py-3 rounded-xl font-bold text-white transition-transform active:scale-95 ${passed ? "bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/30" : "bg-gray-600 hover:bg-gray-700"}`}
        >
          {passed ? "Pokračovat dále" : "Opakovat test"}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-2 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-600 transition-all duration-300"
            style={{
              width: `${(currentQuestionIdx / quizData.length) * 100}%`,
            }}
          ></div>
        </div>
        <span className="text-sm font-mono text-gray-500">
          {currentQuestionIdx + 1} / {quizData.length}
        </span>
      </div>

      {/* Question Card */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-gray-500 dark:border-zinc-800 shadow-lg min-h-[300px] flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">
          {currentQuestion.question}
        </h3>

        <div className="space-y-3 flex-1">
          {currentQuestion.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectOption(idx)}
              className={`w-full p-4 rounded-xl text-left border-2 transition-all ${
                answers[currentQuestionIdx] === idx
                  ? "border-purple-600 bg-purple-50 dark:bg-purple-900/20 text-purple-900 dark:text-white"
                  : "border-gray-100 dark:border-zinc-800 hover:border-purple-200 dark:hover:border-zinc-700 bg-white dark:bg-zinc-800/50 text-gray-700 dark:text-gray-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${answers[currentQuestionIdx] === idx ? "border-purple-600" : "border-gray-300 dark:border-zinc-600"}`}
                >
                  {answers[currentQuestionIdx] === idx && (
                    <div className="w-3 h-3 rounded-full bg-purple-600" />
                  )}
                </div>
                {opt}
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-between mt-8 pt-6 border-t border-gray-100 dark:border-zinc-800">
          <button
            onClick={handlePrev}
            disabled={currentQuestionIdx === 0}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-white disabled:opacity-30 disabled:hover:text-gray-500 transition-colors"
          >
            <ArrowLeft size={18} /> Předchozí
          </button>
          <button
            onClick={handleNext}
            disabled={answers[currentQuestionIdx] === undefined}
            className="flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-purple-500/20"
          >
            {currentQuestionIdx === quizData.length - 1 ? "Dokončit" : "Další"}{" "}
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE ---

function Demo() {
  const [view, setView] = useState("course"); // 'course' | 'lesson'
  const [currentChapterId, setCurrentChapterId] = useState(null);
  const [currentLessonId, setCurrentLessonId] = useState(null);

  // Local persistence for demo
  const [completedLessons, setCompletedLessons] = useState([]);
  const [expandedChapters, setExpandedChapters] = useState(["ch1"]);

  const { darkMode } = useDarkMode();

  const handleStartLesson = (chapterId, lessonId) => {
    setCurrentChapterId(chapterId);
    setCurrentLessonId(lessonId);
    setView("lesson");
    window.scrollTo(0, 0);
  };

  const handleLessonComplete = () => {
    if (currentLessonId && !completedLessons.includes(currentLessonId)) {
      setCompletedLessons((prev) => [...prev, currentLessonId]);
    }
    // Go to overview or next lesson? Let's go to overview for simplicity in demo
    setView("course");
    window.scrollTo(0, 0);
  };

  const toggleChapter = (chId) => {
    setExpandedChapters((prev) =>
      prev.includes(chId) ? prev.filter((c) => c !== chId) : [...prev, chId],
    );
  };

  // derived state
  const currentChapter = DEMO_COURSE.chapters.find(
    (c) => c.id === currentChapterId,
  );
  const currentLesson = currentChapter?.lessons.find(
    (l) => l.id === currentLessonId,
  );

  const totalLessons = DEMO_COURSE.chapters.reduce(
    (acc, ch) => acc + ch.lessons.length,
    0,
  );
  const progressPercent = Math.round(
    (completedLessons.length / totalLessons) * 100,
  );

  // --- RENDER ---

  if (view === "lesson" && currentLesson) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
        {/* Navbar Shim */}
        <div className="h-16 mt-20 border-gray-500 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center px-4 md:px-8 sticky top-0 z-40">
          <button
            onClick={() => setView("course")}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">Zpět na kurz</span>
          </button>
          <div className="h-6 w-px bg-gray-200 dark:bg-zinc-700 mx-4" />
          <h2 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white truncate">
            {currentChapter.title} <span className="text-gray-400 mx-2">/</span>{" "}
            {currentLesson.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          <header className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
              Demo Lekce
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {currentLesson.title}
            </h1>
          </header>

          <div className="prose dark:prose-invert prose-lg max-w-none text-gray-600 dark:text-gray-300 mb-12">
            <div dangerouslySetInnerHTML={{ __html: currentLesson.content }} />
          </div>

          {/* QUIZ SECTION */}
          <div className="mt-12 pt-12 border-t-2 border-dashed border-gray-500 dark:border-zinc-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Zap className="text-amber-500 fill-current" />
              Ověření znalostí
            </h2>

            <LocalQuiz
              quizData={currentLesson.quiz}
              onComplete={handleLessonComplete}
              onReset={() => {}}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Course Header */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-500 dark:border-zinc-800 shadow-xl mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="w-24 h-24 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center shadow-lg shrink-0">
              <BookOpen size={48} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                  Demo Kurz
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {DEMO_COURSE.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-6 leading-relaxed">
                {DEMO_COURSE.description}
              </p>

              {/* Progress */}
              <div className="max-w-md">
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-gray-700 dark:text-gray-300">
                    Váš postup
                  </span>
                  <span className="text-purple-600 font-bold">
                    {progressPercent}%
                  </span>
                </div>
                <div className="h-3 w-full bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters List */}
        <div className="space-y-6">
          {DEMO_COURSE.chapters.map((chapter) => {
            const isExpanded = expandedChapters.includes(chapter.id);
            return (
              <div
                key={chapter.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-500 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full h-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isExpanded ? "bg-purple-100 dark:bg-purple-900/20 text-purple-600" : "bg-gray-100 dark:bg-zinc-800 text-gray-500"}`}
                    >
                      <span className="font-bold text-lg">
                        {chapter.id.replace("ch", "")}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {chapter.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {chapter.description}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`text-gray-400 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-gray-50/50 dark:bg-zinc-900/50 border-t border-gray-100 dark:border-zinc-800"
                    >
                      <div className="p-4 space-y-2">
                        {chapter.lessons.map((lesson) => {
                          const isCompleted = completedLessons.includes(
                            lesson.id,
                          );
                          return (
                            <div
                              key={lesson.id}
                              className="group flex items-center justify-between p-4 rounded-xl hover:bg-white dark:hover:bg-zinc-800 border border-transparent hover:border-gray-500 dark:hover:border-zinc-700 transition-all cursor-pointer"
                              onClick={() =>
                                handleStartLesson(chapter.id, lesson.id)
                              }
                            >
                              <div className="flex items-center gap-4">
                                <div
                                  className={`w-8 h-8 rounded-full flex items-center justify-center ${isCompleted ? "bg-green-100 text-green-600 dark:bg-green-900/20" : "bg-gray-200 dark:bg-zinc-700 text-gray-500"}`}
                                >
                                  {isCompleted ? (
                                    <CheckCircle size={16} />
                                  ) : (
                                    <Play size={14} className="ml-0.5" />
                                  )}
                                </div>
                                <div>
                                  <h4
                                    className={`font-semibold ${isCompleted ? "text-gray-500 line-through decoration-2 decoration-green-500/30" : "text-gray-900 dark:text-white"}`}
                                  >
                                    {lesson.title}
                                  </h4>
                                  <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                                    <span className="flex items-center gap-1">
                                      <BookOpen size={10} /> {lesson.type}
                                    </span>
                                    <span>•</span>
                                    <span>{lesson.duration}</span>
                                  </div>
                                </div>
                              </div>

                              <button className="px-4 py-2 bg-white dark:bg-zinc-800 border border-gray-500 dark:border-zinc-700 rounded-lg text-sm font-medium text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                                Spustit
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Demo;
