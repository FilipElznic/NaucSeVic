import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

// Geometry data management
export const createGeometryData = async (geometryData) => {
  try {
    const geometryRef = doc(db, "geometryData", geometryData.id);
    await setDoc(geometryRef, geometryData);
    return geometryData;
  } catch (error) {
    console.error("Error creating geometry data:", error);
    throw error;
  }
};

export const getAllGeometryData = async () => {
  try {
    const geometryRef = collection(db, "geometryData");
    const querySnapshot = await getDocs(geometryRef);
    const geometryData = [];

    querySnapshot.forEach((doc) => {
      geometryData.push({ id: doc.id, ...doc.data() });
    });

    return geometryData;
  } catch (error) {
    console.error("Error getting geometry data:", error);
    throw error;
  }
};

export const getGeometryData = async (geometryId) => {
  try {
    const geometryRef = doc(db, "geometryData", geometryId);
    const geometrySnap = await getDoc(geometryRef);

    if (geometrySnap.exists()) {
      return { id: geometrySnap.id, ...geometrySnap.data() };
    } else {
      throw new Error("Geometry data not found");
    }
  } catch (error) {
    console.error("Error getting geometry data:", error);
    throw error;
  }
};

// Initialize default geometry data
export const initializeDefaultGeometryData = async () => {
  const defaultGeometry = [
    {
      id: "krychle",
      name: "Krychle",
      description: "Pravidelné těleso se šesti čtvercovými stěnami",
      formulas: {
        surface: "S = 6a²",
        volume: "V = a³",
        perimeter: "o = 12a",
      },
    },
    {
      id: "kvadr",
      name: "Kvádr",
      description: "Pravidelné těleso se šesti obdélníkovými stěnami",
      formulas: {
        surface: "S = 2(ab + bc + ac)",
        volume: "V = abc",
      },
    },
    {
      id: "koule",
      name: "Koule",
      description: "Těleso tvořené všemi body ve stejné vzdálenosti od středu",
      formulas: {
        surface: "S = 4πr²",
        volume: "V = (4/3)πr³",
      },
    },
    {
      id: "kuzel",
      name: "Kužel",
      description: "Těleso s kruhovou podstavou a vrcholem",
      formulas: {
        surface: "S = πr² + πrs",
        volume: "V = (1/3)πr²h",
      },
    },
    {
      id: "valec",
      name: "Válec",
      description: "Těleso s dvěma kruhovými podstavami",
      formulas: {
        surface: "S = 2πr² + 2πrh",
        volume: "V = πr²h",
      },
    },
    {
      id: "jehlan",
      name: "Jehlan",
      description: "Těleso s mnohoúhelníkovou podstavou a vrcholem",
      formulas: {
        surface: "S = S_podstavy + S_plášť",
        volume: "V = (1/3) × S_podstavy × h",
      },
    },
    {
      id: "hranol",
      name: "Hranol",
      description: "Těleso se dvěma shodnými rovnoběžnými podstavami",
      formulas: {
        surface: "S = 2S_podstavy + S_plášť",
        volume: "V = S_podstavy × h",
      },
    },
  ];

  try {
    for (const geometry of defaultGeometry) {
      await createGeometryData(geometry);
    }
    console.log("Default geometry data created successfully");
  } catch (error) {
    console.error("Error creating default geometry data:", error);
  }
};
