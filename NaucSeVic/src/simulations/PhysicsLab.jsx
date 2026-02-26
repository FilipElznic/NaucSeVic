import React from "react";
import { FlaskConical } from "lucide-react";

const PhysicsLab = () => (
  <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-sm col-span-full">
    <div className="flex items-center gap-4 mb-3">
      <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl">
        <FlaskConical className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
        Virtuální laboratoř
      </h3>
    </div>
    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
      Vyberte si libovolnou simulaci výše a prozkoumejte fyzikální jevy
      interaktivně. Každá simulace obsahuje vzdělávací výklad a přehledné
      vzorce.
    </p>
  </div>
);

export default PhysicsLab;
