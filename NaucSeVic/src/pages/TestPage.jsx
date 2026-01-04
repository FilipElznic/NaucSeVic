import React, { useState } from "react";
import { httpsCallable } from "firebase/functions";
import { functions } from "../config/firebase";
import { courseContentDatabase } from "../config/courseContent";
import { toast } from "react-toastify";

const TestPage = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSeedDatabase = async () => {
    if (
      !window.confirm(
        "Are you sure you want to overwrite the database with local content?"
      )
    ) {
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const seedDatabase = httpsCallable(functions, "seedDatabase");
      const response = await seedDatabase({ content: courseContentDatabase });

      setResult(response.data);
      toast.success("Database seeded successfully!");
    } catch (error) {
      console.error("Error seeding database:", error);
      toast.error(`Error: ${error.message}`);
      setResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 p-8">
      <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-zinc-800">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Admin Tools
        </h1>

        <div className="space-y-6">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
            <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Seed Course Content
            </h2>
            <p className="text-blue-700 dark:text-blue-300 mb-4">
              This will upload the local `courseContent.js` data to Firestore,
              creating/updating collections for `subjects`, `chapters`, and
              `lessons`.
            </p>

            <button
              onClick={handleSeedDatabase}
              disabled={loading}
              className={`px-6 py-3 rounded-lg font-medium text-white transition-all ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30"
              }`}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Seeding...
                </span>
              ) : (
                "Seed Database Now"
              )}
            </button>
          </div>

          {result && (
            <div className="mt-6 p-4 bg-gray-100 dark:bg-zinc-800 rounded-xl overflow-auto max-h-96">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                Result:
              </h3>
              <pre className="text-xs font-mono text-gray-700 dark:text-gray-300">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
