import Hero from "../ui/FyzikaBackground";

const Fyzika = () => {
  return (
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
      <div className="h-screen w-50"> f</div>
    </div>
  );
};
export default Fyzika;
