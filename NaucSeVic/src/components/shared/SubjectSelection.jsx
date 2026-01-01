import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LevelCard = ({
  title,
  description,
  icon: Icon,
  level,
  topics,
  color,
  path,
  hoverColor,
}) => {
  const navigate = useNavigate();

  // Map color names to specific tailwind classes to ensure they are included in the build
  const colorMap = {
    green: {
      text: "text-green-600 dark:text-green-400",
      bg: "bg-green-100 dark:bg-green-900/30",
      dot: "bg-green-500",
      icon: "text-green-500",
    },
    blue: {
      text: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-100 dark:bg-blue-900/30",
      dot: "bg-blue-500",
      icon: "text-blue-500",
    },
    purple: {
      text: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-100 dark:bg-purple-900/30",
      dot: "bg-purple-500",
      icon: "text-purple-500",
    },
    pink: {
      text: "text-pink-600 dark:text-pink-400",
      bg: "bg-pink-100 dark:bg-pink-900/30",
      dot: "bg-pink-500",
      icon: "text-pink-500",
    },
    orange: {
      text: "text-orange-600 dark:text-orange-400",
      bg: "bg-orange-100 dark:bg-orange-900/30",
      dot: "bg-orange-500",
      icon: "text-orange-500",
    },
    teal: {
      text: "text-teal-600 dark:text-teal-400",
      bg: "bg-teal-100 dark:bg-teal-900/30",
      dot: "bg-teal-500",
      icon: "text-teal-500",
    },
  };

  const theme = colorMap[color] || colorMap.blue;

  // Dynamic hover border and shadow classes based on the subject theme color passed as prop
  // We'll use inline styles or specific classes if needed, but for now let's try to use the passed hoverColor
  // or default to the card color.

  // Actually, the hover color was specific to the subject (pink for geometry, purple for physics, blue for math)
  // regardless of the card color.
  // So we should pass the subject theme color.

  return (
    <div
      onClick={() => navigate(path)}
      className={`group relative p-8 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 ${hoverColor} transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-2xl`}
    >
      <div
        className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${theme.icon}`}
      >
        <Icon size={120} />
      </div>

      <div className="relative z-10">
        <div
          className={`w-14 h-14 rounded-xl ${theme.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className={`w-7 h-7 ${theme.text}`} />
        </div>

        <div className="flex items-center gap-3 mb-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${theme.bg} ${theme.text}`}
          >
            {level}
          </span>
        </div>

        <h3
          className={`text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:${
            theme.text.split(" ")[0]
          } transition-colors`}
        >
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
              <div className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
              {topic}
            </div>
          ))}
        </div>

        <div
          className={`flex items-center ${theme.text} font-medium group-hover:translate-x-2 transition-transform duration-300`}
        >
          Začít studovat <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

const SubjectSelection = ({
  title,
  description,
  levels,
  BackgroundComponent,
  subjectTheme = "blue", // "blue", "pink", "purple"
}) => {
  const getHoverClass = () => {
    switch (subjectTheme) {
      case "pink":
        return "hover:border-pink-500 dark:hover:border-pink-500 hover:shadow-pink-500/20";
      case "purple":
        return "hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-purple-500/20";
      case "blue":
        return "hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-blue-500/20";
      default:
        return "hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-blue-500/20";
    }
  };

  return (
    <BackgroundComponent>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg">
              {title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-white/80 max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-${
              levels.length > 3 ? "2 lg:grid-cols-4" : "3"
            } gap-8`}
          >
            {levels.map((level) => (
              <LevelCard
                key={level.id}
                {...level}
                hoverColor={getHoverClass()}
              />
            ))}
          </div>
        </div>
      </div>
    </BackgroundComponent>
  );
};

export default SubjectSelection;
