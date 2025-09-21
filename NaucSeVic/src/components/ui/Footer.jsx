import React from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <footer
      className={`${
        darkMode ? "bg-zinc-900 text-gray-300" : "bg-gray-100 text-gray-600"
      } transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3
              className={`text-2xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              NaucSeVic
            </h3>
            <p className="text-sm leading-relaxed max-w-md">
              Objevte nový způsob, jak se učit – rychleji, chytřeji a zábavněji.
              Vzdělávací platforma pro moderní dobu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`font-semibold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Rychlé odkazy
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className={`hover:${
                    darkMode ? "text-white" : "text-gray-900"
                  } transition-colors duration-200`}
                >
                  O nás
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:${
                    darkMode ? "text-white" : "text-gray-900"
                  } transition-colors duration-200`}
                >
                  Kurzy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:${
                    darkMode ? "text-white" : "text-gray-900"
                  } transition-colors duration-200`}
                >
                  Kontakt
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:${
                    darkMode ? "text-white" : "text-gray-900"
                  } transition-colors duration-200`}
                >
                  Podpora
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className={`font-semibold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm">
              <li>info@naucsevic.cz</li>
              <li>+420 123 456 789</li>
              <li>Praha, Česká republika</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} NaucSeVic. Všechna práva
            vyhrazena.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className={`hover:${
                darkMode ? "text-white" : "text-gray-900"
              } transition-colors duration-200`}
            >
              Podmínky použití
            </a>
            <a
              href="#"
              className={`hover:${
                darkMode ? "text-white" : "text-gray-900"
              } transition-colors duration-200`}
            >
              Ochrana soukromí
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
