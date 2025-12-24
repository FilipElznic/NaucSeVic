import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GeometrieZS1 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate("/predmety/geometrie/zs")}
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Zpět na výběr stupně
        </button>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Geometrie - 1. Stupeň ZŠ
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Zde bude obsah pro 1. stupeň základní školy (1. - 5. třída).
        </p>
      </div>
    </div>
  );
};

export default GeometrieZS1;
