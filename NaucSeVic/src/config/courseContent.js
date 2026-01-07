import { mathSS } from "./mathSS.js";
import { mathZS } from "./mathZS.js";
export const courseContentDatabase = {
  matematika: {
    zs: mathZS,
    ss: mathSS,
    vs: {
      default: [],
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
      1: [
        {
          title: "Základní tvary v rovině",
          lessons: [
            {
              title: "Čtverec a obdélník",
              content: {
                splineUrl:
                  "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode",
                sections: [
                  {
                    heading: "Čtverec",
                    text: "Čtverec je pravidelný čtyřúhelník, který má všechny strany stejně dlouhé a všechny úhly pravé ($90^\\circ$).",
                  },
                  {
                    heading: "Obdélník",
                    text: "Obdélník je čtyřúhelník, který má protější strany stejně dlouhé a všechny úhly pravé.",
                  },
                ],
              },
            },
            "Trojúhelník",
            "Kruh a kružnice",
            "Mnohoúhelníky",
          ],
        },
        {
          title: "Tělesa a prostor",
          lessons: ["Krychle a kvádr", "Koule a válec", "Stavby z kostek"],
        },
        {
          title: "Měření a rýsování",
          lessons: [
            "Jednotky délky",
            "Měření úsečky",
            "Rýsování přímek a kolmic",
            "Obvod obrazců",
          ],
        },
      ],
      2: [
        {
          title: "Úhly a trojúhelníky",
          lessons: [
            "Úhly a jejich velikost",
            "Vlastnosti trojúhelníků",
            "Shodnost trojúhelníků",
            "Pythagorova věta",
          ],
        },
        {
          title: "Čtyřúhelníky a mnohoúhelníky",
          lessons: ["Rovnoběžníky", "Lichoběžníky", "Obsahy rovinných útvarů"],
        },
        {
          title: "Kružnice a kruh",
          lessons: ["Vzájemná poloha", "Thaletova věta", "Obvod a obsah kruhu"],
        },
        {
          title: "Tělesa",
          lessons: [
            "Hranoly a válce",
            "Jehlan a kužel",
            "Povrch a objem těles",
          ],
        },
        {
          title: "Konstrukční úlohy",
          lessons: [
            "Množiny bodů dané vlastnosti",
            "Osová a středová souměrnost",
            "Konstrukce trojúhelníků",
          ],
        },
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

export const generateCourseData = (subject, level, subLevel) => {
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
      lessons: chapterConfig.lessons.map((lessonItem, lessonIdx) => {
        const lessonNum = lessonIdx + 1;
        const isCompleted = chapterIdx === 0 && lessonIdx < 2; // First 2 lessons completed
        const isUnlocked =
          chapterIdx === 0 || (chapterIdx === 1 && lessonIdx === 0); // First chapter and first lesson of 2nd chapter unlocked

        const title =
          typeof lessonItem === "string" ? lessonItem : lessonItem.title;
        const content =
          typeof lessonItem === "object" ? lessonItem.content : null;

        return {
          id: `l-${chapterNum}-${lessonNum}`,
          title: `${lessonNum}. ${title}`,
          content: content,
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
