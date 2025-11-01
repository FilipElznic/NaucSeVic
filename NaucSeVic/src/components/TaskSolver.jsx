import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  HelpCircle,
  Award,
  Coins,
  RotateCcw,
} from "lucide-react";
import { cloudFunctionsService } from "../services/cloudFunctions";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import { toast } from "react-toastify";

const TaskSolver = ({ task, onComplete, onClose }) => {
  const { user } = useFirebaseAuth();
  const [userAnswer, setUserAnswer] = useState("");
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);

  useEffect(() => {
    // Reset state when task changes
    setUserAnswer("");
    setSelectedAnswers([]);
    setSubmitted(false);
    setResult(null);
    setShowHint(false);
    setCurrentHintIndex(0);
  }, [task]);

  const handleMultipleChoiceAnswer = (answer) => {
    setUserAnswer(answer);
  };

  const handleMultiAnswerToggle = (answer) => {
    setSelectedAnswers((prev) => {
      if (prev.includes(answer)) {
        return prev.filter((a) => a !== answer);
      } else {
        return [...prev, answer];
      }
    });
  };

  const handleSubmit = async () => {
    if (!user) {
      toast.error("Musíte být přihlášeni");
      return;
    }

    let answer;
    if (task.type === "multipleChoice" || task.type === "written") {
      if (!userAnswer.trim()) {
        toast.error("Prosím zadejte odpověď");
        return;
      }
      answer = userAnswer.trim();
    } else if (task.type === "multiAnswer") {
      if (selectedAnswers.length === 0) {
        toast.error("Prosím vyberte alespoň jednu odpověď");
        return;
      }
      answer = selectedAnswers;
    }

    setLoading(true);

    // Test toast to verify toasts are working
    toast.info("Odesílám odpověď...", { autoClose: 1000 });

    try {
      const response = await cloudFunctionsService.submitTaskAnswer(
        task.id,
        answer
      );

      console.log("Full response from backend:", response);
      console.log("Response type:", typeof response);
      console.log("Response keys:", response ? Object.keys(response) : "null");
      console.log("isCorrect value:", response?.isCorrect);
      console.log("xpEarned value:", response?.xpEarned);

      // Check if response has the expected structure
      if (!response || typeof response !== "object") {
        console.error("Invalid response structure:", response);
        toast.error("Neplatná odpověď ze serveru");
        setLoading(false);
        return;
      }

      setResult({
        correct: response.isCorrect || false,
        xpAwarded: response.xpEarned || 0,
        coinsAwarded: response.coinsEarned || 0,
        explanation: response.explanation || task.explanation,
        correctAnswer: response.correctAnswer,
      });
      setSubmitted(true);

      console.log("About to show toast, isCorrect:", response.isCorrect);

      if (response.isCorrect) {
        console.log("Showing SUCCESS toast");
        toast.success(
          `🎉 Správně! +${response.xpEarned || 0} XP, +${
            response.coinsEarned || 0
          } mincí`,
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
      } else {
        console.log("Showing ERROR toast");
        toast.error("❌ Nesprávná odpověď. Zkuste to znovu!", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
      toast.error(`Chyba při odesílání odpovědi: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleTryAgain = () => {
    setUserAnswer("");
    setSelectedAnswers([]);
    setSubmitted(false);
    setResult(null);
    setShowHint(false);
    setCurrentHintIndex(0);
  };

  const showNextHint = () => {
    if (task.hints && currentHintIndex < task.hints.length - 1) {
      setCurrentHintIndex((prev) => prev + 1);
    }
    setShowHint(true);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "text-green-600 bg-green-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "hard":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getDifficultyLabel = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "Snadná";
      case "medium":
        return "Střední";
      case "hard":
        return "Těžká";
      default:
        return difficulty;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="text-3xl mr-4">
            {task.type === "multipleChoice"
              ? "📝"
              : task.type === "written"
              ? "✍️"
              : task.type === "multiAnswer"
              ? "✅"
              : "❓"}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {task.name}
            </h2>
            <div className="flex items-center space-x-4 mt-2">
              <span
                className={`px-3 py-1 text-sm rounded-full ${getDifficultyColor(
                  task.difficulty
                )}`}
              >
                {getDifficultyLabel(task.difficulty)}
              </span>
              <span className="flex items-center text-sm text-yellow-600">
                <Award className="w-4 h-4 mr-1" />
                {task.xp} XP
              </span>
              {task.subject && (
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded">
                  {task.subject}
                </span>
              )}
            </div>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            <XCircle className="w-6 h-6" />
          </button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Zadání úlohy
          </h3>
          <p className="text-gray-600 dark:text-gray-300 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            {task.description}
          </p>
        </div>

        {!submitted && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Vaše odpověď
            </h3>

            {task.type === "multipleChoice" && task.options && (
              <div className="space-y-3">
                {task.options.map((option, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                      userAnswer === option
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900"
                        : "border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    <input
                      type="radio"
                      name="answer"
                      value={option}
                      checked={userAnswer === option}
                      onChange={(e) =>
                        handleMultipleChoiceAnswer(e.target.value)
                      }
                      className="mr-3"
                    />
                    <span className="font-medium mr-3 text-gray-600 dark:text-gray-300">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className="text-gray-900 dark:text-white">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            )}

            {task.type === "written" && (
              <div>
                <textarea
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Napište svou odpověď zde..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            )}

            {task.type === "multiAnswer" && (
              <div className="space-y-3">
                {task.options && task.options.length > 0 ? (
                  task.options.map((option, index) => (
                    <label
                      key={index}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedAnswers.includes(option)
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-900"
                          : "border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedAnswers.includes(option)}
                        onChange={() => handleMultiAnswerToggle(option)}
                        className="mr-3 w-4 h-4"
                      />
                      <span className="text-gray-900 dark:text-white">
                        {option}
                      </span>
                    </label>
                  ))
                ) : (
                  <div className="text-red-500 dark:text-red-400 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    ⚠️ Chyba: Úloha nemá definované možnosti odpovědí
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {submitted && result && (
          <div
            className={`p-6 rounded-lg ${
              result.correct
                ? "bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800"
                : "bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-800"
            }`}
          >
            <div className="flex items-center mb-4">
              {result.correct ? (
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />
              ) : (
                <XCircle className="w-8 h-8 text-red-600 dark:text-red-400 mr-3" />
              )}
              <div>
                <h3
                  className={`text-xl font-bold ${
                    result.correct
                      ? "text-green-800 dark:text-green-200"
                      : "text-red-800 dark:text-red-200"
                  }`}
                >
                  {result.correct ? "Správná odpověď!" : "Nesprávná odpověď"}
                </h3>
                {result.correct && (
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="flex items-center text-yellow-600">
                      <Award className="w-5 h-5 mr-1" />+{result.xpAwarded} XP
                    </span>
                    <span className="flex items-center text-yellow-600">
                      <Coins className="w-5 h-5 mr-1" />+{result.coinsAwarded}{" "}
                      mincí
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Vysvětlení:
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                {task.explanation}
              </p>
            </div>

            {!result.correct && (
              <button
                onClick={handleTryAgain}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Zkusit znovu
              </button>
            )}

            {result.correct && onComplete && (
              <button
                onClick={() => onComplete(result)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Pokračovat
              </button>
            )}
          </div>
        )}

        {!submitted && (
          <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-3">
              {task.hints && task.hints.length > 0 && (
                <button
                  onClick={showNextHint}
                  disabled={
                    showHint && currentHintIndex >= task.hints.length - 1
                  }
                  className="px-4 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-50 dark:hover:bg-blue-900 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  {showHint ? "Další nápověda" : "Zobrazit nápovědu"}
                  {task.hints.length > 1 &&
                    ` (${Math.min(currentHintIndex + 1, task.hints.length)}/${
                      task.hints.length
                    })`}
                </button>
              )}
            </div>

            <button
              onClick={handleSubmit}
              disabled={
                loading ||
                (task.type === "written" && !userAnswer.trim()) ||
                (task.type === "multipleChoice" && !userAnswer) ||
                (task.type === "multiAnswer" && selectedAnswers.length === 0)
              }
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Odesílám...
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Odeslat odpověď
                </>
              )}
            </button>
          </div>
        )}

        {showHint && task.hints && task.hints[currentHintIndex] && (
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded-lg">
            <div className="flex items-center mb-2">
              <HelpCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2" />
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">
                Nápověda {currentHintIndex + 1}:
              </h4>
            </div>
            <p className="text-yellow-700 dark:text-yellow-300">
              {task.hints[currentHintIndex]}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskSolver;
