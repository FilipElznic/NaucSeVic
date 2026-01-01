import MatematikaBackground from "../math/MatematikaBackground";
import FyzikaBackground from "../ui/FyzikaBackground";
import GeometryBackground from "../geometry/GeometryBackground";
import React from "react";

// Fallback background if none exists
const DefaultBackground = ({ children }) => (
  <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
    <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-zinc-800/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
    <div className="relative z-10">{children}</div>
  </div>
);

export const backgroundMap = {
  matematika: MatematikaBackground,
  fyzika: FyzikaBackground,
  geometrie: GeometryBackground,
  // Fallbacks for others
  cestina: DefaultBackground,
  informatika: DefaultBackground,
  chemie: DefaultBackground,
};
