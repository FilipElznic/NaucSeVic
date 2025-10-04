import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

// Physics data management
export const createPhysicsData = async (physicsData) => {
  try {
    const physicsRef = doc(db, "physicsData", physicsData.id);
    await setDoc(physicsRef, physicsData);
    return physicsData;
  } catch (error) {
    console.error("Error creating physics data:", error);
    throw error;
  }
};

export const getAllPhysicsData = async () => {
  try {
    const physicsRef = collection(db, "physicsData");
    const querySnapshot = await getDocs(physicsRef);
    const physicsData = [];

    querySnapshot.forEach((doc) => {
      physicsData.push({ id: doc.id, ...doc.data() });
    });

    return physicsData;
  } catch (error) {
    console.error("Error getting physics data:", error);
    throw error;
  }
};

export const getPhysicsData = async (physicsId) => {
  try {
    const physicsRef = doc(db, "physicsData", physicsId);
    const physicsSnap = await getDoc(physicsRef);

    if (physicsSnap.exists()) {
      return { id: physicsSnap.id, ...physicsSnap.data() };
    } else {
      throw new Error("Physics data not found");
    }
  } catch (error) {
    console.error("Error getting physics data:", error);
    throw error;
  }
};

// Initialize default physics data
export const initializeDefaultPhysicsData = async () => {
  const defaultPhysics = [
    {
      id: "sila",
      name: "Síla",
      unit: "N (Newton)",
      formula: "F = m × a",
      description:
        "Fyzikální veličina, která charakterizuje vzájemné působení těles",
    },
    {
      id: "energie",
      name: "Energie",
      unit: "J (Joule)",
      formula: "E = m × c²",
      description:
        "Skalární fyzikální veličina charakterizující schopnost konat práci",
    },
    {
      id: "prace",
      name: "Práce",
      unit: "J (Joule)",
      formula: "W = F × s × cos(α)",
      description:
        "Skalární fyzikální veličina charakterizující přenos energie",
    },
    {
      id: "vykon",
      name: "Výkon",
      unit: "W (Watt)",
      formula: "P = W/t = F × v",
      description: "Rychlost konání práce nebo rychlost přenosu energie",
    },
    {
      id: "rychlost",
      name: "Rychlost",
      unit: "m/s (metr za sekundu)",
      formula: "v = s/t",
      description: "Vektorová veličina udávající rychlost změny polohy",
    },
    {
      id: "zrychleni",
      name: "Zrychlení",
      unit: "m/s² (metr za sekundu na druhou)",
      formula: "a = Δv/Δt",
      description: "Vektorová veličina udávající rychlost změny rychlosti",
    },
    {
      id: "hmotnost",
      name: "Hmotnost",
      unit: "kg (kilogram)",
      formula: "m = F/a",
      description:
        "Skalární fyzikální veličina charakterizující setrvačnost tělesa",
    },
    {
      id: "tlak",
      name: "Tlak",
      unit: "Pa (Pascal)",
      formula: "p = F/S",
      description: "Skalární veličina charakterizující působení síly na plochu",
    },
    {
      id: "hustota",
      name: "Hustota",
      unit: "kg/m³ (kilogram na metr krychlový)",
      formula: "ρ = m/V",
      description: "Skalární veličina udávající hmotnost na jednotku objemu",
    },
    {
      id: "frekvence",
      name: "Frekvence",
      unit: "Hz (Hertz)",
      formula: "f = 1/T",
      description: "Počet period kmitání nebo otáček za jednotku času",
    },
    {
      id: "proud",
      name: "Elektrický proud",
      unit: "A (Ampér)",
      formula: "I = Q/t = U/R",
      description: "Veličina charakterizující tok elektrického náboje",
    },
    {
      id: "napeti",
      name: "Elektrické napětí",
      unit: "V (Volt)",
      formula: "U = W/Q = I × R",
      description: "Rozdíl elektrických potenciálů mezi dvěma body",
    },
    {
      id: "odpor",
      name: "Elektrický odpor",
      unit: "Ω (Ohm)",
      formula: "R = U/I = ρ × l/S",
      description: "Vlastnost vodiče bránící průchodu elektrického proudu",
    },
    {
      id: "teplota",
      name: "Teplota",
      unit: "K (Kelvin), °C (Celsius)",
      formula: "T(K) = T(°C) + 273.15",
      description: "Stavová veličina charakterizující tepelný stav tělesa",
    },
    {
      id: "teplo",
      name: "Teplo",
      unit: "J (Joule)",
      formula: "Q = m × c × ΔT",
      description: "Forma energie přenášené mezi tělesy s různou teplotou",
    },
  ];

  try {
    for (const physics of defaultPhysics) {
      await createPhysicsData(physics);
    }
    console.log("Default physics data created successfully");
  } catch (error) {
    console.error("Error creating default physics data:", error);
  }
};
