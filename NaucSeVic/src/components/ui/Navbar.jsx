import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useFirebaseAuth } from "../../contexts/FirebaseAuthContext";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { useAdminCheck } from "../../hooks/useAdminCheck";
import { useUserProfile } from "../../hooks/useUserProfile";
import {
  BookOpen,
  User,
  LogOut,
  Shield,
  Plus,
  BookMarked,
  Cloud,
  FileText,
  Lock,
  Menu,
  X,
  ChevronDown,
  Star,
  Coins,
} from "lucide-react";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { user, logout } = useFirebaseAuth();
  const { isAdmin } = useAdminCheck();
  const { xp, coins, userName } = useUserProfile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [subjectsDropdownOpen, setSubjectsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSubjectsDropdownOpen(false);
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

  // Navigation items for authenticated users
  const navigationItems = [
    {
      name: "Všechny úkoly",
      href: "/vsechny-ukoly",
      icon: BookMarked,
      protected: true,
      adminOnly: false,
    },

    {
      name: "Vytvořit úkol",
      href: "/create-task",
      icon: Plus,
      protected: true,
      adminOnly: true,
    },
  ];

  // Subject items for tasks
  const subjectItems = [
    {
      name: "Matematika",
      href: "/predmety/matematika",
      description: "Algebra, analýza, rovnice",
    },
    {
      name: "Fyzika",
      href: "/predmety/fyzika",
      description: "Mechanika, elektřina, optika",
    },
    {
      name: "Geometrie",
      href: "/predmety/geometrie",
      description: "Planimetrie, stereometrie",
    },
    {
      name: "Čeština",
      href: "/predmety/cestina",
      description: "Gramatika, literatura a sloh",
    },
    {
      name: "Informatika",
      href: "/predmety/informatika",
      description: "Programování, hardware a digitální svět",
    },
    {
      name: "Chemie",
      href: "/predmety/chemie",
      description: "Prvky, reakce a pokusy",
    },
  ];

  // Legal/public navigation items
  const publicItems = [
    {
      name: "Podmínky",
      href: "/terms",
      icon: FileText,
    },
    {
      name: "Ochrana dat",
      href: "/privacy",
      icon: Lock,
    },
  ];

  // Filter navigation items based on auth status and admin rights
  const visibleNavItems = navigationItems.filter((item) => {
    if (item.protected && !user) return false;
    if (item.adminOnly && !isAdmin) return false;
    return true;
  });

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                NaucSeVic
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-4">
            {user && (
              <>
                {/* Main Navigation */}
                {visibleNavItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                        item.adminOnly
                          ? "bg-purple-500/20 dark:bg-purple-600/30 hover:bg-purple-500/30 dark:hover:bg-purple-600/50 text-purple-700 dark:text-purple-300"
                          : "bg-white/20 dark:bg-gray-800/50 hover:bg-white/30 dark:hover:bg-gray-700/70 text-gray-900 dark:text-white"
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  );
                })}

                {/* Subjects Dropdown - Only for authenticated users */}
                {user && (
                  <div ref={dropdownRef} className="relative">
                    <button
                      onClick={() =>
                        setSubjectsDropdownOpen(!subjectsDropdownOpen)
                      }
                      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/20 dark:bg-gray-800/50 hover:bg-white/30 dark:hover:bg-gray-700/70 text-gray-900 dark:text-white transition-all duration-300"
                    >
                      <BookMarked className="h-4 w-4" />
                      <span className="text-sm">Předměty</span>
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-200 ${
                          subjectsDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {subjectsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-lg shadow-xl border border-white/20 dark:border-gray-700/50 py-2 z-50">
                        {subjectItems.map((subject) => (
                          <Link
                            key={subject.name}
                            to={subject.href}
                            onClick={() => setSubjectsDropdownOpen(false)}
                            className="block px-4 py-3 hover:bg-white/50 dark:hover:bg-gray-700/50 text-gray-900 dark:text-white transition-all duration-200"
                          >
                            <div className="font-medium text-sm">
                              {subject.name}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                              {subject.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* User Info */}
                <div className="flex items-center space-x-3">
                  {/* User Name and Stats */}
                  <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-green-500/20 text-green-700 dark:text-green-300">
                    <User className="h-4 w-4" />
                    <span className="text-sm font-medium">{userName}</span>
                    {isAdmin && (
                      <Shield
                        className="h-3 w-3 text-yellow-500"
                        title="Administrátor"
                      />
                    )}
                  </div>

                  {/* XP Display */}
                  <div className="flex items-center space-x-1 px-2 py-1 rounded-lg bg-blue-500/20 text-blue-700 dark:text-blue-300">
                    <Star className="h-3 w-3" />
                    <span className="text-xs font-medium">{xp} XP</span>
                  </div>

                  {/* Coins Display */}
                  <div className="flex items-center space-x-1 px-2 py-1 rounded-lg bg-yellow-500/20 text-yellow-700 dark:text-yellow-300">
                    <Coins className="h-3 w-3" />
                    <span className="text-xs font-medium">{coins}</span>
                  </div>
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-600 dark:text-red-400 transition-all duration-300"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Odhlásit</span>
                </button>
              </>
            )}

            {/* Auth buttons for non-authenticated users */}
            {!user && (
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
                <svg
                  className="w-5 h-5 text-yellow-500"
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
                <svg
                  className="w-5 h-5 text-gray-900 dark:text-gray-100"
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

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center space-x-2">
            {/* Dark Mode Toggle Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white/20 dark:bg-gray-800/50 hover:bg-white/30 dark:hover:bg-gray-700/70 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5 text-yellow-500"
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
                <svg
                  className="w-5 h-5 text-gray-900 dark:text-gray-100"
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

            {/* Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/20 dark:bg-gray-800/50 hover:bg-white/30 dark:hover:bg-gray-700/70 text-gray-900 dark:text-white transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 dark:bg-black/50 rounded-lg backdrop-blur-md border border-white/10 dark:border-white/5">
              {user ? (
                <>
                  {/* User Info Mobile */}
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-green-500/20 text-green-700 dark:text-green-300">
                      <User className="h-4 w-4" />
                      <span className="text-sm font-medium">{userName}</span>
                      {isAdmin && (
                        <Shield
                          className="h-3 w-3 text-yellow-500"
                          title="Administrátor"
                        />
                      )}
                    </div>

                    {/* XP and Coins Row */}
                    <div className="flex items-center space-x-3 px-3">
                      <div className="flex items-center space-x-1 px-2 py-1 rounded-lg bg-blue-500/20 text-blue-700 dark:text-blue-300">
                        <Star className="h-3 w-3" />
                        <span className="text-xs font-medium">{xp} XP</span>
                      </div>

                      <div className="flex items-center space-x-1 px-2 py-1 rounded-lg bg-yellow-500/20 text-yellow-700 dark:text-yellow-300">
                        <Coins className="h-3 w-3" />
                        <span className="text-xs font-medium">{coins}</span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Items Mobile */}
                  {visibleNavItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                          item.adminOnly
                            ? "bg-purple-500/20 dark:bg-purple-600/30 hover:bg-purple-500/30 dark:hover:bg-purple-600/50 text-purple-700 dark:text-purple-300"
                            : "bg-white/20 dark:bg-gray-800/50 hover:bg-white/30 dark:hover:bg-gray-700/70 text-gray-900 dark:text-white"
                        }`}
                      >
                        <IconComponent className="h-5 w-5" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}

                  {/* Subjects Section Mobile */}
                  <div className="border-t border-white/10 dark:border-gray-700/50 pt-2 mt-2">
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Předměty
                    </div>
                    {subjectItems.map((subject) => (
                      <Link
                        key={subject.name}
                        to={subject.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-start space-x-3 px-3 py-2 rounded-lg bg-indigo-500/10 dark:bg-indigo-600/20 hover:bg-indigo-500/20 dark:hover:bg-indigo-600/30 text-indigo-700 dark:text-indigo-300 transition-all duration-300"
                      >
                        <BookMarked className="h-5 w-5 mt-0.5" />
                        <div>
                          <div className="font-medium">{subject.name}</div>
                          <div className="text-xs text-indigo-600/70 dark:text-indigo-400/70">
                            {subject.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Public Items */}
                  <div className="border-t border-white/10 dark:border-gray-700/50 pt-2 mt-2">
                    {publicItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-gray-500/10 dark:bg-gray-600/20 hover:bg-gray-500/20 dark:hover:bg-gray-600/30 text-gray-700 dark:text-gray-300 transition-all duration-300"
                        >
                          <IconComponent className="h-5 w-5" />
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Logout Button Mobile */}
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-600 dark:text-red-400 transition-all duration-300 mt-2"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Odhlásit se</span>
                  </button>
                </>
              ) : (
                <>
                  {/* Public Items for non-auth users */}
                  {publicItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-gray-500/10 dark:bg-gray-600/20 hover:bg-gray-500/20 dark:hover:bg-gray-600/30 text-gray-700 dark:text-gray-300 transition-all duration-300"
                      >
                        <IconComponent className="h-5 w-5" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}

                  {/* Auth Buttons Mobile */}
                  <div className="border-t border-white/10 dark:border-gray-700/50 pt-2 mt-2 space-y-2">
                    <Link
                      to="/prihlaseni"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full px-3 py-2 rounded-lg bg-white/20 dark:bg-gray-800/50 hover:bg-white/30 dark:hover:bg-gray-700/70 text-gray-900 dark:text-white text-center transition-all duration-300"
                    >
                      Přihlásit se
                    </Link>
                    <Link
                      to="/registrace"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-center transition-all duration-300"
                    >
                      Registrace
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
