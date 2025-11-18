import CardSwap, { Card } from "./CardLanding";
import { useEffect, useState } from "react";
import { Brain, Zap, Target } from "lucide-react";
import StarBorder from "./StarBorder/StarBorder";

const FeatureSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 1250);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden py-20">
      {isMobile ? (
        <div className="px-6 flex flex-col items-center text-center gap-8">
          {/* Text content */}
          <div className="space-y-4 w-full">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              Vzdělávání
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600">
                nové generace
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-md mx-auto">
              Spojujeme moderní technologie s osvědčenými vzdělávacími metodami
              pro jedinečný učební zážitek.
            </p>
            <div className="flex justify-center">
              <StarBorder as="button" color="purple" speed="1s">
                Začít se učit
              </StarBorder>
            </div>
          </div>

          {/* Static cards (no animation) */}
          <div className="w-full max-w-xl grid grid-cols-1 gap-4">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-[#060010] text-left">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg mb-4">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Inteligentní učení
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Využijte sílu umělé inteligence pro personalizované vzdělávání.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-[#060010] text-left">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Rychlý pokrok
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Dosahujte svých cílů rychleji díky pokročilým metrikám.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-[#060010] text-left">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center shadow-lg mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Personalizované úkoly
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Získejte úkoly přesně podle vašich potřeb a tempa.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-4 sm:px-6 lg:px-8 flex flex-row items-center gap-8">
          {/* Left side - Text content */}
          <div className="w-3/4 space-y-6 flex items-center justify-center ">
            <div className="space-y-4 w-3/4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Vzdělávání <br></br>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600">
                  nové generace
                </span>
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed w-2/3">
                Spojujeme moderní technologie s osvědčenými vzdělávacími
                metodami pro vytvoření unikátního učebního zážitku
                přizpůsobeného právě vám.
              </p>
              <StarBorder as="button" color="purple" speed="1s">
                Začít se učit
              </StarBorder>
            </div>
          </div>

          {/* Right side - Animated Cards */}
          <div className="relative h-[60vh] flex-1/4">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={3500}
              pauseOnHover={false}
            >
              {/* Card 1 */}
              <Card className="bg-white dark:bg-[#060010] border-2 dark:border-gray-500 border-zinc-800 shadow-2xl p-8 backdrop-blur-sm ">
                <div className="flex flex-col justify-between h-full">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        Inteligentní učení
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        Využijte sílu umělé inteligence pro personalizované
                        vzdělávání
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
                    <span>Více informací</span>
                    <span>→</span>
                  </div>
                </div>
              </Card>

              {/* Card 2 */}
              <Card className="bg-white dark:bg-[#060010] border-2 dark:border-gray-500 border-zinc-800 shadow-2xl p-8 backdrop-blur-sm">
                <div className="flex flex-col justify-between h-full">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        Rychlý pokrok
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        Dosahujte svých cílů rychleji díky pokročilým metrikám
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold">
                    <span>Více informací</span>
                    <span>→</span>
                  </div>
                </div>
              </Card>

              {/* Card 3 */}
              <Card className="bg-white dark:bg-[#060010] border-2 dark:border-gray-500 border-zinc-800 shadow-2xl p-8 backdrop-blur-sm">
                <div className="flex flex-col justify-between h-full">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        Personalizované úkoly
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        Získejte úkoly přesně podle vašich potřeb a tempa
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-pink-600 dark:text-pink-400 font-semibold">
                    <span>Více informací</span>
                    <span>→</span>
                  </div>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureSection;
