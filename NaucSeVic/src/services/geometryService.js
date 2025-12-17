import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../config/firebase";

export const getGeometricBodies = async () => {
  try {
    const q = query(collection(db, "geometricBodies"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching geometric bodies:", error);
    // Return empty array instead of throwing to prevent app crash if collection doesn't exist yet
    return [];
  }
};
