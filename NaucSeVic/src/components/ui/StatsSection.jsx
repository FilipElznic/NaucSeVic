import React from "react";
import {
  TrendingUp,
  Users,
  BookOpen,
  Trophy,
  Target,
  Clock,
} from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "15,000+",
      label: "Aktivních studentů",
      description: "Každý měsíc",
    },
    {
      icon: BookOpen,
      number: "800+",
      label: "Kurzů a lekcí",
      description: "Ve všech oblastech",
    },
    {
      icon: Trophy,
      number: "98%",
      label: "Míra úspěšnosti",
      description: "Dokončených kurzů",
    },
    {
      icon: Target,
      number: "50+",
      label: "Expertních lektorů",
      description: "Z praxe",
    },
    {
      icon: Clock,
      number: "10,000+",
      label: "hodin obsahu",
      description: "Připraveno k učení",
    },
    {
      icon: TrendingUp,
      number: "4.9/5",
      label: "Průměrné hodnocení",
      description: "Od našich studentů",
    },
  ];

  return (
    <section className="py-24 bg-gray-100 dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Čísla, která mluví za nás
          </h2>
          <p className="text-lg text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Naše výsledky a spokojenost studentů jsou důkazem kvality našeho
            přístupu k vzdělávání.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-zinc-700 text-center group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Number */}
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-lg font-semibold text-gray-700 dark:text-zinc-300 mb-2">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-sm text-gray-500 dark:text-zinc-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-zinc-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Staňte se součástí naší komunity
            </h3>
            <p className="text-gray-600 dark:text-zinc-400 mb-6">
              Každý den se k nám připojují noví studenti. Budete další, kdo
              dosáhne svých vzdělávacích cílů?
            </p>
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Připojit se zdarma
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
