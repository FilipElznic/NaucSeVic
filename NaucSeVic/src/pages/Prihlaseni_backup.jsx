import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Prihlaseni = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const { login, resetPassword, error, clearError } = useFirebaseAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if user was redirected from a protected route
    if (location.state?.protected) {
      toast.error("Pro přístup na tuto stránku se musíte přihlásit", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
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
      navigate("/"); // Redirect to home page after successful login
    } catch (err) {
      toast.error(`Přihlášení selhalo: ${err.message}`);
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Prosím zadejte svou emailovou adresu");
      return;
    }

    try {
      setIsLoading(true);
      await resetPassword(email);
      toast.success("Instrukce pro obnovení hesla byly odeslány na váš email");
      setForgotPassword(false);
    } catch (err) {
      toast.error(`Obnovení hesla selhalo: ${err.message}`);
      console.error("Password reset error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const renderForgotPasswordForm = () => {
    return (
      <div className="w-full transition-all duration-500 ease-in-out">
        <h2 className="text-2xl font-bold mb-6 text-left text-white">Obnovit heslo</h2>

        <form onSubmit={handleResetPassword} className="space-y-4">
          <div className="text-left">
            <label className="block text-sm font-medium mb-1 text-white">
              Emailová adresa
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Zadejte svůj email pro obnovení hesla"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-zinc-700 placeholder-zinc-400"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50"
          >
            {isLoading ? "Odesílání..." : "Obnovit heslo"}
          </button>

          <div className="text-left mt-4">
            <button
              type="button"
              onClick={() => setForgotPassword(false)}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Zpět na přihlášení
            </button>
          </div>
        </form>
      </div>
    );
  };

  const renderLoginForm = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500 ease-in-out">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-left text-white">Přihlášení</h2>

          <form onSubmit={handleEmailSignIn} className="space-y-4">
            <div className="text-left">
              <label className="block text-sm font-medium mb-1 text-white">
                Emailová adresa
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Zadejte svůj email"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-zinc-700 placeholder-zinc-400"
                required
              />
            </div>

            <div className="text-left">
              <label className="block text-sm font-medium mb-1 text-white">Heslo</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Zadejte své heslo"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-zinc-700 placeholder-zinc-400"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50"
            >
              {isLoading ? "Zpracovávání..." : "Přihlásit se"}
            </button>

            <div className="flex justify-end text-sm mt-4">
              <button
                type="button"
                onClick={() => setForgotPassword(true)}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Zapomenuté heslo?
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col justify-center items-center border-l border-zinc-700 pl-8 hidden md:flex">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Nemáte účet?
            </h3>
            <p className="text-zinc-400 mb-6">
              Vytvořte si bezplatný účet a získejte přístup ke všem našim službám.
            </p>
            <Link
              to="/registrace"
              className="inline-block py-3 px-8 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-md transition-colors"
            >
              Registrovat se
            </Link>
          </div>
        </div>

        {/* Mobile only register link */}
        <div className="text-center mt-4 md:hidden">
          <p className="text-zinc-400">
            Nemáte účet?{" "}
            <Link
              to="/registrace"
              className="text-white font-semibold hover:underline"
            >
              Registrovat se
            </Link>
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="relative min-h-screen text-white flex items-center justify-center p-4 overflow-hidden bg-gradient-to-br from-gray-900 via-zinc-900 to-black">
        <img
          src="/robotlast1.webp"
          alt="Robot Left"
          className="absolute top-[0%] left-[-22%] w-[50%] rotate-[30deg] object-cover"
        />

        <img
          src="/rukyhore.webp"
          alt="Robot Right"
          className="absolute bottom-[-5%] right-[-20%] w-[50%] rotate-[-25deg] object-cover"
        />

        <div className="max-w-4xl w-full bg-white/5 backdrop-blur-lg p-8 rounded-lg shadow-lg z-10 border border-white/10">
          {forgotPassword ? renderForgotPasswordForm() : renderLoginForm()}
        </div>
      </div>
    </>
  );
};
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Přihlášení do účtu
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Nebo{" "}
              <Link
                to="/registrace"
                className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300"
              >
                si vytvořte nový účet
              </Link>
            </p>
          </div>

          {/* Form container with enhanced styling */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-5">
                {/* Email input with icon */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300/50 dark:border-gray-600/50 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Email adresa"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password input with icon */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300/50 dark:border-gray-600/50 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Heslo"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Enhanced error display */}
              {error && (
                <div className="rounded-xl bg-red-50/80 dark:bg-red-900/30 border border-red-200 dark:border-red-800 p-4 backdrop-blur-sm">
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-red-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                    <div className="text-sm text-red-700 dark:text-red-300 font-medium">
                      {error}
                    </div>
                  </div>
                </div>
              )}

              {/* Enhanced submit button */}
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    {isLoading ? (
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1"
                        />
                      </svg>
                    )}
                  </span>
                  {isLoading ? "Přihlašování..." : "Přihlásit se"}
                </button>
              </div>

              {/* Remember me and forgot password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                  >
                    Zapamatovat si mě
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
                  >
                    Zapomenuté heslo?
                  </Link>
                </div>
              </div>
            </form>

            {/* Social login divider */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300/50 dark:border-gray-600/50" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white/70 dark:bg-gray-800/70 text-gray-500 dark:text-gray-400">
                    Nebo se přihlaste pomocí
                  </span>
                </div>
              </div>

              {/* Social login buttons */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg shadow-sm bg-white/50 dark:bg-gray-700/50 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50/50 dark:hover:bg-gray-600/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="ml-2">Google</span>
                </button>

                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg shadow-sm bg-white/50 dark:bg-gray-700/50 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50/50 dark:hover:bg-gray-600/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="ml-2">Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prihlaseni;
