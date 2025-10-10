import React, { useState } from "react";
import { useCloudFunction, useApiCall } from "../hooks/useCloudFunctions";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { toast } from "react-toastify";
import {
  Cloud,
  Zap,
  Globe,
  Send,
  Play,
  CheckCircle,
  Info,
  ArrowRight,
  Sparkles,
} from "lucide-react";

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
    <div className="min-h-screen bg-white dark:bg-zinc-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20 dark:border-zinc-700/50">
              <Cloud className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-zinc-300">
                Serverless Functions
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Cloud Functions
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600">
              Demo Lab
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-700 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Testujte a experimentujte s Firebase Cloud Functions v reálném čase.
            Sledujte, jak serverless architektura zpracovává vaše požadavky.
          </p>
        </div>

        {/* Functions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Hello World Function */}
          <div className="bg-white/10 dark:bg-zinc-800/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-zinc-700/30 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mr-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Hello World Function
                </h3>
                <p className="text-sm text-gray-600 dark:text-zinc-400">
                  Základní serverless funkce
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
                  Vaše jméno
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Zadejte své jméno"
                  className="w-full px-4 py-3 bg-white/80 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white placeholder-gray-500 dark:placeholder-zinc-400 transition-all duration-200"
                />
              </div>

              <button
                onClick={handleHelloWorld}
                disabled={helloLoading}
                className="group w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
              >
                {helloLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Volám funkci...
                  </div>
                ) : (
                  <>
                    <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Zavolat Hello World
                  </>
                )}
              </button>

              {helloData && (
                <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-green-800 dark:text-green-200 font-medium">
                        {helloData.message}
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                        Čas odpovědi: {helloData.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Task Creation Function */}
          <div className="bg-white/10 dark:bg-zinc-800/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-zinc-700/30 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl mr-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Create Task Function
                </h3>
                <p className="text-sm text-gray-600 dark:text-zinc-400">
                  Autentizovaná serverless funkce
                </p>
              </div>
            </div>

            {!user && (
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800 mb-4">
                <div className="flex items-center">
                  <Info className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-2" />
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                    Pro použití této funkce se nejdříve přihlaste.
                  </p>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
                  Název úkolu
                </label>
                <input
                  type="text"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  placeholder="Zadejte název úkolu"
                  className="w-full px-4 py-3 bg-white/80 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:text-white placeholder-gray-500 dark:placeholder-zinc-400 transition-all duration-200 disabled:opacity-50"
                  disabled={!user}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
                  Popis úkolu
                </label>
                <textarea
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  placeholder="Zadejte popis úkolu"
                  rows={3}
                  className="w-full px-4 py-3 bg-white/80 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:text-white placeholder-gray-500 dark:placeholder-zinc-400 transition-all duration-200 disabled:opacity-50 resize-none"
                  disabled={!user}
                />
              </div>

              <button
                onClick={handleCreateTask}
                disabled={taskLoading || !user || !taskTitle.trim()}
                className="group w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
              >
                {taskLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Vytvářím úkol...
                  </div>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Vytvořit úkol
                  </>
                )}
              </button>

              {taskData && (
                <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-green-800 dark:text-green-200 font-medium">
                        {taskData.message}
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                        Task ID: {taskData.taskId}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* API Calls Section */}
        <div className="bg-white/10 dark:bg-zinc-800/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-zinc-700/30 shadow-xl">
          <div className="flex items-center mb-8">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mr-4">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                HTTP API Calls
              </h3>
              <p className="text-gray-600 dark:text-zinc-400">
                Testování REST API endpointů
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={handleApiCall}
              disabled={apiLoading}
              className="group inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
            >
              {apiLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Loading...
                </div>
              ) : (
                <>
                  <ArrowRight className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  GET /api
                </>
              )}
            </button>

            <button
              onClick={handleApiPost}
              disabled={apiLoading}
              className="group inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
            >
              {apiLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Loading...
                </div>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  POST /api
                </>
              )}
            </button>
          </div>
        </div>

        {/* Instructions Panel */}
        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-indigo-200 dark:border-indigo-800">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mr-4">
              <Info className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-indigo-900 dark:text-indigo-200">
              Návod k použití
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h5 className="font-semibold text-indigo-800 dark:text-indigo-300">
                Deployment:
              </h5>
              <div className="bg-white/80 dark:bg-zinc-800/80 rounded-xl p-3">
                <code className="text-sm text-indigo-700 dark:text-indigo-300">
                  firebase deploy --only functions
                </code>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="font-semibold text-indigo-800 dark:text-indigo-300">
                Development:
              </h5>
              <div className="bg-white/80 dark:bg-zinc-800/80 rounded-xl p-3">
                <code className="text-sm text-indigo-700 dark:text-indigo-300">
                  firebase emulators:start
                </code>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/60 dark:bg-zinc-800/60 rounded-xl p-4">
              <div className="text-sm text-indigo-700 dark:text-indigo-300">
                ✓ Sledujte detailní odpovědi v konzoli prohlížeče
              </div>
            </div>
            <div className="bg-white/60 dark:bg-zinc-800/60 rounded-xl p-4">
              <div className="text-sm text-indigo-700 dark:text-indigo-300">
                ✓ Funkce se zobrazí v Firebase Console po deployment
              </div>
            </div>
            <div className="bg-white/60 dark:bg-zinc-800/60 rounded-xl p-4">
              <div className="text-sm text-indigo-700 dark:text-indigo-300">
                ✓ Použijte Firebase emulator pro lokální vývoj
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudFunctionDemo;
