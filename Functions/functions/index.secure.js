/**
 * SECURE Cloud Functions for NaucSeVic project
 * This file contains properly secured functions with validation and auth
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

// Security configuration
setGlobalOptions({
  maxInstances: 10,
  region: "us-central1",
  enforceAppCheck: true, // Require App Check for security
});

// Input validation helpers
const validateInput = (data, requiredFields) => {
  for (const field of requiredFields) {
    if (!data[field] || data[field].toString().trim() === "") {
      throw new Error(`Missing required field: ${field}`);
    }
  }
};

const sanitizeString = (str) => {
  if (typeof str !== "string") return "";
  return str.trim().substring(0, 1000); // Limit length and trim
};

// Rate limiting helper (basic implementation)
const rateLimitMap = new Map();
const checkRateLimit = (userId, action, maxRequests = 10, windowMs = 60000) => {
  const key = `${userId}-${action}`;
  const now = Date.now();
  const userRequests = rateLimitMap.get(key) || [];

  // Clean old requests
  const validRequests = userRequests.filter(
    (timestamp) => now - timestamp < windowMs
  );

  if (validRequests.length >= maxRequests) {
    throw new Error("Rate limit exceeded. Please try again later.");
  }

  validRequests.push(now);
  rateLimitMap.set(key, validRequests);
};

// SECURED: Hello World function with validation
exports.helloWorld = onCall(async (request) => {
  try {
    // Input validation
    const { name } = request.data || {};
    const sanitizedName = sanitizeString(name || "World");

    // Rate limiting
    const clientIP = (request.rawRequest && request.rawRequest.ip) || "unknown";
    checkRateLimit(clientIP, "helloWorld", 5, 60000); // 5 requests per minute

    logger.info("Hello function called", {
      name: sanitizedName,
      ip: clientIP,
      timestamp: new Date().toISOString(),
    });

    return {
      message: `Hello ${sanitizedName} from Firebase Cloud Functions!`,
      timestamp: new Date().toISOString(),
      version: "1.0.0",
    };
  } catch (error) {
    logger.error("Hello World function error", error);
    throw new Error("Function execution failed");
  }
});

// SECURED: API endpoint with proper validation
exports.api = onRequest({ cors: true }, async (request, response) => {
  try {
    // CORS and security headers
    response.set("X-Content-Type-Options", "nosniff");
    response.set("X-Frame-Options", "DENY");
    response.set("X-XSS-Protection", "1; mode=block");

    logger.info("API endpoint called", {
      method: request.method,
      ip: request.ip,
      userAgent: request.get("User-Agent"),
    });

    switch (request.method) {
      case "GET": {
        response.json({
          message: "NaucSeVic API is running!",
          version: "1.0.0",
          timestamp: new Date().toISOString(),
          status: "healthy",
        });
        break;
      }

      case "POST": {
        // Validate content type
        if (!request.is("application/json")) {
          return response.status(400).json({
            error: "Content-Type must be application/json",
          });
        }

        // Validate request size (limit to 1MB)
        if (JSON.stringify(request.body).length > 1024 * 1024) {
          return response.status(413).json({
            error: "Request too large",
          });
        }

        const data = request.body || {};
        response.json({
          message: "Data received successfully",
          receivedFields: Object.keys(data),
          timestamp: new Date().toISOString(),
        });
        break;
      }

      default:
        response.status(405).json({
          error: "Method not allowed",
          allowedMethods: ["GET", "POST"],
        });
    }
  } catch (error) {
    logger.error("API endpoint error", error);
    response.status(500).json({
      error: "Internal server error",
      timestamp: new Date().toISOString(),
    });
  }
});

// SECURED: User profile creation with comprehensive validation
exports.createUserProfile = onCall(async (request) => {
  try {
    // Authentication required
    if (!request.auth || !request.auth.uid) {
      throw new Error("Authentication required");
    }

    const { uid, profileData } = request.data || {};

    // Validate that user can only create their own profile
    if (uid !== request.auth.uid) {
      throw new Error("Unauthorized: Can only create your own profile");
    }

    // Rate limiting per user
    checkRateLimit(request.auth.uid, "createProfile", 3, 300000); // 3 per 5min

    // Input validation
    validateInput({ uid }, ["uid"]);

    if (!profileData || typeof profileData !== "object") {
      throw new Error("Invalid profile data");
    }

    // Sanitize profile data
    const allowedFields = ["displayName", "bio", "preferences"];
    const sanitizedProfile = {};

    for (const field of allowedFields) {
      if (profileData[field]) {
        sanitizedProfile[field] = sanitizeString(profileData[field]);
      }
    }

    // Check if profile already exists
    const existingProfile = await admin
      .firestore()
      .collection("users")
      .doc(uid)
      .get();

    if (existingProfile.exists) {
      throw new Error("Profile already exists");
    }

    // Create profile with server-side validation
    await admin
      .firestore()
      .collection("users")
      .doc(uid)
      .set({
        ...sanitizedProfile,
        uid: uid,
        email: request.auth.token.email || null,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        isActive: true,
      });

    logger.info("User profile created", {
      uid,
      fields: Object.keys(sanitizedProfile),
    });

    return {
      success: true,
      message: "Profile created successfully",
      uid: uid,
    };
  } catch (error) {
    logger.error("Error creating user profile", {
      error: error.message,
      uid: request.auth && request.auth.uid,
    });
    throw new Error(error.message || "Failed to create profile");
  }
});

// SECURED: Task creation with validation and authorization
exports.createTask = onCall(async (request) => {
  try {
    // Authentication required
    if (!request.auth || !request.auth.uid) {
      throw new Error("Authentication required");
    }

    const { title, description, category } = request.data || {};

    // Rate limiting per user
    checkRateLimit(request.auth.uid, "createTask", 20, 300000); // 20 per 5min

    // Input validation
    validateInput({ title }, ["title"]);

    // Sanitize inputs
    const sanitizedTitle = sanitizeString(title);
    const sanitizedDescription = sanitizeString(description || "");
    const sanitizedCategory = sanitizeString(category || "general");

    // Validate category against allowed values
    const allowedCategories = ["general", "work", "personal", "study"];
    if (!allowedCategories.includes(sanitizedCategory)) {
      throw new Error("Invalid category");
    }

    // Create task with proper structure
    const taskDoc = await admin.firestore().collection("tasks").add({
      title: sanitizedTitle,
      description: sanitizedDescription,
      category: sanitizedCategory,
      userId: request.auth.uid,
      userEmail: request.auth.token.email,
      completed: false,
      priority: "normal",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    logger.info("Task created", {
      taskId: taskDoc.id,
      userId: request.auth.uid,
      category: sanitizedCategory,
    });

    return {
      success: true,
      taskId: taskDoc.id,
      message: "Task created successfully",
    };
  } catch (error) {
    logger.error("Error creating task", {
      error: error.message,
      userId: request.auth && request.auth.uid,
    });
    throw new Error(error.message || "Failed to create task");
  }
});

// SECURED: Firestore trigger with validation
exports.onUserCreated = onDocumentCreated("users/{userId}", async (event) => {
  try {
    const userId = event.params.userId;
    const userData = event.data && event.data.data();

    if (!userData) {
      logger.warn("User created trigger: No user data", { userId });
      return;
    }

    logger.info("New user created", {
      userId,
      email: userData.email,
      hasDisplayName: !!userData.displayName,
    });

    // Initialize user settings
    await admin.firestore().collection("userSettings").doc(userId).set({
      userId,
      theme: "light",
      notifications: true,
      language: "en",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    // Send welcome email (if you have email service configured)
    // await sendWelcomeEmail(userData.email);

    return;
  } catch (error) {
    logger.error("Error in onUserCreated trigger", error);
    return;
  }
});

// SECURED: Task update trigger with validation
exports.onTaskUpdated = onDocumentUpdated("tasks/{taskId}", async (event) => {
  try {
    const taskId = event.params.taskId;
    const beforeData =
      event.data && event.data.before && event.data.before.data();
    const afterData = event.data && event.data.after && event.data.after.data();

    if (!beforeData || !afterData) {
      logger.warn("Task update trigger: Missing data", { taskId });
      return;
    }

    // Check if task was completed
    if (!beforeData.completed && afterData.completed) {
      logger.info("Task completed", {
        taskId,
        userId: afterData.userId,
        title: afterData.title,
      });

      // Update user statistics
      const userStatsRef = admin
        .firestore()
        .collection("userStats")
        .doc(afterData.userId);

      await userStatsRef.set(
        {
          completedTasks: admin.firestore.FieldValue.increment(1),
          lastTaskCompleted: admin.firestore.FieldValue.serverTimestamp(),
          totalPoints: admin.firestore.FieldValue.increment(10),
        },
        { merge: true }
      );

      // Send notification if needed
      // await sendTaskCompletionNotification(afterData.userId);
    }

    return;
  } catch (error) {
    logger.error("Error in onTaskUpdated trigger", error);
    return;
  }
});
