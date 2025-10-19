import React from "react";
import { ArrowRight, BookOpen, Users, Award, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ModernHeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white dark:bg-zinc-950">
      {/* Content */}
      <div className="relative z-20 w-full min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20 dark:border-zinc-700/50">
              <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-zinc-300">
                Nová generace vzdělávání
              </span>
            </div>
          </div>
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Pro všechny, kdo chtějí
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600">
              víc než učebnici
            </span>
          </h1>
          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Objevte nový způsob, jak se učit – rychleji, chytřeji a zábavněji,
            ať už doma, ve škole nebo na cestách.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 backdrop-blur-sm">
              Začít objevovat
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => navigate("/demo")}
              className="group inline-flex items-center justify-center px-8 py-4 border border-white/30 dark:border-zinc-600/50 text-lg font-medium rounded-xl text-gray-800 dark:text-zinc-200 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-zinc-700/90 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <Play className="mr-2 h-5 w-5" />
              Prohlédnout demo
            </button>
          </div>{" "}
          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center bg-white/10 dark:bg-zinc-800/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-zinc-700/30">
              <div className="flex justify-center mb-3">
                <Users className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                15K+
              </div>
              <div className="text-sm text-gray-700 dark:text-zinc-300">
                Aktivních studentů
              </div>
            </div>

            <div className="text-center bg-white/10 dark:bg-zinc-800/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-zinc-700/30">
              <div className="flex justify-center mb-3">
                <BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                800+
              </div>
              <div className="text-sm text-gray-700 dark:text-zinc-300">
                Kurzů
              </div>
            </div>

            <div className="text-center bg-white/10 dark:bg-zinc-800/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-zinc-700/30">
              <div className="flex justify-center mb-3">
                <Award className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                98%
              </div>
              <div className="text-sm text-gray-700 dark:text-zinc-300">
                Míra úspěšnosti
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-zinc-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-zinc-600 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHeroSection;
