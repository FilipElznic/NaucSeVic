import React, { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { subjectConfig, levelsConfig } from "../../config/subjectConfig";
import { specialComponentsMap } from "../special/SpecialComponentsMap";
import { backgroundMap } from "../special/BackgroundMap";
import SubjectSelection from "../shared/SubjectSelection";
import UniversalCoursePage from "./UniversalCoursePage";
import * as LucideIcons from "lucide-react";

/**
 * UniversalSubjectLayout
 *
 * A robust, data-driven container component that handles:
 * 1. Root View: Subject selection (Math, Physics, Geometry)
 * 2. Subject View: Level selection (ZS/SS/VS)
 * 3. Content View: Actual learning content with sub-level logic
 */
const UniversalSubjectLayout = () => {
  const { subjectId, levelId, subLevelId } = useParams();
  const navigate = useNavigate();

  // --- STATE MANAGEMENT ---

  const activeSubjectId = subjectId || "matematika"; // Default for safety in content mode
  const activeLevelId = levelId || "zs";

  // --- DERIVED STATE & MEMOIZATION ---

  // Get current subject config object
  const activeSubject = useMemo(() => {
    return subjectConfig[activeSubjectId] || subjectConfig.matematika;
  }, [activeSubjectId]);

  // Get current level config object
  const activeLevelConfig = useMemo(() => {
    return activeSubject.levelsData
      ? activeSubject.levelsData[activeLevelId]
      : null;
  }, [activeSubject, activeLevelId]);

  // Check if the current level has sub-levels (e.g. ZS -> 1. stupen, 2. stupen)
  const hasSubLevels = activeLevelConfig?.subLevels ? true : false;

  // MODES
  // If subjectId is undefined, we are in "Root Mode" (Subject Selection)
  const isRootMode = !subjectId;

  // If levelId is undefined, we are in "Level Selection Mode"
  const isLevelSelectionMode = subjectId && !levelId;

  // If we have a level, and that level has sub-levels, but no sub-level is specified in URL
  const isSubLevelSelectionMode =
    subjectId && levelId && hasSubLevels && !subLevelId;

  // Parse subLevel from URL (e.g., "1-stupen" -> 1) or default to 1
  // Note: This default is only used if we are in content mode (subLevelId is present)
  // or if we need a fallback.
  const initialSubLevel = subLevelId === "2-stupen" ? 2 : 1;
  const [subLevel, setSubLevel] = useState(initialSubLevel);

  // Sync subLevel state if URL changes
  useEffect(() => {
    if (subLevelId === "2-stupen") setSubLevel(2);
    else if (subLevelId === "1-stupen") setSubLevel(1);
    else setSubLevel(1);
  }, [subLevelId]);

  // Resolve the icon component dynamically
  const IconComponent =
    LucideIcons[activeSubject.icon] || LucideIcons.HelpCircle;

  // Determine if we should show the sub-level switcher (1. vs 2. stupen) in the content view
  // We show it if the level has sub-levels.
  const showSubLevelSwitch = hasSubLevels;

  // Construct the key to look up special components
  const specialComponentKey = useMemo(() => {
    if (showSubLevelSwitch) {
      const specificKey = `${activeSubjectId}_${activeLevelId}_${subLevel}`;
      if (specialComponentsMap[specificKey]) return specificKey;
    }
    return `${activeSubjectId}_${activeLevelId}`;
  }, [activeSubjectId, activeLevelId, subLevel, showSubLevelSwitch]);

  const SpecialComponent = specialComponentsMap[specialComponentKey];
  const BackgroundComponent =
    backgroundMap[activeSubjectId] || backgroundMap.matematika;

  // --- HANDLERS ---

  const handleSubjectChange = (id) => {
    navigate(`/predmety/${id}`);
  };

  const handleLevelChange = (id) => {
    navigate(`/predmety/${activeSubjectId}/${id}`);
  };

  const handleSubLevelChange = (num) => {
    setSubLevel(num);
    const subLevelPath = num === 1 ? "1-stupen" : "2-stupen";
    navigate(`/predmety/${activeSubjectId}/${activeLevelId}/${subLevelPath}`);
  };

  // --- ROOT MODE RENDER (Subject Selection) ---
  if (isRootMode) {
    return (
      <div className="min-h-screen bg-white dark:bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements if needed */}

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold md:mt-28  text-gray-900 dark:text-white leading-tight">
              Vyberte si{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600">
                předmět
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Zvolte oblast, ve které se chcete zdokonalit. Nabízíme komplexní
              kurzy pro všechny úrovně pokročilosti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(subjectConfig).map((subject) => {
              const SubjectIcon =
                LucideIcons[subject.icon] || LucideIcons.HelpCircle;
              return (
                <Link
                  key={subject.id}
                  to={`/predmety/${subject.id}`}
                  className="group relative bg-white dark:bg-black rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-2xl flex flex-col h-full"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600 flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <SubjectIcon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {subject.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow leading-relaxed">
                    {subject.description}
                  </p>

                  {/* Stats (optional) */}
                  {subject.stats && (
                    <div className="grid grid-cols-3 gap-2 py-4 border-t border-zinc-100 dark:border-zinc-800 mb-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {subject.stats.chapters}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-gray-500">
                          Kapitol
                        </div>
                      </div>
                      <div className="text-center border-l border-zinc-100 dark:border-zinc-800">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {subject.stats.students}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-gray-500">
                          Studentů
                        </div>
                      </div>
                      <div className="text-center border-l border-zinc-100 dark:border-zinc-800">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {subject.stats.duration}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-gray-500">
                          Délka
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Link */}
                  <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-semibold group-hover:translate-x-2 transition-transform mt-auto">
                    <span>Začít studovat</span>
                    <LucideIcons.ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // --- LEVEL SELECTION MODE RENDER ---
  if (isLevelSelectionMode) {
    // Transform levelsData from config into array for SubjectSelection
    const levelsForSelection = activeSubject.levelsData
      ? Object.values(activeSubject.levelsData).map((level) => ({
          ...level,
          icon: LucideIcons[level.icon] || LucideIcons.HelpCircle,
          path: `/predmety/${activeSubjectId}/${level.pathSuffix}`,
        }))
      : [];

    return (
      <SubjectSelection
        title={`Vyberte si úroveň studia - ${activeSubject.title}`}
        description={activeSubject.description}
        levels={levelsForSelection}
        BackgroundComponent={BackgroundComponent}
        subjectTheme={activeSubject.themeColor}
      />
    );
  }

  // --- SUB-LEVEL SELECTION MODE RENDER ---
  if (isSubLevelSelectionMode) {
    const subLevelsForSelection = Object.values(
      activeLevelConfig.subLevels,
    ).map((sl) => ({
      ...sl,
      icon: LucideIcons[sl.icon] || LucideIcons.HelpCircle,
      path: `/predmety/${activeSubjectId}/${activeLevelId}/${sl.pathSuffix}`,
    }));

    return (
      <SubjectSelection
        title={`Vyberte stupeň - ${activeLevelConfig.title}`}
        description={activeLevelConfig.description}
        levels={subLevelsForSelection}
        BackgroundComponent={BackgroundComponent}
        subjectTheme={activeSubject.themeColor}
      />
    );
  }

  // --- CONTENT MODE RENDER ---

  // Safe style object for dynamic colors to avoid Tailwind purging issues
  const dynamicStyle = {
    "--theme-color": activeSubject.themeColor,
  };

  return (
    <div
      className="min-h-screen pt-20  bg-gray-100 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      style={dynamicStyle}
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* LEVEL SELECTION TABS */}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-zinc-900 p-1.5 rounded-xl border-2 border-gray-400 dark:border-zinc-800 shadow-xl inline-flex">
            {/* Use levelsData if available for dynamic tabs, fallback to levelsConfig */}
            {(activeSubject.levelsData
              ? Object.values(activeSubject.levelsData)
              : Object.values(levelsConfig)
            ).map((level) => (
              <button
                key={level.id}
                onClick={() => handleLevelChange(level.id)}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                  activeLevelId === level.id
                    ? `bg-${activeSubject.themeColor}-600 text-white shadow-lg`
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800"
                }`}
                // Inline style fallback for dynamic color if Tailwind class is purged
                style={
                  activeLevelId === level.id
                    ? { backgroundColor: `var(--theme-color)` }
                    : {}
                }
              >
                {level.title || level.label}
              </button>
            ))}
          </div>
        </div>

        {/* SUB-LEVEL SWITCHER (Conditional) */}
        {showSubLevelSwitch && (
          <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-center gap-4 bg-white dark:bg-zinc-900 px-6 py-3 rounded-full border-2 border-gray-300 dark:border-zinc-800 shadow-md">
              <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                Stupeň ZŠ:
              </span>
              <div className="flex gap-2">
                {[1, 2].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleSubLevelChange(num)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      subLevel === num
                        ? `bg-${activeSubject.themeColor}-100 text-${activeSubject.themeColor}-800 ring-2 ring-${activeSubject.themeColor}-600 dark:bg-${activeSubject.themeColor}-900/50 dark:text-${activeSubject.themeColor}-300`
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-400"
                    }`}
                  >
                    {num}.
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CONTENT AREA */}
        <div className="space-y-8">
          {/* Universal Course Page - ALWAYS VISIBLE */}
          <UniversalCoursePage
            subject={activeSubject}
            level={
              activeLevelConfig || { title: activeLevelId, level: "Unknown" }
            }
            subLevel={showSubLevelSwitch ? subLevel : null}
          />

          {/* Special Component Injection - VISIBLE BELOW COURSE IF EXISTS */}
          {SpecialComponent && (
            <div className="my-8 animate-in zoom-in-95 duration-300 border-t-2 border-gray-300 dark:border-zinc-800 pt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Interaktivní nástroje
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Speciální aplikace a simulace pro tuto sekci.
                </p>
              </div>
              <SpecialComponent />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default UniversalSubjectLayout;
