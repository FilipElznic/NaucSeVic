import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registrace = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signup, clearError } = useFirebaseAuth();
  const navigate = useNavigate();

  const handleEmailSignUp = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error("Prosím vyplňte všechna pole");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Hesla se neshodují");
      return;
    }

    if (password.length < 6) {
      toast.error("Heslo musí mít alespoň 6 znaků");
      return;
    }

    try {
      setIsLoading(true);
      clearError();
      await signup(email, password);
      toast.success("Registrace byla úspěšná! Vítejte!");
      navigate("/"); // Redirect to home page after successful registration
    } catch (err) {
      toast.error(`Registrace selhala: ${err.message}`);
      console.error("Registration error:", err);
    } finally {
      setIsLoading(false);
    }
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-left text-white">Registrace</h2>

              <form onSubmit={handleEmailSignUp} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-left">
                    <label className="block text-sm font-medium mb-1 text-white">
                      Křestní jméno
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Zadejte své křestní jméno"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-zinc-700 placeholder-zinc-400"
                      required
                    />
                  </div>

                  <div className="text-left">
                    <label className="block text-sm font-medium mb-1 text-white">
                      Příjmení
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Zadejte své příjmení"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-zinc-700 placeholder-zinc-400"
                      required
                    />
                  </div>
                </div>

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
                    placeholder="Zadejte své heslo (min. 6 znaků)"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-zinc-700 placeholder-zinc-400"
                    required
                    minLength={6}
                  />
                </div>

                <div className="text-left">
                  <label className="block text-sm font-medium mb-1 text-white">
                    Potvrzení hesla
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Zadejte heslo znovu"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-zinc-700 placeholder-zinc-400"
                    required
                    minLength={6}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50"
                >
                  {isLoading ? "Zpracovávání..." : "Registrovat se"}
                </button>
              </form>
            </div>

            <div className="hidden md:flex flex-col justify-center items-center border-l border-zinc-700 pl-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Již máte účet?
                </h3>
                <p className="text-zinc-400 mb-6">
                  Přihlaste se do svého existujícího účtu a pokračujte v učení.
                </p>
                <Link
                  to="/prihlaseni"
                  className="inline-block py-3 px-8 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-md transition-colors"
                >
                  Přihlásit se
                </Link>
              </div>
            </div>

            {/* Mobile only login link */}
            <div className="text-center mt-4 md:hidden">
              <p className="text-zinc-400">
                Již máte účet?{" "}
                <Link
                  to="/prihlaseni"
                  className="text-white font-semibold hover:underline"
                >
                  Přihlásit se
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrace;