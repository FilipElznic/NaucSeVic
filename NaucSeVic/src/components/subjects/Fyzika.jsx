import Hero from "../ui/FyzikaBackground";
import {
  Atom,
  Telescope,
  CircuitBoard,
  BookOpen,
  FlaskConical,
  Target,
} from "lucide-react";

import ucitel from "../../../public/ucitel.png";

const gradientSteps = [
  "from-indigo-400 to-purple-400",
  "from-indigo-500 to-purple-500",
  "from-indigo-600 to-purple-600",
  "from-indigo-700 to-purple-700",
  "from-indigo-800 to-purple-800",
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
    icon: Atom, // Zde se hodí Atom nebo Flask (zkumavka) pro simulace
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

const learningSections = [
  {
    id: "course",
    eyebrow: "Kompletní kurz",
    title: "Modulární kurz fyziky",
    description:
      "13 kapitol od mechaniky po moderní fyziku. Postupujte tempem, které vám vyhovuje, s průběžným hodnocením a mentoringem.",
    icon: BookOpen,
    gradient: "from-indigo-500/90 via-purple-600/80 to-purple-700/80",
    bullets: [
      "Video lekce v 4K",
      "Poznámky s AI shrnutím",
      "Mentoring na vyžádání",
    ],
    cta: { label: "Vstoupit do kurzu", href: "#kurz" },
  },
  {
    id: "simulation",
    eyebrow: "Simulace",
    title: "Interaktivní laboratoř",
    description:
      "Ovládejte parametry, sledujte grafy v reálném čase a ukládejte si experimenty. Přeneste fyziku z učebnic do živých modelů.",
    icon: FlaskConical,
    gradient: "from-purple-500/90 via-fuchsia-600/80 to-pink-600/80",
    bullets: ["Přes 40 scénářů", "Sdílení experimentů", "Export výsledků"],
    cta: { label: "Spustit simulaci", href: "#simulace" },
  },
  {
    id: "tasks",
    eyebrow: "Výzvy",
    title: "Sada úloh a testů",
    description:
      "Vyřešte adaptivní úlohy, sbírejte odznaky a porovnejte své výsledky s komunitou. Každá úloha nabízí vysvětlení i alternativní postupy.",
    icon: Target,
    gradient: "from-indigo-600/90 via-blue-600/80 to-cyan-500/80",
    bullets: [
      "Adaptivní obtížnost",
      "Okamžitá zpětná vazba",
      "Komunitní žebříčky",
    ],
    cta: { label: "Pustit se do úloh", href: "#ukoly" },
  },
];

const Fyzika = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-full w-full overflow-hidden flex flex-col relative justify-center">
        <Hero
          title="Fyzika – Objevte Zákony Pohybu"
          description="Ovládněte klasickou mechaniku, termodynamiku a elektromagnetismus prostřednictvím interaktivních vizualizací a reálných aplikací. Získejte hluboké porozumění tomu, jak vesmír funguje."
          badgeText="Fyzika Bez Hranic"
          badgeLabel="Interaktivní"
          ctaButtons={[
            { text: "Začít Učit Se", href: "#get-started", primary: true },
            { text: "Prozkoumejte Moduly", href: "#showcase" },
          ]}
          microDetails={["Video lekce", "Sbírky úloh", "Interaktivní simulace"]}
        />
      </div>

      <div className="relative min-h-[140vh] w-full flex-col bg-gradient-to-b from-transparent via-white/20 to-white/80 dark:from-transparent dark:via-slate-900/80 dark:to-black  z-50 flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="text-center space-y-6 mb-20 ">
          <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-slate-200/80 dark:text-slate-300/70">
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-white/60 to-white"></span>
            Harmonogram misí
            <span className="h-px w-12 bg-gradient-to-l from-transparent via-white/60 to-white"></span>
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold text-white drop-shadow-[0_5px_45px_rgba(59,130,246,0.35)]">
            Vnímejte časovou osu fyzikálních průlomů
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto">
            Každý krok vás posune k hlubšímu pochopení reality. Kombinujeme
            interaktivní simulace, analytické nástroje a AI asistenty, aby každá
            fáze studia působila jako futuristická mise.
          </p>
        </div>{" "}
        <div className="container  ">
          <div className="max-w-5xl w-full py-8 relative flex flex-col items-center justify-center ">
            <div className="relative ">
              {timelineSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className="relative flex gap-8 pb-16 last:pb-0"
                  >
                    {index < timelineSteps.length - 1 && (
                      <div
                        className="absolute left-[54px] w-px bg-gradient-to-b from-white/10  to-white"
                        style={{ top: "140px", height: "calc(100% - 160px)" }}
                      ></div>
                    )}

                    <div className="flex flex-col items-center relative z-10">
                      <div
                        className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${step.color} p-[1px] shadow-[0_0_45px_rgba(148,163,184,0.45)] `}
                      >
                        <div className="w-full h-full rounded-3xl bg-slate-950/80 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-2xl font-semibold text-white">
                          {String(step.id).padStart(2, "0")}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="inline-flex items-center text-xs tracking-[0.35em] text-white/70 uppercase mb-4">
                        {step.label}
                      </div>
                      <div className="group relative rounded-3xl border border-white/10 bg-white/10 dark:bg-slate-900/60 backdrop-blur-2xl p-8 shadow-[0_20px_80px_rgba(15,23,42,0.55)]">
                        <div className="relative z-10 flex flex-col gap-6">
                          <div className="flex flex-wrap items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/20 flex items-center justify-center text-white">
                              <Icon className="w-8 h-8" />
                            </div>
                            <div>
                              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                                {step.title}
                              </h3>
                              <p className="text-white/70 text-sm md:text-base max-w-2xl">
                                {step.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            {step.chips.map((chip) => (
                              <span
                                key={chip}
                                className="text-xs tracking-wider uppercase border border-white/20 text-white/80 px-4 py-1 rounded-full bg-white/5 backdrop-blur"
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

      <div className="relative w-full py-32 bg-gradient-to-b from-white/80 to-white dark:from-black dark:to-black z-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-medium uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                  Váš průvodce
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                  Učení nemusí být <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                    jen otrava
                  </span>
                </h2>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                S námi vás fyzika bude bavit. Zapomeňte na nudné biflování
                vzorečků. Ukážeme vám, jak funguje svět kolem nás, od atomů až
                po galaxie. Připojte se k tisícům studentů, kteří už objevili
                krásu fyziky.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transform hover:-translate-y-1 transition duration-300">
                  Zjistit více
                </button>
                <button className="px-8 py-4 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-white/5 transition duration-300">
                  Ukázková lekce
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-white/10">
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    10+
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    Let praxe
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    5k+
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    Studentů
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    4.9
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    Hodnocení
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <img
                src={ucitel}
                alt="Náš lektor"
                className="w-2/3 h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-screen w-full z-10 flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="text-center space-y-6 mb-20 ">
            <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-slate-200/80 dark:text-slate-300/70">
              <span className="h-px w-12 bg-gradient-to-r from-transparent via-white/60 to-white"></span>
              Harmonogram misí
              <span className="h-px w-12 bg-gradient-to-l from-transparent via-white/60 to-white"></span>
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold text-white drop-shadow-[0_5px_45px_rgba(59,130,246,0.35)]">
              Vnímejte časovou osu fyzikálních průlomů
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto">
              Každý krok vás posune k hlubšímu pochopení reality. Kombinujeme
              interaktivní simulace, analytické nástroje a AI asistenty, aby
              každá fáze studia působila jako futuristická mise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fyzika;
