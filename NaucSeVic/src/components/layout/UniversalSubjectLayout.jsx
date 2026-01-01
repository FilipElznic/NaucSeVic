import React, { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { subjectConfig, levelsConfig } from "../../config/subjectConfig";
import { specialComponentsMap } from "../special/SpecialComponentsMap";
import { backgroundMap } from "../special/BackgroundMap";
import SubjectSelection from "../shared/SubjectSelection";
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

  // If subjectId is undefined, we are in "Root Mode" (Subject Selection)
  const isRootMode = !subjectId;

  // If levelId is undefined, we are in "Level Selection Mode"
  const isLevelSelectionMode = subjectId && !levelId;

  const activeSubjectId = subjectId || "matematika"; // Default for safety in content mode
  const activeLevelId = levelId || "zs";

  // Parse subLevel from URL (e.g., "1-stupen" -> 1) or default to 1
  const initialSubLevel = subLevelId === "2-stupen" ? 2 : 1;
  const [subLevel, setSubLevel] = useState(initialSubLevel);

  // Sync subLevel state if URL changes
  useEffect(() => {
    if (subLevelId === "2-stupen") setSubLevel(2);
    else if (subLevelId === "1-stupen") setSubLevel(1);
    else setSubLevel(1);
  }, [subLevelId]);

  // --- DERIVED STATE & MEMOIZATION ---

  // Get current subject config object
  const activeSubject = useMemo(() => {
    return subjectConfig[activeSubjectId] || subjectConfig.matematika;
  }, [activeSubjectId]);

  // Resolve the icon component dynamically
  const IconComponent =
    LucideIcons[activeSubject.icon] || LucideIcons.HelpCircle;

  // Determine if we should show the sub-level switcher (1. vs 2. stupen)
  const showSubLevelSwitch =
    activeLevelId === "zs" && activeSubject.hasSubLevels;

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
      <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Vyberte si předmět
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Zvolte oblast, ve které se chcete zdokonalit. Nabízíme komplexní
              kurzy pro všechny úrovně pokročilosti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(subjectConfig).map((subject) => {
              const SubjectIcon =
                LucideIcons[subject.icon] || LucideIcons.HelpCircle;
              return (
                <Link
                  key={subject.id}
                  to={`/predmety/${subject.id}`}
                  className="group relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-zinc-800"
                >
                  {/* Gradient Header */}
                  <div
                    className={`h-32 bg-gradient-to-r ${
                      subject.gradient || "from-gray-500 to-gray-600"
                    } p-6 relative overflow-hidden`}
                  >
                    <div className="absolute right-0 top-0 p-4 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                      <SubjectIcon size={150} className="text-white" />
                    </div>
                    <div className="relative z-10">
                      <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl inline-flex mb-3">
                        <SubjectIcon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">
                        {subject.title}
                      </h2>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-600 dark:text-gray-400 mb-6 min-h-[3rem]">
                      {subject.description}
                    </p>

                    {/* Stats */}
                    {subject.stats && (
                      <div className="grid grid-cols-3 gap-4 mb-8 border-t border-b border-gray-100 dark:border-zinc-800 py-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-900 dark:text-white">
                            {subject.stats.chapters}
                          </div>
                          <div className="text-xs text-gray-500 uppercase tracking-wider">
                            Kapitol
                          </div>
                        </div>
                        <div className="text-center border-l border-r border-gray-100 dark:border-zinc-800">
                          <div className="text-lg font-bold text-gray-900 dark:text-white">
                            {subject.stats.students}
                          </div>
                          <div className="text-xs text-gray-500 uppercase tracking-wider">
                            Studentů
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-900 dark:text-white">
                            {subject.stats.duration}
                          </div>
                          <div className="text-xs text-gray-500 uppercase tracking-wider">
                            Délka
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {subject.tags &&
                        subject.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>

                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-2 transition-transform">
                      Začít studovat{" "}
                      <LucideIcons.ArrowRight className="ml-2 w-4 h-4" />
                    </div>
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

  // --- CONTENT MODE RENDER ---

  // Safe style object for dynamic colors to avoid Tailwind purging issues
  const dynamicStyle = {
    "--theme-color": activeSubject.themeColor,
  };

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      style={dynamicStyle}
    >
      {/* HEADER SECTION */}
      <header className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => navigate(`/predmety/${activeSubjectId}`)}
            >
              <div
                className={`p-2 rounded-lg bg-${activeSubject.themeColor}-100 dark:bg-${activeSubject.themeColor}-900/30`}
              >
                <IconComponent
                  className={`w-6 h-6 text-${activeSubject.themeColor}-600 dark:text-${activeSubject.themeColor}-400`}
                />
              </div>
              <h1 className="text-xl font-bold tracking-tight">
                {activeSubject.title}
              </h1>
            </div>

            {/* Subject Switcher (Simple Dropdown or Tabs for demo) */}
            <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 hide-scrollbar">
              {Object.values(subjectConfig).map((subject) => (
                <button
                  key={subject.id}
                  onClick={() => handleSubjectChange(subject.id)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                    activeSubjectId === subject.id
                      ? `bg-gray-900 text-white dark:bg-white dark:text-black shadow-sm`
                      : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  }`}
                >
                  {subject.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* LEVEL SELECTION TABS */}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-zinc-900 p-1 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm inline-flex">
            {Object.values(levelsConfig).map((level) => (
              <button
                key={level.id}
                onClick={() => handleLevelChange(level.id)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeLevelId === level.id
                    ? `bg-${activeSubject.themeColor}-500 text-white shadow-md`
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-800"
                }`}
                // Inline style fallback for dynamic color if Tailwind class is purged
                style={
                  activeLevelId === level.id
                    ? { backgroundColor: `var(--theme-color)` }
                    : {}
                }
              >
                {level.label}
              </button>
            ))}
          </div>
        </div>

        {/* SUB-LEVEL SWITCHER (Conditional) */}
        {showSubLevelSwitch && (
          <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-center gap-4 bg-white dark:bg-zinc-900 px-6 py-3 rounded-full border border-gray-200 dark:border-zinc-800 shadow-sm">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Stupeň ZŠ:
              </span>
              <div className="flex gap-2">
                {[1, 2].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleSubLevelChange(num)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      subLevel === num
                        ? `bg-${activeSubject.themeColor}-100 text-${activeSubject.themeColor}-700 ring-2 ring-${activeSubject.themeColor}-500 dark:bg-${activeSubject.themeColor}-900/50 dark:text-${activeSubject.themeColor}-300`
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-zinc-800 dark:text-gray-400"
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
          {/* 1. Dynamic Header based on selection */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {activeSubject.title} &ndash; {levelsConfig[activeLevelId].title}
              {showSubLevelSwitch && (
                <span className="opacity-60 ml-2">({subLevel}. stupeň)</span>
              )}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {activeSubject.description}
            </p>
          </div>

          {/* 2. Special Component Injection (The 10% specific functionality) */}
          {SpecialComponent ? (
            <div className="my-8 animate-in zoom-in-95 duration-300">
              <SpecialComponent />
            </div>
          ) : (
            // Fallback / Default Content
            <div className="p-12 text-center border-2 border-dashed border-gray-200 dark:border-zinc-800 rounded-2xl">
              <p className="text-gray-500 dark:text-gray-400">
                Standardní obsah pro {activeSubject.title} ({activeLevelId})
                <br />
                <span className="text-xs opacity-70">
                  (Žádná speciální komponenta nenalezena v mapě pro klíč:{" "}
                  {specialComponentKey})
                </span>
              </p>
            </div>
          )}

          {/* 3. Generic Data Grid (Example of Data-Driven Content) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* This would normally come from a database query using activeSubject.dbBaseTag */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group bg-white dark:bg-zinc-900 rounded-xl p-6 border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 transition-all hover:shadow-lg"
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-${activeSubject.themeColor}-50 dark:bg-${activeSubject.themeColor}-900/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent
                    className={`w-5 h-5 text-${activeSubject.themeColor}-600 dark:text-${activeSubject.themeColor}-400`}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">Lekce {item}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Automaticky generovaný obsah pro {activeSubject.dbBaseTag}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UniversalSubjectLayout;
