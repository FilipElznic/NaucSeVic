import React, { Suspense, lazy, useState } from "react";
import { BlockMath } from "react-katex";
import { Box, Play, RotateCw } from "lucide-react";
import "katex/dist/katex.min.css";
import LoadingSpinner from "../ui/LoadingSpinner";

const SplineViewer = lazy(() => import("../ui/SplineViewer"));

const GeometricBodyCard = ({ body }) => {
  const { name, description, formulas, type, assets } = body;
  const spline_url = body.spline_url || assets?.spline_url;
  const image_url =
    body.image || body.image_url || assets?.image || assets?.image_url;
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-slate-600 dark:border-zinc-800 overflow-hidden flex flex-col xl:flex-row shadow-sm hover:shadow-xl transition-all duration-300 group/card">
      {/* Visual Section - Takes up 50% width on large screens */}
      <div className="w-full xl:w-1/2 min-h-[400px] xl:min-h-[500px] bg-slate-50 dark:bg-zinc-950 relative border-b xl:border-b-0 xl:border-r border-slate-100 dark:border-zinc-800">
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="px-3 py-1 bg-white/80 dark:bg-zinc-900/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider border border-slate-200 dark:border-zinc-700 text-slate-800 dark:text-gray-100 shadow-sm">
            {type ? (type === "2d" ? "2D Útvar" : "3D Těleso") : "Geometrie"}
          </span>
        </div>

        {spline_url ? (
          showModel ? (
            <div className="w-full h-full relative group/viewer">
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <LoadingSpinner size="lg" />
                  </div>
                }
              >
                <SplineViewer url={spline_url} />
              </Suspense>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowModel(false);
                }}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover/viewer:opacity-100 z-20"
                title="Zavřít model a ušetřit paměť"
              >
                <RotateCw size={14} className="animate-in spin-in-180" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowModel(true)}
              className="w-full h-full relative flex flex-col items-center justify-center p-8 cursor-pointer group overflow-hidden"
            >
              {image_url && (
                <>
                  <img
                    src={image_url}
                    alt={name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                  />
                  <div className="absolute inset-0 bg-zinc-800/80 dark:bg-zinc-950/80 group-hover:bg-zinc-800/60 dark:group-hover:bg-zinc-950/60 transition-all duration-300" />
                </>
              )}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-blue-50/90 dark:bg-blue-900/40 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ring-1 ring-blue-100 dark:ring-blue-800 shadow-sm">
                  <Play
                    className="w-8 h-8 text-blue-600 dark:text-blue-400 ml-1"
                    fill="currentColor"
                  />
                </div>
                <p className="text-sm font-bold text-gray-100 dark:text-gray-100">
                  Spustit 3D Model
                </p>
                <p className="text-xs text-gray-300 dark:text-gray-400 mt-1 text-center font-medium max-w-[200px]">
                  Klikněte pro načtení interaktivní simulace
                </p>
              </div>
            </button>
          )
        ) : image_url ? (
          <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
            <img
              src={image_url}
              alt={name}
              loading="lazy"
              className="w-full h-full object-contain p-8 bg-zinc-800 dark:bg-zinc-950"
            />
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 dark:text-gray-600 p-8">
            <div className="w-32 h-32 rounded-2xl border-2 border-dashed border-slate-300 dark:border-zinc-700 flex items-center justify-center mb-4">
              <Box size={48} strokeWidth={1.5} />
            </div>
            <p className="text-sm font-medium">
              3D Model zatím není k dispozici
            </p>
            <p className="text-xs opacity-60 mt-2 text-center max-w-xs">
              Vizuální reprezentace tohoto tělesa bude brzy přidána.
            </p>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="w-full xl:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col bg-white dark:bg-zinc-900">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
            {name}
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Formulas Grid */}
        {formulas && Object.keys(formulas).length > 0 && (
          <div className="mt-auto">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-slate-200 dark:bg-zinc-700"></span>
              Klíčové vzorce
              <span className="flex-1 h-[1px] bg-slate-200 dark:bg-zinc-700"></span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(formulas).map(([key, data]) => (
                <div
                  key={key}
                  className="bg-slate-50 dark:bg-zinc-950/30 rounded-2xl p-5 border border-slate-100 dark:border-zinc-800 hover:border-blue-500/30 hover:shadow-md transition-all duration-300 group/formula"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-700 dark:text-gray-300 group-hover/formula:text-blue-600 dark:group-hover/formula:text-blue-400 transition-colors">
                      {data.name}
                    </span>
                  </div>
                  <div className="overflow-x-auto custom-scrollbar pb-1">
                    <div className="text-base text-slate-900 dark:text-gray-100 min-w-max">
                      <BlockMath math={data.formula} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeometricBodyCard;
