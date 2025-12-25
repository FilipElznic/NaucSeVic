import React from "react";
import { useNavigate } from "react-router-dom";
import { Blocks, Calculator, ArrowRight, Shapes, Ruler } from "lucide-react";

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
      className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-green-500 dark:hover:border-green-500 transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-2xl hover:shadow-green-500/20"
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

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-500 transition-colors">
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

        <div className="flex items-center text-green-600 dark:text-green-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
          Pokračovat <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

const MatematikaZSSelection = () => {
  const navigate = useNavigate();

  const levels = [
    {
      id: "1-stupen",
      title: "1. Stupeň ZŠ",
      level: "1. - 5. třída",
      description:
        "Zábavná matematika pro nejmenší. Naučíme se počítat, poznávat tvary a řešit první slovní úlohy.",
      icon: Blocks,
      color: "orange",
      topics: [
        "Sčítání a odčítání",
        "Malá násobilka",
        "Geometrické tvary",
        "První zlomky",
      ],
      path: "/predmety/matematika/zs/1-stupen",
    },
    {
      id: "2-stupen",
      title: "2. Stupeň ZŠ",
      level: "6. - 9. třída",
      description:
        "Příprava na střední školu. Procenta, rovnice, geometrické konstrukce a práce s daty.",
      icon: Ruler,
      color: "teal",
      topics: [
        "Zlomky a procenta",
        "Lineární rovnice",
        "Pythagorova věta",
        "Obsahy a objemy",
      ],
      path: "/predmety/matematika/zs/2-stupen",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Základní škola
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Vyberte si stupeň, který odpovídá vaší třídě.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

export default MatematikaZSSelection;
