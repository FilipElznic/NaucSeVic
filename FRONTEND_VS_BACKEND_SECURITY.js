// 👁️ WHAT USERS CAN SEE (Frontend - React Component)
// This is visible in browser dev tools, can be modified by users

import { cloudFunctionsService } from "../services/cloudFunctions";

const createTask = async (taskData) => {
  // ⚠️ Users can see this code and modify it in their browser
  // ⚠️ They can bypass client-side validation
  // ⚠️ They can see function names and parameters

  if (taskData.title.length < 3) {
    alert("Title too short"); // User can remove this check
    return;
  }

  // This just makes an API call - like calling any REST API
  const result = await cloudFunctionsService.createTask({
    title: taskData.title,
    description: taskData.description,
    category: "general",
  });

  return result;
};

// 🚨 WHAT USERS CANNOT SEE OR MODIFY (Backend - Cloud Functions)
// This runs on Google's secure servers, completely inaccessible to users

exports.createTask = onCall(async (request) => {
  // ✅ This code runs on Google's servers - users cannot see or modify it
  // ✅ All security checks happen here - cannot be bypassed
  // ✅ Real business logic and validation happens here

  // Server-side authentication (cannot be faked)
  if (!request.auth || !request.auth.uid) {
    throw new Error("Authentication required");
  }

  // Server-side validation (cannot be bypassed)
  const { title, description, category } = request.data || {};
  if (!title || title.trim().length < 3) {
    throw new Error("Title must be at least 3 characters");
  }

  // Rate limiting (cannot be bypassed)
  checkRateLimit(request.auth.uid, "createTask", 10, 60000);

  // Data sanitization (cannot be bypassed)
  const sanitizedTitle = title.trim().substring(0, 100);
  const sanitizedDescription = description
    ? description.trim().substring(0, 500)
    : "";

  // Database operation (completely secure)
  const taskDoc = await admin
    .firestore()
    .collection("tasks")
    .add({
      title: sanitizedTitle,
      description: sanitizedDescription,
      category: ["work", "personal", "study"].includes(category)
        ? category
        : "general",
      userId: request.auth.uid, // Server verifies this
      userEmail: request.auth.token.email,
      completed: false,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

  // Logging (secure, cannot be tampered with)
  logger.info("Task created", {
    taskId: taskDoc.id,
    userId: request.auth.uid,
    ip: request.rawRequest.ip,
  });

  return {
    success: true,
    taskId: taskDoc.id,
    message: "Task created successfully",
  };
});

/*
🔒 SECURITY SUMMARY:

FRONTEND (React):
- Users can modify, inspect, bypass
- Only for UI/UX purposes  
- Never trust frontend validation
- Equivalent to HTML/CSS/JavaScript on any website

BACKEND (Cloud Functions):
- Completely secure and hidden
- Runs on Google's infrastructure
- Users cannot access, see, or modify
- All real security happens here
- Like any traditional server-side API

ANALOGY:
Frontend = Restaurant Menu (customers can see)
Backend = Kitchen & Recipes (customers cannot access)

The menu shows what's available, but customers can't change 
how the food is actually prepared in the kitchen.
*/
