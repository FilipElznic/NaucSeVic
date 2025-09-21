import React from "react";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import { useDarkMode } from "../contexts/DarkModeContext";

const Layout = ({ children, showNavbar = true, showFooter = true }) => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black" : "bg-white"
      } transition-colors duration-300`}
    >
      {showNavbar && <Navbar />}
      <main className="flex-1">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
