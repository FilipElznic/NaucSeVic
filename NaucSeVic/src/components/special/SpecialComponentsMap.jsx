import React from "react";

// Placeholder components for demonstration
const MathVSComponent = () => (
  <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-2">
      Pokročilá Matematika VŠ
    </h3>
    <p className="text-blue-600 dark:text-blue-400">
      Zde se nachází speciální interaktivní nástroje pro integrály a
      diferenciální rovnice.
    </p>
  </div>
);

const GeometryInteractive = () => (
  <div className="p-6 bg-pink-50 dark:bg-pink-900/20 rounded-xl border border-pink-200 dark:border-pink-800">
    <h3 className="text-xl font-bold text-pink-800 dark:text-pink-300 mb-2">
      Interaktivní Rýsování
    </h3>
    <p className="text-pink-600 dark:text-pink-400">
      Speciální plátno pro rýsování geometrických útvarů (Canvas/WebGL).
    </p>
  </div>
);

const PhysicsLab = () => (
  <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300 mb-2">
      Virtuální Laboratoř
    </h3>
    <p className="text-purple-600 dark:text-purple-400">
      Simulace fyzikálních jevů a experimenty.
    </p>
  </div>
);

/**
 * Map of special components for specific subject/level combinations.
 * Keys are formed as `${subjectId}_${levelId}` or `${subjectId}_${levelId}_${subLevel}`.
 */
export const specialComponentsMap = {
  matematika_vs: MathVSComponent,
  geometrie_zs: GeometryInteractive, // Applies to all ZŠ geometry
  fyzika_ss: PhysicsLab,
  // Add more specific overrides here
};
