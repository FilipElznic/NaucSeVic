import LaserFlow from "./LaserFlow";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

import MagicBento from "./MagicBento";
import Navbar from "./Navbar";

// NOTE: You can also adjust the variables in the shader for super detailed customization

// Basic Usage
<div style={{ height: "500px", position: "relative", overflow: "hidden" }}>
  <LaserFlow />
</div>;

// Image Example Interactive Reveal Effect
function ModernHeroSection() {
  const revealImgRef = useRef(null);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 600);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      {/* Transparent Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0"></div>
        <div className="relative">
          <Navbar />
        </div>
      </div>

      {isMobile ? (
        <div className="relative min-h-screen bg-white dark:bg-black pt-24 px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Pro všechny, kdo chtějí
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600">
              víc než učebnici
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-zinc-300 max-w-md">
            Objevte nový způsob, jak se učit – rychleji, chytřeji a zábavněji,
            ať už doma, ve škole nebo na cestách.
          </p>
          <div className="mt-8 flex w-full flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center">
            <button className="w-full sm:w-auto group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl">
              Začít objevovat
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/demo")}
              className="w-full sm:w-auto group inline-flex items-center justify-center px-6 py-3 border border-white/30 dark:border-zinc-600/50 text-base font-medium rounded-xl text-gray-800 dark:text-zinc-200 bg-white/90 dark:bg-zinc-800/90 hover:bg-white dark:hover:bg-zinc-700 transition-all duration-300 shadow-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Prohlédnout demo
            </button>
          </div>
        </div>
      ) : (
        <div
          className="relative overflow-hidden bg-white dark:bg-black"
          style={{
            height: "1500px",
          }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const el = revealImgRef.current;
            if (el) {
              el.style.setProperty("--mx", `${x}px`);
              el.style.setProperty("--my", `${y + rect.height * 0.5}px`);
            }
          }}
          onMouseLeave={() => {
            const el = revealImgRef.current;
            if (el) {
              el.style.setProperty("--mx", "-9999px");
              el.style.setProperty("--my", "-9999px");
            }
          }}
        >
          <LaserFlow
            horizontalBeamOffset={0.2}
            verticalBeamOffset={0}
            color="#6e82d4"
            horizontalSizing={0.25}
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[70vw] h-[80vh] bg-gray-50 dark:bg-black flex justify-center text-white text-2xl z-[6] overflow-hidden  rounded-lg">
            {/* Border with fade effect */}
            <div
              className="absolute inset-0 border-t-2 border-x-2 border-zinc-400 dark:border-gray-400 pointer-events-none  rounded-lg"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
              }}
            ></div>
            {/* Content fade overlay */}
            <div className="absolute inset-x-0 bottom-0 h-[60vh] bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none z-10"></div>
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
          </div>

          <div className="absolute z-10 top-28 sm:top-36 md:top-40 lg:top-52 left-0 right-0 px-4 sm:px-8 md:px-12 lg:left-44 lg:right-auto lg:px-16 text-left">
            <div className="w-full h-full ">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Pro všechny, kdo <br></br>chtějí{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600">
                  víc než učebnici
                </span>
              </h1>
              {/* Subtitle */}
              <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-zinc-300 max-w-xl md:max-w-2xl lg:max-w-3xl leading-relaxed mb-10">
                Objevte nový způsob, jak se učit – rychleji, chytřeji a
                zábavněji, ať už doma, ve škole nebo na cestách.
              </p>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4  mb-16">
                <button className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 backdrop-blur-sm">
                  Začít objevovat
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigate("/demo")}
                  className="group inline-flex items-center justify-center px-8 py-4 border border-white/30 dark:border-zinc-600/50 text-lg font-medium rounded-xl text-gray-800 dark:text-zinc-200 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-zinc-700/90 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Prohlédnout demo
                </button>
              </div>
            </div>
          </div>

          <img
            ref={revealImgRef}
            src="/test.webp"
            alt="Reveal effect"
            style={{
              position: "absolute",
              width: "100%",
              top: "-50%",
              zIndex: 5,
              mixBlendMode: "lighten",
              opacity: 0.3,
              pointerEvents: "none",
              "--mx": "-9999px",
              "--my": "-9999px",
              WebkitMaskImage:
                "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
              maskImage:
                "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          />
        </div>
      )}
    </>
  );
}

export default ModernHeroSection;
