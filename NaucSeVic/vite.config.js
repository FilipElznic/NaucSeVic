import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "three-vendor": ["three", "@react-three/fiber", "@react-three/drei"],
          "ui-vendor": ["framer-motion", "gsap", "lucide-react"],
          "firebase-vendor": [
            "firebase/app",
            "firebase/auth",
            "firebase/firestore",
            "firebase/functions",
            "firebase/storage",
          ],
          "charts-vendor": ["recharts"],
          "spline-vendor": ["@splinetool/react-spline"],
          "katex-vendor": ["katex", "react-katex"],
        },
      },
    },
  },
});
