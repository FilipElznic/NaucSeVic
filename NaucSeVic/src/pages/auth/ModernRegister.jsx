import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebaseAuth } from "../../contexts/FirebaseAuthContext";
import {
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import { cloudFunctionsService } from "../../services/cloudFunctions";
import { toast } from "react-toastify";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  BookOpen,
  Check,
} from "lucide-react";
import { gsap } from "gsap";
import FloatingOrbs from "../../components/ui/FloatingOrbs";
import { useDarkMode } from "../../contexts/DarkModeContext";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

const ModernRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { register, clearError } = useFirebaseAuth();
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Animate on mount
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      );
    }

    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.2, ease: "power2.out" },
      );
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validatePassword = (password) => {
    const requirements = {
      length: password.length >= 6,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
    };
    return requirements;
  };

  const passwordRequirements = validatePassword(formData.password);
  const isPasswordValid = Object.values(passwordRequirements).every(
    (req) => req,
  );

  const handleEmailSignUp = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error("Prosím vyplňte všechna pole", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    if (!agreedToTerms) {
      toast.error("Musíte souhlasit s podmínkami používání", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Hesla se neshodují. Zkontrolujte prosím obě pole.", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    if (!isPasswordValid) {
      const missingRequirements = [];
      if (!passwordRequirements.length)
        missingRequirements.push("minimálně 6 znaků");
      if (!passwordRequirements.uppercase)
        missingRequirements.push("velké písmeno");
      if (!passwordRequirements.lowercase)
        missingRequirements.push("malé písmeno");
      if (!passwordRequirements.number) missingRequirements.push("číslo");

      console.log("Register: Missing requirements:", missingRequirements);
      toast.error(`Heslo musí obsahovat: ${missingRequirements.join(", ")}`, {
        position: "top-right",
        autoClose: 7000,
      });
      return;
    }

    try {
      setIsLoading(true);
      clearError();

      // Register the user with Firebase Auth
      await register(email, password, `${firstName} ${lastName}`);

      // Initialize user profile in database
      try {
        await cloudFunctionsService.initializeUserProfile(firstName, lastName);
        toast.success("Registrace byla úspěšná! Váš profil byl vytvořen.");
      } catch (profileError) {
        console.error("Profile creation error:", profileError);
        toast.warning(
          "Registrace úspěšná, ale profil nebyl vytvořen. Bude vytvořen později.",
        );
      }

      navigate("/");
    } catch (err) {
      console.error("Registration error:", err);

      // Provide user-friendly error messages
      let errorMessage = "Registrace selhala";

      if (err.code === "auth/email-already-in-use") {
        errorMessage = "Tento email je již registrován. Zkuste se přihlásit.";
      } else if (err.code === "auth/invalid-email") {
        errorMessage = "Neplatný formát emailu. Zkontrolujte prosím email.";
      } else if (err.code === "auth/weak-password") {
        errorMessage = "Heslo je příliš slabé. Použijte silnější heslo.";
      } else if (err.code === "auth/network-request-failed") {
        errorMessage = "Chyba připojení. Zkontrolujte internetové připojení.";
      } else if (err.message) {
        errorMessage = `Registrace selhala: ${err.message}`;
      }

      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      setIsLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // Get user info from Google
      const user = result.user;
      const displayName = user.displayName || "";
      const [firstName = "", lastName = ""] = displayName.split(" ");

      // Initialize profile
      try {
        await cloudFunctionsService.initializeUserProfile(firstName, lastName);
        toast.success("Registrace přes Google byla úspěšná!");
      } catch (profileError) {
        console.error("Profile creation error:", profileError);
        toast.warning("Registrace úspěšná, profil bude vytvořen později.");
      }

      navigate("/");
    } catch (err) {
      toast.error(`Registrace přes Google selhala: ${err.message}`);
      console.error("Google sign-up error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGithubSignUp = async () => {
    try {
      setIsLoading(true);
      const provider = new OAuthProvider("github.com");
      const result = await signInWithPopup(auth, provider);

      // Get user info from GitHub
      const user = result.user;
      const displayName = user.displayName || "";
      const [firstName = "", lastName = ""] = displayName.split(" ");

      // Initialize profile
      try {
        await cloudFunctionsService.initializeUserProfile(firstName, lastName);
        toast.success("Registrace přes GitHub byla úspěšná!");
      } catch (profileError) {
        console.error("Profile creation error:", profileError);
        toast.warning("Registrace úspěšná, profil bude vytvořen později.");
      }

      navigate("/");
    } catch (err) {
      toast.error(`Registrace přes GitHub selhala: ${err.message}`);
      console.error("GitHub sign-up error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-white dark:bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <FloatingOrbs count={5} colors={["indigo", "purple", "pink"]} />

      {/* Animated Waves - Bottom */}
      <div className="absolute bottom-0 left-0 w-full opacity-30 dark:opacity-10">
        <svg
          className="w-full h-64"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="wave-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            fill="url(#wave-gradient)"
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            fill="url(#wave-gradient)"
            d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,224C672,224,768,192,864,181.3C960,171,1056,181,1152,192C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Corner Quarter Circles */}
      <div className="absolute top-0 left-0 w-64 h-64">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-600/30 dark:border-indigo-400/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64">
        <div className="absolute bottom-0 right-0 w-full h-full border-4 border-purple-600/30 dark:border-purple-400/30 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-2xl w-full relative z-10 overflow-y-auto max-h-[95vh] py-4">
        {/* Compact Header */}
        <div ref={headerRef} className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600 rounded-2xl shadow-lg">
              <BookOpen className="h-7 w-7 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            Vytvořte si účet
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Začněte se učit ještě dnes
          </p>
        </div>

        {/* Form Card */}
        <div
          ref={cardRef}
          className="bg-white dark:bg-zinc-900 border border-gray-500 dark:border-gray-800 p-6 relative overflow-hidden group hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-500"
        >
          {/* Gradient corners */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-transparent" />
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-indigo-600/20 via-purple-600/20 to-transparent" />

          <form onSubmit={handleEmailSignUp} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-xs font-medium text-gray-700 dark:text-zinc-300 mb-1"
                >
                  Jméno
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-gray-400 dark:text-zinc-500" />
                  </div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:border-indigo-600 dark:focus:border-indigo-400 dark:bg-zinc-700 dark:text-white transition-colors"
                    placeholder="Jan"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-xs font-medium text-gray-700 dark:text-zinc-300 mb-1"
                >
                  Příjmení
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:border-indigo-600 dark:focus:border-indigo-400 dark:bg-zinc-700 dark:text-white transition-colors"
                  placeholder="Novák"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-gray-700 dark:text-zinc-300 mb-1"
              >
                Email adresa
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400 dark:text-zinc-500" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:border-indigo-600 dark:focus:border-indigo-400 dark:bg-zinc-700 dark:text-white transition-colors"
                  placeholder="vas@email.cz"
                />
              </div>
            </div>

            {/* Password Fields in Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-medium text-gray-700 dark:text-zinc-300 mb-1"
                >
                  Heslo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400 dark:text-zinc-500" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-10 py-2 text-sm border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:border-indigo-600 dark:focus:border-indigo-400 dark:bg-zinc-700 dark:text-white transition-colors"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-xs font-medium text-gray-700 dark:text-zinc-300 mb-1"
                >
                  Potvrdit heslo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400 dark:text-zinc-500" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-10 py-2 text-sm border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:border-indigo-600 dark:focus:border-indigo-400 dark:bg-zinc-700 dark:text-white transition-colors"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Password Requirements Indicator */}
            {formData.password && (
              <div className="bg-gray-50 dark:bg-zinc-800 border border-gray-500 dark:border-zinc-700 rounded-lg p-3 space-y-2">
                <p className="text-xs font-medium text-gray-700 dark:text-zinc-300 mb-2">
                  Požadavky na heslo:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center space-x-2">
                    {passwordRequirements.length ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <div className="h-4 w-4 rounded-full border-2 border-gray-300 dark:border-zinc-600" />
                    )}
                    <span
                      className={
                        passwordRequirements.length
                          ? "text-green-600 dark:text-green-400"
                          : "text-gray-500 dark:text-zinc-400"
                      }
                    >
                      Minimálně 6 znaků
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {passwordRequirements.uppercase ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <div className="h-4 w-4 rounded-full border-2 border-gray-300 dark:border-zinc-600" />
                    )}
                    <span
                      className={
                        passwordRequirements.uppercase
                          ? "text-green-600 dark:text-green-400"
                          : "text-gray-500 dark:text-zinc-400"
                      }
                    >
                      Velké písmeno
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {passwordRequirements.lowercase ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <div className="h-4 w-4 rounded-full border-2 border-gray-300 dark:border-zinc-600" />
                    )}
                    <span
                      className={
                        passwordRequirements.lowercase
                          ? "text-green-600 dark:text-green-400"
                          : "text-gray-500 dark:text-zinc-400"
                      }
                    >
                      Malé písmeno
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {passwordRequirements.number ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <div className="h-4 w-4 rounded-full border-2 border-gray-300 dark:border-zinc-600" />
                    )}
                    <span
                      className={
                        passwordRequirements.number
                          ? "text-green-600 dark:text-green-400"
                          : "text-gray-500 dark:text-zinc-400"
                      }
                    >
                      Číslo
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Password Match Indicator */}
            {formData.password && formData.confirmPassword && (
              <div
                className={`flex items-center space-x-2 text-sm p-2 rounded-lg ${
                  formData.password === formData.confirmPassword
                    ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                    : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400"
                }`}
              >
                {formData.password === formData.confirmPassword ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span className="text-xs">Hesla se shodují</span>
                  </>
                ) : (
                  <>
                    <div className="h-4 w-4 rounded-full border-2 border-current" />
                    <span className="text-xs">Hesla se neshodují</span>
                  </>
                )}
              </div>
            )}

            {/* Compact Terms */}
            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 dark:border-zinc-600 rounded focus:ring-indigo-600"
              />
              <label
                htmlFor="terms"
                className="ml-2 text-xs text-gray-600 dark:text-zinc-400"
              >
                Souhlasím s{" "}
                <Link
                  to="/terms"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  podmínkami
                </Link>{" "}
                a{" "}
                <Link
                  to="/privacy"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  ochranou soukromí
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !isPasswordValid || !agreedToTerms}
              className="w-full flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600 hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {isLoading ? (
                <LoadingSpinner size="sm" className="border-white" />
              ) : (
                <>
                  Vytvořit účet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </button>

            {/* Helper text for disabled button */}
            {!isLoading && (!isPasswordValid || !agreedToTerms) && (
              <div className="text-center">
                <p className="text-xs text-gray-500 dark:text-zinc-400">
                  {!agreedToTerms && !isPasswordValid
                    ? "Vyplňte požadavky na heslo a odsouhlaste podmínky"
                    : !agreedToTerms
                      ? "Musíte souhlasit s podmínkami používání"
                      : "Heslo musí splňovat všechny požadavky"}
                </p>
              </div>
            )}
          </form>

          {/* Social Sign Up Options */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-zinc-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-zinc-800 text-gray-500 dark:text-zinc-400">
                  Nebo se zaregistrujte s
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={handleGoogleSignUp}
                disabled={isLoading}
                className="w-full inline-flex justify-center items-center px-4 py-3 border border-gray-300 dark:border-gray-700 shadow-sm bg-white dark:bg-zinc-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-700 hover:border-purple-500/50 dark:hover:border-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>

              <button
                type="button"
                onClick={handleGithubSignUp}
                disabled={isLoading}
                className="w-full inline-flex justify-center items-center px-4 py-3 border border-gray-300 dark:border-gray-700 shadow-sm bg-white dark:bg-zinc-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-700 hover:border-purple-500/50 dark:hover:border-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-6 text-center pt-6 border-t border-gray-500 dark:border-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Už máte účet?{" "}
              <Link
                to="/prihlaseni"
                className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600 hover:opacity-80"
              >
                Přihlaste se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernRegister;
