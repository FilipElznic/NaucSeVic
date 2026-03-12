import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../config/firebase";

let geometryCache = null;
let geometryCacheTimestamp = 0;
const GEOMETRY_CACHE_TTL = 5 * 60 * 1000; // 5 minutes
let pendingGeometryRequest = null;

export const getGeometricBodies = async () => {
  try {
    // Return cached data if fresh
    if (
      geometryCache &&
      Date.now() - geometryCacheTimestamp < GEOMETRY_CACHE_TTL
    ) {
      return geometryCache;
    }

    // Deduplicate in-flight requests
    if (pendingGeometryRequest) {
      return pendingGeometryRequest;
    }

    pendingGeometryRequest = (async () => {
      const q = query(collection(db, "geometricBodies"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      geometryCache = data;
      geometryCacheTimestamp = Date.now();
      pendingGeometryRequest = null;
      return data;
    })();

    return pendingGeometryRequest;
  } catch (error) {
    pendingGeometryRequest = null;
    console.error("Error fetching geometric bodies:", error);
    return [];
  }
};
