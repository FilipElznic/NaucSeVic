import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import GeometryGallery from "../components/geometry/GeometryGallery";

const SimulationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white pt-24 pb-0">
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Zpět na hlavní stránku
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Interaktivní{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Simulace
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Vyberte si těleso a prozkoumejte jeho vlastnosti v 3D prostoru.
            Měňte parametry, sledujte změny v reálném čase a pochopte geometrii
            do hloubky.
          </p>
        </div>
      </div>

      {/* This component fetches Firestore collection `geometricBodies` and renders image + Spline + formulas */}
      <GeometryGallery />
    </div>
  );
};

export default SimulationsPage;
