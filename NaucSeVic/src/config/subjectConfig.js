import {
  Calculator,
  Zap,
  Triangle,
  BookOpen,
  Monitor,
  Globe,
  FlaskConical,
  School,
  GraduationCap,
  Divide,
  Microscope,
  Compass,
} from "lucide-react";

/**
 * Configuration object for all subjects in the application.
 * This acts as the single source of truth for subject metadata.
 */
export const subjectConfig = {
  matematika: {
    id: "matematika",
    title: "Matematika",
    themeColor: "blue",
    gradient: "from-blue-500 to-cyan-500",
    icon: "Calculator",
    dbBaseTag: "math",

    tags: ["Algebra", "Analýza"],
    hasSubLevels: true, // ZŠ split into 1. and 2. stupeň
    description:
      "Studium matematických konceptů a řešení problémů. Počítání, algebra, funkce a logika.",
    levelsData: {
      zs: {
        id: "zs",
        title: "Základní škola",
        level: "Začátečník - Mírně pokročilý",
        description:
          "Základy matematiky pro základní školy. Vyberte si stupeň.",
        icon: "School",
        color: "green",
        topics: ["Sčítání a odčítání", "Zlomky", "Rovnice", "Geometrie"],
        pathSuffix: "zs",
        subLevels: {
          "1-stupen": {
            id: "1-stupen",
            title: "1. Stupeň ZŠ",
            level: "Začátečník",
            description:
              "Základy počítání, sčítání, odčítání, násobilka a první setkání s geometrií.",
            icon: "School",
            color: "green",
            topics: [
              "Sčítání a odčítání",
              "Malá násobilka",
              "Geometrické tvary",
              "Slovní úlohy",
            ],
            pathSuffix: "1-stupen",
          },
          "2-stupen": {
            id: "2-stupen",
            title: "2. Stupeň ZŠ",
            level: "Mírně pokročilý",
            description:
              "Zlomky, procenta, rovnice a složitější geometrie. Příprava na přijímačky.",
            icon: "Divide",
            color: "teal",
            topics: [
              "Zlomky a procenta",
              "Lineární rovnice",
              "Pythagorova věta",
              "Výrazy",
            ],
            pathSuffix: "2-stupen",
          },
        },
      },
      ss: {
        id: "ss",
        title: "Střední škola",
        level: "Pokročilý",
        description:
          "Příprava na maturitu a další studium. Funkce, komplexní čísla a úvod do analýzy.",
        icon: "Calculator",
        color: "blue",
        topics: [
          "Funkce a grafy",
          "Komplexní čísla",
          "Posloupnosti a řady",
          "Kombinatorika",
        ],
        pathSuffix: "ss",
      },
      vs: {
        id: "vs",
        title: "Vysoká škola",
        level: "Expert",
        description:
          "Pokročilá matematika pro technické a přírodovědné obory. Diferenciální počet a algebra.",
        icon: "GraduationCap",
        color: "purple",
        topics: [
          "Matematická analýza",
          "Lineární algebra",
          "Diferenciální rovnice",
          "Statistika",
        ],
        pathSuffix: "vs",
      },
    },
  },
  fyzika: {
    id: "fyzika",
    title: "Fyzika",
    themeColor: "purple",
    gradient: "from-blue-500 to-purple-600",
    icon: "Zap",
    dbBaseTag: "physics",

    tags: ["Simulace", "Experimenty"],
    hasSubLevels: false, // Standard ZŠ/SŠ/VŠ
    description:
      "Pochop základní zákony vesmíru skrze interaktivní experimenty a simulace. Síly, energie, elektřina a vesmír.",
    levelsData: {
      zs: {
        id: "zs",
        title: "Základní škola",
        level: "Začátečník",
        description:
          "Objevte svět kolem sebe. Proč věci padají dolů? Jak funguje elektřina? Zábavné experimenty.",
        icon: "School",
        color: "green",
        topics: [
          "Vlastnosti látek",
          "Síla a pohyb",
          "Teplo a teplota",
          "Elektrické obvody",
        ],
        pathSuffix: "zs",
      },
      ss: {
        id: "ss",
        title: "Střední škola",
        level: "Pokročilý",
        description:
          "Ponořte se hlouběji do tajů mechaniky, termodynamiky a optiky. Příprava na maturitu.",
        icon: "Microscope",
        color: "blue",
        topics: [
          "Mechanika",
          "Molekulová fyzika",
          "Elektřina a magnetismus",
          "Optika",
        ],
        pathSuffix: "ss",
      },
      vs: {
        id: "vs",
        title: "Vysoká škola",
        level: "Expert",
        description:
          "Komplexní fyzikální teorie, kvantová mechanika a teorie relativity.",
        icon: "GraduationCap",
        color: "purple",
        topics: [
          "Teoretická mechanika",
          "Kvantová fyzika",
          "Termodynamika",
          "Jaderná fyzika",
        ],
        pathSuffix: "vs",
      },
    },
  },
  geometrie: {
    id: "geometrie",
    title: "Geometrie",
    themeColor: "pink",
    gradient: "from-purple-500 to-violet-600",
    icon: "Triangle",
    dbBaseTag: "geometry",

    tags: ["3D vizualizace", "Konstrukce"],
    hasSubLevels: true, // ZŠ split into 1. and 2. stupeň
    description:
      "Objevuj fascinující svět tvarů, prostorů a konstrukcí s praktickými příklady. Tvary, tělesa, rýsování a prostorová představivost.",
    levelsData: {
      zs: {
        id: "zs",
        title: "Základní škola",
        level: "Začátečník - Mírně pokročilý",
        description:
          "Objevuj fascinující svět tvarů, prostorů a konstrukcí. Vyberte si stupeň.",
        icon: "School",
        color: "green",
        topics: ["Základní útvary", "Měření", "Rýsování", "Tělesa"],
        pathSuffix: "zs",
        subLevels: {
          "1-stupen": {
            id: "1-stupen",
            title: "1. Stupeň ZŠ",
            level: "Začátečník",
            description:
              "Poznáváme tvary kolem nás. Čtverec, trojúhelník, kruh. Základní rýsování.",
            icon: "School",
            color: "green",
            topics: [
              "Základní útvary",
              "Měření",
              "Jednoduché rýsování",
              "Tělesa",
            ],
            pathSuffix: "1-stupen",
          },
          "2-stupen": {
            id: "2-stupen",
            title: "2. Stupeň ZŠ",
            level: "Mírně pokročilý",
            description:
              "Měříme, rýsujeme a počítáme obvody a obsahy. Pythagorova věta v praxi.",
            icon: "Compass",
            color: "teal",
            topics: [
              "Obvody a obsahy",
              "Konstrukční úlohy",
              "Podobnost",
              "Goniometrie",
            ],
            pathSuffix: "2-stupen",
          },
        },
      },
      ss: {
        id: "ss",
        title: "Střední škola",
        level: "Pokročilý",
        description:
          "Analytická geometrie, kuželosečky a trigonometrie. Propojujeme algebru s geometrií.",
        icon: "Compass",
        color: "blue",
        topics: [
          "Analytická geometrie",
          "Trigonometrie",
          "Kuželosečky",
          "Vektory",
        ],
        pathSuffix: "ss",
      },
      vs: {
        id: "vs",
        title: "Vysoká škola",
        level: "Expert",
        description:
          "Diferenciální geometrie, topologie a neeukleidovské geometrie.",
        icon: "GraduationCap",
        color: "purple",
        topics: [
          "Lineární algebra",
          "Diferenciální geometrie",
          "Topologie",
          "Neeukleidovská geometrie",
        ],
        pathSuffix: "vs",
      },
    },
  },
};

export const levelsConfig = {
  zs: { id: "zs", title: "Základní škola", label: "ZŠ" },
  ss: { id: "ss", title: "Střední škola", label: "SŠ" },
  vs: { id: "vs", title: "Vysoká škola", label: "VŠ" },
};
