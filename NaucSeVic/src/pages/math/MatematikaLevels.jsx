import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Calculator,
  Sigma,
  Infinity as InfinityIcon,
  ArrowRight,
  School,
  GraduationCap,
  BookOpen,
} from "lucide-react";

const LevelCard = ({
  title,
  description,
  icon: Icon,
  level,
  topics,
  color,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20"
    >
      <div
        className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300 text-${color}-500`}
      >
        <Icon size={120} />
      </div>

      <div className="relative z-10">
        <div
          className={`w-14 h-14 rounded-xl bg-${color}-100 dark:bg-${color}-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon
            className={`w-7 h-7 text-${color}-600 dark:text-${color}-400`}
          />
        </div>

        <div className="flex items-center gap-3 mb-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium bg-${color}-100 dark:bg-${color}-900/30 text-${color}-700 dark:text-${color}-300`}
          >
            {level}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          {description}
        </p>

        <div className="space-y-3 mb-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
            >
              <div className={`w-1.5 h-1.5 rounded-full bg-${color}-500`} />
              {topic}
            </div>
          ))}
        </div>

        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
          Začít studovat <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

const MatematikaLevels = () => {
  const navigate = useNavigate();

  const levels = [
    {
      id: "zakladni",
      title: "Základní škola",
      level: "Začátečník",
      description:
        "Pevné základy pro každodenní život. Naučte se počítat s jistotou a logicky uvažovat.",
      icon: School,
      color: "green",
      topics: [
        "Aritmetika a čísla",
        "Základy geometrie",
        "Zlomky a procenta",
        "Jednoduché rovnice",
      ],
      path: "/predmety/matematika/zs",
    },
    {
      id: "stredni",
      title: "Střední škola",
      level: "Pokročilý",
      description:
        "Příprava na maturitu a vysokou školu. Pronikněte do hloubky funkcí a komplexních čísel.",
      icon: Calculator,
      color: "blue",
      topics: [
        "Algebraické výrazy",
        "Funkce a grafy",
        "Goniometrie",
        "Posloupnosti a řady",
      ],
      path: "/predmety/matematika/ss",
    },
    {
      id: "vysoka",
      title: "Vysoká škola",
      level: "Expert",
      description:
        "Matematika pro vědu a techniku. Osvojte si nástroje pro řešení složitých inženýrských problémů.",
      icon: GraduationCap,
      color: "purple",
      topics: [
        "Matematická analýza",
        "Lineární algebra",
        "Diferenciální rovnice",
        "Statistika a pravděpodobnost",
      ],
      path: "/predmety/matematika/vs",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Vyberte si svou úroveň
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ať už začínáte od nuly nebo se chcete zdokonalit v pokročilé
            matematice, máme pro vás připravený kurz na míru.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level) => (
            <LevelCard
              key={level.id}
              {...level}
              onClick={() => navigate(level.path)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatematikaLevels;
