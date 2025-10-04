import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  Award,
  Trophy,
  Zap,
  Coins,
  BookOpen,
} from "lucide-react";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";
import { getAllSubjects, getUserTaskStats } from "../services/databaseService";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import DatabaseFeaturesShowcase from "../components/DatabaseFeaturesShowcase";

const Home = () => {
  const { user, userProfile } = useFirebaseAuth();
  const [subjects, setSubjects] = useState([]);
  const [userStats, setUserStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const firstName =
    user?.displayName?.split(" ")[0] || userProfile?.username || "Student";

  useEffect(() => {
    const loadData = async () => {
      if (!user) return;

      try {
        setLoading(true);
        const [subjectsData, stats] = await Promise.all([
          getAllSubjects(),
          getUserTaskStats(user.uid),
        ]);

        setSubjects(subjectsData);
        setUserStats(stats);
      } catch (error) {
        console.error("Error loading home data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  const getSubjectColors = (index) => {
    const colors = [
      { bgColor: "bg-blue-50" },
      { bgColor: "bg-green-50" },
      { bgColor: "bg-purple-50" },
      { bgColor: "bg-red-50" },
      { bgColor: "bg-yellow-50" },
      { bgColor: "bg-pink-50" },
      { bgColor: "bg-indigo-50" },
      { bgColor: "bg-teal-50" },
    ];
    return colors[index % colors.length];
  };

  const stats = [
    {
      label: "Dokončené úkoly",
      value: userStats ? userStats.correctAnswers.toString() : "0",
      icon: BookOpen,
    },
    {
      label: "Získané XP",
      value: userProfile ? userProfile.xp.toString() : "0",
      icon: Zap,
    },
    {
      label: "Coiny",
      value: userProfile ? userProfile.coins.toString() : "0",
      icon: Coins,
    },
    {
      label: "Úspěšnost",
      value: userStats ? userStats.accuracy.toFixed(1) + "%" : "0%",
      icon: Trophy,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Vítej zpět, {firstName}! 👋
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8">
              Pokračuj ve svém vzdělávacím dobrodružství
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-indigo-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Tvoje předměty</h2>
            <Link
              to="/dashboard"
              className="text-indigo-600 hover:text-indigo-500 font-medium flex items-center"
            >
              Zobrazit dashboard
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => {
              const colors = getSubjectColors(index);

              return (
                <Link
                  key={subject.id}
                  to={`/tasks/${subject.id}`}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className={colors.bgColor + " p-3 rounded-xl mr-4"}>
                        <span className="text-2xl">{subject.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">
                          {subject.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      {subject.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">
                        Začít učení
                      </span>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Rychlé akce</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              to="/dashboard"
              className="flex items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
            >
              <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-900">Zobrazit pokrok</h3>
                <p className="text-sm text-gray-600">Statistiky a grafy</p>
              </div>
            </Link>

            <Link
              to="/achievements"
              className="flex items-center p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors"
            >
              <Award className="h-8 w-8 text-yellow-600 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-900">Achievementy</h3>
                <p className="text-sm text-gray-600">Odměny a ocenění</p>
              </div>
            </Link>

            <div className="flex items-center p-4 bg-green-50 rounded-xl">
              <Trophy className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-900">Tvoje XP</h3>
                <p className="text-sm text-gray-600">
                  {userProfile?.xp || 0} bodů
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Database Features Showcase */}
      <DatabaseFeaturesShowcase />
    </div>
  );
};

export default Home;
