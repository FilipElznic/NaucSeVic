import React from "react";
import { useFirebaseAuth } from "../../contexts/FirebaseAuthContext";
import { useDarkMode } from "../../contexts/DarkModeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { user, logout } = useFirebaseAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-white/10 dark:bg-black/20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              NaucSeVic
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {/* User Info */}
            {user && (
              <div className="flex items-center space-x-3">
                <span className="text-gray-900 dark:text-white">
                  Vítejte, {user.displayName || user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-600 dark:text-red-400 transition-all duration-300"
                >
                  Odhlásit se
                </button>
              </div>
            )}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white/20 dark:bg-gray-800/50 hover:bg-white/30 dark:hover:bg-gray-700/70 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                // Sun icon for light mode
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg
                  className="w-6 h-6 text-gray-900 dark:text-gray-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
