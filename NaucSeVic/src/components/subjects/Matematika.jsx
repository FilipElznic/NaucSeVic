import React from "react";
import { Calculator } from "lucide-react";

const Matematika = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-2xl">
            <Calculator className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Matematika
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Studium matematických konceptů a řešení problémů
          </p>
        </div>

        {/* Content Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">Algebra</h3>
            <p className="text-gray-400">Obsah bude doplněn</p>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">Geometrie</h3>
            <p className="text-gray-400">Obsah bude doplněn</p>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">Analýza</h3>
            <p className="text-gray-400">Obsah bude doplněn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matematika;
