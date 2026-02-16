import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  PlayCircle,
  Box,
  Settings,
} from "lucide-react";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { user, logout } = useFirebaseAuth();
  const { isAdmin } = useAdminCheck();
  const { xp, coins, userName, pic } = useUserProfile();
  const navigator = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [subjectsDropdownOpen, setSubjectsDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [mobileSubjectsOpen, setMobileSubjectsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const userDropdownRef = useRef(null);
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
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setUserDropdownOpen(false);
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
      name: "Úkoly",
      href: "/vsechny-ukoly",
      icon: BookMarked,
      protected: true,
      adminOnly: false,
    },
    {
      name: "Simulace",
      href: "/simulace",
      icon: PlayCircle,
      protected: true,
      adminOnly: false,
    },
    {
      name: "Geometrická tělesa",
      href: "/geometricka-telesa",
      icon: Box,
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
          {/* Section 1: Logo (Left) */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                NaucSeVic
              </span>
            </Link>
          </div>

          {/* Section 2: Center Navigation (Middle) */}
          <div className="hidden xl:flex items-center justify-center space-x-4 flex-1 px-8">
            {user && (
              <>
                {/* Úkoly */}
                <Link
                  to="/vsechny-ukoly"
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/20 dark:bg-[#0B0C15]/50 hover:bg-white/30 dark:hover:bg-gray-700/70 text-gray-900 dark:text-white transition-all duration-300"
                >
                  <BookMarked className="h-4 w-4" />
                  <span className="text-sm">Úkoly</span>
                </Link>

                {/* Simulace */}
                <Link
                  to="/simulace"
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/20 dark:bg-[#0B0C15]/50 hover:bg-white/30 dark:hover:bg-gray-700/70 text-gray-900 dark:text-white transition-all duration-300"
                >
                  <PlayCircle className="h-4 w-4" />
                  <span className="text-sm">Simulace</span>
                </Link>

                {/* Geometrická tělesa */}
                <Link
                  to="/geometricka-telesa"
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/20 dark:bg-[#0B0C15]/50 hover:bg-white/30 dark:hover:bg-gray-700/70 text-gray-900 dark:text-white transition-all duration-300"
                >
                  <Box className="h-4 w-4" />
                  <span className="text-sm">Geometrická tělesa</span>
                </Link>
                <div ref={dropdownRef} className="relative">
                  <button
                    onClick={() =>
                      setSubjectsDropdownOpen(!subjectsDropdownOpen)
                    }
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/20 dark:bg-[#0B0C15]/50 hover:bg-white/30 dark:hover:bg-gray-700/70 text-gray-900 dark:text-white transition-all duration-300"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span className="text-sm">Předměty</span>
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-200 ${
                        subjectsDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {subjectsDropdownOpen && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-64 bg-white/90 dark:bg-[#0B0C15]/50 backdrop-blur-md rounded-lg shadow-xl border border-white/20 dark:border-gray-700/50 py-2 z-50">
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

                {/* Admin Only - Vytvořit úkol */}
                {isAdmin && (
                  <Link
                    to="/create-task"
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-purple-500/20 dark:bg-purple-600/30 hover:bg-purple-500/30 dark:hover:bg-purple-600/50 text-purple-700 dark:text-purple-300 transition-all duration-300"
                  >
                    <Plus className="h-4 w-4" />
                    <span className="text-sm">Vytvořit úkol</span>
                  </Link>
                )}
              </>
            )}
          </div>

          {/* Section 3: Right Side Actions (Right) */}
          <div className="hidden xl:flex items-center justify-end space-x-4 flex-shrink-0">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
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

            {/* User Profile / Auth */}
            {user ? (
              <div ref={userDropdownRef} className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center space-x-3 focus:outline-none"
                >
                  <div className="flex flex-col items-end hidden sm:block">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {userName}
                    </span>
                    {isAdmin && (
                      <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider">
                        Admin
                      </span>
                    )}
                  </div>
                  <div className="h-9 w-9 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                    {pic ? (
                      <img
                        src={pic}
                        alt="Profile"
                        className="h-full w-full rounded-full object-cover"
                      />
                    ) : (
                      <User className="h-5 w-5" />
                    )}
                  </div>
                </button>

                {userDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white/90 dark:bg-[#0B0C15]/50 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 dark:border-gray-700/50 py-3 z-50 overflow-hidden">
                    {/* User Header in Dropdown */}
                    <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-700/50 ">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                        {userName}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {user.email}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-700/50 grid grid-cols-2 gap-2">
                      <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                        <div className="flex items-center space-x-1 text-blue-600 dark:text-blue-400">
                          <Star className="h-3 w-3" />
                          <span className="text-xs font-bold">{xp}</span>
                        </div>
                        <span className="text-[10px] text-blue-500/80 dark:text-blue-400/80">
                          XP body
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
                        <div className="flex items-center space-x-1 text-yellow-600 dark:text-yellow-400">
                          <Coins className="h-3 w-3" />
                          <span className="text-xs font-bold">{coins}</span>
                        </div>
                        <span className="text-[10px] text-yellow-500/80 dark:text-yellow-400/80">
                          Mince
                        </span>
                      </div>
                    </div>

                    <div className="py-2">
                      <Link
                        to="/profil"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center space-x-3 px-5 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-200 transition-colors"
                      >
                        <Settings className="h-4 w-4" />
                        <span className="text-sm">Můj profil</span>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center space-x-3 px-5 py-2.5 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        <span className="text-sm">Odhlásit se</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/prihlaseni"
                  className="px-4 py-2 rounded-lg bg-white/20 dark:bg-[#0B0C15]/50 hover:bg-white/30 dark:hover:bg-gray-700/70 text-gray-900 dark:text-white transition-all duration-300 text-sm font-medium"
                >
                  Přihlásit
                </Link>
                <Link
                  to="/registrace"
                  className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm font-medium"
                >
                  Registrace
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center space-x-2">
            {/* Dark Mode Toggle Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white/20 dark:bg-[#0B0C15]/50 hover:bg-white/30 dark:hover:bg-gray-700/70 transition-all duration-300"
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
              className="p-2 rounded-lg bg-white/20 dark:bg-[#0B0C15]/50 hover:bg-white/30 dark:hover:bg-gray-700/70 text-gray-900 dark:text-white transition-all duration-300"
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
          <div className="xl:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 shadow-xl transition-all duration-300 ease-in-out z-40 overflow-hidden">
            <div className="px-4 py-6 space-y-4">
              {user ? (
                <>
                  {/* User Profile Section (Mobile) */}
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-[#0B0C15]/50 border border-gray-100 dark:border-gray-700">
                    <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 flex-shrink-0">
                      {pic ? (
                        <img
                          src={pic}
                          alt="Profile"
                          className="h-full w-full rounded-full object-cover"
                        />
                      ) : (
                        <User className="h-6 w-6" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-semibold text-gray-900 dark:text-white truncate">
                        {userName}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {user.email}
                      </p>
                      <div className="flex items-center space-x-3 mt-1.5">
                        <div className="flex items-center space-x-1 text-blue-600 dark:text-blue-400">
                          <Star className="h-3 w-3" />
                          <span className="text-xs font-bold">{xp}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-yellow-600 dark:text-yellow-400">
                          <Coins className="h-3 w-3" />
                          <span className="text-xs font-bold">{coins}</span>
                        </div>
                      </div>
                    </div>
                    {isAdmin && (
                      <Shield
                        className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                        title="Administrátor"
                      />
                    )}
                  </div>

                  {/* Navigation Links */}
                  <div className="space-y-2">
                    {visibleNavItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <IconComponent className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      );
                    })}

                    {/* Subjects Dropdown (Mobile) */}
                    <div className="space-y-1">
                      <button
                        onClick={() =>
                          setMobileSubjectsOpen(!mobileSubjectsOpen)
                        }
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <BookOpen className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                          <span className="font-medium">Předměty</span>
                        </div>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            mobileSubjectsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Sub-items */}
                      {mobileSubjectsOpen && (
                        <div className="pl-12 pr-4 space-y-1 py-1">
                          {subjectItems.map((subject) => (
                            <Link
                              key={subject.name}
                              to={subject.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                              {subject.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-gray-100 dark:border-gray-800 pt-4 mt-2 grid grid-cols-2 gap-3">
                    <Link
                      to="/profil"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Settings className="h-4 w-4" />
                      <span>Profil</span>
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Odhlásit</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Public Links */}
                  <div className="space-y-2 mb-6">
                    {publicItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <IconComponent className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Auth Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      to="/prihlaseni"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      Přihlásit
                    </Link>
                    <Link
                      to="/registrace"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center px-4 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 transition-all transform active:scale-95"
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
