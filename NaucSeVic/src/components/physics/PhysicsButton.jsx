import { useState } from "react";

const PhysicsButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative z-10 inline-block mt-24">
      {/* Extended corner lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left extended lines */}
        <div
          className={`absolute top-0 left-0 w-24 h-0.5 bg-gradient-to-r from-purple-500 to-transparent transition-all duration-500 ${
            isHovered ? "w-40" : ""
          }`}
        ></div>
        <div
          className={`absolute top-0 left-0 w-0.5 h-24 bg-gradient-to-b from-purple-500 to-transparent transition-all duration-500 ${
            isHovered ? "h-40" : ""
          }`}
        ></div>
        <div
          className={`absolute -top-8 -left-8 w-20 h-0.5 bg-gradient-to-r from-purple-400/50 to-transparent transition-all duration-700 ${
            isHovered ? "w-32" : ""
          }`}
        ></div>
        <div
          className={`absolute -top-8 -left-8 w-0.5 h-20 bg-gradient-to-b from-purple-400/50 to-transparent transition-all duration-700 ${
            isHovered ? "h-32" : ""
          }`}
        ></div>

        {/* Top right extended lines */}
        <div
          className={`absolute top-0 right-0 w-24 h-0.5 bg-gradient-to-l from-purple-500 to-transparent transition-all duration-500 ${
            isHovered ? "w-40" : ""
          }`}
        ></div>
        <div
          className={`absolute top-0 right-0 w-0.5 h-24 bg-gradient-to-b from-purple-500 to-transparent transition-all duration-500 ${
            isHovered ? "h-40" : ""
          }`}
        ></div>
        <div
          className={`absolute -top-8 -right-8 w-20 h-0.5 bg-gradient-to-l from-purple-400/50 to-transparent transition-all duration-700 ${
            isHovered ? "w-32" : ""
          }`}
        ></div>
        <div
          className={`absolute -top-8 -right-8 w-0.5 h-20 bg-gradient-to-b from-purple-400/50 to-transparent transition-all duration-700 ${
            isHovered ? "h-32" : ""
          }`}
        ></div>

        {/* Bottom left extended lines */}
        <div
          className={`absolute bottom-0 left-0 w-24 h-0.5 bg-gradient-to-r from-purple-500 to-transparent transition-all duration-500 ${
            isHovered ? "w-40" : ""
          }`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-0.5 h-24 bg-gradient-to-t from-purple-500 to-transparent transition-all duration-500 ${
            isHovered ? "h-40" : ""
          }`}
        ></div>
        <div
          className={`absolute -bottom-8 -left-8 w-20 h-0.5 bg-gradient-to-r from-purple-400/50 to-transparent transition-all duration-700 ${
            isHovered ? "w-32" : ""
          }`}
        ></div>
        <div
          className={`absolute -bottom-8 -left-8 w-0.5 h-20 bg-gradient-to-t from-purple-400/50 to-transparent transition-all duration-700 ${
            isHovered ? "h-32" : ""
          }`}
        ></div>

        {/* Bottom right extended lines */}
        <div
          className={`absolute bottom-0 right-0 w-24 h-0.5 bg-gradient-to-l from-purple-500 to-transparent transition-all duration-500 ${
            isHovered ? "w-40" : ""
          }`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 w-0.5 h-24 bg-gradient-to-t from-purple-500 to-transparent transition-all duration-500 ${
            isHovered ? "h-40" : ""
          }`}
        ></div>
        <div
          className={`absolute -bottom-8 -right-8 w-20 h-0.5 bg-gradient-to-l from-purple-400/50 to-transparent transition-all duration-700 ${
            isHovered ? "w-32" : ""
          }`}
        ></div>
        <div
          className={`absolute -bottom-8 -right-8 w-0.5 h-20 bg-gradient-to-t from-purple-400/50 to-transparent transition-all duration-700 ${
            isHovered ? "h-32" : ""
          }`}
        ></div>
      </div>

      {/* Background decorative lines - further away */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Large rotating circle */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-purple-500/30 rounded-full transition-all duration-1000 ${
            isHovered
              ? "scale-110 opacity-60 border-purple-400/50 shadow-[0_0_30px_rgba(168,85,247,0.2)]"
              : "scale-100 opacity-20"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-purple-500/20 rounded-full transition-all duration-1000 delay-100 ${
            isHovered
              ? "scale-105 opacity-50 border-purple-400/40"
              : "scale-100 opacity-10"
          }`}
        ></div>

        {/* Diagonal lines */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent rotate-45 transition-all duration-700 ${
            isHovered ? "w-[1000px] opacity-60" : "w-[800px] opacity-20"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent -rotate-45 transition-all duration-700 ${
            isHovered ? "w-[1000px] opacity-60" : "w-[800px] opacity-20"
          }`}
        ></div>
      </div>

      {/* Scanning lines background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 rounded-lg">
        <div
          className={`h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent absolute w-full transition-all duration-1000 ${
            isHovered ? "animate-pulse" : ""
          }`}
          style={{
            animation: isHovered ? "scan 2s linear infinite" : "none",
          }}
        ></div>
      </div>

      {/* Main button */}
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group px-20 py-7 bg-black border-2 border-purple-500/50 
               hover:border-purple-400 transition-all duration-300
               hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]
               active:scale-95 overflow-hidden"
      >
        {/* Inner glow effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/30 to-purple-600/0 
                    transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
        ></div>

        {/* Additional inner border */}
        <div className="absolute inset-2 border border-purple-500/30"></div>

        {/* Button text */}
        <span
          className="relative text-2xl font-bold tracking-widest text-purple-400 
                   group-hover:text-purple-300 transition-colors duration-300
                   uppercase flex items-center gap-4"
        >
          <span
            className={`inline-block transition-transform duration-300 ${
              isHovered ? "translate-x-2" : ""
            }`}
          >
            &gt;&gt;
          </span>
          Start Learning
          <span
            className={`inline-block transition-transform duration-300 ${
              isHovered ? "-translate-x-2" : ""
            }`}
          >
            &lt;&lt;
          </span>
        </span>

        {/* Corner accents */}
        <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-purple-400"></div>
        <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-purple-400"></div>
        <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-purple-400"></div>
        <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-purple-400"></div>

        {/* Extra corner details */}
        <div className="absolute top-3 left-3 w-2 h-2 bg-purple-500"></div>
        <div className="absolute top-3 right-3 w-2 h-2 bg-purple-500"></div>
        <div className="absolute bottom-3 left-3 w-2 h-2 bg-purple-500"></div>
        <div className="absolute bottom-3 right-3 w-2 h-2 bg-purple-500"></div>
      </button>

      {/* Horizontal accent lines - more of them */}
      <div className="absolute right-full top-1/2 -translate-y-1/2 pr-8 flex flex-col gap-3 items-end">
        <div
          className={`h-px bg-gradient-to-r from-transparent to-purple-500 transition-all duration-500 ${
            isHovered
              ? "w-64 opacity-100 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
              : "w-40 opacity-60"
          }`}
        ></div>
        <div
          className={`h-px bg-gradient-to-r from-transparent to-purple-400 transition-all duration-700 delay-75 ${
            isHovered ? "w-52 opacity-80" : "w-32 opacity-40"
          }`}
        ></div>
        <div
          className={`h-px bg-gradient-to-r from-transparent to-purple-400 transition-all duration-1000 delay-150 ${
            isHovered ? "w-40 opacity-60" : "w-24 opacity-30"
          }`}
        ></div>
        <div
          className={`h-px bg-gradient-to-r from-transparent to-purple-300 transition-all duration-300 delay-100 ${
            isHovered ? "w-32 opacity-50 translate-x-4" : "w-0 opacity-0"
          }`}
        ></div>
      </div>

      <div className="absolute left-full top-1/2 -translate-y-1/2 pl-8 flex flex-col gap-3 items-start">
        <div
          className={`h-px bg-gradient-to-l from-transparent to-purple-500 transition-all duration-500 ${
            isHovered
              ? "w-64 opacity-100 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
              : "w-40 opacity-60"
          }`}
        ></div>
        <div
          className={`h-px bg-gradient-to-l from-transparent to-purple-400 transition-all duration-700 delay-75 ${
            isHovered ? "w-52 opacity-80" : "w-32 opacity-40"
          }`}
        ></div>
        <div
          className={`h-px bg-gradient-to-l from-transparent to-purple-400 transition-all duration-1000 delay-150 ${
            isHovered ? "w-40 opacity-60" : "w-24 opacity-30"
          }`}
        ></div>
        <div
          className={`h-px bg-gradient-to-l from-transparent to-purple-300 transition-all duration-300 delay-100 ${
            isHovered ? "w-32 opacity-50 -translate-x-4" : "w-0 opacity-0"
          }`}
        ></div>
      </div>

      {/* Vertical accent lines */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 pb-8 flex flex-col gap-2 items-center">
        <div
          className={`w-px bg-gradient-to-b from-transparent to-purple-500 transition-all duration-500 ${
            isHovered
              ? "h-64 opacity-100 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
              : "h-40 opacity-60"
          }`}
        ></div>
        <div
          className={`w-px bg-gradient-to-b from-transparent to-purple-400 transition-all duration-700 delay-100 ${
            isHovered ? "h-32 opacity-60" : "h-0 opacity-0"
          }`}
        ></div>
      </div>
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-8 flex flex-col gap-2 items-center">
        <div
          className={`w-px bg-gradient-to-t from-transparent to-purple-500 transition-all duration-500 ${
            isHovered
              ? "h-64 opacity-100 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
              : "h-40 opacity-60"
          }`}
        ></div>
        <div
          className={`w-px bg-gradient-to-t from-transparent to-purple-400 transition-all duration-700 delay-100 ${
            isHovered ? "h-32 opacity-60" : "h-0 opacity-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default PhysicsButton;
