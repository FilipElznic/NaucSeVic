import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Calculator,
  Triangle,
  Atom,
  ArrowLeft,
  BookOpen,
  Clock,
  Star,
  Play,
  Lock,
  CheckCircle,
} from "lucide-react";

const Tasks = () => {
  const { subject } = useParams();

  const subjectConfig = {
    math: {
      title: "Matematika",
      description: "Algebra, geometrie, analýza a další matematické disciplíny",
      icon: Calculator,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    geometry: {
      title: "Geometrie",
      description: "Planimetrie, stereometrie a analytická geometrie",
      icon: Triangle,
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-green-400",
      borderColor: "border-green-200 dark:border-green-800",
    },
    physics: {
      title: "Fyzika",
      description: "Mechanika, termodynamika, elektřina a optika",
      icon: Atom,
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
  };

  const currentSubject = subjectConfig[subject] || subjectConfig.math;
  const Icon = currentSubject.icon;

  // Sample tasks data
  const tasks = [
    {
      id: 1,
      title: "Základy algebry",
      description: "Naučte se základní algebraické operace a rovnice",
      difficulty: "Snadné",
      duration: "15 min",
      points: 50,
      completed: true,
      locked: false,
    },
    {
      id: 2,
      title: "Lineární rovnice",
      description: "Řešení lineárních rovnic s jednou neznámou",
      difficulty: "Střední",
      duration: "25 min",
      points: 75,
      completed: true,
      locked: false,
    },
    {
      id: 3,
      title: "Kvadratické rovnice",
      description: "Diskriminant a řešení kvadratických rovnic",
      difficulty: "Střední",
      duration: "30 min",
      points: 100,
      completed: false,
      locked: false,
    },
    {
      id: 4,
      title: "Systémy rovnic",
      description: "Řešení soustav lineárních rovnic různými metodami",
      difficulty: "Těžké",
      duration: "40 min",
      points: 150,
      completed: false,
      locked: false,
    },
    {
      id: 5,
      title: "Funkce a grafy",
      description: "Vlastnosti funkcí a jejich grafické znázornění",
      difficulty: "Těžké",
      duration: "35 min",
      points: 125,
      completed: false,
      locked: true,
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Snadné":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Střední":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "Těžké":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      {/* Header */}
      <div className={`bg-gradient-to-br ${currentSubject.color} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-6">
            <Link
              to="/home"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zpět na domovskou stránku
            </Link>
          </div>

          <div className="flex items-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl mr-6">
              <Icon className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {currentSubject.title}
              </h1>
              <p className="text-xl text-white/80">
                {currentSubject.description}
              </p>
            </div>
          </div>

          {/* Progress Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center">
                <BookOpen className="h-6 w-6 text-white mr-3" />
                <div>
                  <div className="text-2xl font-bold text-white">
                    {tasks.filter((t) => t.completed).length}/{tasks.length}
                  </div>
                  <div className="text-sm text-white/80">Dokončené úlohy</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center">
                <Star className="h-6 w-6 text-white mr-3" />
                <div>
                  <div className="text-2xl font-bold text-white">
                    {tasks
                      .filter((t) => t.completed)
                      .reduce((sum, t) => sum + t.points, 0)}
                  </div>
                  <div className="text-sm text-white/80">Získané body</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-white mr-3" />
                <div>
                  <div className="text-2xl font-bold text-white">
                    {Math.round(
                      (tasks.filter((t) => t.completed).length / tasks.length) *
                        100
                    )}
                    %
                  </div>
                  <div className="text-sm text-white/80">Dokončeno</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tasks List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Dostupné úlohy
          </h2>
          <p className="text-gray-600 dark:text-zinc-400">
            Vyberte si úlohu a začněte se učit
          </p>
        </div>

        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`bg-white dark:bg-zinc-800 rounded-xl border transition-all duration-300 ${
                task.locked
                  ? "border-gray-200 dark:border-zinc-700 opacity-60"
                  : task.completed
                  ? `${currentSubject.borderColor} shadow-sm`
                  : "border-gray-200 dark:border-zinc-700 hover:shadow-lg hover:scale-[1.02]"
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div
                        className={`${currentSubject.bgColor} p-2 rounded-lg mr-4`}
                      >
                        {task.completed ? (
                          <CheckCircle
                            className={`h-6 w-6 ${currentSubject.iconColor}`}
                          />
                        ) : task.locked ? (
                          <Lock className="h-6 w-6 text-gray-400 dark:text-zinc-500" />
                        ) : (
                          <BookOpen
                            className={`h-6 w-6 ${currentSubject.iconColor}`}
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {task.title}
                        </h3>
                        <p className="text-gray-600 dark:text-zinc-400">
                          {task.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                          task.difficulty
                        )}`}
                      >
                        {task.difficulty}
                      </span>
                      <div className="flex items-center text-gray-600 dark:text-zinc-400">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">{task.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-zinc-400">
                        <Star className="h-4 w-4 mr-1" />
                        <span className="text-sm">{task.points} bodů</span>
                      </div>
                    </div>
                  </div>

                  <div className="ml-6">
                    {task.locked ? (
                      <div className="bg-gray-100 dark:bg-zinc-700 text-gray-500 dark:text-zinc-400 px-6 py-3 rounded-lg font-medium">
                        <Lock className="h-4 w-4 mr-2 inline" />
                        Uzamčeno
                      </div>
                    ) : task.completed ? (
                      <div
                        className={`${currentSubject.bgColor} ${currentSubject.iconColor} px-6 py-3 rounded-lg font-medium`}
                      >
                        <CheckCircle className="h-4 w-4 mr-2 inline" />
                        Dokončeno
                      </div>
                    ) : (
                      <button
                        className={`bg-gradient-to-r ${currentSubject.color} text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center`}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Začít
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-zinc-800 rounded-2xl border border-gray-200 dark:border-zinc-700 p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Více úloh již brzy!
            </h3>
            <p className="text-gray-600 dark:text-zinc-400 mb-6">
              Pracujeme na dalších úlohách a cvičeních pro{" "}
              {currentSubject.title.toLowerCase()}. Buďte připraveni na nové
              výzvy!
            </p>
            <Link
              to="/home"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zpět na domovskou stránku
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
