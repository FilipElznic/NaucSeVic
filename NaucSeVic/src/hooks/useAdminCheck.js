import { useState, useEffect } from "react";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";

// Module-level cache to avoid repeated token refreshes
let adminCache = { uid: null, isAdmin: false, timestamp: 0 };
const ADMIN_CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export const useAdminCheck = () => {
  const { user } = useFirebaseAuth();

  const hasFreshCache =
    user?.uid &&
    adminCache.uid === user.uid &&
    Date.now() - adminCache.timestamp < ADMIN_CACHE_TTL;

  const [isAdmin, setIsAdmin] = useState(
    hasFreshCache ? adminCache.isAdmin : false,
  );
  const [loading, setLoading] = useState(!hasFreshCache);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const checkAdminStatus = async () => {
      if (!user) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      // Use cache if fresh
      if (
        adminCache.uid === user.uid &&
        Date.now() - adminCache.timestamp < ADMIN_CACHE_TTL
      ) {
        if (isMounted) {
          setIsAdmin(adminCache.isAdmin);
          setLoading(false);
        }
        return;
      }

      try {
        if (isMounted) {
          setLoading(true);
          setError(null);
        }

        // First try without forcing refresh (faster), fall back to forced if needed
        const idTokenResult = await user.getIdTokenResult(false);
        const adminClaim = idTokenResult.claims.admin === true;

        adminCache = {
          uid: user.uid,
          isAdmin: adminClaim,
          timestamp: Date.now(),
        };

        if (isMounted) {
          setIsAdmin(adminClaim);
        }
      } catch (err) {
        console.error("Error checking admin status:", err);
        if (isMounted) {
          setError(err.message);
          setIsAdmin(false);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    checkAdminStatus();

    return () => {
      isMounted = false;
    };
  }, [user]);

  return { isAdmin, loading, error };
};

export default useAdminCheck;
