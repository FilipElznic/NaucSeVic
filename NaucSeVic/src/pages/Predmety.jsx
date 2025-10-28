import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calculator,
  Atom,
  Triangle,
  Search,
  BookOpen,
  Brain,
  Award,
  MessagesSquare,
  ChevronRight,
  Users,
  Clock,
  Sparkles,
  GraduationCap,
  Star,
  TrendingUp,
  Zap,
  Target,
  CheckCircle2,
} from "lucide-react";
import SectionSeparator from "../components/ui/SectionSeparator";

const Predmety = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const subjects = [
    {
      id: "geometrie",
      title: "Geometrie",
      description:
        "Objevuj fascinující svět tvarů, prostorů a konstrukcí s praktickými příklady",
      icon: Triangle,
      color: "#8A2BE2",
      tags: ["3D vizualizace", "12 kapitol"],
      chapters: 12,
    },
    {
      id: "fyzika",
      title: "Fyzika",
      description:
        "Pochop základní zákony vesmíru skrze interaktivní experimenty a simulace",
      icon: Atom,
      color: "#8A2BE2",
      tags: ["Simulace", "18 kapitol"],
      chapters: 18,
    },
  ];

  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Hero Section */}
      <div className="relative dark:bg-zinc-950">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-[#8A2BE2] to-gray-900 dark:from-white dark:via-[#9D4EFF] dark:to-white bg-clip-text text-transparent mb-6">
              Vyberte si, kde se chcete zlepšit
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Každý předmět obsahuje jasná vysvětlení a interaktivního tutora
            </p>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-[#8A2BE2]/10 to-purple-500/10 text-[#8A2BE2] dark:from-[#9D4EFF]/20 dark:to-purple-500/20 dark:text-[#9D4EFF] mb-6 border border-[#8A2BE2]/20">
              <Sparkles className="h-4 w-4 mr-2" />
              Nové interaktivní kurzy
            </span>

            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Najděte svůj předmět..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-5 text-lg rounded-2xl border-2 border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:border-[#8A2BE2] dark:focus:border-[#9D4EFF] focus:ring-4 focus:ring-[#8A2BE2]/10 dark:focus:ring-[#9D4EFF]/10 outline-none transition-all shadow-lg hover:shadow-xl"
              />
              <Search className="absolute right-6 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 dark:text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      <SectionSeparator variant="wave" rotate={true} />

      {/* Subject Categories */}
      <div className="py-20 relative bg-white dark:bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between mb-12 w-full">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Všechny předměty
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <TrendingUp className="h-4 w-4 text-[#8A2BE2] dark:text-[#9D4EFF]" />
              <span>Nejoblíbenější</span>
            </div>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
            {filteredSubjects.map((subject) => {
              const IconComponent = subject.icon;

              return (
                <Link
                  key={subject.id}
                  to={`/predmety/${subject.id}`}
                  className="group"
                >
                  <div className="relative bg-white dark:bg-zinc-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-zinc-700 hover:border-[#8A2BE2]/30 dark:hover:border-[#9D4EFF]/30 overflow-hidden transform hover:-translate-y-2">
                    {/* Decorative gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8A2BE2]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>

                    {/* Icon */}
                    <div className="mb-6 relative">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8A2BE2]/10 to-purple-500/10 dark:from-[#9D4EFF]/10 dark:to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-10 w-10 text-[#8A2BE2] dark:text-[#9D4EFF]" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                      {subject.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                      {subject.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {subject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-gradient-to-r from-[#8A2BE2]/10 to-purple-500/10 dark:from-[#9D4EFF]/10 dark:to-purple-500/10 text-[#8A2BE2] dark:text-[#9D4EFF] text-sm font-medium rounded-full border border-[#8A2BE2]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-6 mb-6 text-sm text-gray-600 dark:text-gray-400 pb-6 border-b border-gray-100 dark:border-zinc-700">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-[#8A2BE2] dark:text-[#9D4EFF]" />
                        <span className="font-medium">
                          {subject.chapters} kapitol
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-[#8A2BE2] dark:text-[#9D4EFF]" />
                        <span className="font-medium">Quick Start</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full py-4 px-6 bg-gradient-to-r from-[#8A2BE2] to-[#9D4EFF] text-white rounded-xl font-semibold hover:shadow-xl transition-all group-hover:scale-105 flex items-center justify-center gap-2">
                      Začít studovat
                      <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <SectionSeparator
        variant="Diagonal"
        rotate={false}
        className="dark:bg-zinc-900"
      />

      {/* Benefits Section */}
      <div className="py-24 relative dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#8A2BE2] to-gray-900 dark:from-white dark:via-[#9D4EFF] dark:to-white bg-clip-text text-transparent mb-6">
              Proč studovat s NaučSeVíc?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Naše platforma kombinuje moderní technologie s osvědčenými
              metodami učení
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="text-center p-8 rounded-2xl bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 hover:border-[#8A2BE2]/30 dark:hover:border-[#9D4EFF]/30 transition-all hover:shadow-xl">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8A2BE2]/10 to-purple-500/10 dark:from-[#9D4EFF]/10 dark:to-purple-500/10 flex items-center justify-center mx-auto mb-6">
                <Brain className="h-10 w-10 text-[#8A2BE2] dark:text-[#9D4EFF]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Interaktivní AI Tutor
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Personalizované učení s okamžitou zpětnou vazbou a adaptivním
                přístupem
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 hover:border-[#8A2BE2]/30 dark:hover:border-[#9D4EFF]/30 transition-all hover:shadow-xl">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8A2BE2]/10 to-purple-500/10 dark:from-[#9D4EFF]/10 dark:to-purple-500/10 flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-[#8A2BE2] dark:text-[#9D4EFF]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Jasná Vysvětlení
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Komplexní témata vysvětlena jednoduše s praktickými příklady a
                vizualizacemi
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 hover:border-[#8A2BE2]/30 dark:hover:border-[#9D4EFF]/30 transition-all hover:shadow-xl">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8A2BE2]/10 to-purple-500/10 dark:from-[#9D4EFF]/10 dark:to-purple-500/10 flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-[#8A2BE2] dark:text-[#9D4EFF]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Sledování Pokroku
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Detailní statistiky, ocenění a personalizovaný plán studia
              </p>
            </div>
          </div>

          {/* Features List */}
          <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-800 rounded-3xl p-8 border border-gray-100 dark:border-zinc-700 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Co získáte?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Neomezený přístup ke všem kurzům",
                "Personalizované učební plány",
                "Certifikáty po dokončení",
                "Podpora 24/7",
                "Mobilní aplikace",
                "Pokročilé statistiky",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#8A2BE2] dark:text-[#9D4EFF] flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/premium"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8A2BE2] to-[#9D4EFF] text-white text-lg rounded-2xl font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <Star className="h-6 w-6 mr-2" />
              Vyzkoušet Premium zdarma
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Bez platební karty • Zrušit kdykoliv
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Predmety;
