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

// Admin function to seed course content
exports.seedDatabase = onCall(async (request) => {
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
    throw new HttpsError("permission-denied", "Only admins can seed database.");
  }

  const { content } = request.data;

  if (!content) {
    throw new HttpsError(
      "invalid-argument",
      "The function must be called with content object."
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
      const subjectRef = db.collection("subjects").doc(subjectId);
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
            const chapterRef = db.collection("chapters").doc(chapterId);

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
                const lessonRef = db.collection("lessons").doc(lessonId);

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
      "Error seeding database: " + error.message
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
      "The function must be called with subjectId and levelId."
    );
  }

  try {
    const db = admin.firestore();

    // 1. Get Subject Data (optional, for title etc)
    const subjectDoc = await db.collection("subjects").doc(subjectId).get();
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
      .collection("chapters")
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
          (ch) => ch.subLevelId === null || ch.subLevelId === "default"
        );
      } else {
        chaptersDocs = chaptersDocs.filter(
          (ch) => ch.subLevelId && ch.subLevelId.toString() === targetSubLevel
        );
      }
    } else {
      // If no subLevelId requested, we want chapters with NO subLevelId (null)
      // OR chapters where subLevelId is "default" (if that's how it was stored)
      chaptersDocs = chaptersDocs.filter(
        (ch) => ch.subLevelId === null || ch.subLevelId === "default"
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
        .collection("lessons")
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

    return {
      title: `${subjectData.title} - ${levelId.toUpperCase()}`,
      description: `Komplexní kurz pro ${levelId}.`,
      chapters: resolvedChapters,
    };
  } catch (error) {
    logger.error("Error fetching course data", error);
    throw new HttpsError(
      "internal",
      "Error fetching course data: " + error.message
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
  const lessonRef = db.collection("lessons").doc(lessonId);
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
        const userAnswerIndex = userAnswers[index];
        const isCorrect = userAnswerIndex === task.correctAnswer;

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
      const xpAwarded = passed ? potentialXp : 0;

      // 4. Update User (XP and Progress)
      if (passed) {
        const userDoc = await transaction.get(userRef);
        if (userDoc.exists) {
          const userData = userDoc.data();
          const currentXp = userData.xp || 0;
          const completedLessons = userData.completedLessons || [];

          // Only award XP if lesson wasn't already completed
          if (!completedLessons.includes(lessonId)) {
            transaction.update(userRef, {
              xp: currentXp + xpAwarded,
              completedLessons: admin.firestore.FieldValue.arrayUnion(lessonId),
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
      };
    });

    return result;
  } catch (error) {
    console.error("Quiz submission error:", error);
    throw new HttpsError("internal", "Chyba při vyhodnocování testu.");
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
    const lessonRef = db.collection("lessons").doc(lessonId);

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
          "Tuto lekci lze splnit pouze vypracováním testu."
        );
      }

      const userDoc = await transaction.get(userRef);
      if (!userDoc.exists) {
        throw new HttpsError("not-found", "Uživatel nenalezen.");
      }

      const userData = userDoc.data();
      const completedLessons = userData.completedLessons || [];

      if (!completedLessons.includes(lessonId)) {
        // Award small XP for reading (e.g., 5 XP)
        const xpAwarded = 5;
        transaction.update(userRef, {
          xp: (userData.xp || 0) + xpAwarded,
          completedLessons: admin.firestore.FieldValue.arrayUnion(lessonId),
        });
        return { success: true, xpGained: xpAwarded };
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
