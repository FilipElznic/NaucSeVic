import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Triangle,
  Box,
  Compass,
  ArrowRight,
  School,
  GraduationCap,
  Shapes,
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
      className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-pink-500 dark:hover:border-pink-500 transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-2xl hover:shadow-pink-500/20"
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

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-pink-500 transition-colors">
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

        <div className="flex items-center text-pink-600 dark:text-pink-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
          Začít studovat <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

const GeometrieLevels = () => {
  const navigate = useNavigate();

  const levels = [
    {
      id: "zakladni",
      title: "Základní škola",
      level: "Začátečník",
      description:
        "Poznáváme tvary kolem nás. Čtverec, trojúhelník, kruh. Měříme, rýsujeme a počítáme obvody a obsahy.",
      icon: School,
      color: "green",
      topics: [
        "Základní útvary",
        "Měření a rýsování",
        "Obvody a obsahy",
        "Tělesa a jejich sítě",
      ],
      path: "/predmety/geometrie/zs",
    },
    {
      id: "stredni",
      title: "Střední škola",
      level: "Pokročilý",
      description:
        "Analytická geometrie a trigonometrie. Vektory, kuželosečky a prostorová představivost.",
      icon: Compass,
      color: "blue",
      topics: [
        "Planimetrie a stereometrie",
        "Analytická geometrie",
        "Vektory",
        "Kuželosečky",
      ],
      path: "/predmety/geometrie/ss",
    },
    {
      id: "vysoka",
      title: "Vysoká škola",
      level: "Expert",
      description:
        "Diferenciální geometrie a topologie. Křivky, plochy a vícerozměrné prostory.",
      icon: Box,
      color: "purple",
      topics: [
        "Lineární algebra a geometrie",
        "Diferenciální geometrie",
        "Topologie",
        "Neeukleidovská geometrie",
      ],
      path: "/predmety/geometrie/vs",
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
            Od jednoduchých tvarů až po složité prostorové struktury. Objevte
            krásu geometrie na každé úrovni.
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

export default GeometrieLevels;
