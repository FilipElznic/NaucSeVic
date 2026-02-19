import React from "react";
import { ToastContainer } from "react-toastify";
import { useDarkMode } from "../../contexts/DarkModeContext";
import "react-toastify/dist/ReactToastify.css";

const ThemedToastContainer = () => {
  const { darkMode } = useDarkMode();

  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={darkMode ? "dark" : "colored"}
      style={{ zIndex: 9999 }}
    />
  );
};

export default ThemedToastContainer;
