import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import { useDarkMode } from "../../hooks/useDarkMode";
import {
  BookOpen,
  User,
  LogOut,
  LayoutDashboard,
  ChevronDown,
  Shapes,
  Atom,
  Activity,
  BarChart3,
} from "lucide-react";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { user, logout } = useFirebaseAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                NaucSeVic
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Auth Section */}
            {user ? (
              <div className="flex items-center space-x-3">
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/20 dark:bg-gray-800/50 hover:bg-white/30 dark:hover:bg-gray-700/70 text-gray-900 dark:text-white transition-all duration-300"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>

                {/* Tools Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/20 dark:bg-gray-800/50 hover:bg-white/30 dark:hover:bg-gray-700/70 text-gray-900 dark:text-white transition-all duration-300"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Nástroje</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 max-h-screen overflow-y-auto">
                      <div className="py-2">
                        <Link
                          to="/geometry-explorer"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <Shapes className="h-4 w-4 mr-3 text-blue-600 dark:text-blue-400" />
                          <div>
                            <div className="font-medium">Geometry Explorer</div>
                            <div className="text-xs text-gray-500">
                              Geometrické tvary a výpočty
                            </div>
                          </div>
                        </Link>

                        <Link
                          to="/physics-lab"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <Atom className="h-4 w-4 mr-3 text-purple-600 dark:text-purple-400" />
                          <div>
                            <div className="font-medium">Physics Lab</div>
                            <div className="text-xs text-gray-500">
                              Fyzikální experimenty
                            </div>
                          </div>
                        </Link>

                        <Link
                          to="/activity-tracker"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <Activity className="h-4 w-4 mr-3 text-green-600 dark:text-green-400" />
                          <div>
                            <div className="font-medium">Activity Tracker</div>
                            <div className="text-xs text-gray-500">
                              Sledování aktivity
                            </div>
                          </div>
                        </Link>

                        <Link
                          to="/progress-stats"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <BarChart3 className="h-4 w-4 mr-3 text-orange-600 dark:text-orange-400" />
                          <div>
                            <div className="font-medium">Progress Stats</div>
                            <div className="text-xs text-gray-500">
                              Detailní statistiky
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-green-500/20 text-green-700 dark:text-green-300">
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {user.displayName || user.email?.split("@")[0]}
                  </span>
                </div>

                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-600 dark:text-red-400 transition-all duration-300"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Odhlásit</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/prihlaseni"
                  className="px-4 py-2 rounded-lg bg-white/20 dark:bg-gray-800/50 hover:bg-white/30 dark:hover:bg-gray-700/70 text-gray-900 dark:text-white transition-all duration-300"
                >
                  Přihlásit se
                </Link>
                <Link
                  to="/registrace"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Registrace
                </Link>
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
