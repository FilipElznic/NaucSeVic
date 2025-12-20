import { useEffect, useState, useRef } from "react";
import { getGeometricBodies } from "../../services/geometryService";
import Spline from "@splinetool/react-spline";
import {
  Box,
  Circle,
  Cuboid,
  Triangle,
  Cylinder,
  Pyramid,
  ImageOff,
  Maximize2,
  Minimize2,
  Info,
  Calculator,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BodyImage = ({ src, alt }) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
        <ImageOff size={32} className="mb-3 opacity-40" />
        <span className="text-xs font-medium uppercase tracking-wider opacity-60">
          Obrázek nedostupný
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain p-8 drop-shadow-2xl"
      onError={() => setError(true)}
    />
  );
};

const KatexFormula = ({ formula }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && window.katex) {
      try {
        window.katex.render(formula, containerRef.current, {
          throwOnError: false,
          displayMode: false,
        });
      } catch (e) {
        console.error("KaTeX error:", e);
        containerRef.current.innerText = formula;
      }
    }
  }, [formula]);

  return (
    <span
      ref={containerRef}
      className="text-lg font-bold text-slate-800 dark:text-slate-100"
    />
  );
};

const GeometryGallery = () => {
  const [bodies, setBodies] = useState([]);
  const [selectedBody, setSelectedBody] = useState(null);
  const [is3DActive, setIs3DActive] = useState(false);

  useEffect(() => {
    const fetchBodies = async () => {
      const data = await getGeometricBodies();
      setBodies(data);
      if (data.length > 0) {
        setSelectedBody(data[0]);
      }
    };
    fetchBodies();
  }, []);

  if (bodies.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-blue-500 animate-spin" />
          <span className="text-slate-400 font-medium">Načítám modely...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-180px)] bg-white dark:bg-black rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
      {/* Left Sidebar - Navigation */}
      <div className="w-full lg:w-72 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 flex flex-col">
        <div className="p-4 lg:p-6 h-full flex flex-col">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 hidden lg:block">
            Knihovna těles
          </h2>
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto no-scrollbar pb-2 lg:pb-0">
            {bodies.map((body) => (
              <button
                key={body.id}
                onClick={() => {
                  setSelectedBody(body);
                  setIs3DActive(false);
                }}
                className={`flex-shrink-0 lg:w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between group whitespace-nowrap lg:whitespace-normal ${
                  selectedBody?.id === body.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white dark:bg-slate-800 lg:bg-transparent hover:bg-white dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border lg:border-0 border-slate-200 dark:border-slate-700"
                }`}
              >
                <span className="font-medium text-sm lg:text-base">
                  {body.name}
                </span>
                {selectedBody?.id === body.id && (
                  <ChevronRight
                    size={16}
                    className="opacity-80 hidden lg:block"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {selectedBody && (
          <>
            {/* Center - Visual Stage */}
            <div className="flex-1 relative bg-slate-100 dark:bg-slate-900/50 flex flex-col min-h-[50vh] lg:min-h-0">
              <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 dark:bg-black/50 backdrop-blur border border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 shadow-sm">
                  {selectedBody.type === "3d" ? "3D Těleso" : "2D Útvar"}
                </span>
              </div>

              <div className="flex-1 relative w-full h-full">
                <AnimatePresence mode="wait">
                  {is3DActive && selectedBody.assets?.spline_url ? (
                    <motion.div
                      key="3d"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0"
                    >
                      <Spline scene={selectedBody.assets.spline_url} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="image"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 p-8 lg:p-12 flex items-center justify-center"
                    >
                      <BodyImage
                        src={selectedBody.assets?.image_url}
                        alt={selectedBody.name}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 3D Toggle Control */}
                {selectedBody.assets?.spline_url && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1 p-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur rounded-full border border-slate-200 dark:border-slate-700 shadow-xl z-20">
                    <button
                      onClick={() => setIs3DActive(false)}
                      className={`px-4 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-bold transition-all ${
                        !is3DActive
                          ? "bg-slate-900 dark:bg-white text-white dark:text-black shadow-md"
                          : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      Obrázek
                    </button>
                    <button
                      onClick={() => setIs3DActive(true)}
                      className={`px-4 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-bold transition-all ${
                        is3DActive
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-slate-500 hover:text-blue-600"
                      }`}
                    >
                      3D Model
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Sidebar - Info Panel */}
            <div className="w-full lg:w-[400px] bg-white dark:bg-black border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 flex flex-col h-auto lg:h-full overflow-y-auto custom-scrollbar">
              <div className="p-6 lg:p-8 space-y-8">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    {selectedBody.name}
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base lg:text-lg">
                    {selectedBody.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400">
                    <Calculator size={20} />
                    <h3 className="text-sm font-bold uppercase tracking-wider">
                      Vzorce a výpočty
                    </h3>
                  </div>

                  <div className="grid gap-4">
                    {selectedBody.formulas &&
                      Object.entries(selectedBody.formulas).map(
                        ([key, formula]) => (
                          <div
                            key={key}
                            className="group p-4 lg:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-300"
                          >
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-hover:text-blue-500 transition-colors">
                              {formula.name}
                            </div>
                            <div className="flex items-center justify-between overflow-x-auto no-scrollbar">
                              <KatexFormula formula={formula.formula} />
                            </div>
                          </div>
                        )
                      )}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border border-blue-100 dark:border-blue-900/20">
                  <div className="flex gap-3 mb-3">
                    <Info className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <h4 className="font-bold text-blue-900 dark:text-blue-100">
                      Věděli jste?
                    </h4>
                  </div>
                  <p className="text-sm text-blue-800/80 dark:text-blue-200/70 leading-relaxed">
                    {selectedBody.type === "3d"
                      ? "Tento prostorový útvar se často vyskytuje v architektuře a přírodě. Jeho vlastnosti jsou klíčové pro stavebnictví."
                      : "Tento rovinný útvar je základním stavebním kamenem složitějších geometrických struktur."}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GeometryGallery;
