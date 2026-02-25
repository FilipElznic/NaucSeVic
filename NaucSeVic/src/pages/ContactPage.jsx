import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  const emailUser = "elznicfilip";
  const emailDomain = "gmail.com";

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${emailUser}@${emailDomain}`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <SEO
        title="Kontakt | NaucSeVic"
        description="Máte otázky? Kontaktujte nás. Jsme tu pro vás a rádi vám pomůžeme s čímkoli ohledně platformy NaucSeVic."
      />
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600 flex items-center justify-center shadow-lg">
              <Mail className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Kontaktujte{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600">
              nás
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Máte dotaz, připomínku nebo nápad na spolupráci? Jsme tu pro vás.
          </p>
        </div>

        {/* Contact Info Card */}
        <div className="bg-white dark:bg-black rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 lg:p-12 shadow-2xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Kontaktní údaje
          </h3>

          <div className="space-y-10">
            {/* Email */}
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 dark:text-white text-lg mb-1">
                  Email
                </p>
                <a
                  href="#"
                  onClick={handleEmailClick}
                  className="text-lg text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
                >
                  {emailUser}@{emailDomain}
                </a>
              </div>
            </div>

            {/* Phone (Optional placeholder or removal if not needed, keeping as per request context but maybe placeholder) */}
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-800 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-50 dark:bg-indigo-900/10 rounded-full">
              <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
              <p className="text-sm font-medium text-indigo-700 dark:text-indigo-400">
                Odpovídáme obvykle do 24 hodin
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
