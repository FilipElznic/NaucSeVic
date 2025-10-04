import React, { useState, useEffect } from "react";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";
import {
  getUserTaskStats,
  getUserDashboardData,
} from "../services/databaseService";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { WeeklyProgressChart } from "../components/ui/Charts";
import {
  BarChart3,
  TrendingUp,
  Target,
  Award,
  BookOpen,
  CheckCircle,
  Star,
  Zap,
  Trophy,
  Calendar,
} from "lucide-react";

const ProgressStats = () => {
  const { user } = useFirebaseAuth();
  const [dashboardData, setDashboardData] = useState(null);
  const [taskStats, setTaskStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        setLoading(true);
        const [dashboard, stats] = await Promise.all([
          getUserDashboardData(user.uid),
          getUserTaskStats(user.uid),
        ]);
        setDashboardData(dashboard);
        setTaskStats(stats);
      } catch (error) {
        console.error("Error fetching progress data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchProgressData();
    }
  }, [user]);

  const getPerformanceLevel = (accuracy) => {
    if (accuracy >= 90)
      return {
        level: "Výborný",
        color: "text-green-600 dark:text-green-400",
        bg: "bg-green-100 dark:bg-green-900",
      };
    if (accuracy >= 80)
      return {
        level: "Velmi dobrý",
        color: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-100 dark:bg-blue-900",
      };
    if (accuracy >= 70)
      return {
        level: "Dobrý",
        color: "text-yellow-600 dark:text-yellow-400",
        bg: "bg-yellow-100 dark:bg-yellow-900",
      };
    if (accuracy >= 60)
      return {
        level: "Průměrný",
        color: "text-orange-600 dark:text-orange-400",
        bg: "bg-orange-100 dark:bg-orange-900",
      };
    return {
      level: "Pod průměrem",
      color: "text-red-600 dark:text-red-400",
      bg: "bg-red-100 dark:bg-red-900",
    };
  };

  const getProgressBarColor = (percentage) => {
    if (percentage >= 80) return "bg-green-500";
    if (percentage >= 60) return "bg-blue-500";
    if (percentage >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const performance = taskStats
    ? getPerformanceLevel(taskStats.averageAccuracy)
    : null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <BarChart3 className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Progress Stats
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Komplexní přehled vašeho pokroku a výkonu
          </p>
        </div>

        {dashboardData && (
          <>
            {/* Main Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <Zap className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Celkem XP
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {dashboardData.profile.totalXP || 0}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <Trophy className="h-8 w-8 text-gold-600 dark:text-gold-400" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Mince
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {dashboardData.profile.coins || 0}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Úspěchy
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {dashboardData.achievements.unlocked.length}/
                      {dashboardData.achievements.total}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <Target className="h-8 w-8 text-green-600 dark:text-green-400" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Aktuální série
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {dashboardData.stats.activity.streak} dní
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Overview */}
            {taskStats && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-2">
                      Výkonnostní přehled
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                          Celková přesnost
                        </span>
                        <span
                          className={`text-sm font-semibold ${performance?.color}`}
                        >
                          {taskStats.averageAccuracy.toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getProgressBarColor(
                            taskStats.averageAccuracy
                          )}`}
                          style={{ width: `${taskStats.averageAccuracy}%` }}
                        ></div>
                      </div>
                      <div
                        className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-semibold ${performance?.bg} ${performance?.color}`}
                      >
                        {performance?.level}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Dokončené úkoly
                        </p>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">
                          {taskStats.totalCompleted}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Správné odpovědi
                        </p>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">
                          {taskStats.totalCorrect}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievement Progress */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-2">
                      Pokrok v úspěších
                    </h3>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        Odemčené úspěchy
                      </span>
                      <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                        {dashboardData.achievements.progress.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{
                          width: `${dashboardData.achievements.progress}%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Odemčeno
                      </span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {dashboardData.achievements.unlocked.length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Zbývá
                      </span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {dashboardData.achievements.total -
                          dashboardData.achievements.unlocked.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Activity Chart */}
            {dashboardData.recentActivity &&
              dashboardData.recentActivity.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Aktivita za posledních 7 dní
                  </h3>
                  <WeeklyProgressChart data={dashboardData.recentActivity} />
                </div>
              )}

            {/* Detailed Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Learning Stats */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-2">
                    Statistiky učení
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Týdenní průměr úkolů
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {dashboardData.stats.activity.weeklyAverage.toFixed(1)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Měsíční průměr úkolů
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {dashboardData.stats.activity.monthlyAverage.toFixed(1)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Celkem získané XP
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {dashboardData.stats.activity.totalXP}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Nejlepší den
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {dashboardData.stats.activity.bestDay.tasks} úkolů
                    </span>
                  </div>
                </div>
              </div>

              {/* Recent Achievements */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-2">
                    Nedávné úspěchy
                  </h3>
                </div>

                {dashboardData.achievements.unlocked.length > 0 ? (
                  <div className="space-y-3">
                    {dashboardData.achievements.unlocked
                      .slice(0, 5)
                      .map((achievement) => (
                        <div
                          key={achievement.id}
                          className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                        >
                          <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-full">
                            <Trophy className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                          </div>
                          <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {achievement.name}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-300">
                              +{achievement.xpReward} XP, +
                              {achievement.coinReward} mincí
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Award className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Zatím žádné odemčené úspěchy. Začněte řešit úkoly!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {!dashboardData && !loading && (
          <div className="text-center py-12">
            <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Žádná data k zobrazení
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Začněte řešit úkoly a sledujte svůj pokrok zde.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressStats;
