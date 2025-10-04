import React, { useState } from "react";
import {
  initializeAppDatabase,
  forceReinitialize,
} from "../utils/initializeApp";
import { Database, RefreshCw, CheckCircle, AlertCircle } from "lucide-react";

const DatabaseInitializer = () => {
  const [isInitializing, setIsInitializing] = useState(false);
  const [initStatus, setInitStatus] = useState(null);

  const handleInitialize = async () => {
    setIsInitializing(true);
    setInitStatus(null);

    try {
      const success = await initializeAppDatabase();
      setInitStatus(success ? "success" : "error");
    } catch (error) {
      console.error("Initialization error:", error);
      setInitStatus("error");
    } finally {
      setIsInitializing(false);
    }
  };

  const handleForceReinitialize = async () => {
    setIsInitializing(true);
    setInitStatus(null);

    try {
      const success = await forceReinitialize();
      setInitStatus(success ? "success" : "error");
    } catch (error) {
      console.error("Force initialization error:", error);
      setInitStatus("error");
    } finally {
      setIsInitializing(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md border">
      <div className="text-center mb-6">
        <Database className="h-12 w-12 text-blue-600 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-gray-900">
          Inicializace databáze
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Nastavte databázi s ukázkovými daty a předměty
        </p>
      </div>

      <div className="space-y-3">
        <button
          onClick={handleInitialize}
          disabled={isInitializing}
          className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
        >
          {isInitializing ? (
            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <Database className="h-4 w-4 mr-2" />
          )}
          {isInitializing ? "Inicializuji..." : "Inicializovat databázi"}
        </button>

        <button
          onClick={handleForceReinitialize}
          disabled={isInitializing}
          className="w-full flex items-center justify-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:bg-orange-400 disabled:cursor-not-allowed transition-colors"
        >
          {isInitializing ? (
            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4 mr-2" />
          )}
          Přeinicializovat (vynutit)
        </button>
      </div>

      {initStatus && (
        <div
          className={`mt-4 p-3 rounded-lg flex items-center ${
            initStatus === "success"
              ? "bg-green-100 text-green-800 border border-green-200"
              : "bg-red-100 text-red-800 border border-red-200"
          }`}
        >
          {initStatus === "success" ? (
            <CheckCircle className="h-5 w-5 mr-2" />
          ) : (
            <AlertCircle className="h-5 w-5 mr-2" />
          )}
          <span className="text-sm font-medium">
            {initStatus === "success"
              ? "Databáze byla úspěšně inicializována!"
              : "Chyba při inicializaci databáze. Zkuste to znovu."}
          </span>
        </div>
      )}

      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-xs text-blue-800">
          <strong>Poznámka:</strong> Inicializace vytvoří předměty,
          achievementy, ukázkové úkoly a referenční data pro geometrii a fyziku.
        </p>
      </div>
    </div>
  );
};

export default DatabaseInitializer;
