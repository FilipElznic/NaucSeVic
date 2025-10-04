import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";

// Achievement management
export const createAchievement = async (achievementData) => {
  try {
    const achievementRef = doc(db, "achievements", achievementData.id);
    await setDoc(achievementRef, achievementData);
    return achievementData;
  } catch (error) {
    console.error("Error creating achievement:", error);
    throw error;
  }
};

export const getAllAchievements = async () => {
  try {
    const achievementsRef = collection(db, "achievements");
    const querySnapshot = await getDocs(achievementsRef);
    const achievements = [];

    querySnapshot.forEach((doc) => {
      achievements.push({ id: doc.id, ...doc.data() });
    });

    return achievements;
  } catch (error) {
    console.error("Error getting achievements:", error);
    throw error;
  }
};

export const getAchievement = async (achievementId) => {
  try {
    const achievementRef = doc(db, "achievements", achievementId);
    const achievementSnap = await getDoc(achievementRef);

    if (achievementSnap.exists()) {
      return { id: achievementSnap.id, ...achievementSnap.data() };
    } else {
      throw new Error("Achievement not found");
    }
  } catch (error) {
    console.error("Error getting achievement:", error);
    throw error;
  }
};

// Check if user meets achievement conditions
export const checkAchievementConditions = async (userId, condition) => {
  try {
    switch (condition) {
      case "complete_10_tasks": {
        // Count completed tasks for user
        const userTasksRef = collection(db, "userTasks");
        const completedTasksQuery = query(
          userTasksRef,
          where("userId", "==", userId),
          where("isCorrect", "==", true)
        );
        const querySnapshot = await getDocs(completedTasksQuery);
        return querySnapshot.size >= 10;
      }

      case "complete_50_tasks": {
        const userTasksRef = collection(db, "userTasks");
        const completedTasksQuery = query(
          userTasksRef,
          where("userId", "==", userId),
          where("isCorrect", "==", true)
        );
        const querySnapshot = await getDocs(completedTasksQuery);
        return querySnapshot.size >= 50;
      }

      case "complete_100_tasks": {
        const userTasksRef = collection(db, "userTasks");
        const completedTasksQuery = query(
          userTasksRef,
          where("userId", "==", userId),
          where("isCorrect", "==", true)
        );
        const querySnapshot = await getDocs(completedTasksQuery);
        return querySnapshot.size >= 100;
      }

      case "reach_1000_xp": {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          return userSnap.data().xp >= 1000;
        }
        return false;
      }

      case "reach_5000_xp": {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          return userSnap.data().xp >= 5000;
        }
        return false;
      }

      case "7_day_streak": {
        // Import activity service function
        const { getUserActivityStats } = await import("./activityService");
        const stats = await getUserActivityStats(userId);
        return stats.streak >= 7;
      }

      case "30_day_streak": {
        const { getUserActivityStats } = await import("./activityService");
        const stats = await getUserActivityStats(userId);
        return stats.streak >= 30;
      }

      case "math_master": {
        // Check if user completed 20 math tasks correctly
        const userTasksRef = collection(db, "userTasks");
        const tasksRef = collection(db, "tasks");
        const mathTasksQuery = query(
          tasksRef,
          where("subjectId", "==", "matematika")
        );
        const mathTasksSnapshot = await getDocs(mathTasksQuery);

        const mathTaskIds = [];
        mathTasksSnapshot.forEach((doc) => mathTaskIds.push(doc.id));

        const completedMathTasksQuery = query(
          userTasksRef,
          where("userId", "==", userId),
          where("isCorrect", "==", true),
          where("taskId", "in", mathTaskIds.slice(0, 10)) // Firestore 'in' limit is 10
        );

        const completedSnapshot = await getDocs(completedMathTasksQuery);
        return completedSnapshot.size >= 20;
      }

      default:
        return false;
    }
  } catch (error) {
    console.error("Error checking achievement conditions:", error);
    return false;
  }
};

// Check all achievements for a user
export const checkUserAchievements = async (userId) => {
  try {
    const achievements = await getAllAchievements();
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      throw new Error("User not found");
    }

    const userData = userSnap.data();
    const unlockedAchievements = userData.unlockedAchievements || [];
    const newlyUnlocked = [];

    for (const achievement of achievements) {
      if (!unlockedAchievements.includes(achievement.id)) {
        const conditionMet = await checkAchievementConditions(
          userId,
          achievement.condition
        );
        if (conditionMet) {
          newlyUnlocked.push(achievement);
        }
      }
    }

    return newlyUnlocked;
  } catch (error) {
    console.error("Error checking user achievements:", error);
    throw error;
  }
};

// Initialize default achievements
export const initializeDefaultAchievements = async () => {
  const defaultAchievements = [
    {
      id: "first_steps",
      name: "První kroky",
      description: "Dokončil jsi svůj první úkol",
      xpReward: 50,
      coinReward: 10,
      condition: "complete_1_task",
    },
    {
      id: "task_master_10",
      name: "Mistr úkolů",
      description: "Dokončil jsi 10 úkolů správně",
      xpReward: 200,
      coinReward: 50,
      condition: "complete_10_tasks",
    },
    {
      id: "task_master_50",
      name: "Expert úkolů",
      description: "Dokončil jsi 50 úkolů správně",
      xpReward: 500,
      coinReward: 150,
      condition: "complete_50_tasks",
    },
    {
      id: "task_master_100",
      name: "Legenda úkolů",
      description: "Dokončil jsi 100 úkolů správně",
      xpReward: 1000,
      coinReward: 300,
      condition: "complete_100_tasks",
    },
    {
      id: "xp_milestone_1000",
      name: "XP Sběratel",
      description: "Dosáhl jsi 1000 XP",
      xpReward: 100,
      coinReward: 25,
      condition: "reach_1000_xp",
    },
    {
      id: "xp_milestone_5000",
      name: "XP Mistr",
      description: "Dosáhl jsi 5000 XP",
      xpReward: 500,
      coinReward: 100,
      condition: "reach_5000_xp",
    },
    {
      id: "streak_7",
      name: "7denní série",
      description: "Učil ses 7 dní v řadě",
      xpReward: 300,
      coinReward: 75,
      condition: "7_day_streak",
    },
    {
      id: "streak_30",
      name: "Měsíční série",
      description: "Učil ses 30 dní v řadě",
      xpReward: 1500,
      coinReward: 400,
      condition: "30_day_streak",
    },
    {
      id: "math_master",
      name: "Matematik",
      description: "Dokončil jsi 20 matematických úkolů",
      xpReward: 400,
      coinReward: 100,
      condition: "math_master",
    },
  ];

  try {
    for (const achievement of defaultAchievements) {
      await createAchievement(achievement);
    }
    console.log("Default achievements created successfully");
  } catch (error) {
    console.error("Error creating default achievements:", error);
  }
};
