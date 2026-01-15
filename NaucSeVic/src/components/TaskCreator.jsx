import React, { useState } from "react";
import { Plus, Save, X, AlertCircle, CheckCircle, Shield } from "lucide-react";
import { cloudFunctionsService } from "../services/cloudFunctions";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import { useAdminCheck } from "../hooks/useAdminCheck";
import { toast } from "react-toastify";
import LoadingSpinner from "./ui/LoadingSpinner";

const TaskCreator = ({ onTaskCreated, onClose }) => {
  const { user } = useFirebaseAuth();
  const { isAdmin, loading: adminLoading } = useAdminCheck();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "multipleChoice",
    difficulty: "zakladni_1",
    subject: "",
    xp: 10,
    explanation: "",
    hints: [""],
    correctAnswer: "",
    correctAnswers: [""],
    options: ["", "", "", ""],
  });

  const taskTypes = [
    { value: "multipleChoice", label: "Výběr z možností", icon: "📝" },
    { value: "written", label: "Psaná odpověď", icon: "✍️" },
    { value: "multiAnswer", label: "Více správných odpovědí", icon: "✅" },
  ];

  const difficulties = [
    {
      value: "zakladni_1",
      label: "Základní 1. stupeň",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      value: "zakladni_2",
      label: "Základní 2. stupeň",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      value: "stredni",
      label: "Střední škola",
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
    {
      value: "vysoka",
      label: "Vysoká škola",
      color: "text-red-600",
      bg: "bg-red-100",
    },
  ];

  const subjects = [
    "Matematika",
    "Čeština",
    "Angličtina",
    "Fyzika",
    "Chemie",
    "Biologie",
    "Dějepis",
    "Zeměpis",
    "Informatika",
    "Ostatní",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleArrayChange = (field, index, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const addArrayItem = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeArrayItem = (field, index) => {
    if (formData[field].length > 1) {
      setFormData((prev) => ({
        ...prev,
        [field]: prev[field].filter((_, i) => i !== index),
      }));
    }
  };

  // Helper funkce pro automatické přidání správné odpovědi do možností
  const ensureCorrectAnswerInOptions = () => {
    if (formData.type === "multipleChoice") {
      const validOptions = formData.options.filter((opt) => opt.trim());
      const correctAnswer = formData.correctAnswer.trim();

      if (
        correctAnswer &&
        !validOptions.some(
          (option) =>
            option.trim().toLowerCase() === correctAnswer.toLowerCase()
        )
      ) {
        // Najdi první prázdnou pozici nebo přidej na konec
        const newOptions = [...formData.options];
        const emptyIndex = newOptions.findIndex((opt) => !opt.trim());

        if (emptyIndex !== -1) {
          newOptions[emptyIndex] = correctAnswer;
        } else {
          newOptions.push(correctAnswer);
        }

        setFormData((prev) => ({ ...prev, options: newOptions }));
        toast.info("Správná odpověď byla automaticky přidána mezi možnosti");
      }
    } else if (formData.type === "multiAnswer") {
      const validOptions = formData.options.filter((opt) => opt.trim());
      const validCorrectAnswers = formData.correctAnswers.filter((ans) =>
        ans.trim()
      );

      if (validOptions.length > 0 && validCorrectAnswers.length > 0) {
        const missingAnswers = validCorrectAnswers.filter(
          (correctAnswer) =>
            !validOptions.some(
              (option) =>
                option.trim().toLowerCase() ===
                correctAnswer.trim().toLowerCase()
            )
        );

        if (missingAnswers.length > 0) {
          const newOptions = [...formData.options];

          missingAnswers.forEach((missing) => {
            const emptyIndex = newOptions.findIndex((opt) => !opt.trim());
            if (emptyIndex !== -1) {
              newOptions[emptyIndex] = missing;
            } else {
              newOptions.push(missing);
            }
          });

          setFormData((prev) => ({ ...prev, options: newOptions }));
          toast.info(
            `Správné odpovědi byly automaticky přidány mezi možnosti: ${missingAnswers.join(
              ", "
            )}`
          );
        }
      }
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Název úlohy je povinný");
      return false;
    }
    if (!formData.description.trim()) {
      toast.error("Popis úlohy je povinný");
      return false;
    }
    if (!formData.subject.trim()) {
      toast.error("Předmět je povinný");
      return false;
    }
    if (!formData.explanation.trim()) {
      toast.error("Vysvětlení je povinné");
      return false;
    }

    if (formData.type === "multipleChoice") {
      if (!formData.correctAnswer.trim()) {
        toast.error("Správná odpověď je povinná");
        return false;
      }

      const validOptions = formData.options.filter((opt) => opt.trim());
      if (validOptions.length < 2) {
        toast.error("Musíte zadat alespoň 2 možnosti");
        return false;
      }

      // Kontrola, že správná odpověď je mezi možnostmi
      const correctAnswerExists = validOptions.some(
        (option) =>
          option.trim().toLowerCase() ===
          formData.correctAnswer.trim().toLowerCase()
      );
      if (!correctAnswerExists) {
        toast.error("Správná odpověď musí být jednou z nabízených možností");
        return false;
      }
    } else if (formData.type === "written") {
      if (!formData.correctAnswer.trim()) {
        toast.error("Správná odpověď je povinná");
        return false;
      }
    } else if (formData.type === "multiAnswer") {
      const validCorrectAnswers = formData.correctAnswers.filter((ans) =>
        ans.trim()
      );
      if (validCorrectAnswers.length < 1) {
        toast.error("Musíte zadat alespoň jednu správnou odpověď");
        return false;
      }

      const validOptions = formData.options.filter((opt) => opt.trim());
      if (validOptions.length < 2) {
        toast.error("Musíte zadat alespoň 2 možnosti odpovědí");
        return false;
      }

      // Kontrola, že všechny správné odpovědi jsou mezi možnostmi
      const allCorrectAnswersInOptions = validCorrectAnswers.every(
        (correctAnswer) =>
          validOptions.some(
            (option) =>
              option.trim().toLowerCase() === correctAnswer.trim().toLowerCase()
          )
      );
      if (!allCorrectAnswersInOptions) {
        toast.error(
          "Všechny správné odpovědi musí být mezi nabízenými možnostmi"
        );
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Musíte být přihlášeni pro vytvoření úlohy");
      return;
    }

    // Automaticky přidej správnou odpověď do možností, pokud tam chybí
    ensureCorrectAnswerInOptions();

    if (!validateForm()) return;

    setLoading(true);
    try {
      const taskData = {
        name: formData.name.trim(),
        description: formData.description.trim(),
        type: formData.type,
        difficulty: formData.difficulty,
        subject: formData.subject.trim(),
        xp: parseInt(formData.xp),
        explanation: formData.explanation.trim(),
        hints: formData.hints
          .filter((hint) => hint.trim())
          .map((hint) => hint.trim()),
      };

      // Add type-specific fields with validation
      if (formData.type === "multipleChoice") {
        taskData.correctAnswer = formData.correctAnswer.trim();
        taskData.options = formData.options
          .filter((opt) => opt.trim())
          .map((opt) => opt.trim());

        // Final validation: correct answer must be in options
        if (!taskData.options.includes(taskData.correctAnswer)) {
          toast.error("Kritická chyba: Správná odpověď není v možnostech");
          setLoading(false);
          return;
        }
      } else if (formData.type === "written") {
        taskData.correctAnswer = formData.correctAnswer.trim();
      } else if (formData.type === "multiAnswer") {
        taskData.correctAnswers = formData.correctAnswers
          .filter((ans) => ans.trim())
          .map((ans) => ans.trim());
        taskData.options = formData.options
          .filter((opt) => opt.trim())
          .map((opt) => opt.trim());

        // Final validation: options must be provided
        if (taskData.options.length < 2) {
          toast.error("Kritická chyba: Musíte zadat alespoň 2 možnosti");
          setLoading(false);
          return;
        }

        // Final validation: all correct answers must be in options
        const missingAnswers = taskData.correctAnswers.filter(
          (correctAnswer) => !taskData.options.includes(correctAnswer)
        );
        if (missingAnswers.length > 0) {
          toast.error(
            `Kritická chyba: Správné odpovědi nejsou v možnostech: ${missingAnswers.join(
              ", "
            )}`
          );
          setLoading(false);
          return;
        }
      }

      const result = await cloudFunctionsService.createEducationalTask(
        taskData
      );

      toast.success("Úloha byla úspěšně vytvořena!");
      if (onTaskCreated) {
        onTaskCreated(result);
      }

      // Reset form
      setFormData({
        name: "",
        description: "",
        type: "multipleChoice",
        difficulty: "easy",
        subject: "",
        xp: 10,
        explanation: "",
        hints: [""],
        correctAnswer: "",
        correctAnswers: [""],
        options: ["", "", "", ""],
      });
    } catch (error) {
      console.error("Error creating task:", error);
      toast.error(error.message || "Chyba při vytváření úlohy");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-zinc-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-lg mr-3">
                <Plus className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Vytvořit novou úlohu
                </h2>
                {isAdmin && (
                  <div className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    <Shield className="w-3 h-3 mr-1" />
                    Admin
                  </div>
                )}
                {adminLoading && (
                  <div className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
                    Ověřuji oprávnění...
                  </div>
                )}
              </div>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
                  Název úlohy *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:text-white"
                  placeholder="Zadejte název úlohy..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
                  Předmět *
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:text-white ${
                    !formData.subject.trim()
                      ? "border-red-300 dark:border-red-600"
                      : "border-gray-300 dark:border-zinc-600"
                  }`}
                  required
                >
                  <option value="">Vyberte předmět *</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
                Popis úlohy *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:text-white"
                placeholder="Popište, co má student udělat..."
                required
              />
            </div>

            {/* Type and Difficulty */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
                  Typ úlohy *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => handleInputChange("type", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:text-white"
                >
                  {taskTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.icon} {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
                  Obtížnost *
                </label>
                <select
                  value={formData.difficulty}
                  onChange={(e) =>
                    handleInputChange("difficulty", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:text-white"
                >
                  {difficulties.map((diff) => (
                    <option key={diff.value} value={diff.value}>
                      {diff.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
                  XP body *
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={formData.xp}
                  onChange={(e) => handleInputChange("xp", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:text-white"
                />
              </div>
            </div>

            {/* Type-specific fields */}
            {formData.type === "multipleChoice" && (
              <div className="space-y-4 p-4 bg-gray-50 dark:bg-zinc-700 rounded-lg border border-gray-200 dark:border-zinc-600">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  📝 Výběr z možností
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
                    Správná odpověď *
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={formData.correctAnswer}
                      onChange={(e) =>
                        handleInputChange("correctAnswer", e.target.value)
                      }
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:text-white"
                      placeholder="Zadejte správnou odpověď..."
                    />
                    <button
                      type="button"
                      onClick={ensureCorrectAnswerInOptions}
                      className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                      title="Přidat správnou odpověď do možností"
                    >
                      ✓ Přidat
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-4">
                    Možnosti odpovědí *
                  </label>
                  <div className="space-y-2">
                    {formData.options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded text-sm flex items-center justify-center font-medium">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <input
                          type="text"
                          value={option}
                          onChange={(e) =>
                            handleArrayChange("options", index, e.target.value)
                          }
                          className="flex-1 px-3 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:text-white"
                          placeholder={`Možnost ${String.fromCharCode(
                            65 + index
                          )}...`}
                        />
                        {formData.options.length > 2 && (
                          <button
                            type="button"
                            onClick={() => removeArrayItem("options", index)}
                            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => addArrayItem("options")}
                    className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm"
                  >
                    + Přidat možnost
                  </button>
                </div>
              </div>
            )}

            {formData.type === "written" && (
              <div className="p-4 bg-gray-50 dark:bg-zinc-700 rounded-lg border border-gray-200 dark:border-zinc-600">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  ✍️ Psaná odpověď
                </h3>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
                  Správná odpověď *
                </label>
                <input
                  type="text"
                  value={formData.correctAnswer}
                  onChange={(e) =>
                    handleInputChange("correctAnswer", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:text-white"
                  placeholder="Zadejte správnou odpověď..."
                />
              </div>
            )}

            {formData.type === "multiAnswer" && (
              <div className="p-4 bg-gray-50 dark:bg-zinc-700 rounded-lg border border-gray-200 dark:border-zinc-600">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  ✅ Více správných odpovědí
                </h3>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-4">
                  Správné odpovědi *
                </label>
                <div className="space-y-2">
                  {formData.correctAnswers.map((answer, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded text-sm flex items-center justify-center font-medium">
                        {index + 1}
                      </span>
                      <input
                        type="text"
                        value={answer}
                        onChange={(e) =>
                          handleArrayChange(
                            "correctAnswers",
                            index,
                            e.target.value
                          )
                        }
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:text-white"
                        placeholder={`Správná odpověď ${index + 1}...`}
                      />
                      {formData.correctAnswers.length > 1 && (
                        <button
                          type="button"
                          onClick={() =>
                            removeArrayItem("correctAnswers", index)
                          }
                          className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => addArrayItem("correctAnswers")}
                  className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm"
                >
                  + Přidat správnou odpověď
                </button>

                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2 mt-6">
                  Možnosti odpovědí (všechny možnosti včetně nesprávných) *
                </label>
                <div className="space-y-2">
                  {formData.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="flex-shrink-0 w-6 h-6 bg-gray-500 text-white rounded text-sm flex items-center justify-center font-medium">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <input
                        type="text"
                        value={option}
                        onChange={(e) =>
                          handleArrayChange("options", index, e.target.value)
                        }
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:text-white"
                        placeholder={`Možnost ${String.fromCharCode(
                          65 + index
                        )}...`}
                      />
                      {formData.options.length > 2 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem("options", index)}
                          className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => addArrayItem("options")}
                  className="mt-3 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-sm"
                >
                  + Přidat možnost
                </button>
              </div>
            )}

            {/* Explanation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
                Vysvětlení *
              </label>
              <textarea
                value={formData.explanation}
                onChange={(e) =>
                  handleInputChange("explanation", e.target.value)
                }
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:text-white"
                placeholder="Vysvětlete správnou odpověď..."
                required
              />
            </div>

            {/* Hints */}
            <div className="p-4 bg-gray-50 dark:bg-zinc-700 rounded-lg border border-gray-200 dark:border-zinc-600">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                💡 Nápovědy (volitelné)
              </h3>
              <div className="space-y-2">
                {formData.hints.map((hint, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-yellow-500 text-white rounded text-sm flex items-center justify-center font-medium">
                      {index + 1}
                    </span>
                    <input
                      type="text"
                      value={hint}
                      onChange={(e) =>
                        handleArrayChange("hints", index, e.target.value)
                      }
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:text-white"
                      placeholder={`Nápověda ${index + 1}...`}
                    />
                    {formData.hints.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem("hints", index)}
                        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => addArrayItem("hints")}
                className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 text-sm"
              >
                + Přidat nápovědu
              </button>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-end space-x-3 pt-6 border-t border-gray-200 dark:border-zinc-700">
              {onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 text-gray-600 dark:text-zinc-300 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-600 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
                >
                  Zrušit
                </button>
              )}
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center transition-colors"
              >
                {loading ? (
                  <>
                    <LoadingSpinner size="sm" className="border-white mr-3" />
                    Vytvářím...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5 mr-3" />
                    Vytvořit úlohu
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskCreator;
