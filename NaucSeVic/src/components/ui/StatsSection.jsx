import React from "react";
import {
  TrendingUp,
  Box,
  BookOpen,
  Trophy,
  Target,
  CircleHelp,
} from "lucide-react";
import FloatingOrbs from "./FloatingOrbs";

const StatsSection = () => {
  const stats = [
    {
      icon: Box,
      number: "20+",
      label: "Geometrichých těles",

      color:
        "from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600",
    },
    {
      icon: BookOpen,
      number: "308+",
      label: "Lekcí",

      color:
        "from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600",
    },

    {
      icon: CircleHelp,
      number: "1500+",
      label: "otázek",

      color:
        "from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600",
    },
  ];

  return (
    <section className="py-32 bg-white dark:bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Čísla, která mluví za nás
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Výsledky našich studentů
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 bg-transparent">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div
                  className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg group-hover:scale-110 transition-all duration-300 shadow-lg`}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Number */}
              <div className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-xs text-gray-500 dark:text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <FloatingOrbs count={3} colors={["indigo", "purple", "pink"]} />
    </section>
  );
};

export default StatsSection;
