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
  const [hoveredSubject, setHoveredSubject] = useState(null);

  const subjects = [
    {
      id: "geometrie",
      title: "Geometrie",
      description:
        "Objevuj fascinující svět tvarů, prostorů a konstrukcí s praktickými příklady",
      icon: Triangle,
      color: "#8A2BE2",
      gradient: "from-purple-500 to-violet-600",
      tags: ["3D vizualizace", "12 kapitol"],
      chapters: 12,
      students: "2.4k+",
      duration: "24 hodin",
    },
    {
      id: "fyzika",
      title: "Fyzika",
      description:
        "Pochop základní zákony vesmíru skrze interaktivní experimenty a simulace",
      icon: Atom,
      color: "#8A2BE2",
      gradient: "from-blue-500 to-purple-600",
      tags: ["Simulace", "18 kapitol"],
      chapters: 18,
      students: "3.2k+",
      duration: "36 hodin",
    },
  ];

  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const features = [
    {
      icon: Brain,
      title: "AI Učitel",
      description: "Personalizované vysvětlení přizpůsobené vašemu tempu učení",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Target,
      title: "Praktické Úkoly",
      description: "Reálné problémy a projekty pro lepší pochopení",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Award,
      title: "Certifikáty",
      description: "Oficiální potvrzení o dokončení kurzu",
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  const benefits = [
    "Neomezený přístup ke všem kurzům",
    "Personalizované učební plány",
    "Offline režim v mobilní aplikaci",
    "Prioritní podpora",
    "Pokročilé analytiky pokroku",
    "Výhradní studijní materiály",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 dark:from-zinc-950 dark:via-purple-950/20 dark:to-zinc-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            {/* Badge */}

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent">
                Učení, které
              </span>
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
                se přizpůsobí vám
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Objevte moderní způsob učení s AI tutorem, interaktivními
              simulacemi a personalizovaným přístupem
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Vyhledat předmět nebo téma..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-5 text-lg rounded-2xl border-2 border-purple-200/50 dark:border-purple-900/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all shadow-xl"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                  <Search className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center justify-center gap-8 mt-12 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  <span className="font-bold text-gray-900 dark:text-white">
                    5.6k+
                  </span>{" "}
                  studentů
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-600 dark:text-gray-400">
                  <span className="font-bold text-gray-900 dark:text-white">
                    4.9
                  </span>{" "}
                  hodnocení
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  <span className="font-bold text-gray-900 dark:text-white">
                    30+
                  </span>{" "}
                  kapitol
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subjects Section */}
      <div className="relative -mt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Dostupné kurzy
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Vyberte si předmět a začněte studovat hned teď
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">Nejoblíbenější</span>
            </div>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {filteredSubjects.map((subject, index) => {
              const IconComponent = subject.icon;
              const isHovered = hoveredSubject === subject.id;

              return (
                <Link
                  key={subject.id}
                  to={`/predmety/${subject.id}`}
                  onMouseEnter={() => setHoveredSubject(subject.id)}
                  onMouseLeave={() => setHoveredSubject(null)}
                  className="group relative"
                >
                  <div
                    className={`relative bg-white dark:bg-zinc-900 rounded-3xl p-8 border-2 transition-all duration-500 overflow-hidden ${
                      isHovered
                        ? "border-purple-500 dark:border-purple-500 shadow-2xl shadow-purple-500/20 scale-105"
                        : "border-gray-200 dark:border-zinc-800 shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {/* Animated Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${subject.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    {/* Floating Orb */}
                    <div
                      className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${
                        subject.gradient
                      } rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-700 ${
                        isHovered ? "scale-150" : ""
                      }`}
                    ></div>

                    {/* Content */}
                    <div className="relative">
                      {/* Header with Icon */}
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className={`p-4 rounded-2xl bg-gradient-to-br ${
                            subject.gradient
                          } shadow-lg transform transition-transform duration-300 ${
                            isHovered ? "scale-110 rotate-6" : ""
                          }`}
                        >
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                        <div className="flex gap-2">
                          {subject.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        {subject.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {subject.description}
                      </p>

                      {/* Stats Row */}
                      <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-200 dark:border-zinc-800">
                        <div className="flex items-center gap-2 text-sm">
                          <BookOpen className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                          <span className="font-semibold text-gray-700 dark:text-gray-300">
                            {subject.chapters} kapitol
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                          <span className="font-semibold text-gray-700 dark:text-gray-300">
                            {subject.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                          <span className="font-semibold text-gray-700 dark:text-gray-300">
                            {subject.students}
                          </span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button
                        className={`w-full py-4 px-6 bg-gradient-to-r ${subject.gradient} text-white rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 group-hover:gap-4`}
                      >
                        Začít studovat
                        <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-zinc-900 rounded-3xl p-8 border-2 border-gray-200 dark:border-zinc-800 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}
                  ></div>

                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Premium CTA Section */}
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

            <div className="relative px-8 py-16 md:px-16">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                  <Star className="h-5 w-5 text-yellow-300" />
                  <span className="text-white font-semibold">
                    Premium přístup
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Odemkněte plný potenciál
                </h2>
                <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
                  Získejte neomezený přístup ke všem funkcím a učte se rychleji
                  s personalizovaným AI asistentem
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-left"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/premium"
                    className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-105 flex items-center gap-2"
                  >
                    <Sparkles className="h-5 w-5" />
                    Vyzkoušet 14 dní zdarma
                  </Link>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold border-2 border-white/30 hover:bg-white/20 transition-all">
                    Zjistit více
                  </button>
                </div>

                <p className="text-purple-200 text-sm mt-6">
                  Bez platební karty • Zrušit kdykoliv • Plná podpora
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predmety;
