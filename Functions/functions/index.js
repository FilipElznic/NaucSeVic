/**
 * Cloud Functions for NaucSeVic project
 * Import function triggers from their respective submodules
 */

const { setGlobalOptions } = require("firebase-functions");
const { onRequest, onCall } = require("firebase-functions/v2/https");
const {
  onDocumentCreated,
  onDocumentUpdated,
} = require("firebase-functions/v2/firestore");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
admin.initializeApp();

// For cost control, set the maximum number of containers
setGlobalOptions({
  maxInstances: 10,
  region: "us-central1", // Set your preferred region
});

// Example HTTP callable function
exports.helloWorld = onCall((request) => {
  const { name } = request.data;
  logger.info("Hello function called", { name });

  return {
    message: `Hello ${name || "World"} from Firebase Cloud Functions!`,
    timestamp: new Date().toISOString(),
  };
});

// Example HTTP request function
exports.api = onRequest({ cors: true }, (request, response) => {
  logger.info("API endpoint called", { method: request.method });

  switch (request.method) {
    case "GET":
      response.json({
        message: "NaucSeVic API is running!",
        version: "1.0.0",
        timestamp: new Date().toISOString(),
      });
      break;

    case "POST": {
      const data = request.body;
      response.json({
        message: "Data received successfully",
        receivedData: data,
        timestamp: new Date().toISOString(),
      });
      break;
    }

    default:
      response.status(405).json({ error: "Method not allowed" });
  }
});

// Example user profile function
exports.createUserProfile = onCall(async (request) => {
  const { uid, profileData } = request.data;

  if (!request.auth) {
    throw new Error("Authentication required");
  }

  try {
    await admin
      .firestore()
      .collection("users")
      .doc(uid)
      .set({
        ...profileData,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });

    logger.info("User profile created", { uid });

    return {
      success: true,
      message: "Profile created successfully",
      uid: uid,
    };
  } catch (error) {
    logger.error("Error creating user profile", error);
    throw new Error("Failed to create profile");
  }
});

// Example task management function
exports.createTask = onCall(async (request) => {
  const { title, description, category } = request.data;

  if (!request.auth) {
    throw new Error("Authentication required");
  }

  try {
    const taskDoc = await admin.firestore().collection("tasks").add({
      title,
      description,
      category,
      userId: request.auth.uid,
      completed: false,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    logger.info("Task created", {
      taskId: taskDoc.id,
      userId: request.auth.uid,
    });

    return {
      success: true,
      taskId: taskDoc.id,
      message: "Task created successfully",
    };
  } catch (error) {
    logger.error("Error creating task", error);
    throw new Error("Failed to create task");
  }
});

// Firestore trigger - when a user document is created
exports.onUserCreated = onDocumentCreated("users/{userId}", (event) => {
  const userId = event.params.userId;
  const userData = event.data.data();

  logger.info("New user created", { userId, userData });

  // You can add logic here like sending welcome emails,
  // creating default user data, etc.

  return null;
});

// Firestore trigger - when a task is updated
exports.onTaskUpdated = onDocumentUpdated("tasks/{taskId}", (event) => {
  const taskId = event.params.taskId;
  const beforeData = event.data.before.data();
  const afterData = event.data.after.data();

  // Check if task was completed
  if (!beforeData.completed && afterData.completed) {
    logger.info("Task completed", { taskId, userId: afterData.userId });

    // You can add logic here like updating user stats,
    // sending notifications, etc.
  }

  return null;
});
