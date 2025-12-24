import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MatematikaButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative z-10 inline-block mt-24">
      {/* Extended corner lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left extended lines */}
        <div
          className={`absolute top-0 left-0 w-24 h-0.5 bg-gradient-to-r from-blue-500 dark:from-cyan-500 to-transparent transition-all duration-500 ${
            isHovered ? "w-40" : ""
          }`}
        ></div>
        <div
          className={`absolute top-0 left-0 w-0.5 h-24 bg-gradient-to-b from-blue-500 dark:from-cyan-500 to-transparent transition-all duration-500 ${
            isHovered ? "h-40" : ""
          }`}
        ></div>
        <div
          className={`absolute -top-8 -left-8 w-20 h-0.5 bg-gradient-to-r from-blue-400/50 dark:from-cyan-400/50 to-transparent transition-all duration-700 ${
            isHovered ? "w-32" : ""
          }`}
        ></div>
        <div
          className={`absolute -top-8 -left-8 w-0.5 h-20 bg-gradient-to-b from-blue-400/50 dark:from-cyan-400/50 to-transparent transition-all duration-700 ${
            isHovered ? "h-32" : ""
          }`}
        ></div>

        {/* Top right extended lines */}
        <div
          className={`absolute top-0 right-0 w-24 h-0.5 bg-gradient-to-l from-blue-500 dark:from-cyan-500 to-transparent transition-all duration-500 ${
            isHovered ? "w-40" : ""
          }`}
        ></div>
        <div
          className={`absolute top-0 right-0 w-0.5 h-24 bg-gradient-to-b from-blue-500 dark:from-cyan-500 to-transparent transition-all duration-500 ${
            isHovered ? "h-40" : ""
          }`}
        ></div>
        <div
          className={`absolute -top-8 -right-8 w-20 h-0.5 bg-gradient-to-l from-blue-400/50 dark:from-cyan-400/50 to-transparent transition-all duration-700 ${
            isHovered ? "w-32" : ""
          }`}
        ></div>
        <div
          className={`absolute -top-8 -right-8 w-0.5 h-20 bg-gradient-to-b from-blue-400/50 dark:from-cyan-400/50 to-transparent transition-all duration-700 ${
            isHovered ? "h-32" : ""
          }`}
        ></div>

        {/* Bottom left extended lines */}
        <div
          className={`absolute bottom-0 left-0 w-24 h-0.5 bg-gradient-to-r from-blue-500 dark:from-cyan-500 to-transparent transition-all duration-500 ${
            isHovered ? "w-40" : ""
          }`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-0.5 h-24 bg-gradient-to-t from-blue-500 dark:from-cyan-500 to-transparent transition-all duration-500 ${
            isHovered ? "h-40" : ""
          }`}
        ></div>
        <div
          className={`absolute -bottom-8 -left-8 w-20 h-0.5 bg-gradient-to-r from-blue-400/50 dark:from-cyan-400/50 to-transparent transition-all duration-700 ${
            isHovered ? "w-32" : ""
          }`}
        ></div>
        <div
          className={`absolute -bottom-8 -left-8 w-0.5 h-20 bg-gradient-to-t from-blue-400/50 dark:from-cyan-400/50 to-transparent transition-all duration-700 ${
            isHovered ? "h-32" : ""
          }`}
        ></div>

        {/* Bottom right extended lines */}
        <div
          className={`absolute bottom-0 right-0 w-24 h-0.5 bg-gradient-to-l from-blue-500 dark:from-cyan-500 to-transparent transition-all duration-500 ${
            isHovered ? "w-40" : ""
          }`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 w-0.5 h-24 bg-gradient-to-t from-blue-500 dark:from-cyan-500 to-transparent transition-all duration-500 ${
            isHovered ? "h-40" : ""
          }`}
        ></div>
        <div
          className={`absolute -bottom-8 -right-8 w-20 h-0.5 bg-gradient-to-l from-blue-400/50 dark:from-cyan-400/50 to-transparent transition-all duration-700 ${
            isHovered ? "w-32" : ""
          }`}
        ></div>
        <div
          className={`absolute -bottom-8 -right-8 w-0.5 h-20 bg-gradient-to-t from-blue-400/50 dark:from-cyan-400/50 to-transparent transition-all duration-700 ${
            isHovered ? "h-32" : ""
          }`}
        ></div>
      </div>

      {/* Main Button */}
      <button
        className="relative group px-16 py-8 bg-transparent overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate("/predmety/matematika/levels")}
      >
        {/* Button Background with Glassmorphism */}
        <div className="absolute inset-0 bg-white/5 dark:bg-black/40 backdrop-blur-sm border border-blue-500/30 dark:border-cyan-500/30 transition-all duration-500 group-hover:bg-blue-500/10 dark:group-hover:bg-cyan-500/10"></div>

        {/* Animated Gradient Border */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 animate-gradient-x"></div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-center gap-4">
          <span className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-400 tracking-wider uppercase group-hover:scale-105 transition-transform duration-500">
            Pustit se do toho
          </span>
          <span className="text-sm md:text-base text-gray-600 dark:text-gray-400 tracking-[0.2em] group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors duration-300">
            ZAČNĚTE SVOU CESTU
          </span>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-blue-500 dark:border-cyan-500"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-blue-500 dark:border-cyan-500"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-blue-500 dark:border-cyan-500"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-blue-500 dark:border-cyan-500"></div>
      </button>
    </div>
  );
};

export default MatematikaButton;
