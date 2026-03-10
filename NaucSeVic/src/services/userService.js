import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { cloudFunctionsService } from "./cloudFunctions";

// User service for NaucSeVic
class UserService {
  // Get user profile from the new 'users' collection
  async getUserProfile(userId) {
    try {
      if (!userId) {
        throw new Error("User ID is required");
      }

      const userRef = doc(db, "users", userId);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        return userDoc.data();
      } else {
        console.log("No user profile found");
        return null;
      }
    } catch (error) {
      console.error("Error getting user profile:", error);
      throw error;
    }
  }

  // Check if user profile exists
  async checkProfileExists(userId) {
    const profile = await this.getUserProfile(userId);
    return profile !== null;
  }

  // Create user profile if it doesn't exist
  async ensureProfileExists(userId, firstName, lastName, email) {
    try {
      const exists = await this.checkProfileExists(userId);

      if (!exists) {
        console.log("Profile doesn't exist, creating...");

        // Try to use Cloud Function first
        try {
          await cloudFunctionsService.initializeUserProfile(
            firstName,
            lastName,
          );
          return true;
        } catch (error) {
          console.warn(
            "Cloud Function failed, creating profile locally:",
            error,
          );

          // Fallback: create profile directly in Firestore
          const today = new Date().toISOString().split("T")[0];

          const userProfile = {
            profile: {
              name: firstName || "",
              surname: lastName || "",
              email: email || "",
              xp: 0,
              coins: 0,
            },
            completedTasks: {},
            progress: {
              [today]: {
                loginTime: new Date(),
                xpGained: 0,
                coinsGained: 0,
                tasksFinished: 0,
              },
            },
          };

          const userRef = doc(db, "users", userId);
          await setDoc(userRef, userProfile);
          return true;
        }
      }

      return true;
    } catch (error) {
      console.error("Error ensuring profile exists:", error);
      // Permission-denied usually means Firestore/App Check enforcement mismatch.
      // Surface this error instead of retrying profile creation loops.
      if (
        error?.code === "permission-denied" ||
        error?.message?.includes("insufficient permissions")
      ) {
        throw error;
      }
      throw error;
    }
  }

  // Update user profile
  async updateProfile(userId, updates) {
    try {
      if (!userId) {
        throw new Error("User ID is required");
      }

      const userRef = doc(db, "users", userId);

      // Format updates for nested profile structure
      const formattedUpdates = {};
      Object.keys(updates).forEach((key) => {
        formattedUpdates[`profile.${key}`] = updates[key];
      });

      await updateDoc(userRef, formattedUpdates);
      return true;
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw error;
    }
  }

  // Toggle favorite course
  async toggleFavoriteCourse(userId, courseId, isFavorite) {
    try {
      if (!userId) {
        throw new Error("User ID is required");
      }

      const userRef = doc(db, "users", userId);
      const updateData = {
        favoriteCourses: isFavorite
          ? arrayUnion(courseId)
          : arrayRemove(courseId),
      };

      await updateDoc(userRef, updateData);
      return true;
    } catch (error) {
      console.error("Error toggling favorite course:", error);
      throw error;
    }
  }

  // Update course progress
  async updateCourseProgress(userId, courseId, progress, completedLessons) {
    try {
      if (!userId) {
        throw new Error("User ID is required");
      }

      const userRef = doc(db, "users", userId);
      const updates = {
        [`courseProgress.${courseId}`]: {
          progress,
          completedLessons,
          lastUpdated: new Date().toISOString(),
        },
      };

      await updateDoc(userRef, updates);
      return true;
    } catch (error) {
      console.error("Error updating course progress:", error);
      throw error;
    }
  }

  // Update daily progress
  async updateDailyProgress(userId, progressData) {
    try {
      if (!userId) {
        throw new Error("User ID is required");
      }

      const today = new Date().toISOString().split("T")[0];
      const userRef = doc(db, "users", userId);

      const updates = {};
      Object.keys(progressData).forEach((key) => {
        updates[`progress.${today}.${key}`] = progressData[key];
      });

      await updateDoc(userRef, updates);
      return true;
    } catch (error) {
      console.error("Error updating daily progress:", error);
      throw error;
    }
  }

  // Get user's completed tasks
  async getCompletedTasks(userId) {
    try {
      const userProfile = await this.getUserProfile(userId);
      return userProfile ? userProfile.completedTasks || {} : {};
    } catch (error) {
      console.error("Error getting completed tasks:", error);
      return {};
    }
  }

  // Get user's progress for a specific date
  async getDailyProgress(userId, date = null) {
    try {
      const targetDate = date || new Date().toISOString().split("T")[0];
      const userProfile = await this.getUserProfile(userId);

      if (
        userProfile &&
        userProfile.progress &&
        userProfile.progress[targetDate]
      ) {
        return userProfile.progress[targetDate];
      }

      return {
        loginTime: null,
        xpGained: 0,
        coinsGained: 0,
        tasksFinished: 0,
      };
    } catch (error) {
      console.error("Error getting daily progress:", error);
      return {
        loginTime: null,
        xpGained: 0,
        coinsGained: 0,
        tasksFinished: 0,
      };
    }
  }
}

// Export singleton instance
export const userService = new UserService();
export default userService;
