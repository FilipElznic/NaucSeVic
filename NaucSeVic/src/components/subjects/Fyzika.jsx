import Hero from "../ui/FyzikaBackground";
import PhysicsTimeline from "../physics/PhysicsTimeline";
import PhysicsTeacher from "../physics/PhysicsTeacher";
import PhysicsSimulation from "../physics/PhysicsSimulation";
import PhysicsButton from "../physics/PhysicsButton";

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

      <PhysicsTimeline />
      <PhysicsTeacher />
      <div className="bg-white z-10">
        {" "}
        <PhysicsSimulation />
      </div>

      <div className="dark:bg-black bg-white min-h-screen relative w-full z-10 flex  justify-center px-6 py-24 overflow-hidden">
        <div className="container mx-auto px-6 text-center ">
          <div className="text-center space-y-6 mb-20">
            <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-slate-300/70 ">
              <span className="h-px w-12  bg-gradient-to-r from-transparent via-white/60 to-white"></span>
              <p className="text-black dark:text-white/70">Začněte hned teď</p>
              <span className="h-px w-12 bg-gradient-to-l from-transparent via-white/60 to-white"></span>
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold text-white drop-shadow-[0_5px_45px_rgba(59,130,246,0.35)]">
              <p className="text-black dark:text-white/70">
                Vaše cesta k poznání začíná zde
              </p>
            </h1>
            <p className="text-base md:text-lg text-black/70 dark:text-white/70 max-w-3xl mx-auto">
              Připojte se k nám a objevte fascinující svět fyziky. Žádné
              biflování, jen čisté pochopení a zábava. Stačí jeden klik.
            </p>
          </div>

          <PhysicsButton />
        </div>
      </div>
    </div>
  );
};

export default Fyzika;
