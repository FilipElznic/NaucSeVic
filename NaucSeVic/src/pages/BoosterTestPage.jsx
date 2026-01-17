import React, { useState, useEffect } from "react";
import { cloudFunctionsService } from "../services/cloudFunctions";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import { userService } from "../services/userService";
import { toast } from "react-toastify";
import { Package, Clock, ShieldCheck, AlertTriangle } from "lucide-react";

const BoosterTestPage = () => {
  const { user } = useFirebaseAuth();
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        try {
          const profile = await userService.getUserProfile(user.uid);
          setUserProfile(profile);
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      }
    };
    fetchProfile();
  }, [user, refreshTrigger]);

  const handleAddBooster = async (boosterId) => {
    if (!user) return;
    setLoading(true);
    try {
      await cloudFunctionsService.debugAddBooster(boosterId, 1);
      toast.success(`Přidán booster: ${boosterId}`);
      setRefreshTrigger((prev) => prev + 1);
    } catch (error) {
      console.error("Error adding booster:", error);
      toast.error(`Chyba: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleActivateBooster = async (boosterId) => {
    if (!user) return;
    setLoading(true);
    try {
      await cloudFunctionsService.activateBooster(boosterId);
      toast.success(`Aktivován booster: ${boosterId}`);
      setRefreshTrigger((prev) => prev + 1);
    } catch (error) {
      console.error("Error activating booster:", error);
      toast.error(`Chyba: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const boosters = [
    {
      id: "xp_boost_1h",
      name: "XP Boost (1 hodina)",
      duration: "1h",
      multiplier: "2x",
    },
    {
      id: "xp_boost_12h",
      name: "XP Boost (12 hodin)",
      duration: "12h",
      multiplier: "2x",
    },
    {
      id: "xp_boost_24h",
      name: "XP Boost (24 hodiny)",
      duration: "24h",
      multiplier: "2x",
    },
  ];

  return (
    <div className="min-h-screen pt-[100px] bg-gray-50 dark:bg-zinc-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
          <ShieldCheck className="mr-3 text-indigo-600" />
          Booster Test Panel
        </h1>

        {!user ? (
          <div className="bg-red-100 p-4 rounded-lg text-red-700 mb-6 flex items-center">
            <AlertTriangle className="mr-2" />
            Pro testování se musíte přihlásit.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inventory Section */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-zinc-700">
              <h2 className="text-xl font-bold mb-4 flex items-center dark:text-white">
                <Package className="mr-2 text-blue-500" />
                Váš Inventář & Akce
              </h2>

              <div className="space-y-4">
                {boosters.map((booster) => {
                  const ownedCount = userProfile?.inventory?.[booster.id] || 0;
                  return (
                    <div
                      key={booster.id}
                      className="p-4 rounded-xl bg-gray-50 dark:bg-zinc-700/50 border border-gray-200 dark:border-zinc-600"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">
                            {booster.name}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-zinc-400">
                            Efekt: {booster.multiplier} XP
                          </p>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                          Vlastníte: {ownedCount}
                        </span>
                      </div>

                      <div className="flex space-x-2 mt-3">
                        <button
                          onClick={() => handleAddBooster(booster.id)}
                          disabled={loading}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
                        >
                          + Přidat (Debug)
                        </button>
                        <button
                          onClick={() => handleActivateBooster(booster.id)}
                          disabled={loading || ownedCount <= 0}
                          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Aktivovat
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Active Status Section */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-zinc-700 h-fit">
              <h2 className="text-xl font-bold mb-4 flex items-center dark:text-white">
                <Clock className="mr-2 text-orange-500" />
                Aktivní Boostery
              </h2>

              {userProfile?.activeBoosts?.xp ? (
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border border-orange-200 dark:border-orange-800/50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-orange-800 dark:text-orange-200">
                      XP Multiplier
                    </span>
                    <span className="text-2xl font-bold text-orange-600">
                      {userProfile.activeBoosts.xp.multiplier}x
                    </span>
                  </div>

                  <div className="text-sm text-gray-600 dark:text-zinc-400 space-y-1">
                    <p>Zdroj: {userProfile.activeBoosts.xp.sourceItem}</p>
                    <p>
                      Začátek:{" "}
                      {new Date(
                        userProfile.activeBoosts.xp.activatedAt.seconds * 1000
                      ).toLocaleString()}
                    </p>
                    <p className="font-medium text-red-600 dark:text-red-400">
                      Konec:{" "}
                      {new Date(
                        userProfile.activeBoosts.xp.endsAt.seconds * 1000
                      ).toLocaleString()}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-orange-200 dark:border-orange-800/30">
                    <p className="text-xs text-orange-800/70 dark:text-orange-300/70">
                      Tip: Aktivací dalšího boosteru se čas prodlouží.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-zinc-500">
                  <Package className="h-12 w-12 mx-auto mb-3 opacity-20" />
                  <p>Žádný aktivní XP boost.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoosterTestPage;
