import CardSwap, { Card } from "./CardLanding";
import { Brain, Zap, Target } from "lucide-react";
import StarBorder from "./StarBorder/StarBorder";

const FeatureSection = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden py-20">
      <div className="px-4 sm:px-6 lg:px-8 flex flex-row items-center gap-8">
        {/* Left side - Text content */}
        <div className="w-3/4 space-y-6 flex items-center justify-center ">
          <div className="space-y-4 w-3/4">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20">
              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                Proč si vybrat nás
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Vzdělávání <br></br>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600">
                nové generace
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed w-2/3">
              Spojujeme moderní technologie s osvědčenými vzdělávacími metodami
              pro vytvoření unikátního učebního zážitku přizpůsobeného právě
              vám.
            </p>
            <StarBorder
              as="button"
              className="custom-class"
              color="cyan"
              speed="5s"
            >
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
    </div>
  );
};

export default FeatureSection;
