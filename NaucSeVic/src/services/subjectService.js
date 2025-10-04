import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

// Subject management
export const createSubject = async (subjectData) => {
  try {
    const subjectRef = doc(db, "subjects", subjectData.id);
    await setDoc(subjectRef, subjectData);
    return subjectData;
  } catch (error) {
    console.error("Error creating subject:", error);
    throw error;
  }
};

export const getAllSubjects = async () => {
  try {
    const subjectsRef = collection(db, "subjects");
    const querySnapshot = await getDocs(subjectsRef);
    const subjects = [];

    querySnapshot.forEach((doc) => {
      subjects.push({ id: doc.id, ...doc.data() });
    });

    return subjects;
  } catch (error) {
    console.error("Error getting subjects:", error);
    throw error;
  }
};

export const getSubject = async (subjectId) => {
  try {
    const subjectRef = doc(db, "subjects", subjectId);
    const subjectSnap = await getDoc(subjectRef);

    if (subjectSnap.exists()) {
      return { id: subjectSnap.id, ...subjectSnap.data() };
    } else {
      throw new Error("Subject not found");
    }
  } catch (error) {
    console.error("Error getting subject:", error);
    throw error;
  }
};

// Initialize default subjects
export const initializeDefaultSubjects = async () => {
  const defaultSubjects = [
    {
      id: "matematika",
      name: "Matematika",
      description: "Základy matematiky, algebra, geometrie a další",
      icon: "📐",
    },
    {
      id: "fyzika",
      name: "Fyzika",
      description: "Fyzikální zákony, mechanika, elektřina a magnetismus",
      icon: "⚗️",
    },
    {
      id: "chemie",
      name: "Chemie",
      description: "Chemické prvky, sloučeniny a reakce",
      icon: "🧪",
    },
    {
      id: "biologie",
      name: "Biologie",
      description: "Živé organismy, buňky a biologické procesy",
      icon: "🔬",
    },
    {
      id: "cestina",
      name: "Čeština",
      description: "Český jazyk, gramatika a literatura",
      icon: "📚",
    },
    {
      id: "anglictina",
      name: "Angličtina",
      description: "Anglický jazyk, slovní zásoba a gramatika",
      icon: "🇬🇧",
    },
    {
      id: "dejepis",
      name: "Dějepis",
      description: "Historie světa a České republiky",
      icon: "🏛️",
    },
    {
      id: "zemepis",
      name: "Zeměpis",
      description: "Geografie, krajiny a státy světa",
      icon: "🌍",
    },
  ];

  try {
    for (const subject of defaultSubjects) {
      await createSubject(subject);
    }
    console.log("Default subjects created successfully");
  } catch (error) {
    console.error("Error creating default subjects:", error);
  }
};
