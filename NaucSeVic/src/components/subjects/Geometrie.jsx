import React from "react";
import {
  Triangle,
  BookOpen,
  Layers,
  Shapes,
  Compass,
  Ruler,
  Sparkles,
  GraduationCap,
  TrendingUp,
  Award,
} from "lucide-react";

const Geometrie = () => {
  const stats = [
    {
      icon: Shapes,
      value: "24",
      label: "Geometrických těles",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BookOpen,
      value: "12",
      label: "Výukových bloků",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Compass,
      value: "45",
      label: "Konstrukčních úloh",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Sparkles,
      value: "8",
      label: "Interaktivních modelů",
      color: "from-orange-500 to-red-500",
    },
  ];

  const learningBlocks = [
    {
      title: "Planimetrie",
      description: "Studium rovinných útvarů a jejich vlastností",
      topics: ["Trojúhelníky", "Čtyřúhelníky", "Kružnice", "Mnohoúhelníky"],
      icon: Triangle,
      color: "from-blue-500 to-cyan-500",
      count: "18 lekcí",
    },
    {
      title: "Stereometrie",
      description: "Prostorové útvary a jejich objemy",
      topics: ["Hranoly", "Jehlany", "Koule", "Rotační tělesa"],
      icon: Layers,
      color: "from-purple-500 to-indigo-500",
      count: "15 lekcí",
    },
    {
      title: "Analytická geometrie",
      description: "Geometrie pomocí souřadnic a vektorů",
      topics: ["Přímky", "Kuželosečky", "Vektory", "Transformace"],
      icon: Compass,
      color: "from-green-500 to-emerald-500",
      count: "12 lekcí",
    },
    {
      title: "Konstrukční úlohy",
      description: "Praktické geometrické konstrukce",
      topics: [
        "Základní konstrukce",
        "Trojúhelníky",
        "Kružnice",
        "Složité úlohy",
      ],
      icon: Ruler,
      color: "from-orange-500 to-red-500",
      count: "20 lekcí",
    },
  ];

  const features = [
    {
      icon: GraduationCap,
      title: "Postupné učení",
      description: "Od základů po pokročilé techniky",
    },
    {
      icon: Shapes,
      title: "Interaktivní modely",
      description: "3D vizualizace geometrických těles",
    },
    {
      icon: TrendingUp,
      title: "Sledování pokroku",
      description: "Vaše úspěšnost a statistiky",
    },
    {
      icon: Award,
      title: "Certifikáty",
      description: "Získejte odměny za dokončení",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(52,211,153,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zinc-900/50 via-zinc-950/80 to-zinc-900/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl mb-6 shadow-2xl shadow-green-500/20">
              <Triangle className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Geometrie
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-8">
              Objevte krásu tvarů, prostoru a jejich vztahů. Naučte se
              geometrické zákony od základů po pokročilé techniky.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/60 rounded-xl p-6 hover:bg-zinc-800/80 transition-all duration-300 hover:scale-105 hover:border-zinc-600/60"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg mb-4`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Learning Blocks Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Studijní oblasti
          </h2>
          <p className="text-xl text-zinc-400">
            Prozkoumejte různé oblasti geometrie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {learningBlocks.map((block, index) => {
            const IconComponent = block.icon;
            return (
              <div
                key={index}
                className="group bg-zinc-800/40 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8 hover:bg-zinc-800/60 hover:border-zinc-600/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${block.color} rounded-xl shadow-lg`}
                  >
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-sm text-zinc-400 bg-zinc-700/60 px-3 py-1 rounded-full">
                    {block.count}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {block.title}
                </h3>
                <p className="text-zinc-400 mb-6">{block.description}</p>

                <div className="flex flex-wrap gap-2">
                  {block.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="text-xs bg-zinc-700/40 border border-zinc-600/40 text-zinc-300 px-3 py-1 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Začít studovat</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-zinc-800/60 to-zinc-800/40 backdrop-blur-sm border border-zinc-700/60 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">
              Proč studovat s námi?
            </h2>
            <p className="text-zinc-400">Moderní přístup k výuce geometrie</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl mb-4">
                    <IconComponent className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-cyan-500/10 border border-green-500/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Připraveni začít?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Vydejte se na cestu poznání geometrie a objevte krásu
              matematických struktur kolem nás.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transform hover:scale-105 transition-all duration-300">
              Začít první lekci
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geometrie;
