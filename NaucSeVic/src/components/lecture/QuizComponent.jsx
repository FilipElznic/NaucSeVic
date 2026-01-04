import React, { useState } from "react";
import { httpsCallable } from "firebase/functions";
import { functions } from "../../config/firebase";
import { toast } from "react-toastify";
import {
  Loader2,
  CheckCircle,
  XCircle,
  Trophy,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const QuizComponent = ({ tasks, lessonId, onComplete }) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSelect = (questionIndex, optionIndex) => {
    if (result) return;
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
      const answersArray = tasks.map((_, index) => userAnswers[index] ?? -1);

      const response = await submitQuiz({
        lessonId: lessonId,
        userAnswers: answersArray,
      });

      setResult(response.data);

      if (response.data.passed) {
        if (response.data.xpGained > 0) {
          toast.success(
            `Gratulujeme! Získal jsi ${response.data.xpGained} XP!`
          );
        }
        if (onComplete) {
          onComplete();
        }
      }
    } catch (err) {
      console.error(err);
      setError("Nepodařilo se odeslat test. Zkuste to prosím znovu.");
    } finally {
      setSubmitting(false);
    }
  };

  const allAnswered =
    tasks.length > 0 && Object.keys(userAnswers).length === tasks.length;
  const progress = Math.round(
    (Object.keys(userAnswers).length / tasks.length) * 100
  );

  if (result) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-xl text-center max-w-3xl mx-auto"
      >
        <div className="mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`inline-flex p-6 rounded-full mb-6 ${
              result.passed
                ? "bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400"
                : "bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400"
            }`}
          >
            {result.passed ? (
              <Trophy className="w-16 h-16" />
            ) : (
              <XCircle className="w-16 h-16" />
            )}
          </motion.div>

          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {result.passed ? "Gratulujeme! 🎉" : "Nevadí, zkuste to znovu"}
          </h3>

          <div className="flex items-center justify-center gap-4 mt-4 text-lg">
            <span
              className={`font-bold ${
                result.passed
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {Math.round(result.score)}% úspěšnost
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 dark:text-gray-300">
              {result.correctCount} z {result.total} správně
            </span>
          </div>

          {result.xpGained > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 inline-flex items-center px-6 py-2 bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 rounded-full font-bold border border-yellow-200 dark:border-yellow-500/30"
            >
              <Trophy className="w-4 h-4 mr-2" />+{result.xpGained} XP
            </motion.div>
          )}
        </div>

        <div className="text-left space-y-4 mt-12">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Podrobný přehled:
          </h4>
          {tasks.map((task, index) => {
            const correction = result.corrections[index];
            return (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                key={task.id}
                className={`p-5 rounded-xl border transition-colors ${
                  correction.isCorrect
                    ? "border-green-200 bg-green-50/50 dark:border-green-900/50 dark:bg-green-900/10"
                    : "border-red-200 bg-red-50/50 dark:border-red-900/50 dark:bg-red-900/10"
                }`}
              >
                <div className="flex items-start gap-3">
                  {correction.isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-1 shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-1 shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                      {task.question}
                    </p>
                    <div className="text-sm space-y-1">
                      <p
                        className={
                          correction.isCorrect
                            ? "text-green-700 dark:text-green-400"
                            : "text-red-700 dark:text-red-400"
                        }
                      >
                        Vaše odpověď:{" "}
                        <span className="font-semibold">
                          {task.options[userAnswers[index]]}
                        </span>
                      </p>
                      {!correction.isCorrect && (
                        <p className="text-green-700 dark:text-green-400">
                          Správně:{" "}
                          <span className="font-semibold">
                            {task.options[correction.correctAnswer]}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {!result.passed && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setResult(null)}
            className="mt-10 px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 flex items-center justify-center mx-auto"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Zkusit znovu
          </motion.button>
        )}
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Progress Bar */}
      <div className="sticky top-4 z-10 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
          <span>Postup v testu</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <div className="space-y-6">
        {tasks.map((task, qIndex) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: qIndex * 0.1 }}
            key={task.id}
            className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex gap-4 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm shrink-0">
                {qIndex + 1}
              </span>
              <h4 className="text-xl font-medium text-gray-900 dark:text-white pt-0.5">
                {task.question}
              </h4>
            </div>

            <div className="grid gap-3 pl-0 md:pl-12">
              {task.options.map((option, oIndex) => {
                const isSelected = userAnswers[qIndex] === oIndex;
                return (
                  <motion.button
                    key={oIndex}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => handleSelect(qIndex, oIndex)}
                    className={`relative w-full text-left p-4 rounded-xl border-2 transition-all duration-200 group ${
                      isSelected
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-500 shadow-sm"
                        : "border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/50 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-white dark:hover:bg-zinc-800"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-medium ${
                          isSelected
                            ? "text-blue-700 dark:text-blue-300"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {option}
                      </span>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-blue-500"
                        >
                          <CheckCircle className="w-5 h-5" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl border border-red-100 dark:border-red-900/30 text-center"
        >
          {error}
        </motion.div>
      )}

      <div className="flex justify-end pt-4 pb-12">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          disabled={!allAnswered || submitting}
          className={`
            inline-flex items-center px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg
            ${
              !allAnswered || submitting
                ? "bg-gray-100 dark:bg-zinc-800 text-gray-400 dark:text-zinc-500 cursor-not-allowed shadow-none"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-blue-500/25"
            }
          `}
        >
          {submitting ? (
            <>
              <Loader2 className="w-6 h-6 mr-2 animate-spin" />
              Vyhodnocování...
            </>
          ) : (
            <>
              Odevzdat test
              <ArrowRight className="w-5 h-5 ml-2" />
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default QuizComponent;
