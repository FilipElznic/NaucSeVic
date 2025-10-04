// Main database service that combines all Firebase services
import {
  createUserProfile,
  getUserProfile,
  updateUserProfile,
  addCoinsAndXP,
  unlockAchievement,
} from "./userService";

import {
  logActivity,
  getUserActivity,
  getUserActivityStats,
} from "./activityService";

import {
  getAllAchievements,
  checkUserAchievements,
  initializeDefaultAchievements,
} from "./achievementService";

import {
  getAllSubjects,
  getSubject,
  initializeDefaultSubjects,
} from "./subjectService";

import {
  createTask,
  getTasksBySubject,
  submitTaskAnswer,
  getUserTaskHistory,
  getUserTaskStats,
  hasUserCompletedTask,
} from "./taskService";

import {
  getAllGeometryData,
  getGeometryData,
  initializeDefaultGeometryData,
} from "./geometryService";

import {
  getAllPhysicsData,
  getPhysicsData,
  initializeDefaultPhysicsData,
} from "./physicsService";

// Export all services
export {
  // User services
  createUserProfile,
  getUserProfile,
  updateUserProfile,
  addCoinsAndXP,
  unlockAchievement,

  // Activity services
  logActivity,
  getUserActivity,
  getUserActivityStats,

  // Achievement services
  getAllAchievements,
  checkUserAchievements,

  // Subject services
  getAllSubjects,
  getSubject,

  // Task services
  createTask,
  getTasksBySubject,
  submitTaskAnswer,
  getUserTaskHistory,
  getUserTaskStats,
  hasUserCompletedTask,

  // Geometry services
  getAllGeometryData,
  getGeometryData,

  // Physics services
  getAllPhysicsData,
  getPhysicsData,
};

// Initialize all default data
export const initializeDatabase = async () => {
  try {
    console.log("Initializing database...");

    await Promise.all([
      initializeDefaultSubjects(),
      initializeDefaultAchievements(),
      initializeDefaultGeometryData(),
      initializeDefaultPhysicsData(),
    ]);

    console.log("Database initialization completed successfully");
    return true;
  } catch (error) {
    console.error("Error initializing database:", error);
    return false;
  }
};

// Complete task and handle rewards/achievements
export const completeTask = async (userId, taskId, userAnswer, isCorrect) => {
  try {
    // Submit the task answer
    await submitTaskAnswer(userId, taskId, userAnswer, isCorrect);

    if (isCorrect) {
      // Get task details for rewards
      const { getTask } = await import("./taskService");
      const task = await getTask(taskId);

      // Add XP and coins
      await addCoinsAndXP(userId, task.coinReward || 10, task.xpReward || 25);

      // Log activity
      await logActivity(userId, 1, task.xpReward || 25);

      // Check for new achievements
      const newAchievements = await checkUserAchievements(userId);

      // Unlock new achievements and add their rewards
      for (const achievement of newAchievements) {
        await unlockAchievement(userId, achievement.id);
        await addCoinsAndXP(
          userId,
          achievement.coinReward,
          achievement.xpReward
        );
      }

      return {
        success: true,
        taskReward: {
          coins: task.coinReward || 10,
          xp: task.xpReward || 25,
        },
        newAchievements,
        totalNewCoins:
          (task.coinReward || 10) +
          newAchievements.reduce((sum, a) => sum + a.coinReward, 0),
        totalNewXP:
          (task.xpReward || 25) +
          newAchievements.reduce((sum, a) => sum + a.xpReward, 0),
      };
    }

    return { success: true, correct: false };
  } catch (error) {
    console.error("Error completing task:", error);
    throw error;
  }
};

// Get user dashboard data
export const getUserDashboardData = async (userId) => {
  try {
    const [
      userProfile,
      activityStats,
      taskStats,
      recentActivity,
      achievements,
    ] = await Promise.all([
      getUserProfile(userId),
      getUserActivityStats(userId),
      getUserTaskStats(userId),
      getUserActivity(userId, 7), // Last 7 days
      getAllAchievements(),
    ]);

    // Filter unlocked achievements
    const unlockedAchievements = achievements.filter((achievement) =>
      userProfile.unlockedAchievements?.includes(achievement.id)
    );

    return {
      profile: userProfile,
      stats: {
        activity: activityStats,
        tasks: taskStats,
      },
      recentActivity,
      achievements: {
        unlocked: unlockedAchievements,
        total: achievements.length,
        progress: (unlockedAchievements.length / achievements.length) * 100,
      },
    };
  } catch (error) {
    console.error("Error getting user dashboard data:", error);
    throw error;
  }
};
