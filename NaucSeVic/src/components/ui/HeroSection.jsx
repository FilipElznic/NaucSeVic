import React from "react";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg">
              <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Nová generace vzdělávání
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Pro všechny, kdo chtějí
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              víc než učebnici
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-8">
            Objevte nový způsob, jak se učit – rychleji, chytřeji a zábavněji,
            ať už doma, ve škole nebo na cestách.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Začít objevovat
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 dark:border-gray-600 text-lg font-medium rounded-xl text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Zjistit více
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                10K+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Aktivních studentů
              </div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-2">
                <BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                500+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Kurzů
              </div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                95%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Míra úspěšnosti
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
