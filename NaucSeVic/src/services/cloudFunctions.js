import { httpsCallable } from "firebase/functions";
import { functions } from "../config/firebase";

// Cloud Functions service for NaucSeVic
class CloudFunctionsService {
  // Hello World function example
  async callHelloWorld(name) {
    try {
      const helloWorldFunction = httpsCallable(functions, "helloWorld");
      const result = await helloWorldFunction({ name });
      return result.data;
    } catch (error) {
      console.error("Error calling helloWorld function:", error);
      throw error;
    }
  }

  // Initialize user profile after registration
  async initializeUserProfile(firstName, lastName) {
    try {
      const initProfileFunction = httpsCallable(
        functions,
        "initializeUserProfile",
      );
      const result = await initProfileFunction({ firstName, lastName });
      return result.data;
    } catch (error) {
      console.error("Error initializing user profile:", error);
      throw error;
    }
  }

  // Create user profile
  async createUserProfile(uid, profileData) {
    try {
      const createProfileFunction = httpsCallable(
        functions,
        "createUserProfile",
      );
      const result = await createProfileFunction({ uid, profileData });
      return result.data;
    } catch (error) {
      console.error("Error creating user profile:", error);
      throw error;
    }
  }

  // Set admin role (super admin only)
  async setAdminRole(targetUid) {
    try {
      const setAdminFunction = httpsCallable(functions, "setAdminRole");
      const result = await setAdminFunction({ targetUid });
      return result.data;
    } catch (error) {
      console.error("Error setting admin role:", error);
      throw error;
    }
  }

  // Create educational task
  async createEducationalTask(taskData) {
    try {
      const createTaskFunction = httpsCallable(
        functions,
        "createEducationalTask",
      );
      const result = await createTaskFunction(taskData);
      return result.data;
    } catch (error) {
      console.error("Error creating educational task:", error);
      throw error;
    }
  }

  // Get tasks by filters
  async getTasks(filters = {}) {
    try {
      const getTasksFunction = httpsCallable(functions, "getTasks");
      const result = await getTasksFunction(filters);
      return result.data;
    } catch (error) {
      console.error("Error getting tasks:", error);
      throw error;
    }
  }

  // Submit task answer
  async submitTaskAnswer(taskId, userAnswer) {
    try {
      const submitAnswerFunction = httpsCallable(functions, "submitTaskAnswer");
      const result = await submitAnswerFunction({
        taskId,
        userAnswer,
      });
      return result.data;
    } catch (error) {
      console.error("Error submitting task answer:", error);
      throw error;
    }
  }

  // Record task attempt (legacy function)
  async recordTaskAttempt(attemptData) {
    try {
      const recordAttemptFunction = httpsCallable(
        functions,
        "recordTaskAttempt",
      );
      const result = await recordAttemptFunction(attemptData);
      return result.data;
    } catch (error) {
      console.error("Error recording task attempt:", error);
      throw error;
    }
  }

  // Seed geometry data (admin only)
  async seedGeometryData(bodies) {
    try {
      const seedFunction = httpsCallable(functions, "adminSeedGeometry");
      const result = await seedFunction({ bodies });
      return result.data;
    } catch (error) {
      console.error("Error seeding geometry data:", error);
      throw error;
    }
  }

  // Get home screen data
  async getHomeData() {
    try {
      const functionRef = httpsCallable(functions, "getHomeData");
      const result = await functionRef();
      return result.data;
    } catch (error) {
      console.error("Error fetching home data:", error);
      throw error;
    }
  }

  // Activate booster
  async activateBooster(boosterId) {
    try {
      const activateFunction = httpsCallable(functions, "activateBooster");
      const result = await activateFunction({ boosterId });
      return result.data;
    } catch (error) {
      console.error("Error activating booster:", error);
      throw error;
    }
  }

  // Buy booster
  async buyBooster(boosterId) {
    try {
      const buyFunction = httpsCallable(functions, "buyBooster");
      const result = await buyFunction({ boosterId });
      return result.data;
    } catch (error) {
      console.error("Error buying booster:", error);
      throw error;
    }
  }

  // Get leaderboard data
  async getLeaderboard(limit = 10) {
    try {
      const getLeaderboardFunction = httpsCallable(functions, "getLeaderboard");
      const result = await getLeaderboardFunction({ limit });
      return result.data;
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      // Return empty array on error to prevent breakages
      return { leaderboard: [] };
    }
  }

  // Get user statistics
  async getUserStatistics() {
    try {
      const getStatisticsFunction = httpsCallable(
        functions,
        "getUserStatistics",
      );
      const result = await getStatisticsFunction();
      return result.data;
    } catch (error) {
      console.error("Error fetching user statistics:", error);
      throw error;
    }
  }

  // Update user profile (name, surname, email)
  async updateUserProfile(profileData) {
    try {
      const updateProfileFunction = httpsCallable(
        functions,
        "updateUserProfile",
      );
      const result = await updateProfileFunction(profileData);
      return result.data;
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw error;
    }
  }

  // Delete user account
  async deleteAccount() {
    try {
      const deleteAccountFunction = httpsCallable(functions, "deleteAccount");
      const result = await deleteAccountFunction();
      return result.data;
    } catch (error) {
      console.error("Error deleting account:", error);
      throw error;
    }
  }
}

// Export singleton instance
export const cloudFunctionsService = new CloudFunctionsService();
export default cloudFunctionsService;
