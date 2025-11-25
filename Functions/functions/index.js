/**
 * SECURED Cloud Functions for NaucSeVic project
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

// Input validation helpers
const validateInput = (data, requiredFields) => {
  for (const field of requiredFields) {
    if (!data[field] || data[field].toString().trim() === "") {
      throw new Error(`Missing required field: ${field}`);
    }
  }
};

// Helper function to sanitize string inputs
const sanitizeString = (input) => {
  if (typeof input !== "string") return "";
  return input.trim().substring(0, 1000); // Max 1000 chars
};

// Helper function to check if user is admin
const isAdmin = async (uid) => {
  try {
    const userRecord = await admin.auth().getUser(uid);
    // Check custom claims for admin role
    return userRecord.customClaims && userRecord.customClaims.admin === true;
  } catch (error) {
    logger.error("Error checking admin status", { uid, error: error.message });
    return false;
  }
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

// Security configuration with cost control
setGlobalOptions({
  maxInstances: 10,
  region: "europe-west1", // EU region (Belgium)
  enforceAppCheck: false, // Set to true when App Check is configured
});

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

    const { name, surname } = request.data || {};

    // Rate limiting per user
    checkRateLimit(request.auth.uid, "createProfile", 3, 300000); // 3 per 5min

    // Check if profile already exists
    const existingProfile = await admin
      .firestore()
      .collection("users")
      .doc(request.auth.uid)
      .get();

    if (existingProfile.exists) {
      throw new Error("Profile already exists");
    }

    // Sanitize input data
    const sanitizedName = name ? sanitizeString(name) : "";
    const sanitizedSurname = surname ? sanitizeString(surname) : "";

    // Create today's date for initial progress entry
    const today = new Date().toISOString().split("T")[0];

    // Create user profile with the exact structure requested
    const userProfile = {
      profile: {
        name: sanitizedName,
        surname: sanitizedSurname,
        email: request.auth.token.email || "",
        xp: 0,
        coins: 0,
      },
      completedTasks: {},
      progress: {
        [today]: {
          loginTime: admin.firestore.FieldValue.serverTimestamp(),
          xpGained: 0,
          coinsGained: 0,
          tasksFinished: 0,
        },
      },
    };

    // Create the user document in "users" collection
    await admin
      .firestore()
      .collection("users")
      .doc(request.auth.uid)
      .set(userProfile);

    logger.info("User profile created manually", {
      userId: request.auth.uid,
      email: userProfile.profile.email,
      name: userProfile.profile.name,
      surname: userProfile.profile.surname,
    });

    return {
      success: true,
      message: "Profile created successfully",
      userId: request.auth.uid,
      profile: userProfile.profile,
    };
  } catch (error) {
    logger.error("Error creating user profile", {
      error: error.message,
      uid: request.auth && request.auth.uid,
    });
    throw new Error(error.message || "Failed to create profile");
  }
});

// SECURED: Record task attempt and update user progress
exports.recordTaskAttempt = onCall(async (request) => {
  try {
    // Authentication required
    if (!request.auth || !request.auth.uid) {
      throw new Error("Authentication required");
    }

    const { taskId, taskRef, isCorrect, userAnswer, type, xpEarned } =
      request.data || {};

    // Rate limiting per user
    checkRateLimit(request.auth.uid, "recordTaskAttempt", 100, 60000); // 100 per minute

    // Input validation
    validateInput({ taskId, isCorrect, userAnswer, type }, [
      "taskId",
      "isCorrect",
      "userAnswer",
      "type",
    ]);

    const userId = request.auth.uid;
    const now = admin.firestore.FieldValue.serverTimestamp();
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

    // Calculate XP and coins earned
    const finalXpEarned = xpEarned || (isCorrect ? 10 : 5); // Default XP values
    const coinsEarned = isCorrect ? 5 : 0; // Coins only for correct answers

    // Create task attempt record
    const taskAttempt = {
      attemptedAt: now,
      isCorrect: !!isCorrect,
      taskRef: taskRef || null,
      type: sanitizeString(type),
      userAnswer: parseInt(userAnswer) || 0,
      xpEarned: finalXpEarned,
    };

    // Update user profile with task attempt and progress
    const userRef = admin.firestore().collection("users").doc(userId);

    await admin.firestore().runTransaction(async (transaction) => {
      const userDoc = await transaction.get(userRef);

      if (!userDoc.exists) {
        throw new Error("User profile not found");
      }

      const userData = userDoc.data();
      const currentProgress = userData.progress || {};
      const todayProgress = currentProgress[today] || {
        xpGained: 0,
        coinsGained: 0,
        tasksFinished: 0,
        loginTime: now,
      };

      // Update today's progress
      todayProgress.xpGained += finalXpEarned;
      todayProgress.coinsGained += coinsEarned;
      if (isCorrect) {
        todayProgress.tasksFinished += 1;
      }

      // Update user profile with new structure
      transaction.update(userRef, {
        [`completedTasks.${taskId}`]: taskAttempt,
        [`progress.${today}`]: todayProgress,
        "profile.xp": admin.firestore.FieldValue.increment(finalXpEarned),
        "profile.coins": admin.firestore.FieldValue.increment(coinsEarned),
      });
    });

    logger.info("Task attempt recorded", {
      userId,
      taskId,
      isCorrect,
      xpEarned: finalXpEarned,
      coinsEarned,
    });

    return {
      success: true,
      taskAttempt,
      xpEarned: finalXpEarned,
      coinsEarned,
      isCorrect: !!isCorrect,
    };
  } catch (error) {
    logger.error("Error recording task attempt", {
      error: error.message,
      userId: request.auth && request.auth.uid,
    });
    throw new Error(error.message || "Failed to record task attempt");
  }
});

// SECURED: Create educational task with proper schema validation
exports.createEducationalTask = onCall(async (request) => {
  try {
    // Authentication required (only admins should create tasks)
    if (!request.auth || !request.auth.uid) {
      throw new Error("Authentication required");
    }

    // Check if user is admin
    const userIsAdmin = await isAdmin(request.auth.uid);
    if (!userIsAdmin) {
      throw new Error("Admin privileges required to create tasks");
    }

    const {
      name,
      description,
      type,
      difficulty,
      subject,
      xp,
      explanation,
      hints,
      correctAnswer,
      correctAnswers,
      options,
    } = request.data || {};

    // Rate limiting per user
    checkRateLimit(request.auth.uid, "createTask", 5, 300000); // 5 per 5min

    // Input validation
    validateInput({ name, description, type, difficulty, xp, explanation }, [
      "name",
      "description",
      "type",
      "difficulty",
      "xp",
      "explanation",
    ]);

    // Validate type
    const allowedTypes = ["multipleChoice", "written", "multiAnswer"];
    if (!allowedTypes.includes(type)) {
      throw new Error("Invalid task type");
    }

    // Validate difficulty
    const allowedDifficulties = ["easy", "medium", "hard"];
    if (!allowedDifficulties.includes(difficulty)) {
      throw new Error("Invalid difficulty level");
    }

    // Type-specific validation
    if (type === "multipleChoice" && (!options || !correctAnswer)) {
      throw new Error(
        "Multiple choice tasks require options and correctAnswer"
      );
    }
    if (type === "multiAnswer" && !correctAnswers) {
      throw new Error("Multi answer tasks require correctAnswers array");
    }
    if (type === "written" && !correctAnswer) {
      throw new Error("Written tasks require correctAnswer");
    }

    // Create task with proper structure
    const taskData = {
      name: sanitizeString(name),
      description: sanitizeString(description),
      type: type,
      difficulty: difficulty,
      xp: parseInt(xp) || 10,
      explanation: sanitizeString(explanation),
      hints: Array.isArray(hints) ? hints.map((h) => sanitizeString(h)) : [],
      createdBy: request.auth.uid,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      isActive: true,
    };

    // Add optional subject
    if (subject) {
      taskData.subject = sanitizeString(subject);
    }

    // Add type-specific fields
    if (type === "multipleChoice") {
      taskData.correctAnswer = sanitizeString(correctAnswer);
      taskData.options = Array.isArray(options)
        ? options.map((o) => sanitizeString(o))
        : [];
    } else if (type === "multiAnswer") {
      taskData.correctAnswers = Array.isArray(correctAnswers)
        ? correctAnswers.map((a) => sanitizeString(a))
        : [];
      if (options) {
        taskData.options = Array.isArray(options)
          ? options.map((o) => sanitizeString(o))
          : [];
      }
    } else if (type === "written") {
      taskData.correctAnswer = sanitizeString(correctAnswer);
    }

    const taskDoc = await admin.firestore().collection("tasks").add(taskData);

    logger.info("Educational task created", {
      taskId: taskDoc.id,
      type: type,
      difficulty: difficulty,
      subject: subject || "general",
      createdBy: request.auth.uid,
    });

    return {
      success: true,
      taskId: taskDoc.id,
      message: "Educational task created successfully",
    };
  } catch (error) {
    logger.error("Error creating educational task", {
      error: error.message,
      userId: request.auth && request.auth.uid,
    });
    throw new Error(error.message || "Failed to create educational task");
  }
});

// SECURED: Get tasks by difficulty and subject
exports.getTasks = onCall(async (request) => {
  try {
    // Authentication required
    if (!request.auth || !request.auth.uid) {
      throw new Error("Authentication required");
    }

    const { difficulty, subject, limit = 10 } = request.data || {};

    // Rate limiting per user
    checkRateLimit(request.auth.uid, "getTasks", 50, 60000); // 50 per minute

    let query = admin
      .firestore()
      .collection("tasks")
      .where("isActive", "==", true);

    // Add filters first (before orderBy)
    if (difficulty) {
      const allowedDifficulties = ["easy", "medium", "hard"];
      if (allowedDifficulties.includes(difficulty)) {
        query = query.where("difficulty", "==", difficulty);
      }
    }

    if (subject) {
      query = query.where("subject", "==", sanitizeString(subject));
    }

    // Add limit (temporarily removed orderBy to avoid index requirement)
    query = query.limit(parseInt(limit) || 10);

    const snapshot = await query.get();
    const tasks = [];

    snapshot.forEach((doc) => {
      const taskData = doc.data();
      // Remove sensitive fields (correct answers) from response
      const publicTask = {
        id: doc.id,
        name: taskData.name,
        description: taskData.description,
        type: taskData.type,
        difficulty: taskData.difficulty,
        subject: taskData.subject,
        xp: taskData.xp,
        hints: taskData.hints,
        // Include options for multiple choice/answer but not correct answers
        options: taskData.options || undefined,
      };
      tasks.push(publicTask);
    });

    return {
      success: true,
      tasks: tasks,
      count: tasks.length,
    };
  } catch (error) {
    logger.error("Error getting tasks", {
      error: error.message,
      userId: request.auth && request.auth.uid,
    });
    throw new Error(error.message || "Failed to get tasks");
  }
});

// SECURED: Submit task answer and validate
exports.submitTaskAnswer = onCall(async (request) => {
  try {
    // Authentication required
    if (!request.auth || !request.auth.uid) {
      throw new Error("Authentication required");
    }

    const { taskId, userAnswer } = request.data || {};

    logger.info("Submit task answer called", {
      taskId,
      userAnswer,
      userId: request.auth.uid,
      requestData: request.data,
    });

    // Rate limiting per user
    checkRateLimit(request.auth.uid, "submitTaskAnswer", 60, 60000); // 60 per minute

    // Input validation
    validateInput({ taskId, userAnswer }, ["taskId", "userAnswer"]);

    const userId = request.auth.uid;
    const now = admin.firestore.FieldValue.serverTimestamp();

    // Get the task
    const taskDoc = await admin
      .firestore()
      .collection("tasks")
      .doc(taskId)
      .get();

    if (!taskDoc.exists) {
      throw new Error("Task not found");
    }

    const taskData = taskDoc.data();
    let isCorrect = false;
    let xpEarned = 0;
    let coinsEarned = 0;

    // Validate answer based on task type
    if (taskData.type === "multipleChoice" || taskData.type === "written") {
      isCorrect =
        sanitizeString(userAnswer).toLowerCase() ===
        sanitizeString(taskData.correctAnswer).toLowerCase();
    } else if (taskData.type === "multiAnswer") {
      // For multi-answer, userAnswer should be an array
      const userAnswers = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
      const correctAnswers = taskData.correctAnswers || [];

      // Check if all user answers are correct and no extra/missing answers
      isCorrect =
        userAnswers.length === correctAnswers.length &&
        userAnswers.every((answer) =>
          correctAnswers.some(
            (correct) =>
              sanitizeString(answer).toLowerCase() ===
              sanitizeString(correct).toLowerCase()
          )
        );
    }

    // Calculate rewards
    if (isCorrect) {
      xpEarned = taskData.xp || 10;
      coinsEarned = Math.floor(taskData.xp / 2) || 5;
    } else {
      xpEarned = Math.floor((taskData.xp || 10) * 0.2); // 20% XP for attempt
      coinsEarned = 0;
    }

    // Create task attempt record
    const taskAttempt = {
      attemptedAt: now,
      isCorrect: isCorrect,
      taskRef: admin.firestore().collection("tasks").doc(taskId),
      type: taskData.type,
      userAnswer: userAnswer,
      xpEarned: xpEarned,
    };

    // Update user profile
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
    const userRef = admin.firestore().collection("users").doc(userId);

    await admin.firestore().runTransaction(async (transaction) => {
      const userDoc = await transaction.get(userRef);

      if (!userDoc.exists) {
        throw new Error("User profile not found");
      }

      const userData = userDoc.data();
      const currentProgress = userData.progress || {};
      const todayProgress = currentProgress[today] || {
        xpGained: 0,
        coinsGained: 0,
        tasksFinished: 0,
        loginTime: now,
      };

      // Update today's progress
      todayProgress.xpGained += xpEarned;
      todayProgress.coinsGained += coinsEarned;
      if (isCorrect) {
        todayProgress.tasksFinished += 1;
      }

      // Update user profile with task attempt and progress
      transaction.update(userRef, {
        [`completedTasks.${taskId}`]: taskAttempt,
        [`progress.${today}`]: todayProgress,
        "profile.xp": admin.firestore.FieldValue.increment(xpEarned),
        "profile.coins": admin.firestore.FieldValue.increment(coinsEarned),
      });
    });

    logger.info("Task answer submitted", {
      userId,
      taskId,
      isCorrect,
      xpEarned,
      coinsEarned,
      taskType: taskData.type,
    });

    return {
      success: true,
      isCorrect: isCorrect,
      xpEarned: xpEarned,
      coinsEarned: coinsEarned,
      explanation: taskData.explanation,
      correctAnswer: isCorrect
        ? null
        : taskData.correctAnswer || taskData.correctAnswers,
    };
  } catch (error) {
    logger.error("Error submitting task answer", {
      error: error.message,
      userId: request.auth && request.auth.uid,
    });
    throw new Error(error.message || "Failed to submit task answer");
  }
});

// SECURED: Initialize user profile after registration
exports.initializeUserProfile = onCall(async (request) => {
  try {
    // Authentication required
    if (!request.auth || !request.auth.uid) {
      throw new Error("Authentication required");
    }

    const userId = request.auth.uid;
    const { firstName, lastName } = request.data || {};

    // Rate limiting per user
    checkRateLimit(userId, "initializeProfile", 3, 300000); // 3 per 5min

    logger.info("Initializing user profile", {
      userId,
      email: request.auth.token.email,
      firstName: firstName || "Unknown",
      lastName: lastName || "",
    });

    // Check if profile already exists
    const existingUser = await admin
      .firestore()
      .collection("users")
      .doc(userId)
      .get();

    if (existingUser.exists) {
      return {
        success: true,
        message: "Profile already exists",
        profile: existingUser.data().profile,
      };
    }

    // Sanitize input data
    const sanitizedFirstName = firstName ? sanitizeString(firstName) : "";
    const sanitizedLastName = lastName ? sanitizeString(lastName) : "";

    // Create today's date for initial progress entry
    const today = new Date().toISOString().split("T")[0];

    // Create user profile with the exact structure requested
    const userProfile = {
      profile: {
        name: sanitizedFirstName,
        surname: sanitizedLastName,
        email: request.auth.token.email || "",
        xp: 0,
        coins: 0,
      },
      completedTasks: {},
      progress: {
        [today]: {
          loginTime: admin.firestore.FieldValue.serverTimestamp(),
          xpGained: 0,
          coinsGained: 0,
          tasksFinished: 0,
        },
      },
    };

    // Create the user document in "users" collection
    await admin.firestore().collection("users").doc(userId).set(userProfile);

    logger.info("User profile created successfully", {
      userId,
      email: request.auth.token.email,
      name: sanitizedFirstName,
      surname: sanitizedLastName,
      initialCoins: 0,
      initialXp: 0,
    });

    return {
      success: true,
      message: "Profile created successfully",
      userId: userId,
      profile: userProfile.profile,
    };
  } catch (error) {
    logger.error("Error initializing user profile", {
      error: error.message,
      userId: request.auth && request.auth.uid,
    });
    throw new Error(error.message || "Failed to initialize profile");
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

// Admin function to seed geometry data
exports.adminSeedGeometry = onCall(async (request) => {
  // Check if user is authenticated
  if (!request.auth) {
    throw new HttpsError(
      "unauthenticated",
      "The function must be called while authenticated."
    );
  }

  // Check if user is admin
  const isUserAdmin = await isAdmin(request.auth.uid);
  if (!isUserAdmin) {
    throw new HttpsError(
      "permission-denied",
      "Only admins can seed geometry data."
    );
  }

  const { bodies } = request.data;

  if (!bodies || !Array.isArray(bodies)) {
    throw new HttpsError(
      "invalid-argument",
      "The function must be called with an array of geometric bodies."
    );
  }

  try {
    const batch = admin.firestore().batch();
    const collectionRef = admin.firestore().collection("geometricBodies");

    for (const body of bodies) {
      if (!body.id) {
        continue; // Skip invalid entries
      }
      const docRef = collectionRef.doc(body.id);
      batch.set(docRef, body, { merge: true });
    }

    await batch.commit();

    logger.info("Geometry data seeded successfully", {
      adminUid: request.auth.uid,
      count: bodies.length,
    });

    return { success: true, count: bodies.length };
  } catch (error) {
    logger.error("Error seeding geometry data", error);
    throw new HttpsError("internal", "Error seeding geometry data");
  }
});
