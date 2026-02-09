import React from "react";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import { useDarkMode } from "../contexts/DarkModeContext";
import {
  ParticleCard,
  DashboardEffectsStyles,
  DEFAULT_GLOW_COLOR,
} from "../components/ui/DashboardEffects";

const ProfileAltB = () => {
  const { user } = useFirebaseAuth();
  const { darkMode } = useDarkMode();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black p-6">
      <DashboardEffectsStyles
        glowColor={DEFAULT_GLOW_COLOR}
        isDarkMode={darkMode}
      />
      <div className="w-full max-w-4xl">
        <ParticleCard
          className="p-8"
          style={{ borderRadius: 12 }}
          glowColor={DEFAULT_GLOW_COLOR}
          enableTilt={false}
        >
          <h1 className="text-2xl font-bold mb-2">Profil - Alternativa B</h1>
          <p className="text-sm opacity-70 mb-4">
            Jednoduchá ukázková stránka s odlišným uspořádáním.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-sm">
              Jméno: {user?.displayName || "Uživatel"}
            </div>
            <div className="text-sm">
              Email: {user?.email || "Není k dispozici"}
            </div>
            <div className="col-span-2 mt-2 text-xs opacity-60">
              Toto je pouze demo stránka.
            </div>
          </div>
        </ParticleCard>
      </div>
    </div>
  );
};

export default ProfileAltB;
