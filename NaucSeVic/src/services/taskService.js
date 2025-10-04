import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebase";

// Task management
export const createTask = async (taskData) => {
  try {
    const taskRef = doc(db, "tasks", taskData.id || Date.now().toString());
    await setDoc(taskRef, taskData);
    return { id: taskRef.id, ...taskData };
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

export const getTasksBySubject = async (subjectId) => {
  try {
    const tasksRef = collection(db, "tasks");
    const tasksQuery = query(tasksRef, where("subjectId", "==", subjectId));

    const querySnapshot = await getDocs(tasksQuery);
    const tasks = [];

    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() });
    });

    return tasks;
  } catch (error) {
    console.error("Error getting tasks by subject:", error);
    throw error;
  }
};

export const getTask = async (taskId) => {
  try {
    const taskRef = doc(db, "tasks", taskId);
    const taskSnap = await getDoc(taskRef);

    if (taskSnap.exists()) {
      return { id: taskSnap.id, ...taskSnap.data() };
    } else {
      throw new Error("Task not found");
    }
  } catch (error) {
    console.error("Error getting task:", error);
    throw error;
  }
};

export const getAllTasks = async () => {
  try {
    const tasksRef = collection(db, "tasks");
    const querySnapshot = await getDocs(tasksRef);
    const tasks = [];

    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() });
    });

    return tasks;
  } catch (error) {
    console.error("Error getting all tasks:", error);
    throw error;
  }
};

// User task management
export const submitTaskAnswer = async (
  userId,
  taskId,
  userAnswer,
  isCorrect
) => {
  try {
    const userTaskRef = collection(db, "userTasks");
    const userTaskData = {
      userId,
      taskId,
      userAnswer,
      isCorrect,
      answeredAt: serverTimestamp(),
    };

    await addDoc(userTaskRef, userTaskData);
    return userTaskData;
  } catch (error) {
    console.error("Error submitting task answer:", error);
    throw error;
  }
};

export const getUserTaskHistory = async (userId, taskId = null) => {
  try {
    const userTasksRef = collection(db, "userTasks");
    let userTasksQuery;

    if (taskId) {
      userTasksQuery = query(
        userTasksRef,
        where("userId", "==", userId),
        where("taskId", "==", taskId),
        orderBy("answeredAt", "desc")
      );
    } else {
      userTasksQuery = query(
        userTasksRef,
        where("userId", "==", userId),
        orderBy("answeredAt", "desc")
      );
    }

    const querySnapshot = await getDocs(userTasksQuery);
    const userTasks = [];

    querySnapshot.forEach((doc) => {
      userTasks.push({ id: doc.id, ...doc.data() });
    });

    return userTasks;
  } catch (error) {
    console.error("Error getting user task history:", error);
    throw error;
  }
};

export const getUserTaskStats = async (userId) => {
  try {
    const userTasks = await getUserTaskHistory(userId);

    const stats = {
      totalAttempts: userTasks.length,
      correctAnswers: userTasks.filter((task) => task.isCorrect).length,
      incorrectAnswers: userTasks.filter((task) => !task.isCorrect).length,
      accuracy: 0,
      subjectStats: {},
    };

    stats.accuracy =
      stats.totalAttempts > 0
        ? (stats.correctAnswers / stats.totalAttempts) * 100
        : 0;

    // Get task details to calculate subject stats
    const taskIds = [...new Set(userTasks.map((ut) => ut.taskId))];
    const taskDetails = {};

    for (const taskId of taskIds) {
      try {
        const task = await getTask(taskId);
        taskDetails[taskId] = task;
      } catch (error) {
        console.error(`Error getting task ${taskId}:`, error);
      }
    }

    // Calculate stats per subject
    userTasks.forEach((userTask) => {
      const task = taskDetails[userTask.taskId];
      if (task) {
        const subjectId = task.subjectId;
        if (!stats.subjectStats[subjectId]) {
          stats.subjectStats[subjectId] = {
            total: 0,
            correct: 0,
            accuracy: 0,
          };
        }

        stats.subjectStats[subjectId].total++;
        if (userTask.isCorrect) {
          stats.subjectStats[subjectId].correct++;
        }

        stats.subjectStats[subjectId].accuracy =
          (stats.subjectStats[subjectId].correct /
            stats.subjectStats[subjectId].total) *
          100;
      }
    });

    return stats;
  } catch (error) {
    console.error("Error getting user task stats:", error);
    throw error;
  }
};

// Check if user has already completed a task correctly
export const hasUserCompletedTask = async (userId, taskId) => {
  try {
    const userTasksRef = collection(db, "userTasks");
    const completedTaskQuery = query(
      userTasksRef,
      where("userId", "==", userId),
      where("taskId", "==", taskId),
      where("isCorrect", "==", true)
    );

    const querySnapshot = await getDocs(completedTaskQuery);
    return !querySnapshot.empty;
  } catch (error) {
    console.error("Error checking if user completed task:", error);
    return false;
  }
};
