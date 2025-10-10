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
} from "lucide-react";
// import { cloudFunctionsService } from "../services/cloudFunctions";
// import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import { toast } from "react-toastify";

const AllTasks = () => {
  // const { user } = useFirebaseAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const subjects = [
    { value: "all", label: "Všechny předměty" },
    { value: "math", label: "Matematika" },
    { value: "geometry", label: "Geometrie" },
    { value: "physics", label: "Fyzika" },
    { value: "chemistry", label: "Chemie" },
    { value: "czech", label: "Čeština" },
  ];

  const difficulties = [
    { value: "all", label: "Všechny obtížnosti" },
    {
      value: "easy",
      label: "Snadné",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      value: "medium",
      label: "Střední",
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
    { value: "hard", label: "Těžké", color: "text-red-600", bg: "bg-red-100" },
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
      subject: "math",
      difficulty: "easy",
      xp: 50,
      estimatedTime: 15,
      completedBy: 1245,
      rating: 4.8,
      createdAt: new Date("2024-10-01"),
      isCompleted: false,
    },
    {
      id: 2,
      name: "Lineární rovnice",
      description: "Řešení lineárních rovnic s jednou neznámou",
      subject: "math",
      difficulty: "medium",
      xp: 75,
      estimatedTime: 25,
      completedBy: 892,
      rating: 4.6,
      createdAt: new Date("2024-10-05"),
      isCompleted: true,
    },
    {
      id: 3,
      name: "Planimetrie - trojúhelníky",
      description: "Vlastnosti a výpočty u trojúhelníků",
      subject: "geometry",
      difficulty: "medium",
      xp: 80,
      estimatedTime: 30,
      completedBy: 567,
      rating: 4.7,
      createdAt: new Date("2024-10-08"),
      isCompleted: false,
    },
    {
      id: 4,
      name: "Kvadratické rovnice",
      description: "Diskriminant a řešení kvadratických rovnic",
      subject: "math",
      difficulty: "hard",
      xp: 120,
      estimatedTime: 40,
      completedBy: 334,
      rating: 4.9,
      createdAt: new Date("2024-10-10"),
      isCompleted: false,
    },
  ];

  useEffect(() => {
    loadTasks();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const loadTasks = async () => {
    try {
      setLoading(true);
      // TODO: Replace with real API call
      // const response = await cloudFunctionsService.getEducationalTasks();
      // setTasks(response.tasks || []);

      // For now, use sample data
      setTimeout(() => {
        setTasks(sampleTasks);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error loading tasks:", error);
      toast.error("Chyba při načítání úkolů");
      setTasks(sampleTasks);
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
    <div className="min-h-screen bg-white dark:bg-zinc-950 py-8">
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
                className="w-full pl-10 pr-4 py-3 bg-white/80 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white placeholder-gray-500 dark:placeholder-zinc-400"
              />
            </div>

            {/* Subject Filter */}
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-4 py-3 bg-white/80 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white"
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
              className="w-full px-4 py-3 bg-white/80 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white"
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
              className="w-full px-4 py-3 bg-white/80 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white"
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
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
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
                              (d) => d.value === task.difficulty
                            )?.label
                          }
                        </span>
                      </div>
                      {task.isCompleted && (
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
                    <Link
                      to={`/task/${task.id}`}
                      className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      {task.isCompleted ? "Zkusit znovu" : "Začít úkol"}
                    </Link>
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
    </div>
  );
};

export default AllTasks;
