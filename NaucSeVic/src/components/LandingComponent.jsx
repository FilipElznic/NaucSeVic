import React from "react";
import Spline from "@splinetool/react-spline";

const LandingPage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-transparent">
      <div className="w-full h-full relative">
        {" "}
        <div className="absolute -bottom-[50vh] left-0 w-full h-[110vh] z-0">
          <Spline
            scene="https://prod.spline.design/VeV8EAaugsxDil4C/scene.splinecode"
            className="w-full h-full"
            style={{
              pointerEvents: "auto",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        {/* Text Content - Positioned higher on the page */}
        <div className="relative z-30 w-full min-h-screen flex flex-col pt-52  pb-20 pointer-events-none">
          <div className="max-w-4xl mx-auto px-6 text-center pointer-events-auto">
            <div className="space-y-6 ">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white drop-shadow-2xl">
                Pro všechny, kdo chtějí
                <br /> víc než{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  učebnici.
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto drop-shadow-xl">
                Objevte nový způsob, jak se učit – rychleji, chytřeji a
                zábavněji, ať už doma, ve škole nebo na cestách.
              </p>
              <button className="mt-8 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Začít objevovat →
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[200vh]"></div>
    </div>
  );
};

export default LandingPage;
