import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import { useDarkMode } from "../contexts/DarkModeContext";

const Registrace = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState("");
  const { register, error, clearError } = useFirebaseAuth();
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear validation error when user starts typing
    if (validationError) {
      setValidationError("");
    }
  };

  const validateForm = () => {
    if (!formData.displayName.trim()) {
      setValidationError("Jméno je povinné");
      return false;
    }
    if (!formData.email.trim()) {
      setValidationError("Email je povinný");
      return false;
    }
    if (formData.password.length < 6) {
      setValidationError("Heslo musí mít alespoň 6 znaků");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setValidationError("Hesla se neshodují");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setIsLoading(true);
      setValidationError("");
      clearError();
      await register(formData.email, formData.password, formData.displayName);
      navigate("/"); // Redirect to home page after successful registration
    } catch (err) {
      console.error("Registration error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const displayError = validationError || error;

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
            Vytvoření nového účtu
          </h2>
          <p
            className={`mt-2 text-center text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Nebo{" "}
            <Link
              to="/prihlaseni"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              se přihlaste do existujícího účtu
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="displayName" className="sr-only">
                Jméno
              </label>
              <input
                id="displayName"
                name="displayName"
                type="text"
                required
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400"
                    : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
                } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Vaše jméno"
                value={formData.displayName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email adresa
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400"
                    : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
                } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Email adresa"
                value={formData.email}
                onChange={handleChange}
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
                autoComplete="new-password"
                required
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400"
                    : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
                } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Heslo (alespoň 6 znaků)"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Potvrzení hesla
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400"
                    : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
                } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Potvrzení hesla"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {displayError && (
            <div className="rounded-md bg-red-50 dark:bg-red-900 p-4">
              <div className="text-sm text-red-700 dark:text-red-300">
                {displayError}
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Vytváření účtu..." : "Vytvořit účet"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registrace;
