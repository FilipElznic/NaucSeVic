import React, { useState, useEffect } from "react";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";
import { getAllAchievements } from "../services/databaseService";
import { Trophy, Lock, CheckCircle, Zap, Coins } from "lucide-react";
import LoadingSpinner from "./ui/LoadingSpinner";

const AchievementComponent = () => {
  const { userProfile } = useFirebaseAuth();
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAchievements = async () => {
      try {
        setLoading(true);
        const achievementsData = await getAllAchievements();
        setAchievements(achievementsData);
      } catch (err) {
        console.error("Error loading achievements:", err);
        setError("Nepodařilo se načíst achievementy");
      } finally {
        setLoading(false);
      }
    };

    loadAchievements();
  }, []);

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

  const unlockedAchievements = userProfile?.unlockedAchievements || [];
  const unlockedCount = unlockedAchievements.length;
  const totalCount = achievements.length;
  const progressPercentage =
    totalCount > 0 ? (unlockedCount / totalCount) * 100 : 0;

  const unlockedAchievementsList = achievements.filter((achievement) =>
    unlockedAchievements.includes(achievement.id)
  );

  const lockedAchievementsList = achievements.filter(
    (achievement) => !unlockedAchievements.includes(achievement.id)
  );

  const getConditionDescription = (condition) => {
    const conditionDescriptions = {
      complete_1_task: "Dokončit první úkol",
      complete_10_tasks: "Dokončit 10 úkolů správně",
      complete_50_tasks: "Dokončit 50 úkolů správně",
      complete_100_tasks: "Dokončit 100 úkolů správně",
      reach_1000_xp: "Dosáhnout 1000 XP",
      reach_5000_xp: "Dosáhnout 5000 XP",
      "7_day_streak": "Učit se 7 dní v řadě",
      "30_day_streak": "Učit se 30 dní v řadě",
      math_master: "Dokončit 20 matematických úkolů",
    };

    return conditionDescriptions[condition] || condition;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                🏆 Achievementy
              </h1>
              <p className="text-gray-600">
                Odemkni achievementy plněním různých úkolů a cílů
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">
                {unlockedCount}/{totalCount}
              </div>
              <div className="text-sm text-gray-500">Odemčeno</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Pokrok</span>
              <span>{progressPercentage.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Unlocked Achievements */}
        {unlockedAchievementsList.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
              Odemčené achievementy ({unlockedCount})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {unlockedAchievementsList.map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full">
                      <Trophy className="h-6 w-6 text-yellow-600" />
                    </div>
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {achievement.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {achievement.description}
                  </p>

                  <div className="text-xs text-gray-500 mb-3">
                    Podmínka: {getConditionDescription(achievement.condition)}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                        <Zap className="h-4 w-4 text-yellow-600 mr-1" />
                        <span className="text-xs font-semibold text-yellow-800">
                          +{achievement.xpReward}
                        </span>
                      </div>
                      <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                        <Coins className="h-4 w-4 text-green-600 mr-1" />
                        <span className="text-xs font-semibold text-green-800">
                          +{achievement.coinReward}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Locked Achievements */}
        {lockedAchievementsList.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Lock className="h-6 w-6 text-gray-400 mr-2" />
              Zamčené achievementy ({lockedAchievementsList.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lockedAchievementsList.map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md opacity-75"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                      <Trophy className="h-6 w-6 text-gray-400" />
                    </div>
                    <Lock className="h-6 w-6 text-gray-400" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-700 mb-2">
                    {achievement.name}
                  </h3>

                  <p className="text-gray-500 text-sm mb-4">
                    {achievement.description}
                  </p>

                  <div className="text-xs text-gray-400 mb-3">
                    Pro odemčení:{" "}
                    {getConditionDescription(achievement.condition)}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
                        <Zap className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-xs font-semibold text-gray-600">
                          +{achievement.xpReward}
                        </span>
                      </div>
                      <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
                        <Coins className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-xs font-semibold text-gray-600">
                          +{achievement.coinReward}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No achievements message */}
        {achievements.length === 0 && (
          <div className="text-center py-12">
            <Trophy className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Žádné achievementy
            </h3>
            <p className="text-gray-500">
              Achievementy budou k dispozici brzy!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementComponent;
