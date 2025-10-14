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
        "initializeUserProfile"
      );
      const result = await initProfileFunction({ firstName, lastName });
      return result.data;
    } catch (error) {
      console.error("Error initializing user profile:", error);
      throw error;
    }
  }

  // Create user profile (legacy function)
  async createUserProfile(uid, profileData) {
    try {
      const createProfileFunction = httpsCallable(
        functions,
        "createUserProfile"
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
        "createEducationalTask"
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
  async submitTaskAnswer(taskId, answerData) {
    try {
      const submitAnswerFunction = httpsCallable(functions, "submitTaskAnswer");
      const result = await submitAnswerFunction({
        taskId,
        ...answerData,
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
        "recordTaskAttempt"
      );
      const result = await recordAttemptFunction(attemptData);
      return result.data;
    } catch (error) {
      console.error("Error recording task attempt:", error);
      throw error;
    }
  }

  // Generic HTTP API call to the api endpoint
  async callApi(method = "GET", data = null) {
    try {
      const apiUrl = `${
        import.meta.env.VITE_FIREBASE_FUNCTIONS_URL ||
        "https://us-central1-naucsevic.cloudfunctions.net"
      }/api`;

      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (data && method !== "GET") {
        options.body = JSON.stringify(data);
      }

      const response = await fetch(apiUrl, options);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error calling API:", error);
      throw error;
    }
  }
}

// Export singleton instance
export const cloudFunctionsService = new CloudFunctionsService();
export default cloudFunctionsService;
