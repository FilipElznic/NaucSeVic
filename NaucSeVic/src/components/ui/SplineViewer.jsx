import React, { useState, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { Loader2, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

const ZOOM_STEP = 0.2;

export default function SplineViewer({ url }) {
  const [loading, setLoading] = useState(true);
  const appRef = useRef(null);
  const currentZoomRef = useRef(1);

  function onLoad(app) {
    appRef.current = app;
    setLoading(false);
  }

  function zoomIn() {
    if (appRef.current) {
      currentZoomRef.current += ZOOM_STEP;
      appRef.current.setZoom(currentZoomRef.current);
    }
  }

  function zoomOut() {
    if (appRef.current) {
      currentZoomRef.current = Math.max(
        0.1,
        currentZoomRef.current - ZOOM_STEP,
      );
      appRef.current.setZoom(currentZoomRef.current);
    }
  }

  function resetZoom() {
    if (appRef.current) {
      currentZoomRef.current = 1;
      appRef.current.setZoom(1);
    }
  }

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
        onLoad={onLoad}
        className="w-full h-full bg-zinc-800"
      />

      {!loading && (
        <>
          {/* Interaction hint */}
          <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/50 backdrop-blur-md text-white text-xs rounded-full pointer-events-none">
            Interaktivní 3D model
          </div>

          {/* Zoom controls */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            <button
              onClick={zoomIn}
              title="Přiblížit"
              className="p-2 bg-black/50 backdrop-blur-md text-white rounded-full hover:bg-black/75 active:scale-95 transition"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={zoomOut}
              title="Oddálit"
              className="p-2 bg-black/50 backdrop-blur-md text-white rounded-full hover:bg-black/75 active:scale-95 transition"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={resetZoom}
              title="Resetovat pohled"
              className="p-2 bg-black/50 backdrop-blur-md text-white rounded-full hover:bg-black/75 active:scale-95 transition"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
