import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  increment,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebase";

// User profile management
export const createUserProfile = async (uid, email, username) => {
  try {
    const userRef = doc(db, "users", uid);
    const userData = {
      uid,
      email,
      username,
      coins: 0,
      xp: 0,
      unlockedAchievements: [],
      createdAt: serverTimestamp(),
      lastActive: serverTimestamp(),
    };

    await setDoc(userRef, userData);
    return userData;
  } catch (error) {
    console.error("Error creating user profile:", error);
    throw error;
  }
};

export const getUserProfile = async (uid) => {
  try {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      throw new Error("User profile not found");
    }
  } catch (error) {
    console.error("Error getting user profile:", error);
    throw error;
  }
};

export const updateUserProfile = async (uid, updates) => {
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, {
      ...updates,
      lastActive: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};

export const updateUserLastActive = async (uid) => {
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, {
      lastActive: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error updating user last active:", error);
    throw error;
  }
};

export const addCoinsAndXP = async (uid, coins, xp) => {
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, {
      coins: increment(coins),
      xp: increment(xp),
      lastActive: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error adding coins and XP:", error);
    throw error;
  }
};

export const unlockAchievement = async (uid, achievementId) => {
  try {
    const userRef = doc(db, "users", uid);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      const unlockedAchievements = userData.unlockedAchievements || [];

      if (!unlockedAchievements.includes(achievementId)) {
        await updateDoc(userRef, {
          unlockedAchievements: [...unlockedAchievements, achievementId],
          lastActive: serverTimestamp(),
        });
        return true; // Achievement was newly unlocked
      }
    }
    return false; // Achievement was already unlocked
  } catch (error) {
    console.error("Error unlocking achievement:", error);
    throw error;
  }
};
