import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import { Loader2 } from "lucide-react";

export default function SplineViewer({ url }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full h-full relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-800 border border-gray-500 dark:border-zinc-700">
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
          <Loader2 className="w-8 h-8 animate-spin mb-2" />
          <span className="text-sm font-medium">Načítání 3D modelu...</span>
        </div>
      )}
      <Spline
        scene={url}
        onLoad={() => setLoading(false)}
        className="w-full h-full"
      />

      {/* Overlay for interaction hint if needed */}
      {!loading && (
        <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/50 backdrop-blur-md text-white text-xs rounded-full pointer-events-none">
          Interaktivní 3D model
        </div>
      )}
    </div>
  );
}
