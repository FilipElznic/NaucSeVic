import React, { useState } from "react";
import { useCloudFunction, useApiCall } from "../hooks/useCloudFunctions";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { toast } from "react-toastify";

const CloudFunctionDemo = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  // Cloud Function hooks
  const {
    data: helloData,
    loading: helloLoading,
    callFunction: callHello,
  } = useCloudFunction("helloWorld");
  const {
    data: taskData,
    loading: taskLoading,
    callFunction: callCreateTask,
  } = useCloudFunction("createTask");
  const { loading: apiLoading, callApi } = useApiCall();

  const handleHelloWorld = async () => {
    try {
      await callHello({ name });
      toast.success("Hello World function called successfully!");
    } catch (error) {
      console.error("Hello World error:", error);
      toast.error("Error calling Hello World function");
    }
  };

  const handleCreateTask = async () => {
    if (!user) {
      toast.error("Please log in to create tasks");
      return;
    }

    try {
      await callCreateTask({
        title: taskTitle,
        description: taskDescription,
        category: "general",
      });
      toast.success("Task created successfully!");
      setTaskTitle("");
      setTaskDescription("");
    } catch (error) {
      console.error("Create task error:", error);
      toast.error("Error creating task");
    }
  };

  const handleApiCall = async () => {
    try {
      const result = await callApi("GET");
      toast.success("API called successfully!");
      console.log("API Result:", result);
    } catch (error) {
      console.error("API call error:", error);
      toast.error("Error calling API");
    }
  };

  const handleApiPost = async () => {
    try {
      const result = await callApi("POST", { message: "Hello from frontend!" });
      toast.success("API POST called successfully!");
      console.log("API POST Result:", result);
    } catch (error) {
      console.error("API POST error:", error);
      toast.error("Error calling API POST");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Cloud Functions Demo
        </h2>

        {/* Hello World Function */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Hello World Function
          </h3>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <button
              onClick={handleHelloWorld}
              disabled={helloLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {helloLoading ? "Calling..." : "Call Hello World"}
            </button>
          </div>
          {helloData && (
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-md">
              <p className="text-green-800 dark:text-green-200">
                <strong>Response:</strong> {helloData.message}
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                Timestamp: {helloData.timestamp}
              </p>
            </div>
          )}
        </div>

        {/* Task Creation Function */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Create Task Function
          </h3>
          {!user && (
            <p className="text-yellow-600 dark:text-yellow-400 mb-4">
              Please log in to use this function.
            </p>
          )}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Task Title
              </label>
              <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Enter task title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                disabled={!user}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Task Description
              </label>
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Enter task description"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                disabled={!user}
              />
            </div>
            <button
              onClick={handleCreateTask}
              disabled={taskLoading || !user || !taskTitle.trim()}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {taskLoading ? "Creating..." : "Create Task"}
            </button>
          </div>
          {taskData && (
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-md">
              <p className="text-green-800 dark:text-green-200">
                <strong>Task Created:</strong> {taskData.message}
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                Task ID: {taskData.taskId}
              </p>
            </div>
          )}
        </div>

        {/* API Calls */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            HTTP API Calls
          </h3>
          <div className="flex gap-4">
            <button
              onClick={handleApiCall}
              disabled={apiLoading}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {apiLoading ? "Calling..." : "GET /api"}
            </button>
            <button
              onClick={handleApiPost}
              disabled={apiLoading}
              className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {apiLoading ? "Calling..." : "POST /api"}
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-md p-4">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
            Usage Instructions:
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-blue-700 dark:text-blue-300 text-sm">
            <li>
              Deploy functions with:{" "}
              <code>firebase deploy --only functions</code>
            </li>
            <li>Check the browser console for detailed API responses</li>
            <li>
              Functions will appear in the Firebase Console after deployment
            </li>
            <li>Use the Firebase emulator for local development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CloudFunctionDemo;
