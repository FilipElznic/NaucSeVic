import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useFirebaseAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-zinc-400">Načítání...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    // Redirect to login page with the attempted location
    return (
      <Navigate
        to="/prihlaseni"
        state={{ from: location, protected: true }}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;
