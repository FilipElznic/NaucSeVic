import MagicBento2 from "../components/ui/MagicBento2";
import Layout from "../components/layout/Layout";
import { useDarkMode } from "../contexts/DarkModeContext";

function Home2() {
  const { darkMode } = useDarkMode();

  return (
    <Layout>
      <div
        className={`min-h-screen w-full flex items-center justify-center p-4 transition-colors duration-300 ${
          darkMode ? "bg-[#060010]" : "bg-gray-50"
        }`}
      >
        <MagicBento2
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
          isDarkMode={darkMode}
        />
      </div>
    </Layout>
  );
}

export default Home2;
