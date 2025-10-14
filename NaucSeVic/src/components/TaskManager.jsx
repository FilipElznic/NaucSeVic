import React, { useState, useEffect, useCallback } from "react";
import { cloudFunctionsService } from "../services/cloudFunctions";
import {
  Book,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  Users,
  Clock,
} from "lucide-react";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import TaskCreator from "./TaskCreator";
import { toast } from "react-toastify";

const TaskManager = () => {
  const { user } = useFirebaseAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    type: "all",
    difficulty: "all",
    subject: "all",
  });
  const [showCreator, setShowCreator] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showTaskDetails, setShowTaskDetails] = useState(false);

  const taskTypes = [
    { value: "all", label: "Všechny typy" },
    { value: "multipleChoice", label: "Výběr z možností" },
    { value: "written", label: "Psaná odpověď" },
    { value: "multiAnswer", label: "Více správných odpovědí" },
  ];

  const difficulties = [
    { value: "all", label: "Všechny obtížnosti" },
    {
      value: "easy",
      label: "Snadná",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      value: "medium",
      label: "Střední",
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
    { value: "hard", label: "Těžká", color: "text-red-600", bg: "bg-red-100" },
  ];

  const subjects = [
    "Všechny předměty",
    "Matematika",
    "Čeština",
    "Angličtina",
    "Fyzika",
    "Chemie",
    "Biologie",
    "Dějepis",
    "Zeměpis",
    "Informatika",
    "Ostatní",
  ];

  const loadTasks = useCallback(async () => {
    if (!user) return;

    try {
      setLoading(true);
      const result = await cloudFunctionsService.getTasks();
      setTasks(result.tasks || []);
    } catch (error) {
      console.error("Error loading tasks:", error);
      toast.error("Chyba při načítání úloh");
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filters.type === "all" || task.type === filters.type;
    const matchesDifficulty =
      filters.difficulty === "all" || task.difficulty === filters.difficulty;
    const matchesSubject =
      filters.subject === "all" ||
      filters.subject === "Všechny předměty" ||
      task.subject === filters.subject;

    return matchesSearch && matchesType && matchesDifficulty && matchesSubject;
  });

  const getDifficultyStyles = (difficulty) => {
    const diff = difficulties.find((d) => d.value === difficulty);
    return diff
      ? { color: diff.color, bg: diff.bg }
      : { color: "text-gray-600", bg: "bg-gray-100" };
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "multipleChoice":
        return "📝";
      case "written":
        return "✍️";
      case "multiAnswer":
        return "✅";
      default:
        return "❓";
    }
  };

  const getTypeLabel = (type) => {
    const typeObj = taskTypes.find((t) => t.value === type);
    return typeObj ? typeObj.label : type;
  };

  const handleTaskCreated = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
    setShowCreator(false);
    toast.success("Úloha byla přidána do seznamu");
  };

  const handleViewTask = (task) => {
    setSelectedTask(task);
    setShowTaskDetails(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-gray-600 dark:text-gray-300">
          Načítám úlohy...
        </span>
      </div>
    );
  }

  if (showCreator) {
    return (
      <TaskCreator
        onTaskCreated={handleTaskCreated}
        onClose={() => setShowCreator(false)}
      />
    );
  }

  if (showTaskDetails && selectedTask) {
    return (
      <TaskDetails
        task={selectedTask}
        onClose={() => setShowTaskDetails(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white/30 dark:bg-black/20 backdrop-blur-3xl"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl">
                <Book className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Správa{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                vzdělávacích úloh
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Vytvářejte, spravujte a organizujte vzdělávací úlohy pro všechny
              předměty. Moderní nástroj pro efektivní výuku.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setShowCreator(true)}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Vytvořit novou úlohu
              </button>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Users className="w-5 h-5 mr-2" />
                <span className="text-sm sm:text-base">
                  {tasks.length} celkem úloh
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/50 p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <Filter className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Najít úlohy
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative col-span-1 sm:col-span-2 lg:col-span-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Hledat úlohy..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-400 transition-all duration-200"
                />
              </div>

              <select
                value={filters.type}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, type: e.target.value }))
                }
                className="px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
              >
                {taskTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>

              <select
                value={filters.difficulty}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    difficulty: e.target.value,
                  }))
                }
                className="px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
              >
                {difficulties.map((diff) => (
                  <option key={diff.value} value={diff.value}>
                    {diff.label}
                  </option>
                ))}
              </select>

              <select
                value={filters.subject}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, subject: e.target.value }))
                }
                className="px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter Summary */}
            <div className="mt-4 flex flex-wrap gap-2">
              {(searchTerm ||
                filters.type !== "all" ||
                filters.difficulty !== "all" ||
                filters.subject !== "all") && (
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <span className="mr-2">Filtry:</span>
                  {searchTerm && (
                    <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-md mr-2">
                      "{searchTerm}"
                    </span>
                  )}
                  {filters.type !== "all" && (
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-md mr-2">
                      {taskTypes.find((t) => t.value === filters.type)?.label}
                    </span>
                  )}
                  {filters.difficulty !== "all" && (
                    <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 rounded-md mr-2">
                      {
                        difficulties.find((d) => d.value === filters.difficulty)
                          ?.label
                      }
                    </span>
                  )}
                  {filters.subject !== "all" &&
                    filters.subject !== "Všechny předměty" && (
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-md mr-2">
                        {filters.subject}
                      </span>
                    )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tasks Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Vaše úlohy
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Procházejte a spravujte všechny vaše vzdělávací úlohy na jednom
              místě
            </p>
          </div>

          {/* Results Counter */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Zobrazeno:{" "}
                <span className="font-bold text-indigo-600 dark:text-indigo-400">
                  {filteredTasks.length}
                </span>{" "}
                z {tasks.length} úloh
              </span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Řadit podle:
              </span>
              <select className="text-sm border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-1 bg-white dark:bg-gray-700 dark:text-white">
                <option>Nejnovější</option>
                <option>Nejstarší</option>
                <option>Obtížnost</option>
                <option>XP body</option>
              </select>
            </div>
          </div>

          {/* Tasks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTasks.map((task) => {
              const diffStyles = getDifficultyStyles(task.difficulty);

              return (
                <div
                  key={task.id}
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-white/20 dark:border-gray-700/50 p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center flex-1 min-w-0">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                        {getTypeIcon(task.type)}
                      </div>
                      <div className="ml-3 min-w-0 flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {task.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          {getTypeLabel(task.type)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-lg ${diffStyles.bg} ${diffStyles.color}`}
                    >
                      {
                        difficulties.find((d) => d.value === task.difficulty)
                          ?.label
                      }
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-lg">
                      {task.xp} XP
                    </span>
                    {task.subject && (
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-lg">
                        {task.subject}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {task.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="hidden sm:inline">
                        {task.createdAt
                          ? new Date(
                              task.createdAt.seconds * 1000
                            ).toLocaleDateString("cs-CZ")
                          : "N/A"}
                      </span>
                      <span className="sm:hidden">
                        {task.createdAt
                          ? new Date(
                              task.createdAt.seconds * 1000
                            ).toLocaleDateString("cs-CZ", {
                              month: "short",
                              day: "numeric",
                            })
                          : "N/A"}
                      </span>
                    </div>

                    <div className="flex space-x-1">
                      <button
                        onClick={() => handleViewTask(task)}
                        className="p-2 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 rounded-lg transition-colors"
                        title="Zobrazit detaily"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        title="Upravit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/50 rounded-lg transition-colors"
                        title="Smazat"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Empty State */}
      {filteredTasks.length === 0 && (
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Book className="w-12 h-12 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {searchTerm ||
              filters.type !== "all" ||
              filters.difficulty !== "all" ||
              filters.subject !== "all"
                ? "Žádné úlohy nenalezeny"
                : "Zatím žádné úlohy"}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {searchTerm ||
              filters.type !== "all" ||
              filters.difficulty !== "all" ||
              filters.subject !== "all"
                ? "Zkuste upravit filtry nebo vyhledávací dotaz pro zobrazení více výsledků."
                : "Začněte vytvořením první úlohy a postavte si vlastní knihovnu vzdělávacího obsahu."}
            </p>
            {!searchTerm &&
              filters.type === "all" &&
              filters.difficulty === "all" &&
              filters.subject === "all" && (
                <button
                  onClick={() => setShowCreator(true)}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Vytvořit první úlohu
                </button>
              )}
          </div>
        </div>
      )}
    </div>
  );
};

// Task Details Component
const TaskDetails = ({ task, onClose }) => {
  const getDifficultyStyles = (difficulty) => {
    const difficulties = [
      {
        value: "easy",
        label: "Snadná",
        color: "text-green-600",
        bg: "bg-green-100",
      },
      {
        value: "medium",
        label: "Střední",
        color: "text-yellow-600",
        bg: "bg-yellow-100",
      },
      {
        value: "hard",
        label: "Těžká",
        color: "text-red-600",
        bg: "bg-red-100",
      },
    ];
    const diff = difficulties.find((d) => d.value === difficulty);
    return diff
      ? { color: diff.color, bg: diff.bg }
      : { color: "text-gray-600", bg: "bg-gray-100" };
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "multipleChoice":
        return "📝";
      case "written":
        return "✍️";
      case "multiAnswer":
        return "✅";
      default:
        return "❓";
    }
  };

  const diffStyles = getDifficultyStyles(task.difficulty);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <span className="text-3xl mr-4">{getTypeIcon(task.type)}</span>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {task.name}
            </h2>
            <div className="flex items-center space-x-4 mt-2">
              <span
                className={`px-3 py-1 text-sm rounded-full ${diffStyles.bg} ${diffStyles.color}`}
              >
                {task.difficulty === "easy"
                  ? "Snadná"
                  : task.difficulty === "medium"
                  ? "Střední"
                  : "Těžká"}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {task.xp} XP
              </span>
              {task.subject && (
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded">
                  {task.subject}
                </span>
              )}
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <Eye className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Popis úlohy
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{task.description}</p>
        </div>

        {task.type === "multipleChoice" && task.options && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Možnosti odpovědí
            </h3>
            <ul className="space-y-2">
              {task.options.map((option, index) => (
                <li
                  key={index}
                  className={`p-3 rounded border ${
                    option === task.correctAnswer
                      ? "border-green-500 bg-green-50 dark:bg-green-900"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  <span className="font-medium mr-2">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                  {option === task.correctAnswer && (
                    <span className="ml-2 text-green-600 dark:text-green-400">
                      ✓ Správně
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {task.type === "written" && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Správná odpověď
            </h3>
            <p className="p-3 bg-green-50 dark:bg-green-900 border border-green-500 rounded">
              {task.correctAnswer}
            </p>
          </div>
        )}

        {task.type === "multiAnswer" && task.correctAnswers && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Správné odpovědi
            </h3>
            <ul className="space-y-2">
              {task.correctAnswers.map((answer, index) => (
                <li
                  key={index}
                  className="p-3 bg-green-50 dark:bg-green-900 border border-green-500 rounded"
                >
                  ✓ {answer}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Vysvětlení
          </h3>
          <p className="text-gray-600 dark:text-gray-300 p-3 bg-blue-50 dark:bg-blue-900 rounded">
            {task.explanation}
          </p>
        </div>

        {task.hints && task.hints.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Nápovědy
            </h3>
            <ul className="space-y-2">
              {task.hints.map((hint, index) => (
                <li
                  key={index}
                  className="p-3 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded"
                >
                  💡 {hint}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
