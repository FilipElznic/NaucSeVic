import React, { useEffect, useState, useMemo, Suspense } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

const GeometricBodyCard = React.lazy(
  () => import("../../components/geometry/GeometricBodyCard"),
);

const SimulationsPage = () => {
  const [bodies, setBodies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchBodies = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "geometricBodies"));
        const bodiesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Sort bodies if needed (optional)
        // bodiesData.sort((a, b) => a.name.localeCompare(b.name));
        setBodies(bodiesData);
      } catch (err) {
        console.error("Error fetching geometric bodies:", err);
        setError("Nepodařilo se načíst data z databáze.");
      } finally {
        setLoading(false);
      }
    };

    fetchBodies();
  }, []);

  const filteredBodies = useMemo(() => {
    return bodies.filter((body) => {
      if (filter === "all") return true;
      return body.type === filter;
    });
  }, [bodies, filter]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6 font-medium"
          >
            <ArrowLeft size={20} />
            Zpět na hlavní stránku
          </Link>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
              Interaktivní{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Simulace
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Vyberte si těleso a prozkoumejte jeho vlastnosti v 3D prostoru.
              Měňte parametry, sledujte změny v reálném čase a pochopte
              geometrii do hloubky.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            { id: "all", label: "Vše" },
            { id: "2d", label: "2D Útvary" },
            { id: "3d", label: "3D Tělesa" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === item.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105"
                  : "bg-white dark:bg-zinc-900 text-slate-600 dark:text-gray-400 hover:bg-white hover:text-blue-600 hover:shadow-md dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-800"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
          </div>
        ) : error ? (
          <div className="text-center p-12 bg-red-50 dark:bg-red-900/10 rounded-3xl border border-red-100 dark:border-red-900/30">
            <p className="text-red-600 dark:text-red-400 font-medium">
              {error}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 text-sm text-red-500 underline hover:text-red-600"
            >
              Zkusit znovu
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            <Suspense
              fallback={
                <div className="flex flex-col items-center justify-center h-64 space-y-4">
                  <Loader2 className="w-8 h-8 animate-spin text-blue-600/50" />
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Načítání interaktivních prvků...
                  </p>
                </div>
              }
            >
              {filteredBodies.map((body) => (
                <GeometricBodyCard key={body.id} body={body} />
              ))}
            </Suspense>

            {filteredBodies.length === 0 && (
              <div className="text-center py-20 opacity-60 bg-gray-100 dark:bg-zinc-900 rounded-3xl border border-dashed border-gray-300 dark:border-zinc-800">
                <p className="text-lg">
                  {filter === "all"
                    ? "Zatím zde nejsou žádná tělesa."
                    : `Nenalezena žádná ${
                        filter === "2d" ? "2D" : "3D"
                      } tělesa.`}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SimulationsPage;
