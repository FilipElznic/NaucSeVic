import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const Layout = ({ children, showNavbar = true, showFooter = true }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black transition-colors duration-300">
      {showNavbar && <Navbar />}
      <main className="flex-1">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
