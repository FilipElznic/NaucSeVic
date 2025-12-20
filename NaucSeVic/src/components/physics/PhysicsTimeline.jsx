import { Atom, Telescope, CircuitBoard } from "lucide-react";

const gradientSteps = [
  "from-green-400 dark:from-purple-400 to-lime-400 dark:to-violet-400",
  "from-green-500 dark:from-purple-500 to-lime-500 dark:to-violet-500",
  "from-green-600 dark:from-purple-600 to-lime-600 dark:to-violet-600",
  "from-green-700 dark:from-purple-700 to-lime-700 dark:to-violet-700",
  "from-green-800 dark:from-purple-800 to-lime-800 dark:to-violet-800",
];

const timelineSteps = [
  {
    id: 1,
    label: "KROK 01",
    title: "Interaktivní kurzy",
    description:
      "Komplexní průvodce fyzikálními tématy. Získejte pevné teoretické základy díky strukturovaným textům a názorným ukázkám.",
    icon: Telescope,
    accent: gradientSteps[0],
    chips: ["Teorie", "Vektory", "Principy"],
    color: gradientSteps[0],
  },
  {
    id: 2,
    label: "KROK 02",
    title: "Virtuální laboratoř",
    description:
      "Hrajte si s fyzikou. Budujte experimenty, přepínejte parametry a sledujte, jak se mění energie a jevy v reálném čase.",
    icon: Atom,
    accent: gradientSteps[1],
    chips: ["Simulace", "Experimenty", "Vizualizace"],
    color: gradientSteps[1],
  },
  {
    id: 3,
    label: "KROK 03",
    title: "Procvičování v praxi",
    description:
      "Ověřte si, co jste se naučili. Vyřešte připravené příklady, získejte jistotu ve výpočtech a připravte se na zkoušky.",
    icon: CircuitBoard,
    accent: gradientSteps[2],
    chips: ["Příklady", "Testy", "Řešení"],
    color: gradientSteps[2],
  },
];

const PhysicsTimeline = () => {
  return (
    <div className="relative min-h-[140vh] w-full flex-col bg-gradient-to-b from-transparent via-white/80 to-white dark:bg-gradient-to-b dark:from-transparent dark:via-slate-900/80 dark:to-black z-50 flex items-center justify-center px-6 py-24 overflow-hidden">
      <div className="text-center space-y-6 mb-20">
        <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-slate-300/70">
          <span className="h-px w-12 bg-gradient-to-r from-transparent via-white/60 to-white"></span>
          <p className=" text-white">Harmonogram misí</p>
          <span className="h-px w-12 bg-gradient-to-l from-transparent via-white/60 to-white"></span>
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold  text-white drop-shadow-[0_5px_45px_rgba(59,130,246,0.35)]">
          Vnímejte časovou osu fyzikálních průlomů
        </h1>
        <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto">
          Každý krok vás posune k hlubšímu pochopení reality. Kombinujeme
          interaktivní simulace, analytické nástroje a AI asistenty, aby každá
          fáze studia působila jako futuristická mise.
        </p>
      </div>
      <div className="container">
        <div className="max-w-5xl w-full py-8 relative flex flex-col items-center justify-center">
          <div className="relative">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="relative flex gap-8 pb-16 last:pb-0"
                >
                  {index < timelineSteps.length - 1 && (
                    <div
                      className="absolute left-[54px] w-px bg-gradient-to-b from-white/10 to-white"
                      style={{ top: "140px", height: "calc(100% - 160px)" }}
                    ></div>
                  )}

                  <div className="flex flex-col items-center relative z-10">
                    <div
                      className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${step.color} p-[1px] shadow-[0_0_45px_rgba(148,163,184,0.45)]`}
                    >
                      <div className="w-full h-full rounded-3xl bg-white dark:bg-slate-950/80 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-2xl font-semibold dark:text-white text-black">
                        {String(step.id).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="inline-flex items-center text-xs tracking-[0.35em] text-white/70 uppercase mb-4">
                      {step.label}
                    </div>
                    <div className="group relative rounded-3xl border border-white/10 dark:bg-slate-900/60 bg-white backdrop-blur-2xl p-8 shadow-[0_20px_80px_rgba(15,23,42,0.55)]">
                      <div className="relative z-10 flex flex-col gap-6">
                        <div className="flex flex-wrap items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-black/10 dark:border-white/20 flex items-center justify-center text-black dark:text-white">
                            <Icon className="w-8 h-8" />
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-green-800 dark:text-white">
                              {step.title}
                            </h3>
                            <p className="text-black/70 dark:text-white/70 text-sm md:text-base max-w-2xl">
                              {step.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {step.chips.map((chip) => (
                            <span
                              key={chip}
                              className="text-xs tracking-wider uppercase border border-white/20 dark:text-white/80 text-black  px-4 py-1 rounded-full bg-white/5 backdrop-blur"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicsTimeline;
