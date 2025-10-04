import { initializeDatabase } from "../services/databaseService";
import { initializeSampleTasks } from "../services/sampleData";

// Database initialization utility
export const initializeAppDatabase = async () => {
  try {
    console.log("🚀 Starting database initialization...");

    // Initialize default data (subjects, achievements, geometry, physics)
    const defaultDataInitialized = await initializeDatabase();

    if (defaultDataInitialized) {
      console.log("✅ Default data initialized successfully");

      // Initialize sample tasks
      const sampleTasksInitialized = await initializeSampleTasks();

      if (sampleTasksInitialized) {
        console.log("✅ Sample tasks initialized successfully");
        console.log("🎉 Database initialization complete!");
        return true;
      } else {
        console.log("⚠️ Sample tasks initialization failed");
        return false;
      }
    } else {
      console.log("❌ Default data initialization failed");
      return false;
    }
  } catch (error) {
    console.error("💥 Database initialization error:", error);
    return false;
  }
};

// Check if initialization is needed
export const checkInitializationStatus = () => {
  const hasInitialized = localStorage.getItem("nauc-se-vic-initialized");
  return hasInitialized === "true";
};

// Mark as initialized
export const markAsInitialized = () => {
  localStorage.setItem("nauc-se-vic-initialized", "true");
};

// Force re-initialization (for development)
export const forceReinitialize = async () => {
  localStorage.removeItem("nauc-se-vic-initialized");
  return await initializeAppDatabase();
};
