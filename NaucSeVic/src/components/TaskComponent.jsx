import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";
import {
  getTasksBySubject,
  completeTask,
  hasUserCompletedTask,
  getSubject,
} from "../services/databaseService";
import {
  CheckCircle,
  XCircle,
  Trophy,
  Coins,
  Zap,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import LoadingSpinner from "./ui/LoadingSpinner";
import { toast } from "react-toastify";

const TaskComponent = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const { user } = useFirebaseAuth();

  const [tasks, setTasks] = useState([]);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [currentTask, setCurrentTask] = useState(null);
  const [subjectData, setSubjectData] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);
  const [completedTasks, setCompletedTasks] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      if (!user || !subject) return;

      try {
        setLoading(true);
        const [tasksData, subjectInfo] = await Promise.all([
          getTasksBySubject(subject),
          getSubject(subject),
        ]);

        setTasks(tasksData);
        setSubjectData(subjectInfo);

        if (tasksData.length > 0) {
          setCurrentTask(tasksData[0]);

          // Check which tasks are already completed
          const completedSet = new Set();
          for (const task of tasksData) {
            const isCompleted = await hasUserCompletedTask(user.uid, task.id);
            if (isCompleted) {
              completedSet.add(task.id);
            }
          }
          setCompletedTasks(completedSet);
        }
      } catch (err) {
        console.error("Error loading tasks:", err);
        setError("Nepodařilo se načíst úkoly");
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, [user, subject]);

  useEffect(() => {
    if (tasks.length > 0 && currentTaskIndex < tasks.length) {
      setCurrentTask(tasks[currentTaskIndex]);
      setUserAnswer("");
      setSelectedOption("");
      setShowResults(false);
      setResults(null);
      setTaskCompleted(completedTasks.has(tasks[currentTaskIndex]?.id));
    }
  }, [currentTaskIndex, tasks, completedTasks]);

  const handleSubmitAnswer = async () => {
    if (!currentTask || !user) return;

    const answer =
      currentTask.type === "multiple-choice" ? selectedOption : userAnswer;
    if (!answer.trim()) {
      toast.error("Prosím zadej odpověď");
      return;
    }

    setIsSubmitting(true);

    try {
      const isCorrect =
        answer.toLowerCase().trim() ===
        currentTask.correctAnswer.toLowerCase().trim();
      const result = await completeTask(
        user.uid,
        currentTask.id,
        answer,
        isCorrect
      );

      setResults(result);
      setShowResults(true);

      if (isCorrect) {
        setCompletedTasks((prev) => new Set([...prev, currentTask.id]));
        setTaskCompleted(true);

        // Show success message with rewards
        toast.success(
          `Správně! Získal jsi ${result.totalNewXP} XP a ${result.totalNewCoins} coinů!`,
          { autoClose: 5000 }
        );

        // Show achievements if any
        if (result.newAchievements && result.newAchievements.length > 0) {
          result.newAchievements.forEach((achievement) => {
            toast.success(`🏆 Nový achievement: ${achievement.name}!`, {
              autoClose: 7000,
            });
          });
        }
      } else {
        toast.error("Nesprávná odpověď. Zkus to znovu!");
      }
    } catch (err) {
      console.error("Error submitting answer:", err);
      toast.error("Chyba při odesílání odpovědi");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextTask = () => {
    if (currentTaskIndex < tasks.length - 1) {
      setCurrentTaskIndex(currentTaskIndex + 1);
    }
  };

  const handlePrevTask = () => {
    if (currentTaskIndex > 0) {
      setCurrentTaskIndex(currentTaskIndex - 1);
    }
  };

  const handleRetryTask = () => {
    setShowResults(false);
    setResults(null);
    setUserAnswer("");
    setSelectedOption("");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Chyba</h2>
          <p className="text-gray-600">{error}</p>
          <button
            onClick={() => navigate("/home")}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Zpět na domovskou stránku
          </button>
        </div>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Žádné úkoly</h2>
          <p className="text-gray-600 mb-4">
            Pro tento předmět zatím nejsou k dispozici žádné úkoly.
          </p>
          <button
            onClick={() => navigate("/home")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Zpět na domovskou stránku
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <button
                onClick={() => navigate("/home")}
                className="mr-4 p-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {subjectData?.icon} {subjectData?.name}
                </h1>
                <p className="text-gray-600">{subjectData?.description}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Úkol</p>
              <p className="text-xl font-bold text-blue-600">
                {currentTaskIndex + 1} / {tasks.length}
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentTaskIndex + 1) / tasks.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Task Content */}
        {currentTask && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            {taskCompleted && (
              <div className="mb-4 p-3 bg-green-100 border border-green-300 rounded-lg flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-green-800 font-medium">
                  Tento úkol jsi už úspěšně dokončil!
                </span>
              </div>
            )}

            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {currentTask.question}
            </h2>

            {!showResults ? (
              <div>
                {currentTask.type === "multiple-choice" ? (
                  <div className="space-y-3">
                    {currentTask.options.map((option, index) => (
                      <label
                        key={index}
                        className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                          selectedOption === option
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <input
                          type="radio"
                          name="option"
                          value={option}
                          checked={selectedOption === option}
                          onChange={(e) => setSelectedOption(e.target.value)}
                          className="mr-3 text-blue-600"
                        />
                        <span className="text-gray-900">{option}</span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <div>
                    <input
                      type="text"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="Zadej svou odpověď..."
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleSubmitAnswer()
                      }
                    />
                  </div>
                )}

                <div className="flex justify-center mt-6">
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={
                      isSubmitting || (!selectedOption && !userAnswer.trim())
                    }
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
                  >
                    {isSubmitting ? "Odesílám..." : "Odpovědět"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center">
                {results && results.success && results.taskReward ? (
                  <div>
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="h-16 w-16 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-600 mb-4">
                      Správně! 🎉
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Správná odpověď:{" "}
                      <strong>{currentTask.correctAnswer}</strong>
                    </p>

                    {/* Rewards */}
                    <div className="flex justify-center space-x-6 mb-6">
                      <div className="flex items-center bg-yellow-100 px-4 py-2 rounded-full">
                        <Zap className="h-5 w-5 text-yellow-600 mr-2" />
                        <span className="font-semibold text-yellow-800">
                          +{results.totalNewXP} XP
                        </span>
                      </div>
                      <div className="flex items-center bg-green-100 px-4 py-2 rounded-full">
                        <Coins className="h-5 w-5 text-green-600 mr-2" />
                        <span className="font-semibold text-green-800">
                          +{results.totalNewCoins} coinů
                        </span>
                      </div>
                    </div>

                    {/* New Achievements */}
                    {results.newAchievements &&
                      results.newAchievements.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            Nové achievementy! 🏆
                          </h4>
                          <div className="space-y-2">
                            {results.newAchievements.map((achievement) => (
                              <div
                                key={achievement.id}
                                className="bg-gradient-to-r from-yellow-100 to-orange-100 p-3 rounded-lg"
                              >
                                <div className="flex items-center justify-center">
                                  <Trophy className="h-5 w-5 text-yellow-600 mr-2" />
                                  <span className="font-semibold text-gray-900">
                                    {achievement.name}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">
                                  {achievement.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-center mb-4">
                      <XCircle className="h-16 w-16 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-600 mb-4">
                      Nesprávně
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Správná odpověď:{" "}
                      <strong>{currentTask.correctAnswer}</strong>
                    </p>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="flex justify-center space-x-4">
                  {!taskCompleted && (
                    <button
                      onClick={handleRetryTask}
                      className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700"
                    >
                      Zkusit znovu
                    </button>
                  )}
                  {currentTaskIndex < tasks.length - 1 && (
                    <button
                      onClick={handleNextTask}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center"
                    >
                      Další úkol
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevTask}
            disabled={currentTaskIndex === 0}
            className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Předchozí
          </button>

          <button
            onClick={handleNextTask}
            disabled={currentTaskIndex === tasks.length - 1}
            className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Další
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskComponent;
