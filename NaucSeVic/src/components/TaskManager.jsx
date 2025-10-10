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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Book className="w-8 h-8 text-blue-500 mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Správa úloh
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Vytvářejte a spravujte vzdělávací úlohy
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowCreator(true)}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          Vytvořit úlohu
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Hledat úlohy..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <select
            value={filters.type}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, type: e.target.value }))
            }
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
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
              setFilters((prev) => ({ ...prev, difficulty: e.target.value }))
            }
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
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
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          >
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTasks.map((task) => {
          const diffStyles = getDifficultyStyles(task.difficulty);

          return (
            <div
              key={task.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">
                    {getTypeIcon(task.type)}
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2">
                      {task.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {getTypeLabel(task.type)}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${diffStyles.bg} ${diffStyles.color}`}
                  >
                    {
                      difficulties.find((d) => d.value === task.difficulty)
                        ?.label
                    }
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {task.xp} XP
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {task.description}
              </p>

              {task.subject && (
                <div className="flex items-center mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded">
                    {task.subject}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4 mr-1" />
                  {task.createdAt
                    ? new Date(
                        task.createdAt.seconds * 1000
                      ).toLocaleDateString("cs-CZ")
                    : "N/A"}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleViewTask(task)}
                    className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900 rounded"
                    title="Zobrazit detaily"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    className="p-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 rounded"
                    title="Upravit"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900 rounded"
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

      {filteredTasks.length === 0 && (
        <div className="text-center py-12">
          <Book className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Žádné úlohy nenalezeny
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {searchTerm ||
            filters.type !== "all" ||
            filters.difficulty !== "all" ||
            filters.subject !== "all"
              ? "Zkuste změnit filtry nebo vyhledávací dotaz."
              : "Začněte vytvořením první úlohy."}
          </p>
          {!searchTerm &&
            filters.type === "all" &&
            filters.difficulty === "all" &&
            filters.subject === "all" && (
              <button
                onClick={() => setShowCreator(true)}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center mx-auto"
              >
                <Plus className="w-5 h-5 mr-2" />
                Vytvořit první úlohu
              </button>
            )}
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
