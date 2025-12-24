import React from "react";
import { useNavigate } from "react-router-dom";
import { Shapes, Ruler, ArrowRight, Pencil, Triangle } from "lucide-react";

const GradeCard = ({
  title,
  description,
  icon: Icon,
  grades,
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
            {grades}
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
          Pokračovat <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

const GeometrieZSSelection = () => {
  const navigate = useNavigate();

  const stages = [
    {
      id: "1-stupen",
      title: "1. Stupeň ZŠ",
      grades: "1. - 5. třída",
      description:
        "První setkání s geometrií. Poznáme základní tvary, naučíme se rýsovat úsečky a měřit délky.",
      icon: Shapes,
      color: "green",
      topics: [
        "Základní rovinné útvary",
        "Bod, úsečka, přímka",
        "Měření délky",
        "Jednoduchá tělesa",
      ],
      path: "/predmety/geometrie/zs/1-stupen",
    },
    {
      id: "2-stupen",
      title: "2. Stupeň ZŠ",
      grades: "6. - 9. třída",
      description:
        "Pokročilejší geometrie. Úhly, trojúhelníky, kružnice. Výpočty obvodů, obsahů a objemů.",
      icon: Ruler,
      color: "blue",
      topics: [
        "Úhly a jejich měření",
        "Trojúhelníky a čtyřúhelníky",
        "Kružnice a kruh",
        "Povrchy a objemy těles",
      ],
      path: "/predmety/geometrie/zs/2-stupen",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Geometrie na základní škole
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Vyberte si stupeň, který odpovídá vaší třídě.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stages.map((stage) => (
            <GradeCard
              key={stage.id}
              {...stage}
              onClick={() => navigate(stage.path)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeometrieZSSelection;
