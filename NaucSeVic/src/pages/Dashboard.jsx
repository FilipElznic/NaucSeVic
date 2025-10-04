import React from "react";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";
import { useNavigate } from "react-router-dom";
import DatabaseInitializer from "../components/DatabaseInitializer";
import {
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Calendar,
  Clock,
  Target,
  Star,
  PlayCircle,
  CheckCircle,
  LogOut,
} from "lucide-react";

const Dashboard = () => {
  const { user, logout } = useFirebaseAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const stats = [
    {
      icon: BookOpen,
      label: "Dokončené kurzy",
      value: "8",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Clock,
      label: "Celkový čas učení",
      value: "47h",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Award,
      label: "Získané certifikáty",
      value: "3",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Target,
      label: "Dosažené cíle",
      value: "12",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const recentCourses = [
    {
      id: 1,
      title: "JavaScript pro začátečníki",
      progress: 85,
      lastAccessed: "2 dny",
      status: "active",
    },
    {
      id: 2,
      title: "React.js Fundamentals",
      progress: 100,
      lastAccessed: "1 týden",
      status: "completed",
    },
    {
      id: 3,
      title: "Python Data Science",
      progress: 45,
      lastAccessed: "3 dny",
      status: "active",
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "První kroky",
      description: "Dokončil jste svůj první kurz",
      icon: "🎯",
      earned: true,
    },
    {
      id: 2,
      title: "Rychlý učenec",
      description: "Dokončil jste kurz za méně než týden",
      icon: "⚡",
      earned: true,
    },
    {
      id: 3,
      title: "Vytrvalost",
      description: "Učil jste se 7 dní v řadě",
      icon: "🔥",
      earned: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      {/* Header */}
      <div className="bg-white dark:bg-zinc-800 shadow-sm border-b border-gray-200 dark:border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Vítejte zpět, {user?.displayName || user?.email?.split("@")[0]}!
              </h1>
              <p className="text-gray-600 dark:text-zinc-400">
                Pokračujte ve vašem vzdělávacím procesu
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Odhlásit se
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-zinc-700"
            >
              <div className="flex items-center">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-zinc-400">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Courses */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-700">
              <div className="p-6 border-b border-gray-200 dark:border-zinc-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Nedávné kurzy
                </h2>
              </div>
              <div className="p-6 space-y-4">
                {recentCourses.map((course) => (
                  <div
                    key={course.id}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-zinc-700 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-600 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg mr-4">
                        {course.status === "completed" ? (
                          <CheckCircle className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                        ) : (
                          <PlayCircle className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-zinc-400">
                          Naposledy: {course.lastAccessed}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-2">
                        <div className="w-24 bg-gray-200 dark:bg-zinc-600 rounded-full h-2 mr-2">
                          <div
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {course.progress}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-700">
              <div className="p-6 border-b border-gray-200 dark:border-zinc-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Úspěchy
                </h2>
              </div>
              <div className="p-6 space-y-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-xl border-2 ${
                      achievement.earned
                        ? "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20"
                        : "border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-700"
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="text-2xl mr-3">{achievement.icon}</div>
                      <div>
                        <h3
                          className={`font-medium ${
                            achievement.earned
                              ? "text-green-900 dark:text-green-100"
                              : "text-gray-900 dark:text-white"
                          }`}
                        >
                          {achievement.title}
                        </h3>
                        <p
                          className={`text-sm ${
                            achievement.earned
                              ? "text-green-600 dark:text-green-400"
                              : "text-gray-600 dark:text-zinc-400"
                          }`}
                        >
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-700 p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Rychlé akce
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex items-center p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                <BookOpen className="h-6 w-6 mr-3" />
                <span className="font-medium">Prohlédnout kurzy</span>
              </button>

              <button className="flex items-center p-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105">
                <Calendar className="h-6 w-6 mr-3" />
                <span className="font-medium">Naplánovat učení</span>
              </button>

              <button className="flex items-center p-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-xl hover:from-yellow-700 hover:to-orange-700 transition-all duration-200 transform hover:scale-105">
                <Users className="h-6 w-6 mr-3" />
                <span className="font-medium">Připojit ke komunitě</span>
              </button>
            </div>
          </div>
        </div>

        {/* Learning Progress */}
        <div className="mt-8">
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Týdenní pokrok
              </h2>
              <div className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                <TrendingUp className="h-4 w-4 mr-1" />
                +15% oproti minulému týdnu
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-zinc-300">
                  Cíl tohoto týdne
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  5 hodin
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 h-3 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-zinc-400">
                <span>3.75 hodin dokončeno</span>
                <span>75% splněno</span>
              </div>
            </div>
          </div>

          {/* Database Initializer */}
          <div className="lg:col-span-2">
            <DatabaseInitializer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
