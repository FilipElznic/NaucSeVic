import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import { useDarkMode } from "../contexts/DarkModeContext";

const Prihlaseni = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, error, clearError } = useFirebaseAuth();
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }

    try {
      setIsLoading(true);
      clearError();
      await login(email, password);
      navigate("/"); // Redirect to home page after successful login
    } catch (err) {
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2
            className={`mt-6 text-center text-3xl font-extrabold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Přihlášení do účtu
          </h2>
          <p
            className={`mt-2 text-center text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Nebo{" "}
            <Link
              to="/registrace"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              si vytvořte nový účet
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email adresa
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400"
                    : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
                } rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Email adresa"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Heslo
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400"
                    : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
                } rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Heslo"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="rounded-md bg-red-50 dark:bg-red-900 p-4">
              <div className="text-sm text-red-700 dark:text-red-300">
                {error}
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Přihlašování..." : "Přihlásit se"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Prihlaseni;
