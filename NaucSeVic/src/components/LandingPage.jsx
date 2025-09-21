import React from "react";
import Spline from "@splinetool/react-spline";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";

const LandingPage = () => {
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
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation Bar */}
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

      {/* Hero Section */}

      {/* Content Overlay */}
      <div className="relative z-10 max-full mx-auto h-screen flex items-center">
        {/* Text Content - Left Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12 text-start z-20 ">
          <div className="space-y-6 ml-32">
            {" "}
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
              Pro všechny, kdo chtějí<br></br> víc než{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                učebnici.
              </span>
            </h1>
            <p className="mt-6 text-2xl text-gray-700 dark:text-gray-300 w-2/3">
              Objevte nový způsob, jak se učit – rychleji, chytřeji a zábavněji,
              ať už doma, ve škole nebo na cestách.Objevte nový způsob
            </p>
            <button className="bg-black dark:bg-white text-white dark:text-black p-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300">
              Začít objevovat -&gt;
            </button>
          </div>
        </div>

        {/* Spline Canvas - Right Side */}
        <div className="absolute right-0 top-0 w-3/5 h-full z-10">
          <Spline
            scene="https://prod.spline.design/55DMhBmoqdqCx6zV/scene.splinecode"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose NaucSeVic?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We provide the tools and resources you need to succeed in your
              learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-xl bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 hover:shadow-lg transition duration-300">
              <div className="bg-indigo-600 dark:bg-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Expert Content
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learn from industry experts with carefully curated content that
                covers everything from basics to advanced topics.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-xl bg-gradient-to-b from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 hover:shadow-lg transition duration-300">
              <div className="bg-emerald-600 dark:bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Fast Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our optimized learning paths help you master new skills quickly
                and efficiently with hands-on practice.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-xl bg-gradient-to-b from-purple-50 to-violet-50 dark:from-gray-800 dark:to-gray-700 hover:shadow-lg transition duration-300">
              <div className="bg-violet-600 dark:bg-violet-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Community
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Join a vibrant community of learners, share knowledge, and get
                support on your learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  );
};

export default LandingPage;
