/**
 * SECURED Cloud Functions for NaucSeVic project
 * Import function triggers from their respective submodules
 */

const { setGlobalOptions } = require("firebase-functions");
const {
  onRequest,
  onCall,
  HttpsError,
} = require("firebase-functions/v2/https");
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
    (timestamp) => now - timestamp < windowMs,
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
      inventory: {},
      completedTasks: {},
      progress: {
        [today]: {
          loginTime: admin.firestore.FieldValue.serverTimestamp(),
          xpGained: 0,
          coinsGained: 0,
          tasksFinished: 0,
          lessonsFinished: 0,
          chaptersFinished: 0,
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
        lessonsFinished: 0,
        chaptersFinished: 0,
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
      throw new HttpsError("unauthenticated", "Authentication required");
    }

    // Check if user is admin
    const userIsAdmin = await isAdmin(request.auth.uid);
    if (!userIsAdmin) {
      throw new HttpsError(
        "permission-denied",
        "Admin privileges required to create tasks",
      );
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
    try {
      checkRateLimit(request.auth.uid, "createTask", 5, 300000); // 5 per 5min
    } catch (e) {
      throw new HttpsError("resource-exhausted", e.message);
    }

    // Input validation
    try {
      validateInput({ name, description, type, difficulty, xp, explanation }, [
        "name",
        "description",
        "type",
        "difficulty",
        "xp",
        "explanation",
      ]);
    } catch (e) {
      throw new HttpsError("invalid-argument", e.message);
    }

    // Validate type
    const allowedTypes = ["multipleChoice", "written", "multiAnswer"];
    if (!allowedTypes.includes(type)) {
      throw new HttpsError("invalid-argument", "Invalid task type");
    }

    // Validate difficulty
    const allowedDifficulties = [
      "easy",
      "medium",
      "hard",
      "zakladni_1",
      "zakladni_2",
      "stredni",
      "vysoka",
    ];
    if (!allowedDifficulties.includes(difficulty)) {
      throw new HttpsError("invalid-argument", "Invalid difficulty level");
    }

    // Type-specific validation
    if (type === "multipleChoice" && (!options || !correctAnswer)) {
      throw new HttpsError(
        "invalid-argument",
        "Multiple choice tasks require options and correctAnswer",
      );
    }
    if (type === "multiAnswer" && !correctAnswers) {
      throw new HttpsError(
        "invalid-argument",
        "Multi answer tasks require correctAnswers array",
      );
    }
    if (type === "written" && !correctAnswer) {
      throw new HttpsError(
        "invalid-argument",
        "Written tasks require correctAnswer",
      );
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
      stack: error.stack,
      userId: request.auth && request.auth.uid,
    });

    // If it's already an HttpsError, rethrow it
    if (error.httpErrorCode || error.code?.startsWith("functions/")) {
      throw error;
    }

    // For unknown errors, throw internal
    throw new HttpsError(
      "internal",
      error.message || "Failed to create educational task",
    );
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
              sanitizeString(correct).toLowerCase(),
          ),
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

    // Update user profile
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
    const userRef = admin.firestore().collection("users").doc(userId);

    // Variables for boost info to return
    let activeBoost = null;
    let baseXp = xpEarned;

    const transactionResult = await admin
      .firestore()
      .runTransaction(async (transaction) => {
        const userDoc = await transaction.get(userRef);

        if (!userDoc.exists) {
          throw new Error("User profile not found");
        }

        const userData = userDoc.data();
        let currentXp = baseXp;
        let currentActiveBoost = null;

        // Check for active XP booster
        if (userData.activeBoosts && userData.activeBoosts.xp) {
          const xpBoost = userData.activeBoosts.xp;
          const nowMillis = Date.now(); // approximate synced time
          const endsAtMillis = xpBoost.endsAt.toMillis();

          if (endsAtMillis > nowMillis) {
            const multiplier = xpBoost.multiplier || 1;
            currentXp = Math.floor(currentXp * multiplier);
            currentActiveBoost = {
              multiplier: multiplier,
              expiresAt: xpBoost.endsAt,
            };
          }
        }

        // Create task attempt record with final XP
        const taskAttempt = {
          attemptedAt: now,
          isCorrect: isCorrect,
          taskRef: admin.firestore().collection("tasks").doc(taskId),
          type: taskData.type,
          userAnswer: userAnswer,
          xpEarned: currentXp, // This is now the boosted amount
          baseXp: baseXp, // Keep track of base XP
        };

        const currentProgress = userData.progress || {};
        const todayProgress = currentProgress[today] || {
          xpGained: 0,
          coinsGained: 0,
          tasksFinished: 0,
          lessonsFinished: 0,
          chaptersFinished: 0,
          loginTime: now,
        };

        // Update today's progress
        todayProgress.xpGained += currentXp;
        todayProgress.coinsGained += coinsEarned;
        if (isCorrect) {
          todayProgress.tasksFinished += 1;
        }

        // Update user profile with task attempt and progress
        transaction.update(userRef, {
          [`completedTasks.${taskId}`]: taskAttempt,
          [`progress.${today}`]: todayProgress,
          "profile.xp": admin.firestore.FieldValue.increment(currentXp),
          "profile.coins": admin.firestore.FieldValue.increment(coinsEarned),
        });

        return { finalXp: currentXp, activeBoost: currentActiveBoost };
      });

    xpEarned = transactionResult.finalXp;
    activeBoost = transactionResult.activeBoost;

    logger.info("Task answer submitted", {
      userId,
      taskId,
      isCorrect,
      xpEarned, // Boosted
      baseXp,
      coinsEarned,
      taskType: taskData.type,
      activeBoost,
    });

    return {
      success: true,
      isCorrect: isCorrect,
      xpEarned: xpEarned,
      baseXp: baseXp,
      coinsEarned: coinsEarned,
      explanation: taskData.explanation,
      activeBoost: activeBoost,
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

// SECURED: Activate a booster item
exports.activateBooster = onCall(async (request) => {
  try {
    if (!request.auth || !request.auth.uid) {
      throw new Error("Authentication required");
    }

    const { boosterId } = request.data || {};
    const userId = request.auth.uid;
    validateInput({ boosterId }, ["boosterId"]);
    checkRateLimit(userId, "activateBooster", 10, 60000);

    const boostDefinitions = {
      xp_boost_1h: { durationHours: 1, type: "xp", multiplier: 2.0 },
      xp_boost_12h: { durationHours: 12, type: "xp", multiplier: 2.0 },
      xp_boost_24h: { durationHours: 24, type: "xp", multiplier: 2.0 },
    };

    const boostDef = boostDefinitions[boosterId];
    if (!boostDef) {
      throw new Error("Invalid booster ID");
    }

    const userRef = admin.firestore().collection("users").doc(userId);
    const now = admin.firestore.Timestamp.now();

    await admin.firestore().runTransaction(async (transaction) => {
      const userDoc = await transaction.get(userRef);
      if (!userDoc.exists) throw new Error("User not found");
      const userData = userDoc.data();
      const inventory = userData.inventory || {};

      if (!inventory[boosterId] || inventory[boosterId] <= 0) {
        throw new Error("You do not own this booster");
      }

      // Calculate end time
      const activeBoosts = userData.activeBoosts || {};
      const currentBoost = activeBoosts[boostDef.type];

      let newEndsAt;
      const durationMillis = boostDef.durationHours * 60 * 60 * 1000;

      if (currentBoost && currentBoost.endsAt.toMillis() > now.toMillis()) {
        // Extend
        newEndsAt = new admin.firestore.Timestamp(
          currentBoost.endsAt.seconds + durationMillis / 1000,
          currentBoost.endsAt.nanoseconds,
        );
      } else {
        // New
        newEndsAt = new admin.firestore.Timestamp(
          now.seconds + durationMillis / 1000,
          now.nanoseconds,
        );
      }

      const newBoostData = {
        multiplier: boostDef.multiplier,
        activatedAt: now,
        endsAt: newEndsAt,
        sourceItem: boosterId,
      };

      transaction.update(userRef, {
        [`inventory.${boosterId}`]: admin.firestore.FieldValue.increment(-1),
        [`activeBoosts.${boostDef.type}`]: newBoostData,
      });
    });

    logger.info("Booster activated", { userId, boosterId });
    return { success: true, message: "Booster activated" };
  } catch (error) {
    logger.error("Error activating booster", error);
    throw new Error(error.message || "Failed to activate booster");
  }
});

// SECURED: Buy a booster item
exports.buyBooster = onCall(async (request) => {
  try {
    if (!request.auth || !request.auth.uid) {
      throw new HttpsError("unauthenticated", "Authentication required");
    }

    const { boosterId } = request.data || {};
    const userId = request.auth.uid;
    validateInput({ boosterId }, ["boosterId"]);
    checkRateLimit(userId, "buyBooster", 10, 60000);

    const shopItems = {
      xp_boost_1h: { price: 100, name: "XP Boost (1h)" },
      xp_boost_12h: { price: 500, name: "XP Boost (12h)" },
      xp_boost_24h: { price: 1000, name: "XP Boost (24h)" },
    };

    const item = shopItems[boosterId];
    if (!item) {
      throw new HttpsError("invalid-argument", "Invalid item ID");
    }

    const userRef = admin.firestore().collection("users").doc(userId);

    const result = await admin
      .firestore()
      .runTransaction(async (transaction) => {
        const userDoc = await transaction.get(userRef);
        if (!userDoc.exists)
          throw new HttpsError("not-found", "User not found");

        const userData = userDoc.data();
        const userCoins =
          userData.profile && userData.profile.coins !== undefined
            ? userData.profile.coins
            : userData.coins || 0;

        if (userCoins < item.price) {
          throw new HttpsError("failed-precondition", "Not enough coins");
        }

        // Check where coins are stored and update accordingly
        const updateData = {};

        // Handle inventory update
        if (userData.inventory) {
          updateData[`inventory.${boosterId}`] =
            admin.firestore.FieldValue.increment(1);
        } else {
          updateData["inventory"] = { [boosterId]: 1 };
        }

        if (userData.profile && userData.profile.coins !== undefined) {
          updateData["profile.coins"] = admin.firestore.FieldValue.increment(
            -item.price,
          );
        } else {
          // Fallback if coins are at root level
          updateData["coins"] = admin.firestore.FieldValue.increment(
            -item.price,
          );
        }

        transaction.update(userRef, updateData);

        return { remainingCoins: userCoins - item.price };
      });

    logger.info("Booster bought", { userId, boosterId, price: item.price });
    return {
      success: true,
      message: `Zakoupeno: ${item.name}`,
      remainingCoins: result.remainingCoins,
    };
  } catch (error) {
    logger.error("Error buying booster", error);
    if (error instanceof HttpsError) {
      throw error;
    }
    throw new HttpsError("internal", error.message || "Failed to buy booster");
  }
});

// DEBUG: Add booster to user inventory (FOR TESTING ONLY)
exports.debugAddBooster = onCall(async (request) => {
  try {
    if (!request.auth || !request.auth.uid) {
      throw new Error("Authentication required");
    }

    const { boosterId, amount = 1 } = request.data || {};
    const userId = request.auth.uid;
    validateInput({ boosterId }, ["boosterId"]);

    // Check if boosterId is valid
    const validBoosters = ["xp_boost_1h", "xp_boost_12h", "xp_boost_24h"];
    if (!validBoosters.includes(boosterId)) {
      throw new Error("Invalid booster ID");
    }

    const userRef = admin.firestore().collection("users").doc(userId);

    await userRef.update({
      [`inventory.${boosterId}`]: admin.firestore.FieldValue.increment(amount),
    });

    logger.info("Debug: Added booster to inventory", {
      userId,
      boosterId,
      amount,
    });
    return { success: true, message: `Added ${amount} x ${boosterId}` };
  } catch (error) {
    logger.error("Error adding booster (debug)", error);
    throw new Error(error.message || "Failed to add booster");
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

// SECURED: Update user profile (name, surname, email)
exports.updateUserProfile = onCall(async (request) => {
  try {
    // Authentication required
    if (!request.auth || !request.auth.uid) {
      throw new Error("Authentication required");
    }

    const userId = request.auth.uid;
    const { firstName, lastName, email } = request.data || {};

    // Rate limiting per user
    checkRateLimit(userId, "updateProfile", 10, 60000); // 10 per minute

    logger.info("Updating user profile", {
      userId,
      currentEmail: request.auth.token.email,
      requestedChanges: {
        firstName: !!firstName,
        lastName: !!lastName,
        email: !!email,
      },
    });

    // Check if profile exists
    const userRef = admin.firestore().collection("users").doc(userId);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      throw new Error("User profile not found");
    }

    // Prepare updates object
    const updates = {};
    let authUpdates = {};

    // Sanitize and update firstName
    if (firstName !== undefined) {
      const sanitizedFirstName = sanitizeString(firstName);
      if (sanitizedFirstName.length < 1) {
        throw new Error("First name cannot be empty");
      }
      if (sanitizedFirstName.length > 50) {
        throw new Error("First name is too long (max 50 characters)");
      }
      updates["profile.name"] = sanitizedFirstName;
    }

    // Sanitize and update lastName
    if (lastName !== undefined) {
      const sanitizedLastName = sanitizeString(lastName);
      if (sanitizedLastName.length > 50) {
        throw new Error("Last name is too long (max 50 characters)");
      }
      updates["profile.surname"] = sanitizedLastName;
    }

    // Handle email update (requires Admin SDK)
    if (email !== undefined) {
      const sanitizedEmail = email.trim().toLowerCase();

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedEmail)) {
        throw new Error("Invalid email format");
      }

      // Check if email is already in use by another user
      try {
        const existingUser = await admin.auth().getUserByEmail(sanitizedEmail);
        if (existingUser.uid !== userId) {
          throw new Error("Email is already in use by another account");
        }
      } catch (error) {
        // If getUserByEmail throws error, email is not in use (which is good)
        if (error.code !== "auth/user-not-found") {
          throw error;
        }
      }

      updates["profile.email"] = sanitizedEmail;
      authUpdates.email = sanitizedEmail;
    }

    // Update Firestore user document
    if (Object.keys(updates).length > 0) {
      await userRef.update(updates);
      logger.info("Firestore profile updated", {
        userId,
        updatedFields: Object.keys(updates),
      });
    }

    // Update Firebase Auth user (email and displayName)
    if (
      Object.keys(authUpdates).length > 0 ||
      firstName !== undefined ||
      lastName !== undefined
    ) {
      const authUpdateData = { ...authUpdates };

      // Update displayName if name or surname changed
      if (firstName !== undefined || lastName !== undefined) {
        const currentData = userDoc.data();
        const newFirstName =
          firstName !== undefined
            ? sanitizeString(firstName)
            : currentData.profile.name;
        const newLastName =
          lastName !== undefined
            ? sanitizeString(lastName)
            : currentData.profile.surname;
        authUpdateData.displayName = `${newFirstName} ${newLastName}`.trim();
      }

      await admin.auth().updateUser(userId, authUpdateData);
      logger.info("Firebase Auth user updated", {
        userId,
        updatedFields: Object.keys(authUpdateData),
      });
    }

    // Get updated profile
    const updatedDoc = await userRef.get();
    const updatedProfile = updatedDoc.data().profile;

    logger.info("User profile updated successfully", {
      userId,
      updatedFields: Object.keys(updates),
    });

    return {
      success: true,
      message: "Profile updated successfully",
      profile: updatedProfile,
    };
  } catch (error) {
    logger.error("Error updating user profile", {
      error: error.message,
      userId: request.auth && request.auth.uid,
    });
    throw new Error(error.message || "Failed to update profile");
  }
});

// SECURED: Delete user account
exports.deleteAccount = onCall(async (request) => {
  try {
    // Authentication required
    if (!request.auth || !request.auth.uid) {
      throw new Error("Authentication required");
    }

    const userId = request.auth.uid;

    // Rate limiting
    checkRateLimit(userId, "deleteAccount", 1, 3600000); // 1 per hour

    logger.info("Starting account deletion process", { userId });

    // 1. Delete user document from 'users' collection
    const userRef = admin.firestore().collection("users").doc(userId);
    await userRef.delete();

    // 2. Delete user from Firebase Auth
    await admin.auth().deleteUser(userId);

    logger.info("Account deleted successfully", { userId });

    return { success: true, message: "Account deleted successfully" };
  } catch (error) {
    logger.error("Error deleting account", {
      error: error.message,
      userId: request.auth && request.auth.uid,
    });
    throw new Error(error.message || "Failed to delete account");
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
        { merge: true },
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
      "The function must be called while authenticated.",
    );
  }

  // Check if user is admin
  const isUserAdmin = await isAdmin(request.auth.uid);
  if (!isUserAdmin) {
    throw new HttpsError(
      "permission-denied",
      "Only admins can seed geometry data.",
    );
  }

  const { bodies } = request.data;

  if (!bodies || !Array.isArray(bodies)) {
    throw new HttpsError(
      "invalid-argument",
      "The function must be called with an array of geometric bodies.",
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

// Admin function to seed course content
exports.seedDatabase = onCall(async (request) => {
  // Check if user is authenticated
  if (!request.auth) {
    throw new HttpsError(
      "unauthenticated",
      "The function must be called while authenticated.",
    );
  }

  // Check if user is admin
  const isUserAdmin = await isAdmin(request.auth.uid);
  if (!isUserAdmin) {
    throw new HttpsError("permission-denied", "Only admins can seed database.");
  }

  const { content } = request.data;

  if (!content) {
    throw new HttpsError(
      "invalid-argument",
      "The function must be called with content object.",
    );
  }

  try {
    const db = admin.firestore();
    const batch = db.batch();
    let operationCount = 0;
    const MAX_BATCH_SIZE = 450; // Firestore limit is 500

    // Helper to commit batch if full
    const checkBatch = async () => {
      if (operationCount >= MAX_BATCH_SIZE) {
        await batch.commit();
        operationCount = 0;
        // Create new batch? No, batch is an object. We need to re-instantiate?
        // Actually, we can't reuse the committed batch object.
        // We need to manage multiple batches.
        // For simplicity in this script, let's just commit and return if we hit limit,
        // or better, use a recursive approach or just commit chunks.
        // But since we can't easily swap the 'batch' variable reference inside this scope cleanly without redesign,
        // let's just assume the content isn't massive for now, or implement a proper chunking mechanism.
        // Given the user's request, I'll implement a simple chunking array.
      }
    };

    // Better approach: Collect all operations first, then batch them.
    const operations = [];

    // 1. Process Subjects
    for (const [subjectId, subjectData] of Object.entries(content)) {
      // Create Subject Document
      const subjectRef = db.collection("subject").doc(subjectId);
      operations.push({
        type: "set",
        ref: subjectRef,
        data: {
          title: subjectId.charAt(0).toUpperCase() + subjectId.slice(1), // Simple title case
          id: subjectId,
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
      });

      // 2. Process Levels (zs, ss, vs)
      for (const [levelId, levelData] of Object.entries(subjectData)) {
        // We don't necessarily need a 'levels' collection, but we can store level info in subject or separate.
        // The prompt asked for subjects, chapters, lessons.

        // 3. Process SubLevels/Chapters
        // The structure is: subject -> level -> (default | 1 | 2) -> [chapters]

        for (const [subLevelId, chapters] of Object.entries(levelData)) {
          if (!Array.isArray(chapters)) continue;

          chapters.forEach((chapter, chapterIdx) => {
            const chapterId = `${subjectId}_${levelId}_${subLevelId}_ch${
              chapterIdx + 1
            }`;
            const chapterRef = db.collection("chapter").doc(chapterId);

            operations.push({
              type: "set",
              ref: chapterRef,
              data: {
                subjectId,
                levelId,
                subLevelId: subLevelId === "default" ? null : subLevelId,
                title: chapter.title,
                description: chapter.description || "",
                order: chapterIdx + 1,
                updatedAt: admin.firestore.FieldValue.serverTimestamp(),
              },
            });

            // 4. Process Lessons
            if (chapter.lessons && Array.isArray(chapter.lessons)) {
              chapter.lessons.forEach((lesson, lessonIdx) => {
                const lessonId = `${chapterId}_l${lessonIdx + 1}`;
                const lessonRef = db.collection("lesson").doc(lessonId);

                const lessonTitle =
                  typeof lesson === "string" ? lesson : lesson.title;
                const lessonContent =
                  typeof lesson === "object" ? lesson.content : null;
                const lessonType =
                  typeof lesson === "object" && lesson.type
                    ? lesson.type
                    : "text";

                operations.push({
                  type: "set",
                  ref: lessonRef,
                  data: {
                    chapterId,
                    subjectId,
                    title: lessonTitle,
                    content: lessonContent,
                    type: lessonType,
                    order: lessonIdx + 1,
                    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
                  },
                });
              });
            }
          });
        }
      }
    }

    // Execute batches
    let currentBatch = db.batch();
    let count = 0;
    let totalCommitted = 0;

    for (const op of operations) {
      if (op.type === "set") {
        currentBatch.set(op.ref, op.data, { merge: true });
      }
      count++;

      if (count >= MAX_BATCH_SIZE) {
        await currentBatch.commit();
        totalCommitted += count;
        currentBatch = db.batch();
        count = 0;
      }
    }

    if (count > 0) {
      await currentBatch.commit();
      totalCommitted += count;
    }

    logger.info("Database seeded successfully", {
      adminUid: request.auth.uid,
      documentsWritten: totalCommitted,
    });

    return { success: true, documentsWritten: totalCommitted };
  } catch (error) {
    logger.error("Error seeding database", error);
    throw new HttpsError(
      "internal",
      "Error seeding database: " + error.message,
    );
  }
});

// Function to get course data
exports.getCourseData = onCall(async (request) => {
  const { subjectId, levelId, subLevelId } = request.data;

  logger.info("getCourseData called", { subjectId, levelId, subLevelId });

  if (!subjectId || !levelId) {
    throw new HttpsError(
      "invalid-argument",
      "The function must be called with subjectId and levelId.",
    );
  }

  try {
    const db = admin.firestore();

    // 1. Get Subject Data (optional, for title etc)
    const subjectDoc = await db.collection("subject").doc(subjectId).get();
    const subjectData = subjectDoc.exists
      ? subjectDoc.data()
      : { title: subjectId };

    logger.info("Subject data retrieved", {
      exists: subjectDoc.exists,
      title: subjectData.title,
    });

    // 2. Get Chapters
    // Simplify query to avoid complex index requirements
    // We fetch all chapters for this subject and level, then filter in memory
    const chaptersQuery = db
      .collection("chapter")
      .where("subjectId", "==", subjectId)
      .where("levelId", "==", levelId);

    const chaptersSnapshot = await chaptersQuery.get();
    logger.info("Chapters found (raw)", { count: chaptersSnapshot.size });

    let chaptersDocs = chaptersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Filter by subLevelId in memory
    if (subLevelId) {
      const targetSubLevel = subLevelId.toString();

      // Fix: "default" subLevel is stored as null in DB by the seeder
      if (targetSubLevel === "default") {
        chaptersDocs = chaptersDocs.filter(
          (ch) => ch.subLevelId === null || ch.subLevelId === "default",
        );
      } else {
        chaptersDocs = chaptersDocs.filter(
          (ch) => ch.subLevelId && ch.subLevelId.toString() === targetSubLevel,
        );
      }
    } else {
      // If no subLevelId requested, we want chapters with NO subLevelId (null)
      // OR chapters where subLevelId is "default" (if that's how it was stored)
      chaptersDocs = chaptersDocs.filter(
        (ch) => ch.subLevelId === null || ch.subLevelId === "default",
      );
    }

    logger.info("Chapters after filtering", { count: chaptersDocs.length });

    // Sort by order
    chaptersDocs.sort((a, b) => (a.order || 0) - (b.order || 0));

    // 3. Get Lessons for each chapter
    // We can do this in parallel
    const chapterPromises = chaptersDocs.map(async (chapterData) => {
      // Remove orderBy here to avoid index issues
      const lessonsSnapshot = await db
        .collection("lesson")
        .where("chapterId", "==", chapterData.id)
        .get();

      const lessons = lessonsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Sort in memory
      lessons.sort((a, b) => (a.order || 0) - (b.order || 0));

      return {
        ...chapterData,
        lessons,
      };
    });

    const resolvedChapters = await Promise.all(chapterPromises);

    // Sort chapters by order again just in case
    resolvedChapters.sort((a, b) => a.order - b.order);

    logger.info("Returning resolved chapters", {
      count: resolvedChapters.length,
    });

    // Helper to safely convert Firestore timestamp or date string to ISO
    const toIsoString = (val) => {
      if (!val) return new Date().toISOString();
      if (val.toDate && typeof val.toDate === "function")
        return val.toDate().toISOString();
      if (val instanceof Date) return val.toISOString();
      return val; // Assume it's already a string
    };

    return {
      title: `${subjectData.title} - ${levelId.toUpperCase()}`,
      description: `Komplexní kurz pro ${levelId}.`,
      chapters: resolvedChapters,
      updatedAt: toIsoString(subjectData.updatedAt || subjectData.createdAt),
      createdAt: toIsoString(subjectData.createdAt),
    };
  } catch (error) {
    logger.error("Error fetching course data", error);
    throw new HttpsError(
      "internal",
      "Error fetching course data: " + error.message,
    );
  }
});

exports.submitQuiz = onCall(async (request) => {
  // 1. Authentication Check
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Musíte být přihlášeni.");
  }

  // Rate limiting
  const clientIP = (request.rawRequest && request.rawRequest.ip) || "unknown";
  checkRateLimit(request.auth.uid, "submitQuiz", 10, 60000); // 10 requests per minute per user

  const { lessonId, userAnswers } = request.data;
  const userId = request.auth.uid;
  const db = admin.firestore();

  // 2. Fetch the Lesson (Source of Truth)
  const lessonRef = db.collection("lesson").doc(lessonId);
  const userRef = db.collection("users").doc(userId);

  try {
    const result = await db.runTransaction(async (transaction) => {
      const lessonDoc = await transaction.get(lessonRef);
      if (!lessonDoc.exists) {
        throw new HttpsError("not-found", "Lekce nebyla nalezena.");
      }

      const lessonData = lessonDoc.data();
      const tasks = lessonData.content?.tasks || [];

      if (tasks.length === 0) {
        return { score: 0, total: 0, xpGained: 0, passed: true };
      }

      // Determine XP per question based on difficulty (level)
      // chapterId format: subjectId_levelId_subLevelId_chX
      const chapterId = lessonData.chapterId || "";
      const parts = chapterId.split("_");
      const levelId = parts.length > 1 ? parts[1] : "zs";
      const subLevelId = parts.length > 2 ? parts[2] : "default";

      let xpPerQuestion = 10; // Default (ZS 1. stupeň)

      if (levelId === "zs") {
        if (subLevelId === "2") {
          xpPerQuestion = 15; // ZS 2. stupeň
        } else {
          xpPerQuestion = 10; // ZS 1. stupeň
        }
      } else if (levelId === "ss") {
        xpPerQuestion = 25; // Střední škola
      } else if (levelId === "vs") {
        xpPerQuestion = 40; // Vysoká škola
      }

      // 3. Calculate Score (Server Side)
      let correctCount = 0;
      let potentialXp = 0;

      // We return the correct answers to the client ONLY after submission
      const corrections = [];

      tasks.forEach((task, index) => {
        const userAnswer = userAnswers[index];

        let isCorrect = false;

        if (task.type === "sequence") {
          // For sequence, compare arrays
          // Handle string/number mismatch by converting to string
          if (Array.isArray(userAnswer) && Array.isArray(task.correctAnswer)) {
            isCorrect =
              userAnswer.length === task.correctAnswer.length &&
              userAnswer.every(
                (val, i) => String(val) === String(task.correctAnswer[i]),
              );
          } else {
            isCorrect = false;
          }
        } else if (task.type === "text-input") {
          // For text input, compare normalized strings
          const uNorm = String(userAnswer || "")
            .trim()
            .toLowerCase();
          const cNorm = String(task.correctAnswer || "")
            .trim()
            .toLowerCase();
          isCorrect = uNorm === cNorm;
        } else {
          // Default: multiple choice (index comparison)
          isCorrect = userAnswer === task.correctAnswer;
        }

        if (isCorrect) {
          correctCount++;
          potentialXp += xpPerQuestion;
        }

        corrections.push({
          taskId: task.id,
          correctAnswer: task.correctAnswer,
          isCorrect: isCorrect,
        });
      });

      const scorePercentage = (correctCount / tasks.length) * 100;
      const passed = scorePercentage >= 80; // 80% threshold to pass
      let xpAwarded = passed ? potentialXp : 0;
      let activeBoost = null;

      // 4. Update User (XP and Progress)
      if (passed) {
        const userDoc = await transaction.get(userRef);
        if (userDoc.exists) {
          const userData = userDoc.data();
          const currentXp = userData.profile?.xp || 0;
          const completedLessons = userData.completedLessons || [];

          // Only award XP if lesson wasn't already completed
          if (!completedLessons.includes(lessonId)) {
            // APPLY BOOSTER LOGIC HERE
            if (userData.activeBoosts && userData.activeBoosts.xp) {
              const xpBoost = userData.activeBoosts.xp;
              const nowMillis = Date.now();
              const endsAtMillis = xpBoost.endsAt.toMillis();

              if (endsAtMillis > nowMillis) {
                const multiplier = xpBoost.multiplier || 1;
                xpAwarded = Math.floor(xpAwarded * multiplier);
                activeBoost = {
                  multiplier: multiplier,
                  expiresAt: xpBoost.endsAt,
                };
              }
            }

            // Progress Tracking
            const today = new Date().toISOString().split("T")[0];
            const todayProgress = userData.progress?.[today] || {
              xpGained: 0,
              coinsGained: 0,
              tasksFinished: 0,
              lessonsFinished: 0,
              chaptersFinished: 0,
              loginTime: admin.firestore.FieldValue.serverTimestamp(),
            };

            todayProgress.xpGained += xpAwarded;
            todayProgress.lessonsFinished =
              (todayProgress.lessonsFinished || 0) + 1;
            todayProgress.tasksFinished =
              (todayProgress.tasksFinished || 0) + correctCount;

            // Check chapter completion
            let chapterCompleted = false;
            if (lessonData.chapterId) {
              const chapterLessonsSnapshot = await transaction.get(
                db
                  .collection("lesson")
                  .where("chapterId", "==", lessonData.chapterId),
              );

              const allLessonIds = chapterLessonsSnapshot.docs.map((d) => d.id);
              const otherLessonIds = allLessonIds.filter(
                (id) => id !== lessonId,
              );
              const allOthersCompleted = otherLessonIds.every((id) =>
                completedLessons.includes(id),
              );

              if (allOthersCompleted) {
                chapterCompleted = true;
                todayProgress.chaptersFinished =
                  (todayProgress.chaptersFinished || 0) + 1;
              }
            }

            transaction.update(userRef, {
              "profile.xp": currentXp + xpAwarded,
              completedLessons: admin.firestore.FieldValue.arrayUnion(lessonId),
              [`progress.${today}`]: todayProgress,
            });
          } else {
            // If already completed, return 0 XP but show success
            return {
              score: scorePercentage,
              correctCount,
              total: tasks.length,
              xpGained: 0,
              passed,
              corrections,
              message: "Lekce již byla splněna dříve.",
            };
          }
        }
      }

      return {
        score: scorePercentage,
        correctCount,
        total: tasks.length,
        xpGained: xpAwarded,
        passed,
        corrections,
        activeBoost,
      };
    });

    return result;
  } catch (error) {
    console.error("Quiz submission error:", error);
    throw new HttpsError("internal", "Chyba při vyhodnocování testu.");
  }
});

// SECURED: Get comprehensive home screen data
exports.getHomeData = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Authentication required");
  }

  const userId = request.auth.uid;
  const db = admin.firestore();

  try {
    const userDoc = await db.collection("users").doc(userId).get();
    if (!userDoc.exists) {
      throw new HttpsError("not-found", "User profile not found");
    }

    const userData = userDoc.data();
    const today = new Date().toISOString().split("T")[0];

    // 1. Process Activity Data (Last 7 days)
    const activityData = [];
    const days = ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      const dayName = days[d.getDay()];

      const dayProgress = userData.progress?.[dateStr] || {};
      activityData.push({
        name: dayName,
        xp: dayProgress.xpGained || 0,
        date: dateStr,
      });
    }

    // 2. Determine Streak
    // Basic streak calculation going backwards from yesterday
    let streak = 0;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    let checkDate = yesterday;

    // Check if user was active today to keep streak alive
    const todayProgress = userData.progress?.[today];
    if (
      todayProgress &&
      (todayProgress.xpGained > 0 || todayProgress.loginTime)
    ) {
      streak = 1;
    }

    // Go back in time
    while (true) {
      const dateStr = checkDate.toISOString().split("T")[0];
      if (userData.progress?.[dateStr]?.xpGained > 0) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }

    // 3. Process Active Boosts
    const processedBoosts = [];
    if (userData.activeBoosts) {
      const now = Date.now();
      Object.keys(userData.activeBoosts).forEach((key) => {
        const boost = userData.activeBoosts[key];
        const endsAt = boost.endsAt?.toMillis ? boost.endsAt.toMillis() : 0;
        if (endsAt > now) {
          processedBoosts.push({
            type: key,
            multiplier: boost.multiplier,
            endsAt: endsAt,
            sourceItem: boost.sourceItem,
          });
        }
      });
    }

    // 4. Favourite Courses
    // Transform array of strings into array of objects with progress
    let favoriteCourses = [];
    const storedFavorites = userData.favoriteCourses || [];
    const courseProgress = userData.courseProgress || {};

    if (Array.isArray(storedFavorites)) {
      favoriteCourses = storedFavorites.map((courseId) => {
        // Handle if it's already an object (legacy support/mixed data)
        if (typeof courseId === "object" && courseId !== null) {
          return courseId;
        }

        const progressInfo = courseProgress[courseId] || {};
        return {
          id: courseId,
          progress: progressInfo.progress || 0,
          completedLessons: progressInfo.completedLessons || 0,
          totalLessons: progressInfo.totalLessons || 0, // In case we store it later
        };
      });
    }

    // 5. User Stats
    // Calculate level based on XP (simple formula: level = floor(sqrt(xp/100))) or linear
    const xp = userData.profile?.xp || 0;
    const level = Math.floor(Math.sqrt(xp / 100)) + 1;
    const nextLevelXp = Math.pow(level, 2) * 100; // XP needed for next level

    // Construct response
    return {
      userStats: {
        name:
          `${userData.firstName || ""} ${userData.lastName || ""}`.trim() ||
          "Uživatel",
        email: request.auth.token.email || "",
        level: level,
        xp: xp,
        maxXp: nextLevelXp,
        coins: userData.profile?.coins || 0,
        streak: streak,
      },
      activityData: activityData,
      activeBoosts: processedBoosts,
      inventory: userData.inventory || {},
      favoriteCourses: favoriteCourses,
      progress: userData.progress?.[today] || {},
    };
  } catch (error) {
    console.error("Error fetching home data:", error);
    throw new HttpsError("internal", "Failed to fetch home data");
  }
});

exports.completeLesson = onCall(async (request) => {
  // 1. Authentication Check
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Musíte být přihlášeni.");
  }

  const { lessonId } = request.data;
  const userId = request.auth.uid;
  const db = admin.firestore();

  // Rate limiting
  checkRateLimit(userId, "completeLesson", 20, 60000);

  try {
    const userRef = db.collection("users").doc(userId);
    const lessonRef = db.collection("lesson").doc(lessonId);

    await db.runTransaction(async (transaction) => {
      const lessonDoc = await transaction.get(lessonRef);
      if (!lessonDoc.exists) {
        throw new HttpsError("not-found", "Lekce nebyla nalezena.");
      }

      // Check if lesson has tasks - if so, user MUST use submitQuiz
      const lessonData = lessonDoc.data();
      if (lessonData.content?.tasks?.length > 0) {
        throw new HttpsError(
          "failed-precondition",
          "Tuto lekci lze splnit pouze vypracováním testu.",
        );
      }

      const userDoc = await transaction.get(userRef);
      if (!userDoc.exists) {
        throw new HttpsError("not-found", "Uživatel nenalezen.");
      }

      const userData = userDoc.data();
      const completedLessons = userData.completedLessons || [];
      const currentXp = userData.profile?.xp || 0;

      if (!completedLessons.includes(lessonId)) {
        // Award small XP for reading (e.g., 5 XP)
        const xpAwarded = 5;

        // Progress Tracking
        const today = new Date().toISOString().split("T")[0];
        const todayProgress = userData.progress?.[today] || {
          xpGained: 0,
          coinsGained: 0,
          tasksFinished: 0,
          lessonsFinished: 0,
          chaptersFinished: 0,
          loginTime: admin.firestore.FieldValue.serverTimestamp(),
        };

        todayProgress.xpGained += xpAwarded;
        todayProgress.lessonsFinished =
          (todayProgress.lessonsFinished || 0) + 1;

        // Check chapter completion
        let chapterCompleted = false;
        if (lessonData.chapterId) {
          const chapterLessonsSnapshot = await transaction.get(
            db
              .collection("lesson")
              .where("chapterId", "==", lessonData.chapterId),
          );

          const allLessonIds = chapterLessonsSnapshot.docs.map((d) => d.id);
          const otherLessonIds = allLessonIds.filter((id) => id !== lessonId);
          const allOthersCompleted = otherLessonIds.every((id) =>
            completedLessons.includes(id),
          );

          if (allOthersCompleted) {
            chapterCompleted = true;
            todayProgress.chaptersFinished =
              (todayProgress.chaptersFinished || 0) + 1;
          }
        }

        transaction.update(userRef, {
          "profile.xp": currentXp + xpAwarded,
          completedLessons: admin.firestore.FieldValue.arrayUnion(lessonId),
          [`progress.${today}`]: todayProgress,
        });
        return {
          success: true,
          xpGained: xpAwarded,
          chapterCompleted,
        };
      } else {
        return { success: true, xpGained: 0, message: "Already completed" };
      }
    });

    return { success: true };
  } catch (error) {
    console.error("Complete lesson error:", error);
    throw new HttpsError("internal", "Chyba při dokončování lekce.");
  }
});

// Fetch Leaderboard Data (Secure)
exports.getLeaderboard = onCall(async (request) => {
  // Optional: Check if user is authenticated
  if (!request.auth) {
    // throw new HttpsError('unauthenticated', 'The function must be called while authenticated.');
  }

  try {
    const limit = request.data.limit || 10;
    const usersRef = admin.firestore().collection("users");

    // Create query: top XP
    // Note: This sorts by XP. To sort by streak, we would need to store streak in the document.
    const snapshot = await usersRef
      .orderBy("profile.xp", "desc")
      .limit(limit)
      .get();

    const leaderboard = [];

    // Helper to calculate streak from progress map
    const calculateStreak = (progress) => {
      if (!progress) return 0;

      const now = new Date();
      // Date keys are stored as UTC YYYY-MM-DD strings in the database
      const today = now.toISOString().split("T")[0];

      const yesterdayDate = new Date(now);
      yesterdayDate.setDate(yesterdayDate.getDate() - 1);
      const yesterday = yesterdayDate.toISOString().split("T")[0];

      let currentStreak = 0;
      let dateObj = null;
      let checkDate = null;

      // Check if streak is active (activity today or yesterday)
      if (progress[today]) {
        checkDate = today;
        dateObj = new Date(now);
      } else if (progress[yesterday]) {
        checkDate = yesterday;
        dateObj = new Date(yesterdayDate);
      } else {
        return 0;
      }

      // Count backwards
      while (progress[checkDate]) {
        currentStreak++;
        // Move to previous day
        dateObj.setDate(dateObj.getDate() - 1);
        checkDate = dateObj.toISOString().split("T")[0];
      }

      return currentStreak;
    };

    snapshot.forEach((doc) => {
      const data = doc.data();
      const profile = data.profile || {};

      // Construct name from profile.name and profile.surname
      const fullName =
        [profile.name, profile.surname].filter(Boolean).join(" ") ||
        "Neznámý uživatel";

      leaderboard.push({
        userId: doc.id,
        name: fullName,
        xp: profile.xp || 0,
        coins: profile.coins || 0,
        streak: calculateStreak(data.progress),
      });
    });

    return { leaderboard };
  } catch (error) {
    logger.error("Error fetching leaderboard", error);
    throw new HttpsError(
      "internal",
      error.message || "Failed to fetch leaderboard",
    );
  }
});

// SECURED: Get user comprehensive statistics
exports.getUserStatistics = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Authentication required");
  }

  const userId = request.auth.uid;
  const db = admin.firestore();

  try {
    const userDoc = await db.collection("users").doc(userId).get();
    if (!userDoc.exists) {
      throw new HttpsError("not-found", "User profile not found");
    }

    const userData = userDoc.data();
    const progress = userData.progress || {};

    // 1. Weekly Activity (Last 7 days)
    const weeklyActivity = [];
    const days = ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"];
    const today = new Date();

    // Create array for last 7 days including today
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      const dayName = days[d.getDay()];

      const dayData = progress[dateStr] || {};
      weeklyActivity.push({
        name: dayName, // For X-axis
        fullDate: dateStr, // For tooltip
        xp: dayData.xpGained || 0,
        coinsGained: dayData.coinsGained || 0,
        tasks: dayData.tasksFinished || 0,
      });
    }

    // 2. Aggregate Total Stats from Progress History
    let totalTasksFinished = 0;
    let totalLessonsFinished = 0;
    let totalLoginDays = 0;

    Object.values(progress).forEach((dayData) => {
      totalTasksFinished += dayData.tasksFinished || 0;
      totalLessonsFinished += dayData.lessonsFinished || 0;
      if (dayData.loginTime) totalLoginDays++;
    });

    // 3. Activity History for Heatmap (Last 365 days)
    const activityHistory = {};
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    // Iterate through progress map directly
    Object.entries(progress).forEach(([dateStr, dayData]) => {
      // Simple check if date is within range (optional, but good for payload size)
      if (new Date(dateStr) >= oneYearAgo) {
        activityHistory[dateStr] = {
          value:
            (dayData.tasksFinished || 0) + (dayData.lessonsFinished || 0) * 2, // Weighted activity
          xp: dayData.xpGained || 0,
        };
      }
    });

    const xp = userData.profile?.xp || 0;
    const coins = userData.profile?.coins || 0;
    const level = Math.floor(Math.sqrt(xp / 100)) + 1;

    return {
      weeklyActivity,
      activityHistory,
      stats: {
        coins,
        totalXp: xp,
        currentLevel: level,
        totalTasks: totalTasksFinished,
        totalLessons: totalLessonsFinished,
        loginDays: totalLoginDays,
      },
    };
  } catch (error) {
    logger.error("Error fetching user statistics", error);
    throw new HttpsError("internal", "Failed to get statistics");
  }
});
