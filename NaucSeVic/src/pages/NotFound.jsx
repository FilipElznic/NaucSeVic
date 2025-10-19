import React, { useState, useEffect } from "react";
import { Home, ArrowLeft, Sparkles } from "lucide-react";

const NotFound = () => {
  const [particles, setParticles] = useState([]);
  const [glitch, setGlitch] = useState(false);

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  // Glitch effect - more frequent and intense
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.85) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 150);
      }
    }, 1500);
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 overflow-hidden relative">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-indigo-400/30 blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`,
          }}
        />
      ))}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(20px, -30px) scale(1.2); opacity: 0.6; }
        }
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(99,102,241,0.3); }
          50% { box-shadow: 0 0 40px rgba(99,102,241,0.6), 0 0 60px rgba(168,85,247,0.4); }
        }
        @keyframes rainbow {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
      `}</style>

      <div className="text-center">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_50%)]"></div>
        </div>

        {/* Easter Egg Overlay */}

        {/* Content */}
        <div className="relative">
          {/* 404 Number with Glitch Effect */}
          <div className="relative inline-block">
            <h1
              className={`text-[12rem] md:text-[16rem] font-bold leading-none select-none ${
                glitch ? "animate-pulse" : ""
              }`}
              style={glitch ? { animation: "glitch 2.5s infinite" } : {}}
            >
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                404
                {/* Glitch layers */}
                {glitch && (
                  <>
                    <span
                      className="absolute inset-0 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent opacity-70"
                      style={{ left: "-2px" }}
                    >
                      404
                    </span>
                    <span
                      className="absolute inset-0 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent opacity-70"
                      style={{ left: "2px" }}
                    >
                      404
                    </span>
                  </>
                )}
              </span>
            </h1>

            {/* Floating sparkles around 404 */}
            <div
              className="absolute -top-8 -right-8 animate-bounce"
              style={{ animationDelay: "0s" }}
            >
              <Sparkles className="w-8 h-8 text-indigo-400" />
            </div>
            <div
              className="absolute -bottom-8 -left-8 animate-bounce"
              style={{ animationDelay: "0.5s" }}
            >
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <div
              className="absolute top-1/2 -right-12 animate-bounce"
              style={{ animationDelay: "1s" }}
            >
              <Sparkles className="w-5 h-5 text-pink-400" />
            </div>
          </div>

          {/* Message */}
          <div className="mt-8 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
              Stránka nenalezena
            </h2>
            <p className="text-xl text-zinc-400 max-w-md mx-auto">
              Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla
              přesunuta.
            </p>
            <p className="text-sm text-zinc-600 mt-4 italic">
              Tip: Zkuste zadat Konami Code 🎮
            </p>
          </div>

          {/* Buttons with enhanced animations */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/")}
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
              style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <Home className="mr-2 h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Zpět na hlavní stránku</span>
            </button>

            <button
              onClick={() => window.history.back()}
              className="group inline-flex items-center justify-center px-8 py-4 bg-zinc-800/60 hover:bg-zinc-800/80 text-white font-semibold rounded-xl border border-zinc-700/60 hover:border-zinc-600/60 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <ArrowLeft className="mr-2 h-5 w-5 relative z-10 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="relative z-10">Zpět</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
