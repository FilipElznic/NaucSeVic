import React from "react";
import { Brain, Clock, Target, Zap, Users, BookOpen } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Inteligentní učení",
      description:
        "AI-powered personalizace obsahu podle vašich potřeb a tempa učení.",
    },
    {
      icon: Clock,
      title: "Flexibilní čas",
      description: "Učte se kdykoliv a kdekoliv podle vlastního rozvrhu.",
    },
    {
      icon: Target,
      title: "Cílené výsledky",
      description:
        "Sledujte svůj pokrok a dosahujte stanovených cílů efektivně.",
    },
    {
      icon: Zap,
      title: "Rychlý pokrok",
      description: "Inovativní metody pro rychlejší a efektivnější učení.",
    },
    {
      icon: Users,
      title: "Komunita",
      description: "Připojte se k tisícům studentů a učte se společně.",
    },
    {
      icon: BookOpen,
      title: "Bohatý obsah",
      description:
        "Stovky kurzů a tisíce hodin kvalitního vzdělávacího materiálu.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Proč si vybrat naši platformu?
          </h2>
          <p className="text-lg text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Kombinujeme nejnovější technologie s osvědčenými vzdělávacími
            metodami pro jedinečný učební zážitek.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 dark:bg-zinc-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-zinc-700 transition-all duration-300 shadow-sm hover:shadow-xl border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
