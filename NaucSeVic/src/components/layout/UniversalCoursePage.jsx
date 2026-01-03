import React, { useState } from "react";
import * as LucideIcons from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- DUMMY DATA GENERATOR ---

const courseContentDatabase = {
  matematika: {
    zs: {
      default: [
        {
          title: "Přirozená čísla",
          lessons: [
            "Zápis a čtení čísel",
            "Porovnávání a zaokrouhlování",
            "Sčítání a odčítání",
            "Násobení a dělení",
            "Slovní úlohy",
          ],
        },
        {
          title: "Desetinná čísla",
          lessons: [
            "Desetinná čárka",
            "Porovnávání",
            "Sčítání a odčítání",
            "Násobení 10, 100, 1000",
            "Násobení desetinných čísel",
            "Dělení desetinných čísel",
          ],
        },
        {
          title: "Zlomky",
          lessons: [
            "Co je to zlomek",
            "Rozšiřování a krácení",
            "Sčítání a odčítání",
            "Násobení a dělení",
            "Smíšená čísla",
          ],
        },
        {
          title: "Úhly a trojúhelníky",
          lessons: [
            "Velikost úhlu",
            "Typy úhlů",
            "Vlastnosti trojúhelníků",
            "Konstrukce trojúhelníků",
          ],
        },
        {
          title: "Objemy a povrchy",
          lessons: [
            "Jednotky obsahu a objemu",
            "Krychle a kvádr",
            "Hranoly",
            "Válce",
          ],
        },
      ],
      1: [
        {
          title: "Sčítání a odčítání do 20",
          lessons: [
            "Počítáme do 10",
            "Sčítání do 20",
            "Odčítání do 20",
            "Slovní úlohy",
          ],
        },
        {
          title: "Sčítání a odčítání do 100",
          lessons: [
            "Počítáme po desítkách",
            "Sčítání bez přechodu",
            "Odčítání bez přechodu",
            "Sčítání s přechodem",
            "Odčítání s přechodem",
          ],
        },
        {
          title: "Malá násobilka",
          lessons: [
            "Násobení 2 a 3",
            "Násobení 4 a 5",
            "Násobení 6 a 7",
            "Násobení 8 a 9",
            "Dělení",
          ],
        },
        {
          title: "Geometrické tvary",
          lessons: ["Čtverec a obdélník", "Trojúhelník", "Kruh", "Tělesa"],
        },
        {
          title: "Slovní úlohy",
          lessons: ["Jednoduché úlohy", "Úlohy o nákupech", "Porovnávání"],
        },
      ],
      2: [
        {
          title: "Zlomky a procenta",
          lessons: [
            "Zlomky - úvod",
            "Počítání se zlomky",
            "Procenta - úvod",
            "Výpočet procentové části",
            "Slovní úlohy",
          ],
        },
        {
          title: "Celá čísla",
          lessons: [
            "Kladná a záporná čísla",
            "Absolutní hodnota",
            "Sčítání a odčítání",
            "Násobení a dělení",
          ],
        },
        {
          title: "Rovnice a nerovnice",
          lessons: [
            "Lineární rovnice",
            "Ekvivalentní úpravy",
            "Rovnice se zlomky",
            "Lineární nerovnice",
          ],
        },
        {
          title: "Pythagorova věta",
          lessons: [
            "Vzorec a důkaz",
            "Výpočet přepony",
            "Výpočet odvěsny",
            "Užití v praxi",
          ],
        },
        {
          title: "Kruh a válec",
          lessons: [
            "Obvod a obsah kruhu",
            "Části kruhu",
            "Povrch válce",
            "Objem válce",
          ],
        },
      ],
    },
    ss: {
      default: [
        {
          title: "Množiny a logika",
          lessons: [
            "Množinové operace",
            "Výroková logika",
            "Kvantifikátory",
            "Důkazy",
          ],
        },
        {
          title: "Funkce",
          lessons: [
            "Definice funkce",
            "Lineární funkce",
            "Kvadratická funkce",
            "Lineární lomená funkce",
            "Exponenciální funkce",
          ],
        },
        {
          title: "Goniometrie",
          lessons: [
            "Stupně a radiány",
            "Sinus a kosinus",
            "Tangens a kotangens",
            "Goniometrické rovnice",
          ],
        },
        {
          title: "Posloupnosti",
          lessons: [
            "Aritmetická posloupnost",
            "Geometrická posloupnost",
            "Limita posloupnosti",
            "Nekonečné řady",
          ],
        },
        {
          title: "Analytická geometrie",
          lessons: [
            "Vektory",
            "Přímka v rovině",
            "Kuželosečky",
            "Rovina v prostoru",
          ],
        },
      ],
    },
    vs: {
      default: [
        {
          title: "Lineární algebra",
          lessons: [
            "Matice a determinanty",
            "Soustavy rovnic",
            "Vektorové prostory",
            "Lineární zobrazení",
          ],
        },
        {
          title: "Diferenciální počet",
          lessons: ["Limita funkce", "Derivace", "Průběh funkce", "Extrémy"],
        },
        {
          title: "Integrální počet",
          lessons: [
            "Neurčitý integrál",
            "Určitý integrál",
            "Aplikace integrálu",
            "Nevlastní integrál",
          ],
        },
        {
          title: "Diferenciální rovnice",
          lessons: [
            "Separace proměnných",
            "Lineární DR 1. řádu",
            "Lineární DR 2. řádu",
            "Soustavy DR",
          ],
        },
        {
          title: "Statistika",
          lessons: [
            "Pravděpodobnost",
            "Náhodná veličina",
            "Rozdělení pravděpodobnosti",
            "Testování hypotéz",
          ],
        },
      ],
    },
  },
  fyzika: {
    zs: {
      default: [
        {
          title: "Veličiny a měření",
          lessons: ["Délka", "Hmotnost", "Čas", "Teplota", "Hustota"],
        },
        {
          title: "Síla a pohyb",
          lessons: [
            "Síla",
            "Skládání sil",
            "Pohyb tělesa",
            "Rychlost",
            "Dráha",
          ],
        },
        {
          title: "Kapaliny a plyny",
          lessons: [
            "Tlak",
            "Archimedův zákon",
            "Pascalův zákon",
            "Atmosférický tlak",
          ],
        },
        {
          title: "Teplo",
          lessons: [
            "Teplota a teplo",
            "Šíření tepla",
            "Změny skupenství",
            "Tepelné motory",
          ],
        },
        {
          title: "Elektřina",
          lessons: [
            "Elektrický náboj",
            "Elektrický proud",
            "Elektrické napětí",
            "Ohmův zákon",
            "Elektrický obvod",
          ],
        },
      ],
    },
    ss: {
      default: [
        {
          title: "Kinematika",
          lessons: [
            "Pohyb hmotného bodu",
            "Rovnoměrný pohyb",
            "Rovnoměrně zrychlený pohyb",
            "Kruhový pohyb",
          ],
        },
        {
          title: "Dynamika",
          lessons: [
            "Newtonovy zákony",
            "Hybnost",
            "Práce a výkon",
            "Energie",
            "Gravitační pole",
          ],
        },
        {
          title: "Mechanika tuhého tělesa",
          lessons: [
            "Moment síly",
            "Těžiště",
            "Rovnovážné polohy",
            "Jednoduché stroje",
          ],
        },
        {
          title: "Kmitání a vlnění",
          lessons: ["Kmitavý pohyb", "Kyvadlo", "Mechanické vlnění", "Zvuk"],
        },
        {
          title: "Elektřina a magnetismus",
          lessons: [
            "Elektrické pole",
            "Magnetické pole",
            "Elektromagnetická indukce",
            "Střídavý proud",
          ],
        },
      ],
    },
    vs: {
      default: [
        {
          title: "Teoretická mechanika",
          lessons: [
            "Lagrangeovy rovnice",
            "Hamiltonovy rovnice",
            "Princip nejmenší akce",
            "Teorie relativity",
          ],
        },
        {
          title: "Elektrodynamika",
          lessons: [
            "Maxwellovy rovnice",
            "Elektromagnetické vlny",
            "Záření",
            "Relativistická elektrodynamika",
          ],
        },
        {
          title: "Kvantová mechanika",
          lessons: [
            "Vlnová funkce",
            "Schrödingerova rovnice",
            "Operátory",
            "Atom vodíku",
          ],
        },
        {
          title: "Termodynamika",
          lessons: [
            "Termodynamické zákony",
            "Entropie",
            "Fázové přechody",
            "Statistická fyzika",
          ],
        },
        {
          title: "Jaderná fyzika",
          lessons: [
            "Struktura jádra",
            "Radioaktivita",
            "Jaderné reakce",
            "Elementární částice",
          ],
        },
      ],
    },
  },
  geometrie: {
    zs: {
      default: [
        { title: "Základní útvary", lessons: ["Bod", "Přímka", "Úsečka"] },
        { title: "Úhly", lessons: ["Měření", "Typy"] },
      ],
    },
    ss: {
      default: [
        { title: "Vektory", lessons: ["Sčítání", "Násobení"] },
        { title: "Analytická geometrie", lessons: ["Přímka", "Rovina"] },
      ],
    },
    vs: {
      default: [
        { title: "Afinní prostory", lessons: ["Definice", "Vlastnosti"] },
      ],
    },
  },
  chemie: {
    zs: {
      default: [{ title: "Látky a tělesa", lessons: ["Vlastnosti", "Dělení"] }],
    },
    ss: { default: [{ title: "Stavba atomu", lessons: ["Jádro", "Obal"] }] },
    vs: {
      default: [{ title: "Kvantová chemie", lessons: ["Orbitaly", "Vazby"] }],
    },
  },
  informatika: {
    zs: { default: [{ title: "Počítač", lessons: ["Hardware", "Software"] }] },
    ss: { default: [{ title: "Sítě", lessons: ["Topologie", "Protokoly"] }] },
    vs: {
      default: [{ title: "Algoritmy", lessons: ["Složitost", "Třídění"] }],
    },
  },
  cestina: {
    zs: { default: [{ title: "Vyjmenovaná slova", lessons: ["B", "L", "M"] }] },
    ss: {
      default: [{ title: "Literatura", lessons: ["Májovci", "Ruchovci"] }],
    },
    vs: {
      default: [{ title: "Lingvistika", lessons: ["Fonologie", "Morfologie"] }],
    },
  },
};

const generateCourseData = (subject, level, subLevel) => {
  // Get subject data or fallback
  const subjectData =
    courseContentDatabase[subject.id] || courseContentDatabase.matematika;

  // Get level data or fallback
  const levelData = subjectData[level.id] || subjectData.zs;

  // Get specific chapters based on sublevel or default
  // If subLevel is provided, try to find it, otherwise use default or '1'
  let chaptersConfig = levelData.default;
  if (subLevel && levelData[subLevel]) {
    chaptersConfig = levelData[subLevel];
  } else if (!chaptersConfig && levelData[1]) {
    chaptersConfig = levelData[1];
  }

  // Fallback if nothing found
  if (!chaptersConfig) {
    chaptersConfig = [
      { title: "Úvod do předmětu", lessons: ["Lekce 1", "Lekce 2", "Lekce 3"] },
      { title: "Pokročilé téma", lessons: ["Lekce 1", "Lekce 2"] },
    ];
  }

  const chapters = chaptersConfig.map((chapterConfig, chapterIdx) => {
    const chapterNum = chapterIdx + 1;

    return {
      id: `ch-${chapterNum}`,
      title: `Kapitola ${chapterNum}: ${chapterConfig.title}`,
      description: `Úvod do problematiky a základní koncepty pro téma ${chapterConfig.title}.`,
      lessons: chapterConfig.lessons.map((lessonTitle, lessonIdx) => {
        const lessonNum = lessonIdx + 1;
        const isCompleted = chapterIdx === 0 && lessonIdx < 2; // First 2 lessons completed
        const isUnlocked =
          chapterIdx === 0 || (chapterIdx === 1 && lessonIdx === 0); // First chapter and first lesson of 2nd chapter unlocked

        return {
          id: `l-${chapterNum}-${lessonNum}`,
          title: `${lessonNum}. ${lessonTitle}`,
          duration: `${10 + lessonIdx * 5} min`,
          type: lessonIdx % 2 === 0 ? "video" : "quiz", // Alternate types
          status: isCompleted
            ? "completed"
            : isUnlocked
            ? "unlocked"
            : "locked",
        };
      }),
    };
  });

  return {
    title: `${subject.title} - ${level.title}${
      subLevel ? ` (${subLevel}. stupeň)` : ""
    }`,
    description: `Komplexní kurz pro ${level.title.toLowerCase()}.`,
    progress: 15, // 15% completed
    chapters,
  };
};

// --- COMPONENT ---

const UniversalCoursePage = ({ subject, level, subLevel }) => {
  const navigate = useNavigate();
  const courseData = generateCourseData(subject, level, subLevel);
  const [expandedChapter, setExpandedChapter] = useState("ch-1");

  const toggleChapter = (chapterId) => {
    setExpandedChapter(expandedChapter === chapterId ? null : chapterId);
  };

  const IconComponent = LucideIcons[subject.icon] || LucideIcons.BookOpen;

  // Dynamic styles
  const themeColor = subject.themeColor || "blue";

  // Helper to get Tailwind classes dynamically (safelist might be needed in real app, but this works for now if classes exist)
  // We'll use style objects for colors to be safe against purging if not configured
  const getThemeColor = (opacity = 1) => {
    // Simple mapping for demo purposes, ideally use Tailwind classes
    const colors = {
      blue: `rgba(59, 130, 246, ${opacity})`,
      green: `rgba(34, 197, 94, ${opacity})`,
      purple: `rgba(168, 85, 247, ${opacity})`,
      red: `rgba(239, 68, 68, ${opacity})`,
      orange: `rgba(249, 115, 22, ${opacity})`,
      teal: `rgba(20, 184, 166, ${opacity})`,
      pink: `rgba(236, 72, 153, ${opacity})`,
      emerald: `rgba(16, 185, 129, ${opacity})`,
      yellow: `rgba(234, 179, 8, ${opacity})`,
      cyan: `rgba(6, 182, 212, ${opacity})`,
      red: `rgba(239, 68, 68, ${opacity})`,
    };
    return colors[themeColor] || colors.blue;
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Course Header Card */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-200 dark:border-zinc-800 shadow-xl mb-10 relative overflow-hidden">
        {/* Background Decoration */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 -translate-y-1/2 translate-x-1/3 pointer-events-none"
          style={{ backgroundColor: getThemeColor() }}
        />

        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg shrink-0"
            style={{
              backgroundColor: getThemeColor(0.1),
              color: getThemeColor(),
            }}
          >
            <IconComponent size={48} />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400">
                Kurz
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                style={{ backgroundColor: getThemeColor() }}
              >
                {level.title}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {courseData.title}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-6">
              {courseData.description}
            </p>

            {/* Progress Bar */}
            <div className="max-w-md">
              <div className="flex justify-between text-sm font-medium mb-2">
                <span className="text-gray-700 dark:text-gray-300">
                  Váš postup
                </span>
                <span style={{ color: getThemeColor() }}>
                  {courseData.progress}%
                </span>
              </div>
              <div className="h-3 w-full bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${courseData.progress}%`,
                    backgroundColor: getThemeColor(),
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 min-w-[200px]">
            <button
              className="px-6 py-3 rounded-xl font-bold text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              style={{ backgroundColor: getThemeColor() }}
            >
              <LucideIcons.PlayCircle size={20} />
              Pokračovat
            </button>
            <button className="px-6 py-3 rounded-xl font-bold bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-all flex items-center justify-center gap-2">
              <LucideIcons.Bookmark size={20} />
              Uložit kurz
            </button>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Column: Chapters */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <LucideIcons.List className="w-6 h-6" />
            Obsah kurzu
          </h2>

          <div className="space-y-4">
            {courseData.chapters.map((chapter) => (
              <div
                key={chapter.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
                        expandedChapter === chapter.id
                          ? "text-white"
                          : "bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400"
                      }`}
                      style={
                        expandedChapter === chapter.id
                          ? { backgroundColor: getThemeColor() }
                          : {}
                      }
                    >
                      {chapter.id.split("-")[1]}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                        {chapter.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {chapter.lessons.length} lekcí • {chapter.description}
                      </p>
                    </div>
                  </div>
                  <LucideIcons.ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      expandedChapter === chapter.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Lessons List */}
                {expandedChapter === chapter.id && (
                  <div className="border-t border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50">
                    {chapter.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between p-4 pl-20 hover:bg-white dark:hover:bg-zinc-800 transition-colors border-b border-gray-100 dark:border-zinc-800 last:border-0 group cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`
                            w-8 h-8 rounded-full flex items-center justify-center
                            ${
                              lesson.status === "completed"
                                ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                                : lesson.status === "locked"
                                ? "bg-gray-100 text-gray-400 dark:bg-zinc-800 dark:text-zinc-600"
                                : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                            }
                          `}
                          >
                            {lesson.status === "completed" ? (
                              <LucideIcons.Check size={16} />
                            ) : lesson.status === "locked" ? (
                              <LucideIcons.Lock size={16} />
                            ) : (
                              <LucideIcons.Play size={16} className="ml-0.5" />
                            )}
                          </div>
                          <div>
                            <h4
                              className={`font-medium ${
                                lesson.status === "locked"
                                  ? "text-gray-400 dark:text-zinc-600"
                                  : "text-gray-900 dark:text-white"
                              }`}
                            >
                              {lesson.title}
                            </h4>
                            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                              <span className="flex items-center gap-1">
                                <LucideIcons.Clock size={12} />
                                {lesson.duration}
                              </span>
                              <span className="flex items-center gap-1 capitalize">
                                {lesson.type === "video" ? (
                                  <LucideIcons.Video size={12} />
                                ) : (
                                  <LucideIcons.FileQuestion size={12} />
                                )}
                                {lesson.type}
                              </span>
                            </div>
                          </div>
                        </div>

                        {lesson.status !== "locked" && (
                          <button className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 text-xs font-medium bg-white dark:bg-zinc-700 border border-gray-200 dark:border-zinc-600 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-zinc-600">
                            Spustit
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: Stats & Info */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200 dark:border-zinc-800 shadow-sm">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">
              O kurzu
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <LucideIcons.BarChart2 size={16} /> Obtížnost
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {level.level}
                </span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <LucideIcons.Book size={16} /> Počet kapitol
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {courseData.chapters.length}
                </span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <LucideIcons.Clock size={16} /> Odhadovaný čas
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  ~12 hodin
                </span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <LucideIcons.Award size={16} /> Certifikát
                </span>
                <span className="font-medium text-green-600 dark:text-green-400">
                  Ano
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-bold text-lg mb-2">Potřebujete pomoc?</h3>
              <p className="text-gray-300 text-sm mb-4">
                Náš AI asistent je připraven vám pomoci s jakýmkoliv problémem v
                tomto kurzu.
              </p>
              <button className="w-full py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-medium transition-colors">
                Zeptat se AI
              </button>
            </div>
            <LucideIcons.Bot className="absolute -bottom-4 -right-4 w-32 h-32 text-white/5 rotate-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversalCoursePage;
