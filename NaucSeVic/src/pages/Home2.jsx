import MagicBento2 from "../components/ui/MagicBento2";

function Home2() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#060010] p-4">
      <MagicBento2
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
      />
    </div>
  );
}

export default Home2;
