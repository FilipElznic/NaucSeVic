import { Atom, Zap, Activity, MousePointer2 } from "lucide-react";

const PhysicsSimulation = () => {
  return (
    <div className="relative w-full py-32 dark:bg-black bg-white overflow-hidden z-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 dark:bg-purple-500/10 border border-green-500/20 dark:border-purple-500/20 text-green-600 dark:text-purple-400 text-xs font-medium uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-green-500 dark:bg-purple-500 animate-pulse"></span>
                Virtuální laboratoř
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
                Experimentujte <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-600 dark:from-purple-500 dark:to-violet-600">
                  bezpečně online
                </span>
              </h2>
            </div>

            <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed">
              Naše interaktivní simulace vám umožní prozkoumat fyzikální jevy na
              vlastní kůži. Měňte parametry, sledujte výsledky a pochopte
              principy fungování vesmíru v reálném čase.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Atom,
                  title: "Kvantová mechanika",
                  desc: "Vizualizace atomárních jevů",
                },
                {
                  icon: Zap,
                  title: "Elektromagnetismus",
                  desc: "Simulace polí a obvodů",
                },
                {
                  icon: Activity,
                  title: "Vlnění a optika",
                  desc: "Interference a lom světla",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/50 dark:hover:border-purple-500/50 transition duration-300"
                >
                  <div className="p-3 rounded-lg bg-green-500/10 dark:bg-purple-500/10 text-green-600 dark:text-purple-400">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold dark:text-white text-black ">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 aspect-video group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-600/20 dark:from-purple-500/20 dark:to-violet-600/20 group-hover:opacity-75 transition duration-500"></div>

              {/* Simulation UI Mockup */}
              <div className="absolute inset-0 p-8 flex items-center justify-center">
                <div className="relative w-full h-full border border-white/20 rounded-lg bg-black/40 backdrop-blur-sm overflow-hidden">
                  <div className="absolute top-4 left-4 right-4 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-green-500 dark:bg-purple-500 animate-[loading_2s_ease-in-out_infinite]"></div>
                  </div>

                  {/* Animated Particles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 border-2 border-green-500/30 dark:border-purple-500/30 rounded-full animate-[spin_4s_linear_infinite]"></div>
                      <div className="absolute inset-2 border-2 border-lime-500/30 dark:border-violet-500/30 rounded-full animate-[spin_3s_linear_infinite_reverse]"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] animate-pulse"></div>
                      </div>
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-green-400 dark:bg-purple-400 rounded-full"
                          style={{
                            top: "50%",
                            left: "50%",
                            transform: `rotate(${
                              i * 120
                            }deg) translate(60px) rotate(-${i * 120}deg)`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Controls Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-md border-t border-white/10 flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 transition cursor-pointer"></div>
                      <div className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 transition cursor-pointer"></div>
                    </div>
                    <div className="text-xs text-white/50 font-mono">
                      SIMULATION_RUNNING
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Cursor Hint */}
              <div className="absolute bottom-8 right-8 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium animate-bounce">
                <MousePointer2 className="w-4 h-4" />
                Vyzkoušet demo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicsSimulation;
