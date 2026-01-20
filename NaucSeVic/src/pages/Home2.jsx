import { useState, useEffect } from "react";
import MagicBento2 from "../components/ui/MagicBento2";
import Layout from "../components/layout/Layout";
import { useDarkMode } from "../contexts/DarkModeContext";
import { cloudFunctionsService } from "../services/cloudFunctions";
import { Trophy, Flame, Coins } from "lucide-react";

function Home2() {
  const { darkMode } = useDarkMode();
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await cloudFunctionsService.getLeaderboard(10);
        setLeaderboard(data.leaderboard || []);
      } catch (error) {
        console.error("Failed to load leaderboard", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <Layout>
      <div className="min-h-screen pt-20 w-full flex items-center justify-center p-4 transition-colors duration-300 bg-gray-50 dark:bg-[#060010]">
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
          leaderboard={leaderboard}
          leaderboardLoading={loading}
        />
      </div>
    </Layout>
  );
}

export default Home2;
