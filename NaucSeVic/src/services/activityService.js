import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebase";

// Activity tracking
export const logActivity = async (userId, completedTasks, gainedXP) => {
  try {
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
    const activityRef = doc(db, "activity", `${userId}_${today}`);

    // Check if today's activity already exists
    const activitySnap = await getDoc(activityRef);

    if (activitySnap.exists()) {
      // Update existing activity
      const currentData = activitySnap.data();
      await setDoc(activityRef, {
        userId,
        date: today,
        completedTasks: currentData.completedTasks + completedTasks,
        gainedXP: currentData.gainedXP + gainedXP,
        updatedAt: serverTimestamp(),
      });
    } else {
      // Create new activity record
      await setDoc(activityRef, {
        userId,
        date: today,
        completedTasks,
        gainedXP,
        createdAt: serverTimestamp(),
      });
    }
  } catch (error) {
    console.error("Error logging activity:", error);
    throw error;
  }
};

export const getUserActivity = async (userId, days = 30) => {
  try {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - days);

    const startDateStr = startDate.toISOString().split("T")[0];
    const endDateStr = endDate.toISOString().split("T")[0];

    const activityRef = collection(db, "activity");
    const activityQuery = query(
      activityRef,
      where("userId", "==", userId),
      where("date", ">=", startDateStr),
      where("date", "<=", endDateStr),
      orderBy("date", "asc")
    );

    const querySnapshot = await getDocs(activityQuery);
    const activities = [];

    querySnapshot.forEach((doc) => {
      activities.push({ id: doc.id, ...doc.data() });
    });

    return activities;
  } catch (error) {
    console.error("Error getting user activity:", error);
    throw error;
  }
};

export const getUserActivityStats = async (userId) => {
  try {
    const activities = await getUserActivity(userId, 365); // Get last year

    const stats = {
      totalTasks: 0,
      totalXP: 0,
      streak: 0,
      bestDay: { date: null, tasks: 0, xp: 0 },
      weeklyAverage: 0,
      monthlyAverage: 0,
    };

    activities.forEach((activity) => {
      stats.totalTasks += activity.completedTasks;
      stats.totalXP += activity.gainedXP;

      // Find best day
      if (activity.completedTasks > stats.bestDay.tasks) {
        stats.bestDay = {
          date: activity.date,
          tasks: activity.completedTasks,
          xp: activity.gainedXP,
        };
      }
    });

    // Calculate streak (consecutive days with activity)
    const today = new Date().toISOString().split("T")[0];
    let currentStreak = 0;
    let currentDate = new Date();

    for (let i = 0; i < 365; i++) {
      const dateStr = currentDate.toISOString().split("T")[0];
      const hasActivity = activities.some(
        (a) => a.date === dateStr && a.completedTasks > 0
      );

      if (hasActivity) {
        currentStreak++;
      } else if (dateStr !== today) {
        // Don't break streak if today has no activity yet
        break;
      }

      currentDate.setDate(currentDate.getDate() - 1);
    }

    stats.streak = currentStreak;

    // Calculate averages
    const last7Days = activities.filter((a) => {
      const date = new Date(a.date);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return date >= weekAgo;
    });

    const last30Days = activities.filter((a) => {
      const date = new Date(a.date);
      const monthAgo = new Date();
      monthAgo.setDate(monthAgo.getDate() - 30);
      return date >= monthAgo;
    });

    stats.weeklyAverage =
      last7Days.length > 0
        ? last7Days.reduce((sum, a) => sum + a.completedTasks, 0) /
          Math.min(7, last7Days.length)
        : 0;

    stats.monthlyAverage =
      last30Days.length > 0
        ? last30Days.reduce((sum, a) => sum + a.completedTasks, 0) /
          Math.min(30, last30Days.length)
        : 0;

    return stats;
  } catch (error) {
    console.error("Error getting user activity stats:", error);
    throw error;
  }
};
