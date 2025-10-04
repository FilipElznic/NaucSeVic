import React, { useState, useEffect } from "react";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";
import { getUserDashboardData } from "../services/databaseService";
import { ActivityChart, WeeklyProgressChart } from "./ui/Charts";
import { Trophy, Target, Zap, TrendingUp, Calendar, Award } from "lucide-react";
import LoadingSpinner from "./ui/LoadingSpinner";

const UserDashboard = () => {
  const { user } = useFirebaseAuth();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDashboardData = async () => {
      if (!user) return;

      try {
        setLoading(true);
        const data = await getUserDashboardData(user.uid);
        setDashboardData(data);
      } catch (err) {
        console.error("Error loading dashboard data:", err);
        setError("Nepodařilo se načíst data dashboardu");
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Chyba</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return null;
  }

  const { profile, stats, recentActivity, achievements } = dashboardData;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Vítej zpět, {profile.username}! 👋
              </h1>
              <p className="text-gray-600 mt-2">
                Zde je přehled tvého pokroku v učení
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-2">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <p className="text-2xl font-bold text-yellow-600">
                  {profile.xp}
                </p>
                <p className="text-sm text-gray-500">XP</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-2">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-green-600">
                  {profile.coins}
                </p>
                <p className="text-sm text-gray-500">Coiny</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Dokončené úkoly
                </p>
                <p className="text-3xl font-bold text-blue-600">
                  {stats.tasks.correctAnswers}
                </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                <Trophy className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Úspěšnost</p>
                <p className="text-3xl font-bold text-green-600">
                  {stats.tasks.accuracy.toFixed(1)}%
                </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Denní série</p>
                <p className="text-3xl font-bold text-orange-600">
                  {stats.activity.streak}
                </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Achievementy
                </p>
                <p className="text-3xl font-bold text-purple-600">
                  {achievements.unlocked.length}/{achievements.total}
                </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Aktivita za posledních 7 dní
            </h3>
            <WeeklyProgressChart data={recentActivity} />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Pokrok v posledních dnech
            </h3>
            <ActivityChart data={recentActivity} type="tasks" />
          </div>
        </div>

        {/* Recent Achievements */}
        {achievements.unlocked.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Nedávno odemčené achievementy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.unlocked.slice(0, 6).map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex items-center p-4 border border-gray-200 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mr-4">
                    <Trophy className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {achievement.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {achievement.description}
                    </p>
                    <div className="flex items-center mt-2 space-x-4">
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                        +{achievement.xpReward} XP
                      </span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        +{achievement.coinReward} coinů
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
