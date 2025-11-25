import { useEffect, useState } from "react";
import { getGeometricBodies } from "../../services/geometryService";
import Spline from "@splinetool/react-spline";
import { Box, Circle, Cuboid, Triangle, Cylinder, Pyramid } from "lucide-react";

const GeometryGallery = () => {
  const [bodies, setBodies] = useState([]);
  const [filter, setFilter] = useState("all"); // all, 2d, 3d
  const [activeModel, setActiveModel] = useState(null); // ID of the body with active 3D view

  useEffect(() => {
    const fetchBodies = async () => {
      const data = await getGeometricBodies();
      setBodies(data);
    };
    fetchBodies();
  }, []);

  const filteredBodies = bodies.filter((body) => {
    if (filter === "all") return true;
    return body.type === filter;
  });

  if (bodies.length === 0) {
    return null;
  }

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Geometrická Tělesa
          </h2>

          {/* Filter Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === "all"
                  ? "bg-white dark:bg-slate-700 text-black dark:text-white shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white"
              }`}
            >
              Vše
            </button>
            <button
              onClick={() => setFilter("2d")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === "2d"
                  ? "bg-white dark:bg-slate-700 text-black dark:text-white shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white"
              }`}
            >
              2D Útvary
            </button>
            <button
              onClick={() => setFilter("3d")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === "3d"
                  ? "bg-white dark:bg-slate-700 text-black dark:text-white shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white"
              }`}
            >
              3D Tělesa
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredBodies.map((body) => (
            <div
              key={body.id}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:border-green-500 dark:hover:border-purple-500 transition-all duration-300 flex flex-col md:flex-row gap-6 group"
            >
              {/* Left Column: Visuals */}
              <div className="w-full md:w-5/12 flex flex-col gap-4">
                <div className="aspect-square rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 overflow-hidden relative">
                  {activeModel === body.id && body.assets?.spline_url ? (
                    <div className="w-full h-full">
                      <Spline scene={body.assets.spline_url} />
                      <button
                        onClick={() => setActiveModel(null)}
                        className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded hover:bg-black/70 transition-colors z-10"
                      >
                        Zavřít 3D
                      </button>
                    </div>
                  ) : (
                    <>
                      {body.assets?.image_url ? (
                        <img
                          src={body.assets.image_url}
                          alt={body.name}
                          className="w-full h-full object-contain p-4"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                          No Image
                        </div>
                      )}

                      {body.assets?.spline_url && (
                        <button
                          onClick={() => setActiveModel(body.id)}
                          className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/80 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                        >
                          Zobrazit 3D
                        </button>
                      )}
                    </>
                  )}

                  <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 dark:bg-black/50 backdrop-blur-md rounded text-[10px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    {body.type}
                  </div>
                </div>
              </div>

              {/* Right Column: Info & Formulas */}
              <div className="w-full md:w-7/12 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                    {body.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {body.description}
                  </p>
                </div>

                <div className="mt-auto space-y-3">
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                    Vzorce
                  </h4>
                  {body.formulas &&
                    Object.entries(body.formulas).map(([key, formula]) => (
                      <div
                        key={key}
                        className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-700/50"
                      >
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {formula.name}
                        </span>
                        <code className="text-sm font-mono font-bold text-green-600 dark:text-purple-400 bg-green-50 dark:bg-purple-900/20 px-2 py-1 rounded">
                          {formula.formula}
                        </code>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeometryGallery;
