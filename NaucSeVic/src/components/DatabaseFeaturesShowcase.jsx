import React from "react";
import { Link } from "react-router-dom";
import { Shapes, Atom, Activity, BarChart3, ArrowRight } from "lucide-react";

const DatabaseFeaturesShowcase = () => {
  const features = [
    {
      title: "Geometry Explorer",
      description:
        "Prozkoumejte geometrické tvary, vypočítejte plochy a obvody pomocí interaktivních kalkulaček.",
      icon: Shapes,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900",
      link: "/geometry-explorer",
      features: [
        "Interaktivní kalkulačky",
        "Geometrické vzorce",
        "Výpočty ploch a obvodů",
      ],
    },
    {
      title: "Physics Lab",
      description:
        "Experimentujte s fyzikálními zákonitostmi a proveďte složité fyzikální výpočty.",
      icon: Atom,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900",
      link: "/physics-lab",
      features: [
        "Fyzikální experimenty",
        "Výpočty mechaniky",
        "Elektrická fyzika",
      ],
    },
    {
      title: "Activity Tracker",
      description:
        "Sledujte svou denní aktivitu, série úkolů a pokrok v reálném čase.",
      icon: Activity,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-900",
      link: "/activity-tracker",
      features: ["Denní aktivity", "Sledování sérií", "Grafy pokroku"],
    },
    {
      title: "Progress Stats",
      description:
        "Detailní statistiky vašeho pokroku, úspěchů a celkového výkonu.",
      icon: BarChart3,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-100 dark:bg-orange-900",
      link: "/progress-stats",
      features: ["Podrobné statistiky", "Analýza výkonu", "Pokrok v úspěších"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Pokročilé nástroje pro učení
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Objevte naše nové interaktivní nástroje navržené pro hlubší
            porozumění matematice, fyzice a sledování vašeho pokroku.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
              >
                <div className="flex items-start mb-6">
                  <div className={`p-3 rounded-lg ${feature.bgColor} mr-4`}>
                    <IconComponent className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Feature List */}
                <ul className="space-y-2 mb-6">
                  {feature.features.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${feature.color.replace(
                          "text-",
                          "bg-"
                        )} mr-3`}
                      ></div>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  to={feature.link}
                  className={`inline-flex items-center px-4 py-2 rounded-lg ${feature.color} hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group-hover:translate-x-1 transform duration-200`}
                >
                  Vyzkoušet
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Připraveni na pokročilé učení?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Všechny tyto nástroje jsou dostupné zdarma po přihlášení. Začněte
            prozkoumávat a zlepšovat své dovednosti ještě dnes!
          </p>
          <Link
            to="/registrace"
            className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 duration-200"
          >
            Začít zdarma
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DatabaseFeaturesShowcase;
