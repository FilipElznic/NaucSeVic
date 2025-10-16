import { useState, useEffect } from "react";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import { userService } from "../services/userService";

export const useUserProfile = () => {
  const { user } = useFirebaseAuth();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchUserProfile = async () => {
      if (!user?.uid) {
        setUserProfile(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const profile = await userService.getUserProfile(user.uid);

        if (isMounted) {
          setUserProfile(profile);
        }
      } catch (err) {
        console.error("Error fetching user profile:", err);
        if (isMounted) {
          setError(err.message);
          setUserProfile(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchUserProfile();

    return () => {
      isMounted = false;
    };
  }, [user?.uid]);

  const refreshProfile = async () => {
    if (user?.uid) {
      try {
        setLoading(true);
        const profile = await userService.getUserProfile(user.uid);
        setUserProfile(profile);
      } catch (err) {
        console.error("Error refreshing user profile:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    userProfile,
    loading,
    error,
    refreshProfile,
    xp: userProfile?.profile?.xp || 0,
    coins: userProfile?.profile?.coins || 0,
    userName:
      userProfile?.profile?.name ||
      user?.displayName ||
      user?.email?.split("@")[0] ||
      "Uživatel",
  };
};
