import React, { useState } from "react";
import { httpsCallable } from "firebase/functions";
import { functions } from "../../config/firebase";
import { Loader2, CheckCircle, XCircle, Trophy } from "lucide-react";

const QuizComponent = ({ tasks, lessonId }) => {
  const [userAnswers, setUserAnswers] = useState({}); // { 0: 1, 1: 3 } (questionIndex: optionIndex)
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSelect = (questionIndex, optionIndex) => {
    if (result) return; // Disable changing after submit
    setUserAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);

    try {
      const submitQuiz = httpsCallable(functions, "submitQuiz");

      // Convert object to array for backend [1, 3, 0, ...]
      const answersArray = tasks.map((_, index) => userAnswers[index] ?? -1);

      const response = await submitQuiz({
        lessonId: lessonId,
        userAnswers: answersArray,
      });

      setResult(response.data);
    } catch (err) {
      console.error(err);
      setError("Nepodařilo se odeslat test. Zkuste to prosím znovu.");
    } finally {
      setSubmitting(false);
    }
  };

  const allAnswered =
    tasks.length > 0 && Object.keys(userAnswers).length === tasks.length;

  if (result) {
    return (
      <div className="bg-white dark:bg-zinc-900 rounded-xl p-8 border border-gray-200 dark:border-zinc-800 text-center">
        <div className="mb-6">
          {result.passed ? (
            <div className="inline-flex p-4 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
              <Trophy className="w-12 h-12 text-green-600 dark:text-green-400" />
            </div>
          ) : (
            <div className="inline-flex p-4 rounded-full bg-red-100 dark:bg-red-900/30 mb-4">
              <XCircle className="w-12 h-12 text-red-600 dark:text-red-400" />
            </div>
          )}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {result.passed ? "Gratulujeme!" : "Zkuste to znovu"}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Získal jsi {result.correctCount} z {result.total} bodů (
            {Math.round(result.score)}%)
          </p>
          {result.xpGained > 0 && (
            <div className="mt-4 inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg font-bold">
              +{result.xpGained} XP
            </div>
          )}
        </div>

        {/* Show corrections */}
        <div className="text-left space-y-4 mt-8">
          {tasks.map((task, index) => {
            const correction = result.corrections[index];
            return (
              <div
                key={task.id}
                className={`p-4 rounded-lg border ${
                  correction.isCorrect
                    ? "border-green-200 bg-green-50"
                    : "border-red-200 bg-red-50"
                }`}
              >
                <p className="font-medium mb-2">{task.question}</p>
                <p className="text-sm">
                  Vaše odpověď:{" "}
                  <strong>{task.options[userAnswers[index]]}</strong>
                  {!correction.isCorrect && (
                    <span className="ml-2 text-green-700">
                      (Správně: {task.options[correction.correctAnswer]})
                    </span>
                  )}
                </p>
              </div>
            );
          })}
        </div>

        {!result.passed && (
          <button
            onClick={() => setResult(null)}
            className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Zkusit znovu
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {tasks.map((task, qIndex) => (
        <div
          key={task.id}
          className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-gray-200 dark:border-zinc-800"
        >
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            {qIndex + 1}. {task.question}
          </h4>
          <div className="space-y-2">
            {task.options.map((option, oIndex) => (
              <button
                key={oIndex}
                onClick={() => handleSelect(qIndex, oIndex)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  userAnswers[qIndex] === oIndex
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-500"
                    : "border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg">{error}</div>
      )}

      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={!allAnswered || submitting}
          className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
        >
          {submitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Vyhodnocování...
            </>
          ) : (
            "Odevzdat test"
          )}
        </button>
      </div>
    </div>
  );
};

export default QuizComponent;
