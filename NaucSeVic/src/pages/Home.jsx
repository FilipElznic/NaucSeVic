import React from "react";
import { Link } from "react-router-dom";
import { 
  Calculator, 
  Triangle, 
  Atom, 
  BookOpen, 
  Trophy, 
  Clock, 
  Target,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Play
} from "lucide-react";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";

const Home = () => {
  const { user } = useFirebaseAuth();
  const firstName = user?.displayName?.split(' ')[0] || 'Student';

  const subjects = [
    {
      id: 'math',
      title: 'Matematika',
      description: 'Algebra, geometrie, analýza a další matematické disciplíny',
      icon: Calculator,
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconColor: 'text-blue-600 dark:text-blue-400',
      progress: 65,
      lessons: 24,
      completed: 16
    },
    {
      id: 'geometry',
      title: 'Geometrie',
      description: 'Planimetrie, stereometrie a analytická geometrie',
      icon: Triangle,
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      iconColor: 'text-green-600 dark:text-green-400',
      progress: 42,
      lessons: 18,
      completed: 8
    },
    {
      id: 'physics',
      title: 'Fyzika',
      description: 'Mechanika, termodynamika, elektřina a optika',
      icon: Atom,
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      iconColor: 'text-purple-600 dark:text-purple-400',
      progress: 78,
      lessons: 32,
      completed: 25
    }
  ];

  const stats = [
    {
      label: 'Dokončené lekce',
      value: '49',
      icon: BookOpen,
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      label: 'Získané body',
      value: '2,450',
      icon: Star,
      color: 'text-yellow-600 dark:text-yellow-400'
    },
    {
      label: 'Čas učení',
      value: '32h',
      icon: Clock,
      color: 'text-green-600 dark:text-green-400'
    },
    {
      label: 'Ocenění',
      value: '12',
      icon: Trophy,
      color: 'text-purple-600 dark:text-purple-400'
    }
  ];

  const recentAchievements = [
    {
      title: 'První kroky',
      description: 'Dokončil jsi svou první lekci',
      icon: Target,
      earned: true
    },
    {
      title: 'Matematický génius',
      description: 'Dokončil jsi 10 matematických úloh',
      icon: Calculator,
      earned: true
    },
    {
      title: 'Fyzik týdne',
      description: 'Dosáhl jsi 100% úspěšnosti ve fyzice',
      icon: Atom,
      earned: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Vítej zpět, {firstName}! 👋
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Pokračuj ve svém vzdělávacím путování a objevuj nové znalosti
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-indigo-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Subjects */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Tvoje předměty
            </h2>
            <Link 
              to="/dashboard"
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium"
            >
              Zobrazit dashboard
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {subjects.map((subject) => (
              <Link
                key={subject.id}
                to={`/tasks/${subject.id}`}
                className="group block"
              >
                <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-700 p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  {/* Subject Header */}
                  <div className="flex items-center mb-4">
                    <div className={`${subject.bgColor} p-3 rounded-xl mr-4`}>
                      <subject.icon className={`h-8 w-8 ${subject.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {subject.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-zinc-400">
                        {subject.lessons} lekcí
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-zinc-400 mb-4">
                    {subject.description}
                  </p>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600 dark:text-zinc-400">
                        Pokrok: {subject.completed}/{subject.lessons}
                      </span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {subject.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${subject.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${subject.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-zinc-500">
                      Pokračovat v učení
                    </span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Nedávná ocenění
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recentAchievements.map((achievement, index) => (
              <div 
                key={index}
                className={`bg-white dark:bg-zinc-800 rounded-xl p-6 border ${
                  achievement.earned 
                    ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20' 
                    : 'border-gray-200 dark:border-zinc-700'
                }`}
              >
                <div className="flex items-center mb-3">
                  <div className={`p-2 rounded-lg mr-3 ${
                    achievement.earned 
                      ? 'bg-green-100 dark:bg-green-800' 
                      : 'bg-gray-100 dark:bg-zinc-700'
                  }`}>
                    <achievement.icon className={`h-5 w-5 ${
                      achievement.earned 
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-gray-400 dark:text-zinc-500'
                    }`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {achievement.title}
                  </h3>
                  {achievement.earned && (
                    <Award className="h-4 w-4 text-green-600 dark:text-green-400 ml-auto" />
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-zinc-400">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-700 p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Rychlé akce
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              to="/tasks/math"
              className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
            >
              <Play className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
              <span className="font-medium text-blue-900 dark:text-blue-100">
                Pokračovat v matematice
              </span>
            </Link>
            <Link 
              to="/tasks/geometry"
              className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
            >
              <Play className="h-5 w-5 text-green-600 dark:text-green-400 mr-3" />
              <span className="font-medium text-green-900 dark:text-green-100">
                Pokračovat v geometrii
              </span>
            </Link>
            <Link 
              to="/tasks/physics"
              className="flex items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
            >
              <Play className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-3" />
              <span className="font-medium text-purple-900 dark:text-purple-100">
                Pokračovat ve fyzice
              </span>
            </Link>
            <Link 
              to="/dashboard"
              className="flex items-center p-4 bg-gray-50 dark:bg-zinc-700 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-600 transition-colors"
            >
              <TrendingUp className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-3" />
              <span className="font-medium text-gray-900 dark:text-gray-100">
                Zobrazit statistiky
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;