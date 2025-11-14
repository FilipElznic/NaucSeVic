import Hero from "../ui/FyzikaBackground";

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

      <div
        className="h-screen w-full bg-gradient-to-b from-transparent via-white/30 to-white/80 backdrop-blur-sm
      dark:bg-gradient-to-b dark:from-transparent dark:via-black dark:to-black z-50"
      ></div>
      <div className="h-[200vh] w-full dark:from-black dark:to-black bg-gradient-to-b from-white/80 to-white  z-50"></div>
    </div>
  );
};
export default Fyzika;
