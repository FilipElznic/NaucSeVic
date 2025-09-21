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
  const { login, resetPassword, clearError } = useFirebaseAuth();
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

        <div className="hidden md:flex flex-col justify-center items-center border-l border-zinc-700 pl-8">
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

export default Prihlaseni;