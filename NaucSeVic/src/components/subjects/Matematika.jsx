import React from "react";
import MatematikaHero from "../math/MatematikaHero";
import MatematikaButton from "../math/MatematikaButton";

const Matematika = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-full w-full overflow-hidden flex flex-col relative justify-center">
        <MatematikaHero
          title="Matematika – Jazyk Vesmíru"
          description="Ponořte se do světa čísel, struktur a změn. Od základní aritmetiky po komplexní analýzu, matematika je klíčem k pochopení světa kolem nás."
          badgeText="Matematika pro každého"
          badgeLabel="Interaktivní"
          ctaButtons={[
            { text: "Začít Učit Se", href: "#get-started", primary: true },
            { text: "Prozkoumejte Témata", href: "#topics" },
          ]}
          microDetails={["Algebra", "Geometrie", "Kalkulus"]}
        />
      </div>

      {/* Description Section */}
      <div className="bg-white dark:bg-black py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Proč studovat matematiku?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Matematika není jen o počítání. Je to způsob myšlení, který nám
            umožňuje řešit složité problémy, modelovat reálné situace a
            předpovídat budoucnost. S naším interaktivním přístupem zapomenete
            na nudné vzorečky a začnete skutečně rozumět souvislostem.
          </p>
        </div>
      </div>

      <div className="dark:bg-black bg-white min-h-screen relative w-full z-10 flex justify-center px-6 py-24 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-slate-300/70">
              <span className="h-px w-12 bg-gradient-to-r from-transparent via-blue-500/60 to-blue-500"></span>
              <p className="text-black dark:text-white/70">Začněte hned teď</p>
              <span className="h-px w-12 bg-gradient-to-l from-transparent via-blue-500/60 to-blue-500"></span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-white drop-shadow-[0_5px_45px_rgba(59,130,246,0.35)]">
              <p className="text-black dark:text-white/70">
                Vaše cesta k poznání začíná zde
              </p>
            </h1>
            <p className="text-base md:text-lg text-black/70 dark:text-white/70 max-w-3xl mx-auto">
              Připojte se k nám a objevte fascinující svět matematiky. Žádné
              biflování, jen čisté pochopení a zábava. Stačí jeden klik.
            </p>
          </div>

          <MatematikaButton />
        </div>
      </div>
    </div>
  );
};

export default Matematika;
