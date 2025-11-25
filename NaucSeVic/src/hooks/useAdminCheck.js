import { useState, useEffect } from "react";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";

/**
 * Custom hook to check if the current user has admin privileges
 * @returns {Object} - Admin status and loading state
 */
export const useAdminCheck = () => {
  const { user } = useFirebaseAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Get the user's ID token with custom claims (force refresh to get latest claims)
        const idTokenResult = await user.getIdTokenResult(true);

        // Check if user has admin custom claim
        const adminClaim = idTokenResult.claims.admin === true;

        setIsAdmin(adminClaim);
      } catch (err) {
        console.error("Error checking admin status:", err);
        setError(err.message);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkAdminStatus();
  }, [user]);

  return { isAdmin, loading, error };
};

export default useAdminCheck;
