import React from "react";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import { useDarkMode } from "../contexts/DarkModeContext";
import {
  ParticleCard,
  DashboardEffectsStyles,
  DEFAULT_GLOW_COLOR,
} from "../components/ui/DashboardEffects";

const ProfileAltA = () => {
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
          style={{ borderRadius: 20 }}
          glowColor={DEFAULT_GLOW_COLOR}
          enableTilt={false}
        >
          <h1 className="text-2xl font-bold mb-2">
            Profil - Jednoduchá varianta A
          </h1>
          <p className="text-sm opacity-70 mb-4">
            Toto je jednoduchá alternativní rozložení profilu.
          </p>
          <div className="space-y-2">
            <div className="text-sm">
              Jméno: {user?.displayName || "Uživatel"}
            </div>
            <div className="text-sm">
              Email: {user?.email || "Není k dispozici"}
            </div>
          </div>
        </ParticleCard>
      </div>
    </div>
  );
};

export default ProfileAltA;
