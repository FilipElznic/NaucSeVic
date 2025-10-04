import React, { useState, useEffect } from "react";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";
import {
  getUserActivity,
  getUserActivityStats,
} from "../services/databaseService";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { ActivityChart } from "../components/ui/Charts";
import {
  Activity,
  Calendar,
  Target,
  TrendingUp,
  Clock,
  Award,
  CheckCircle,
  Zap,
} from "lucide-react";

const ActivityTracker = () => {
  const { user } = useFirebaseAuth();
  const [activityData, setActivityData] = useState([]);
  const [activityStats, setActivityStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState(30); // days

  useEffect(() => {
    const fetchActivityData = async () => {
      try {
        setLoading(true);
        const [activity, stats] = await Promise.all([
          getUserActivity(user.uid, timeRange),
          getUserActivityStats(user.uid),
        ]);
        setActivityData(activity);
        setActivityStats(stats);
      } catch (error) {
        console.error("Error fetching activity data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchActivityData();
    }
  }, [user, timeRange]);

  const getStreakColor = (streak) => {
    if (streak >= 30) return "text-purple-600 dark:text-purple-400";
    if (streak >= 14) return "text-green-600 dark:text-green-400";
    if (streak >= 7) return "text-blue-600 dark:text-blue-400";
    if (streak >= 3) return "text-yellow-600 dark:text-yellow-400";
    return "text-gray-600 dark:text-gray-400";
  };

  const getStreakMessage = (streak) => {
    if (streak >= 30) return "Neuvěřitelná série! 🔥";
    if (streak >= 14) return "Skvělá série! 🌟";
    if (streak >= 7) return "Dobrá série! 💪";
    if (streak >= 3) return "Pokračujte! 👍";
    return "Začněte novou sérii! 🚀";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Activity className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Activity Tracker
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Sledujte svůj pokrok a aktivitu v učení
          </p>
        </div>

        {/* Time Range Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md">
            {[7, 30, 90, 365].map((days) => (
              <button
                key={days}
                onClick={() => setTimeRange(days)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  timeRange === days
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {days === 7
                  ? "7 dní"
                  : days === 30
                  ? "30 dní"
                  : days === 90
                  ? "3 měsíce"
                  : "Rok"}
              </button>
            ))}
          </div>
        </div>

        {activityStats && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Celkem úkolů
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {activityStats.totalTasks}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <Zap className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Celkem XP
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {activityStats.totalXP}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <Target
                    className={`h-8 w-8 ${getStreakColor(
                      activityStats.streak
                    )}`}
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Aktuální série
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {activityStats.streak} dní
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Nejlepší den
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {activityStats.bestDay.tasks} úkolů
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Streak Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md mb-8 p-6">
              <div className="text-center">
                <div
                  className={`text-4xl font-bold mb-2 ${getStreakColor(
                    activityStats.streak
                  )}`}
                >
                  {activityStats.streak} dní
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {getStreakMessage(activityStats.streak)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {activityStats.bestDay.date
                    ? `Váš nejlepší den byl ${new Date(
                        activityStats.bestDay.date
                      ).toLocaleDateString()} s ${
                        activityStats.bestDay.tasks
                      } úkoly a ${activityStats.bestDay.xp} XP`
                    : "Dokončete první úkol pro začátek vaší série!"}
                </p>
              </div>
            </div>

            {/* Average Performance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-2">
                    Týdenní průměr
                  </h3>
                </div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {activityStats.weeklyAverage.toFixed(1)}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  úkolů za den v posledních 7 dnech
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-2">
                    Měsíční průměr
                  </h3>
                </div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {activityStats.monthlyAverage.toFixed(1)}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  úkolů za den v posledních 30 dnech
                </p>
              </div>
            </div>
          </>
        )}

        {/* Activity Chart */}
        {activityData.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Aktivita za posledních {timeRange} dní
            </h3>
            <ActivityChart data={activityData} type="tasks" />
          </div>
        )}

        {/* Recent Activity List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Nedávná aktivita
          </h3>
          {activityData.length > 0 ? (
            <div className="space-y-4">
              {activityData.slice(0, 10).map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full">
                      {activity.completedTasks > 0 ? (
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      ) : (
                        <Clock className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {new Date(activity.date).toLocaleDateString("cs-CZ", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {activity.completedTasks} úkolů dokončeno
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      +{activity.gainedXP} XP
                    </p>
                    <p className="text-xs text-gray-500">
                      {activity.completedTasks > 0
                        ? "✓ Aktivní den"
                        : "Bez aktivity"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Activity className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Žádná aktivita
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Začněte řešit úkoly a sledujte svůj pokrok zde.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityTracker;
