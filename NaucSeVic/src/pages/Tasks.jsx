import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Triangle,
  BookOpen,
  Play,
  ChevronRight,
  Layers,
  Compass,
  Square,
  Circle,
  Zap,
  Atom,
  Activity,
  Eye,
} from "lucide-react";
import { toast } from "react-toastify";

const Tasks = () => {
  const { subject } = useParams();
  const [selectedTopic, setSelectedTopic] = useState(null);

  const geometryTopics = [
    {
      id: "planimetry",
      title: "Planimetrie",
      description: "Studium rovinných útvarů",
      icon: Square,
      color: "from-blue-500 to-cyan-500",
      subtopics: [
        "Trojúhelníky",
        "Čtyřúhelníky",
        "Mnohoúhelníky",
        "Kružnice a kruhy",
        "Trigonometrie",
      ],
    },
    {
      id: "stereometry",
      title: "Stereometrie",
      description: "Studium prostorových těles",
      icon: Layers,
      color: "from-purple-500 to-indigo-500",
      subtopics: ["Hranoly", "Jehlany", "Koule", "Válce", "Kužely"],
    },
    {
      id: "analytical",
      title: "Analytická geometrie",
      description: "Geometrie pomocí souřadnic",
      icon: Compass,
      color: "from-emerald-500 to-teal-500",
      subtopics: [
        "Přímky v rovině",
        "Kuželosečky",
        "Transformace",
        "Vektory",
        "Rovnice křivek",
      ],
    },
    {
      id: "constructions",
      title: "Konstrukční úlohy",
      description: "Geometrické konstrukce",
      icon: Circle,
      color: "from-orange-500 to-red-500",
      subtopics: [
        "Základní konstrukce",
        "Konstrukce trojúhelníků",
        "Konstrukce čtyřúhelníků",
        "Konstrukce kružnic",
        "Složené konstrukce",
      ],
    },
  ];

  const physicsTopics = [
    {
      id: "mechanics",
      title: "Mechanika",
      description: "Pohyb, síly a energie",
      icon: Activity,
      color: "from-red-500 to-orange-500",
      subtopics: [
        "Kinematika",
        "Dynamika",
        "Statika",
        "Práce a energie",
        "Impulz a hybnost",
      ],
    },
    {
      id: "electricity",
      title: "Elektřina",
      description: "Elektrické jevy a obvody",
      icon: Zap,
      color: "from-yellow-500 to-amber-500",
      subtopics: [
        "Elektrický proud",
        "Ohmův zákon",
        "Elektrické obvody",
        "Kondenzátory",
        "Elektromagnetismus",
      ],
    },
    {
      id: "thermodynamics",
      title: "Termodynamika",
      description: "Teplo a teplota",
      icon: Atom,
      color: "from-red-500 to-pink-500",
      subtopics: [
        "Teplota a teplo",
        "Tepelná výměna",
        "Změny skupenství",
        "Plyny",
        "Termodynamické zákony",
      ],
    },
    {
      id: "optics",
      title: "Optika",
      description: "Světlo a vlnění",
      icon: Eye,
      color: "from-indigo-500 to-purple-500",
      subtopics: [
        "Šíření světla",
        "Odraz a lom",
        "Čočky a zrcadla",
        "Interferometrie",
        "Vlnové vlastnosti světla",
      ],
    },
  ];

  // Get current topics based on subject
  const getCurrentTopics = () => {
    switch (subject) {
      case "geometrie":
        return geometryTopics;
      case "fyzika":
        return physicsTopics;
      default:
        return geometryTopics;
    }
  };

  const getSubjectInfo = () => {
    switch (subject) {
      case "geometrie":
        return {
          title: "Geometrie",
          description:
            "Objevte krásu geometrických tvarů a vztahů. Vyberte si oblast, kterou chcete studovat.",
          icon: Triangle,
        };
      case "fyzika":
        return {
          title: "Fyzika",
          description:
            "Prozkoumejte fyzikální zákony a jevy kolem nás. Vyberte si oblast, kterou chcete studovat.",
          icon: Atom,
        };
      default:
        return {
          title: "Geometrie",
          description:
            "Objevte krásu geometrických tvarů a vztahů. Vyberte si oblast, kterou chcete studovat.",
          icon: Triangle,
        };
    }
  };

  const currentTopics = getCurrentTopics();
  const subjectInfo = getSubjectInfo();
  const SubjectIcon = subjectInfo.icon;

  const handleTopicSelect = (topic) => {
    setSelectedTopic(selectedTopic?.id === topic.id ? null : topic);
  };

  const handleSubtopicStart = (subtopic) => {
    toast.success(`Zahajujete studium: ${subtopic}`);
    // Here you would navigate to the actual learning content
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-2xl">
              <SubjectIcon className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {subjectInfo.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {subjectInfo.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentTopics.map((topic) => {
            const IconComponent = topic.icon;
            const isSelected = selectedTopic?.id === topic.id;

            return (
              <div
                key={topic.id}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  isSelected ? "scale-105" : "hover:scale-105"
                }`}
                onClick={() => handleTopicSelect(topic)}
              >
                <div
                  className={`
                  relative p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50
                  ${
                    isSelected
                      ? "ring-2 ring-blue-500 bg-gray-800/80"
                      : "hover:bg-gray-800/70"
                  }
                  transition-all duration-300
                `}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${topic.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${topic.color} rounded-xl mb-4 shadow-lg`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {topic.description}
                  </p>

                  {/* Arrow */}
                  <div
                    className={`flex items-center text-gray-400 group-hover:text-white transition-colors ${
                      isSelected ? "text-blue-400" : ""
                    }`}
                  >
                    <span className="text-sm mr-2">Prozkoumat</span>
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${
                        isSelected
                          ? "translate-x-1"
                          : "group-hover:translate-x-1"
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtopics Panel */}
        {selectedTopic && (
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {selectedTopic.title}
              </h2>
              <p className="text-gray-400">Vyberte konkrétní téma ke studiu</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedTopic.subtopics.map((subtopic, index) => (
                <button
                  key={index}
                  onClick={() => handleSubtopicStart(subtopic)}
                  className="group p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{subtopic}</span>
                    <Play className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Get Started Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-gray-700/50 p-8">
            <BookOpen className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Připraveni začít?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              {subject === "fyzika"
                ? "Fyzika je všude kolem nás. Začněte svou cestu objevování přírodních zákonů a jevů."
                : "Geometrie je všude kolem nás. Začněte svou cestu objevování tvarů, vzorců a prostorových vztahů."}
            </p>
            {!selectedTopic && (
              <p className="text-blue-400 text-sm">
                👆 Vyberte téma výše pro začátek
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
