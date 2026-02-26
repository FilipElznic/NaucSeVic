import React, { Suspense } from "react";
import { Loader2 } from "lucide-react";
import GravitySimulation from "../simulations/GravitySimulation";
import LightSimulation from "../simulations/LightSimulation";
import PendulumSimulation from "../simulations/PendulumSimulation";
import PhysicsLab from "../simulations/PhysicsLab";

const SimulationsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
              Interaktivní{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Simulace
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Vyberte si simulaci a prozkoumejte fyzikální jevy v akci. Měňte
              parametry, sledujte změny v reálném čase a pochopte fyziku do
              hloubky.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center h-64 space-y-4">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600/50" />
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Načítání simulací...
                </p>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GravitySimulation />
              <LightSimulation />
              <PendulumSimulation />
              <PhysicsLab />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default SimulationsPage;
