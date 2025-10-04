import { createTask } from "./taskService";

// Sample tasks for different subjects
const sampleTasks = {
  matematika: [
    {
      id: "math_001",
      subjectId: "matematika",
      type: "multiple-choice",
      question: "Kolik je 5 + 3?",
      options: ["6", "7", "8", "9"],
      correctAnswer: "8",
      xpReward: 25,
      coinReward: 10,
    },
    {
      id: "math_002",
      subjectId: "matematika",
      type: "multiple-choice",
      question: "Jaký je obsah čtverca se stranou 4 cm?",
      options: ["8 cm²", "12 cm²", "16 cm²", "20 cm²"],
      correctAnswer: "16 cm²",
      xpReward: 30,
      coinReward: 15,
    },
    {
      id: "math_003",
      subjectId: "matematika",
      type: "open-answer",
      question: "Vypočítej: 12 × 7 =",
      correctAnswer: "84",
      xpReward: 35,
      coinReward: 18,
    },
    {
      id: "math_004",
      subjectId: "matematika",
      type: "multiple-choice",
      question: "Které číslo je prvočíslo?",
      options: ["9", "15", "17", "21"],
      correctAnswer: "17",
      xpReward: 40,
      coinReward: 20,
    },
    {
      id: "math_005",
      subjectId: "matematika",
      type: "multiple-choice",
      question: "Jaký je obvod obdélníku o stranách 5 cm a 3 cm?",
      options: ["8 cm", "15 cm", "16 cm", "30 cm"],
      correctAnswer: "16 cm",
      xpReward: 35,
      coinReward: 18,
    },
  ],

  fyzika: [
    {
      id: "phys_001",
      subjectId: "fyzika",
      type: "multiple-choice",
      question: "Jaká je jednotka síly?",
      options: ["Joule (J)", "Newton (N)", "Watt (W)", "Pascal (Pa)"],
      correctAnswer: "Newton (N)",
      xpReward: 30,
      coinReward: 15,
    },
    {
      id: "phys_002",
      subjectId: "fyzika",
      type: "multiple-choice",
      question: "Jaká je rychlost světla ve vakuu?",
      options: [
        "299 792 458 m/s",
        "300 000 000 m/s",
        "3 × 10⁸ m/s",
        "Všechny odpovědi jsou správné",
      ],
      correctAnswer: "Všechny odpovědi jsou správné",
      xpReward: 50,
      coinReward: 25,
    },
    {
      id: "phys_003",
      subjectId: "fyzika",
      type: "open-answer",
      question: "Jaký je vztah mezi silou, hmotností a zrychlením? (F = ?)",
      correctAnswer: "F = m × a",
      xpReward: 45,
      coinReward: 22,
    },
    {
      id: "phys_004",
      subjectId: "fyzika",
      type: "multiple-choice",
      question: "Co popisuje první Newtonův zákon?",
      options: [
        "Zákon síly",
        "Zákon setrvačnosti",
        "Zákon akce a reakce",
        "Zákon gravitace",
      ],
      correctAnswer: "Zákon setrvačnosti",
      xpReward: 40,
      coinReward: 20,
    },
  ],

  chemie: [
    {
      id: "chem_001",
      subjectId: "chemie",
      type: "multiple-choice",
      question: "Jaká je chemická značka pro kyslík?",
      options: ["O", "Ox", "K", "Ky"],
      correctAnswer: "O",
      xpReward: 25,
      coinReward: 12,
    },
    {
      id: "chem_002",
      subjectId: "chemie",
      type: "multiple-choice",
      question: "Kolik elektronů má atom uhlíku?",
      options: ["4", "6", "8", "12"],
      correctAnswer: "6",
      xpReward: 35,
      coinReward: 18,
    },
    {
      id: "chem_003",
      subjectId: "chemie",
      type: "open-answer",
      question: "Jaký je vzorec pro vodu?",
      correctAnswer: "H2O",
      xpReward: 30,
      coinReward: 15,
    },
  ],

  biologie: [
    {
      id: "bio_001",
      subjectId: "biologie",
      type: "multiple-choice",
      question: "Která část buňky obsahuje DNA?",
      options: ["Cytoplazma", "Jádro", "Mitochondrie", "Ribozom"],
      correctAnswer: "Jádro",
      xpReward: 30,
      coinReward: 15,
    },
    {
      id: "bio_002",
      subjectId: "biologie",
      type: "multiple-choice",
      question: "Kolik komor má lidské srdce?",
      options: ["2", "3", "4", "5"],
      correctAnswer: "4",
      xpReward: 25,
      coinReward: 12,
    },
    {
      id: "bio_003",
      subjectId: "biologie",
      type: "open-answer",
      question:
        "Jak se nazývá proces, při kterém rostliny přeměňují světlo na energii?",
      correctAnswer: "fotosyntéza",
      xpReward: 40,
      coinReward: 20,
    },
  ],

  cestina: [
    {
      id: "cz_001",
      subjectId: "cestina",
      type: "multiple-choice",
      question: "Které slovo je podstatné jméno?",
      options: ["rychlý", "běžet", "kůň", "pomalu"],
      correctAnswer: "kůň",
      xpReward: 25,
      coinReward: 12,
    },
    {
      id: "cz_002",
      subjectId: "cestina",
      type: "multiple-choice",
      question: "Kolik pádů má čeština?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "7",
      xpReward: 30,
      coinReward: 15,
    },
  ],

  anglictina: [
    {
      id: "en_001",
      subjectId: "anglictina",
      type: "multiple-choice",
      question: 'Co znamená anglické slovo "apple"?',
      options: ["banán", "jablko", "hruška", "pomeranč"],
      correctAnswer: "jablko",
      xpReward: 20,
      coinReward: 10,
    },
    {
      id: "en_002",
      subjectId: "anglictina",
      type: "open-answer",
      question: 'Přelož do angličtiny: "pes"',
      correctAnswer: "dog",
      xpReward: 25,
      coinReward: 12,
    },
  ],
};

// Initialize sample tasks
export const initializeSampleTasks = async () => {
  try {
    console.log("Creating sample tasks...");

    for (const [subjectId, tasks] of Object.entries(sampleTasks)) {
      console.log(`Creating ${tasks.length} tasks for ${subjectId}...`);
      for (const task of tasks) {
        await createTask(task);
      }
    }

    console.log("Sample tasks created successfully");
    return true;
  } catch (error) {
    console.error("Error creating sample tasks:", error);
    return false;
  }
};

// Get task count by subject
export const getTaskCountBySubject = () => {
  const counts = {};
  for (const [subjectId, tasks] of Object.entries(sampleTasks)) {
    counts[subjectId] = tasks.length;
  }
  return counts;
};

export { sampleTasks };
