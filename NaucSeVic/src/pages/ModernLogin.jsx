import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import { toast, ToastContainer } from "react-toastify";
import { Eye, EyeOff, Mail, Lock, ArrowRight, BookOpen } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";

const ModernLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const { login, resetPassword, clearError } = useFirebaseAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if user was redirected from a protected route
    if (location.state?.protected) {
      toast.error("Pro přístup na tuto stránku se musíte přihlásit", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  }, [location]);

  const handleEmailSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Prosím vyplňte všechna pole");
      return;
    }

    try {
      setIsLoading(true);
      clearError();
      await login(email, password);
      toast.success("Přihlášení bylo úspěšné!");

      // Redirect to intended page or dashboard
      const from = location.state?.from?.pathname || "/dashboard";
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(`Přihlášení selhalo: ${err.message}`);
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Prosím zadejte váš email");
      return;
    }

    try {
      setIsLoading(true);
      await resetPassword(email);
      toast.success("Email pro obnovení hesla byl odeslán!");
      setForgotPassword(false);
    } catch (err) {
      toast.error(`Chyba při odesílání emailu: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-indigo-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {forgotPassword ? "Obnovit heslo" : "Vítejte zpět"}
          </h2>
          <p className="text-gray-600 dark:text-zinc-400">
            {forgotPassword
              ? "Zadejte svůj email pro obnovení hesla"
              : "Přihlaste se do svého účtu"}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl border border-gray-200 dark:border-zinc-700 p-8">
          <form
            onSubmit={forgotPassword ? handleForgotPassword : handleEmailSignIn}
            className="space-y-6"
          >
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2"
              >
                Email adresa
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 dark:text-zinc-500" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:text-white transition-colors"
                  placeholder="vas@email.cz"
                />
              </div>
            </div>

            {/* Password Field */}
            {!forgotPassword && (
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2"
                >
                  Heslo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 dark:text-zinc-500" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-zinc-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:text-white transition-colors"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300" />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  {forgotPassword ? "Odeslat email" : "Přihlásit se"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-6 space-y-4">
            {!forgotPassword && (
              <div className="text-center">
                <button
                  onClick={() => setForgotPassword(true)}
                  className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium"
                >
                  Zapomněli jste heslo?
                </button>
              </div>
            )}

            {forgotPassword && (
              <div className="text-center">
                <button
                  onClick={() => setForgotPassword(false)}
                  className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium"
                >
                  ← Zpět na přihlášení
                </button>
              </div>
            )}

            {!forgotPassword && (
              <div className="text-center pt-4 border-t border-gray-200 dark:border-zinc-700">
                <p className="text-sm text-gray-600 dark:text-zinc-400">
                  Nemáte účet?{" "}
                  <Link
                    to="/registrace"
                    className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
                  >
                    Zaregistrujte se
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            to="/"
            className="text-sm text-gray-500 dark:text-zinc-500 hover:text-gray-700 dark:hover:text-zinc-300"
          >
            ← Zpět na hlavní stránku
          </Link>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ModernLogin;
