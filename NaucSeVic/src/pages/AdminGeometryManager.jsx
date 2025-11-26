import React, { useState } from "react";
import { cloudFunctionsService } from "../services/cloudFunctions";
import geometryData from "../data/geometryData.json";
import { toast } from "react-toastify";
import { Upload, Check, AlertTriangle } from "lucide-react";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const AdminGeometryManager = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleUpload = async () => {
    if (
      !window.confirm(
        "Opravdu chcete přepsat/aktualizovat databázi geometrických těles?"
      )
    ) {
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const result = await cloudFunctionsService.seedGeometryData(geometryData);
      console.log("Upload result:", result);
      setStatus("success");
      toast.success(`Úspěšně nahráno ${result.count} položek.`);
    } catch (error) {
      console.error("Upload error:", error);
      setStatus("error");
      toast.error("Chyba při nahrávání dat: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
          <h1 className="text-3xl font-bold text-black dark:text-white mb-6">
            Správa Geometrie
          </h1>

          <div className="mb-8">
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Tato stránka slouží k nahrání nebo aktualizaci databáze
              geometrických těles z lokálního JSON souboru. Tato akce je
              dostupná pouze pro administrátory.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Připravená data
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                Nalezeno <strong>{geometryData.length}</strong> položek v{" "}
                <code>src/data/geometryData.json</code>.
              </p>
            </div>

            {status === "success" && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6 flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-800 rounded-full text-green-600 dark:text-green-300">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-green-800 dark:text-green-300">
                    Úspěch
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    Data byla úspěšně nahrána do databáze.
                  </p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6 flex items-center gap-3">
                <div className="p-2 bg-red-100 dark:bg-red-800 rounded-full text-red-600 dark:text-red-300">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-red-800 dark:text-red-300">
                    Chyba
                  </h3>
                  <p className="text-sm text-red-700 dark:text-red-400">
                    Nepodařilo se nahrát data. Zkontrolujte konzoli a oprávnění.
                  </p>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={handleUpload}
            disabled={loading}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${
              loading
                ? "bg-slate-300 dark:bg-slate-700 cursor-not-allowed text-slate-500"
                : "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-green-500/30"
            }`}
          >
            {loading ? (
              <>
                <LoadingSpinner
                  size="sm"
                  className="border-slate-500 border-t-transparent"
                />
                Nahrávám...
              </>
            ) : (
              <>
                <Upload className="w-5 h-5" />
                Nahrát do Databáze
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminGeometryManager;
