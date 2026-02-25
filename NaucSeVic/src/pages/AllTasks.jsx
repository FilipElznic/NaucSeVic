import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Clock,
  Star,
  Filter,
  Search,
  Play,
  CheckCircle,
  Lock,
  Trophy,
  Users,
  TrendingUp,
  Calendar,
  Edit3,
  CheckSquare,
  List,
  Send,
  X,
  Lightbulb,
} from "lucide-react";
import { cloudFunctionsService } from "../services/cloudFunctions";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import { userService } from "../services/userService";
import { toast } from "react-toastify";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const AllTasks = () => {
  const { user } = useFirebaseAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [completedTaskIds, setCompletedTaskIds] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedTask, setSelectedTask] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showHints, setShowHints] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeBoost, setActiveBoost] = useState(null);

  const subjects = [
    { value: "all", label: "Všechny předměty" },
    { value: "Matematika", label: "Matematika" },
    { value: "Geometrie", label: "Geometrie" },
    { value: "Fyzika", label: "Fyzika" },
    { value: "Ostatní", label: "Ostatní" },
  ];

  const taskTypes = [
    { value: "all", label: "Všechny typy", icon: "📋" },
    { value: "multipleChoice", label: "Výběr z možností", icon: "📝" },
    { value: "written", label: "Psaná odpověď", icon: "✍️" },
    { value: "multiAnswer", label: "Více správných odpovědí", icon: "✅" },
  ];

  const difficulties = [
    { value: "all", label: "Všechny obtížnosti" },
    {
      value: "zakladni_1",
      label: "Základní 1. stupeň",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      value: "zakladni_2",
      label: "Základní 2. stupeň",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      value: "stredni",
      label: "Střední škola",
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
    {
      value: "vysoka",
      label: "Vysoká škola",
      color: "text-red-600",
      bg: "bg-red-100",
    },
  ];

  const sortOptions = [
    { value: "newest", label: "Nejnovější" },
    { value: "oldest", label: "Nejstarší" },
    { value: "difficulty", label: "Obtížnost" },
    { value: "xp", label: "Body XP" },
    { value: "popular", label: "Nejoblíbenější" },
  ];

  // Sample tasks data - Replace with real API call
  const sampleTasks = [
    {
      id: 1,
      name: "Základy algebry",
      description: "Naučte se základní algebraické operace a rovnice",
      type: "multipleChoice",
      subject: "Matematika",
      difficulty: "zakladni_2",
      xp: 50,
      estimatedTime: 15,
      completedBy: 1245,
      rating: 4.8,
      createdAt: new Date("2024-10-01"),
      isCompleted: false,
      correctAnswer: "x = 5",
      options: ["x = 3", "x = 5", "x = 7", "x = 9"],
      explanation:
        "Pro řešení této rovnice použijeme základní algebraické operace...",
      hints: [
        "Přesuňte všechny proměnné na jednu stranu",
        "Vydělte obě strany stejným číslem",
      ],
    },
    {
      id: 2,
      name: "Lineární rovnice",
      description: "Řešení lineárních rovnic s jednou neznámou",
      type: "written",
      subject: "Matematika",
      difficulty: "stredni",
      xp: 75,
      estimatedTime: 25,
      completedBy: 892,
      rating: 4.6,
      createdAt: new Date("2024-10-05"),
      isCompleted: true,
      correctAnswer: "x = 12",
      explanation: "Lineární rovnice řešíme postupným upravováním...",
      hints: ["Upravte rovnici do tvaru ax + b = 0"],
    },
    {
      id: 3,
      name: "Planimetrie - trojúhelníky",
      description: "Vlastnosti a výpočty u trojúhelníků",
      type: "multiAnswer",
      subject: "Matematika",
      difficulty: "stredni",
      xp: 80,
      estimatedTime: 30,
      completedBy: 567,
      rating: 4.7,
      createdAt: new Date("2024-10-08"),
      isCompleted: false,
      correctAnswers: ["Pythagorova věta", "Kosinova věta"],
      options: [
        "Pythagorova věta",
        "Kosinova věta",
        "Sinova věta",
        "Eulerova věta",
        "Thaletova věta",
      ],
      explanation: "V pravoúhlém trojúhelníku platí několik důležitých vět...",
      hints: [
        "Myslete na pravoúhlé trojúhelníky",
        "Jedna věta je o stranách, druhá o úhlech",
      ],
    },
    {
      id: 4,
      name: "Gramatika - slovní druhy",
      description: "Identifikace hlavních slovních druhů v češtině",
      type: "multipleChoice",
      subject: "Čeština",
      difficulty: "zakladni_1",
      xp: 40,
      estimatedTime: 20,
      completedBy: 678,
      rating: 4.5,
      createdAt: new Date("2024-10-09"),
      isCompleted: false,
      correctAnswer: "podstatné jméno",
      options: ["podstatné jméno", "přídavné jméno", "sloveso", "příslovce"],
      explanation: "Slovní druhy jsou základní kategorie slov v češtině...",
      hints: ["Ptejte se 'kdo?' nebo 'co?'"],
    },
  ];

  useEffect(() => {
    loadTasks();
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadTasks = async () => {
    setLoading(true);

    try {
      // Load user's completed tasks if logged in
      let userCompletedTasks = {};
      if (user) {
        // Fetch user profile to get active boosts
        const userProfile = await userService.getUserProfile(user.uid);
        if (userProfile?.activeBoosts?.xp) {
          const xpBoost = userProfile.activeBoosts.xp;
          const now = Date.now();
          const endsAt = xpBoost.endsAt?.toMillis
            ? xpBoost.endsAt.toMillis()
            : 0;

          if (endsAt > now) {
            setActiveBoost({
              multiplier: xpBoost.multiplier,
              endsAt: new Date(endsAt),
            });
            console.log("Active XP Boost detected:", xpBoost);
          } else {
            setActiveBoost(null);
          }
        } else {
          setActiveBoost(null);
        }

        userCompletedTasks = await userService.getCompletedTasks(user.uid);
        setCompletedTaskIds(userCompletedTasks);
      }

      // Try to call getTasks cloud function
      const response = await cloudFunctionsService.getTasks({
        limit: 100,
        includeCompleted: true,
      });

      // Handle response format - adjust based on actual API response
      const tasksData = response.tasks || response.data || response || [];

      // Convert API data to match our expected format
      const formattedTasks = Array.isArray(tasksData)
        ? tasksData.map((task) => ({
            ...task,
            // Ensure required fields exist
            id: task.id || task.taskId,
            name: task.name || task.title,
            description: task.description || "",
            subject: task.subject || "other",
            difficulty: task.difficulty || "medium",
            xp: task.xp || task.points || 50,
            estimatedTime: task.estimatedTime || task.timeEstimate || 15,
            completedBy: task.completedBy || task.solvedCount || 0,
            rating: task.rating || 4.5,
            createdAt: task.createdAt ? new Date(task.createdAt) : new Date(),
            isCompleted: task.isCompleted || false,
            // Check if user has completed this specific task
            isCompletedByUser:
              user && userCompletedTasks[task.id]?.isCorrect === true,
          }))
        : [];

      if (formattedTasks.length > 0) {
        setTasks(formattedTasks);
      } else {
        console.log("No tasks returned from API, using sample data");
        setTasks(sampleTasks);
      }
    } catch (error) {
      console.error("Error loading tasks:", error);
      console.log("API error, falling back to sample data");

      // Always use sample data on API error
      setTasks(sampleTasks);

      // Show user-friendly message
      toast.error(
        "Načítání úkolů z databáze se nezdařilo. Zobrazuji ukázková data.",
      );
    } finally {
      setLoading(false);
    }
  };

  const getDifficultyStyle = (difficulty) => {
    const diff = difficulties.find((d) => d.value === difficulty);
    return diff
      ? { color: diff.color, bg: diff.bg }
      : { color: "text-gray-600", bg: "bg-gray-100" };
  };

  const getSubjectLabel = (subject) => {
    const subj = subjects.find((s) => s.value === subject);
    return subj ? subj.label : subject;
  };

  // Handle task interaction
  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setUserAnswer("");
    setUserAnswers([]);
    setSelectedOptions([]);
    setShowHints(false);
  };

  const handleCloseTask = () => {
    setSelectedTask(null);
    setUserAnswer("");
    setUserAnswers([]);
    setSelectedOptions([]);
    setShowHints(false);
  };

  const handleSubmitAnswer = async () => {
    if (!selectedTask || !user) return;

    setSubmitting(true);
    try {
      let userAnswerData;

      if (selectedTask.type === "written") {
        userAnswerData = userAnswer.trim();
      } else if (selectedTask.type === "multipleChoice") {
        userAnswerData = selectedOptions[0];
      } else if (selectedTask.type === "multiAnswer") {
        userAnswerData = selectedOptions;
      }

      // Call submit answer API
      console.log("Submitting answer:", {
        taskId: selectedTask.id,
        userAnswer: userAnswerData,
        taskType: selectedTask.type,
      });

      const result = await cloudFunctionsService.submitTaskAnswer(
        selectedTask.id,
        userAnswerData,
      );

      console.log("Result from backend:", result);

      if (result.isCorrect !== undefined) {
        // Show toast first
        if (result.isCorrect) {
          const boostMsg = result.activeBoost
            ? `(Boost ${result.activeBoost.multiplier}x!)`
            : activeBoost
              ? `(Boost ${activeBoost.multiplier}x!)`
              : "";

          toast.success(
            `🎉 Správně! +${result.xpEarned} XP ${boostMsg}, +${result.coinsEarned} mincí`,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            },
          );
        } else {
          toast.error("❌ Nesprávná odpověď. Zkuste to znovu!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }

        // Update task completion status
        setTasks((prev) =>
          prev.map((task) =>
            task.id === selectedTask.id
              ? { ...task, isCompletedByUser: result.isCorrect }
              : task,
          ),
        );

        // Update completed tasks state
        if (result.isCorrect) {
          setCompletedTaskIds((prev) => ({
            ...prev,
            [selectedTask.id]: { isCorrect: true },
          }));
        }

        // Close modal after delay if correct
        if (result.isCorrect) {
          setTimeout(() => {
            handleCloseTask();
          }, 2000);
        }
      } else {
        toast.error("Neplatná odpověď ze serveru");
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
      toast.error(`Chyba při odesílání odpovědi: ${error.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleOptionSelect = (option, isMultiple = false) => {
    if (isMultiple) {
      setSelectedOptions((prev) =>
        prev.includes(option)
          ? prev.filter((opt) => opt !== option)
          : [...prev, option],
      );
    } else {
      setSelectedOptions([option]);
    }
  };

  const getTaskTypeIcon = (type) => {
    const typeData = taskTypes.find((t) => t.value === type);
    return typeData ? typeData.icon : "📋";
  };

  // Filter and sort tasks
  const filteredTasks = tasks
    .filter((task) => {
      const matchesSearch =
        task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSubject =
        selectedSubject === "all" || task.subject === selectedSubject;
      const matchesDifficulty =
        selectedDifficulty === "all" || task.difficulty === selectedDifficulty;

      return matchesSearch && matchesSubject && matchesDifficulty;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.createdAt) - new Date(a.createdAt);
        case "oldest":
          return new Date(a.createdAt) - new Date(b.createdAt);
        case "difficulty": {
          const diffOrder = { easy: 1, medium: 2, hard: 3 };
          return diffOrder[a.difficulty] - diffOrder[b.difficulty];
        }
        case "xp":
          return b.xp - a.xp;
        case "popular":
          return b.completedBy - a.completedBy;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen h-[200vh] pt-[100px] bg-white dark:bg-zinc-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20 dark:border-zinc-700/50">
              <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-zinc-300">
                Vzdělávací úkoly
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Všechny
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600 ml-3">
              úkoly
            </span>
          </h1>

          <p className="text-lg text-gray-700 dark:text-zinc-300 max-w-2xl mx-auto">
            Procházejte a řešte úkoly ze všech předmětů. Získávejte XP a
            zlepšujte své znalosti.
          </p>

          {activeBoost && (
            <div className="mt-4 flex justify-center">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-700 dark:text-yellow-300 px-4 py-2 rounded-full border border-yellow-400/30 shadow-sm animate-pulse-slow">
                <TrendingUp className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                <span className="font-bold">
                  Aktivní XP Boost: {activeBoost.multiplier}x
                </span>
                <span className="text-sm opacity-80 border-l border-yellow-500/30 pl-2 ml-1">
                  vyprší v{" "}
                  {activeBoost.endsAt.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Filters and Search */}
        <div className="bg-white/10 dark:bg-zinc-800/20 backdrop-blur-sm rounded-3xl p-6 border border-white/20 dark:border-zinc-700/30 shadow-xl mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-zinc-400" />
              <input
                type="text"
                placeholder="Hledat úkoly..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/80 dark:bg-zinc-800/80 border border-gray-500 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white placeholder-gray-500 dark:placeholder-zinc-400"
              />
            </div>

            {/* Subject Filter */}
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-4 py-3 bg-white/80 dark:bg-zinc-800/80 border border-gray-500 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white"
            >
              {subjects.map((subject) => (
                <option key={subject.value} value={subject.value}>
                  {subject.label}
                </option>
              ))}
            </select>

            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-4 py-3 bg-white/80 dark:bg-zinc-800/80 border border-gray-500 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white"
            >
              {difficulties.map((difficulty) => (
                <option key={difficulty.value} value={difficulty.value}>
                  {difficulty.label}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 bg-white/80 dark:bg-zinc-800/80 border border-gray-500 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tasks Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <LoadingSpinner size="lg" />
          </div>
        ) : (
          <>
            {/* Results count */}
            <div className="mb-6">
              <p className="text-gray-600 dark:text-zinc-400">
                Nalezeno{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  {filteredTasks.length}
                </span>{" "}
                úkolů
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTasks.map((task) => {
                const diffStyle = getDifficultyStyle(task.difficulty);

                return (
                  <div
                    key={task.id}
                    className="bg-white/10 dark:bg-zinc-800/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-zinc-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">
                          {getSubjectLabel(task.subject)}
                        </span>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${diffStyle.bg} ${diffStyle.color}`}
                        >
                          {
                            difficulties.find(
                              (d) => d.value === task.difficulty,
                            )?.label
                          }
                        </span>
                      </div>
                      {(task.isCompletedByUser || task.isCompleted) && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {task.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-zinc-400 mb-4 line-clamp-2">
                      {task.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center text-gray-600 dark:text-zinc-400">
                        <Clock className="h-4 w-4 mr-1" />
                        {task.estimatedTime} min
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-zinc-400">
                        <Trophy className="h-4 w-4 mr-1" />
                        {task.xp} XP
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-zinc-400">
                        <Users className="h-4 w-4 mr-1" />
                        {task.completedBy}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-zinc-400">
                        <Star className="h-4 w-4 mr-1" />
                        {task.rating}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => handleTaskClick(task)}
                      disabled={task.isCompletedByUser}
                      className={`w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl transition-all duration-300 shadow-lg ${
                        task.isCompletedByUser
                          ? "bg-green-500 cursor-not-allowed opacity-75"
                          : "text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl transform hover:scale-105"
                      }`}
                    >
                      {task.isCompletedByUser ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Splněno
                        </>
                      ) : (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          Začít úkol
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Empty state */}
            {filteredTasks.length === 0 && (
              <div className="text-center py-16">
                <BookOpen className="h-16 w-16 text-gray-400 dark:text-zinc-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Žádné úkoly nenalezeny
                </h3>
                <p className="text-gray-600 dark:text-zinc-400">
                  Zkuste změnit filtry nebo vyhledávací výraz.
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Task Modal */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-500 dark:border-zinc-700">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">
                  {getTaskTypeIcon(selectedTask.type)}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {selectedTask.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-zinc-400">
                    {getSubjectLabel(selectedTask.subject)} •{" "}
                    {activeBoost ? (
                      <span className="text-yellow-600 dark:text-yellow-400 font-bold inline-flex items-center">
                        {selectedTask.xp * activeBoost.multiplier} XP
                        <span className="ml-1 text-xs bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded">
                          {activeBoost.multiplier}x
                        </span>
                      </span>
                    ) : (
                      `${selectedTask.xp} XP`
                    )}
                  </p>
                </div>
              </div>
              <button
                onClick={handleCloseTask}
                className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Task Description */}
              <div>
                <p className="text-gray-700 dark:text-zinc-300 leading-relaxed">
                  {selectedTask.description}
                </p>
              </div>

              {/* Task Type Specific UI */}
              {selectedTask.type === "multipleChoice" && (
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Vyberte správnou odpověď:
                  </h4>
                  <div className="space-y-2">
                    {selectedTask.options?.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionSelect(option, false)}
                        className={`w-full text-left p-3 rounded-xl border-2 transition-all ${
                          selectedOptions.includes(option)
                            ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300"
                            : "border-gray-500 dark:border-zinc-700 hover:border-indigo-300 dark:hover:border-indigo-600"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-4 h-4 rounded-full border-2 ${
                              selectedOptions.includes(option)
                                ? "border-indigo-500 bg-indigo-500"
                                : "border-gray-300 dark:border-zinc-600"
                            }`}
                          >
                            {selectedOptions.includes(option) && (
                              <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                            )}
                          </div>
                          <span className="text-gray-900 dark:text-white">
                            {option}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {selectedTask.type === "written" && (
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Napište svou odpověď:
                  </h4>
                  <textarea
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Zde napište vaši odpověď..."
                    className="w-full p-3 border-2 border-gray-500 dark:border-zinc-700 rounded-xl focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none resize-none bg-white dark:bg-zinc-800 text-gray-900 dark:text-white"
                    rows="4"
                  />
                </div>
              )}

              {selectedTask.type === "multiAnswer" && (
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Vyberte všechny správné odpovědi:
                  </h4>
                  <div className="space-y-2">
                    {selectedTask.options?.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionSelect(option, true)}
                        className={`w-full text-left p-3 rounded-xl border-2 transition-all ${
                          selectedOptions.includes(option)
                            ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300"
                            : "border-gray-500 dark:border-zinc-700 hover:border-indigo-300 dark:hover:border-indigo-600"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-4 h-4 rounded border-2 ${
                              selectedOptions.includes(option)
                                ? "border-indigo-500 bg-indigo-500"
                                : "border-gray-300 dark:border-zinc-600"
                            }`}
                          >
                            {selectedOptions.includes(option) && (
                              <CheckSquare className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <span className="text-gray-900 dark:text-white">
                            {option}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Hints Section */}
              {selectedTask.hints && selectedTask.hints.length > 0 && (
                <div>
                  <button
                    onClick={() => setShowHints(!showHints)}
                    className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                  >
                    <Lightbulb className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      {showHints ? "Skrýt nápovědu" : "Zobrazit nápovědu"}
                    </span>
                  </button>

                  {showHints && (
                    <div className="mt-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl">
                      <div className="space-y-2">
                        {selectedTask.hints.map((hint, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <span className="text-yellow-600 dark:text-yellow-400 font-medium text-sm">
                              {index + 1}.
                            </span>
                            <span className="text-yellow-800 dark:text-yellow-200 text-sm">
                              {hint}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t border-gray-500 dark:border-zinc-700">
              <button
                onClick={handleCloseTask}
                className="px-4 py-2 text-gray-600 dark:text-zinc-400 hover:text-gray-800 dark:hover:text-zinc-200 transition-colors"
              >
                Zrušit
              </button>
              <button
                onClick={handleSubmitAnswer}
                disabled={
                  submitting ||
                  (selectedTask.type === "written" && !userAnswer.trim()) ||
                  (selectedTask.type !== "written" &&
                    selectedOptions.length === 0)
                }
                className="inline-flex items-center space-x-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 dark:disabled:bg-zinc-700 text-white disabled:text-gray-500 rounded-xl transition-all disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
                <span>{submitting ? "Odesílám..." : "Odeslat odpověď"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTasks;
