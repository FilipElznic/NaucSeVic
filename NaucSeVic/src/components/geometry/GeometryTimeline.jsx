import { Triangle, Layers, Compass, Ruler } from "lucide-react";

const gradientSteps = [
  "from-green-400 dark:from-purple-400 to-lime-400 dark:to-violet-400",
  "from-green-500 dark:from-purple-500 to-lime-500 dark:to-violet-500",
  "from-green-600 dark:from-purple-600 to-lime-600 dark:to-violet-600",
  "from-green-700 dark:from-purple-700 to-lime-700 dark:to-violet-700",
];

const timelineSteps = [
  {
    id: 1,
    label: "MODUL 01",
    title: "Planimetrie",
    description:
      "Studium rovinných útvarů a jejich vlastností. Trojúhelníky, čtyřúhelníky, kružnice a mnohoúhelníky.",
    icon: Triangle,
    accent: gradientSteps[0],
    chips: ["Trojúhelníky", "Čtyřúhelníky", "Kružnice"],
    color: gradientSteps[0],
  },
  {
    id: 2,
    label: "MODUL 02",
    title: "Stereometrie",
    description:
      "Prostorové útvary a jejich objemy. Hranoly, jehlany, koule a rotační tělesa.",
    icon: Layers,
    accent: gradientSteps[1],
    chips: ["Hranoly", "Jehlany", "Koule"],
    color: gradientSteps[1],
  },
  {
    id: 3,
    label: "MODUL 03",
    title: "Analytická geometrie",
    description:
      "Geometrie pomocí souřadnic a vektorů. Přímky, kuželosečky, vektory a transformace.",
    icon: Compass,
    accent: gradientSteps[2],
    chips: ["Vektory", "Přímky", "Kuželosečky"],
    color: gradientSteps[2],
  },
  {
    id: 4,
    label: "MODUL 04",
    title: "Konstrukční úlohy",
    description:
      "Praktické geometrické konstrukce. Základní konstrukce, trojúhelníky a složité úlohy.",
    icon: Ruler,
    accent: gradientSteps[3],
    chips: ["Konstrukce", "Rýsování", "Přesnost"],
    color: gradientSteps[3],
  },
];

const GeometryTimeline = () => {
  return (
    <div className="relative min-h-[140vh] w-full flex-col bg-gradient-to-b from-transparent via-white/80 to-white dark:bg-gradient-to-b dark:from-transparent dark:via-slate-900/80 dark:to-black z-50 flex items-center justify-center px-6 py-24 overflow-hidden">
      <div className="text-center space-y-6 mb-20">
        <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-slate-300/70">
          <span className="h-px w-12 bg-gradient-to-r from-transparent via-white/60 to-white"></span>
          <p className=" text-black dark:text-white">Studijní plán</p>
          <span className="h-px w-12 bg-gradient-to-l from-transparent via-white/60 to-white"></span>
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold text-black dark:text-white drop-shadow-[0_5px_45px_rgba(59,130,246,0.35)]">
          Objevte svět tvarů a prostoru
        </h1>
        <p className="text-base md:text-lg text-black/70 dark:text-white/70 max-w-3xl mx-auto">
          Od základních útvarů až po komplexní prostorové struktury. Naše kurzy
          vás provedou geometrií krok za krokem s využitím moderních
          vizualizací.
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
                      className="absolute left-[54px] w-px bg-gradient-to-b from-black/10 dark:from-white/10 to-black dark:to-white"
                      style={{ top: "140px", height: "calc(100% - 160px)" }}
                    ></div>
                  )}

                  <div className="flex flex-col items-center relative z-10">
                    <div
                      className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${step.color} p-[1px] shadow-[0_0_45px_rgba(148,163,184,0.45)]`}
                    >
                      <div className="w-full h-full rounded-3xl bg-white dark:bg-slate-950/80 backdrop-blur-2xl border border-black/10 dark:border-white/10 flex items-center justify-center text-2xl font-semibold dark:text-white text-black">
                        {String(step.id).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="inline-flex items-center text-xs tracking-[0.35em] text-black/70 dark:text-white/70 uppercase mb-4">
                      {step.label}
                    </div>
                    <div className="group relative rounded-3xl border border-black/10 dark:border-white/10 dark:bg-slate-900/60 bg-white backdrop-blur-2xl p-8 shadow-[0_20px_80px_rgba(15,23,42,0.15)] dark:shadow-[0_20px_80px_rgba(15,23,42,0.55)]">
                      <div className="relative z-10 flex flex-col gap-6">
                        <div className="flex flex-wrap items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-black/5 dark:from-white/10 to-transparent border border-black/10 dark:border-white/20 flex items-center justify-center text-black dark:text-white">
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
                              className="text-xs tracking-wider uppercase border border-black/20 dark:border-white/20 dark:text-white/80 text-black px-4 py-1 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur"
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

export default GeometryTimeline;
