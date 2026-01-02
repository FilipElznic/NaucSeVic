import React from "react";

// Placeholder components for demonstration
const PhysicsLab = () => (
  <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300 mb-2">
      Virtuální Laboratoø
    </h3>
    <p className="text-purple-600 dark:text-purple-400">
      Simulace fyzikálních jevù a experimenty.
    </p>
  </div>
);

/**
 * Map of special components for specific subject/level combinations.
 * Keys are formed as `${subjectId}_${levelId}` or `${subjectId}_${levelId}_${subLevel}`.
 */
export const specialComponentsMap = {
  // Fyzika
  fyzika_ss: PhysicsLab,
};
