import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "katex/dist/katex.min.css";
import App from "./App.jsx";

// Suppress specific Recharts warning that is benign but annoying
const originalWarn = console.warn;
const originalError = console.error;

const filterWarning = (args) => {
  const msg = args[0];
  if (
    typeof msg === "string" &&
    msg.includes(
      "The width(-1) and height(-1) of chart should be greater than 0"
    )
  ) {
    return true;
  }
  return false;
};

console.warn = (...args) => {
  if (filterWarning(args)) return;
  originalWarn(...args);
};

console.error = (...args) => {
  if (filterWarning(args)) return;
  originalError(...args);
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
