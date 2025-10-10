import React, { useState } from "react";
import { Plus, Save, X, AlertCircle, CheckCircle } from "lucide-react";
import { cloudFunctionsService } from "../services/cloudFunctions";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import { toast } from "react-toastify";

const TaskCreator = ({ onTaskCreated, onClose }) => {
  const { user } = useFirebaseAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
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

  const taskTypes = [
    { value: "multipleChoice", label: "Výběr z možností", icon: "📝" },
    { value: "written", label: "Psaná odpověď", icon: "✍️" },
    { value: "multiAnswer", label: "Více správných odpovědí", icon: "✅" },
  ];

  const difficulties = [
    {
      value: "easy",
      label: "Snadná",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      value: "medium",
      label: "Střední",
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
    { value: "hard", label: "Těžká", color: "text-red-600", bg: "bg-red-100" },
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

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Název úlohy je povinný");
      return false;
    }
    if (!formData.description.trim()) {
      toast.error("Popis úlohy je povinný");
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
      if (formData.options.filter((opt) => opt.trim()).length < 2) {
        toast.error("Musíte zadat alespoň 2 možnosti");
        return false;
      }
    } else if (formData.type === "written") {
      if (!formData.correctAnswer.trim()) {
        toast.error("Správná odpověď je povinná");
        return false;
      }
    } else if (formData.type === "multiAnswer") {
      if (formData.correctAnswers.filter((ans) => ans.trim()).length < 1) {
        toast.error("Musíte zadat alespoň jednu správnou odpověď");
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

      // Add type-specific fields
      if (formData.type === "multipleChoice") {
        taskData.correctAnswer = formData.correctAnswer.trim();
        taskData.options = formData.options
          .filter((opt) => opt.trim())
          .map((opt) => opt.trim());
      } else if (formData.type === "written") {
        taskData.correctAnswer = formData.correctAnswer.trim();
      } else if (formData.type === "multiAnswer") {
        taskData.correctAnswers = formData.correctAnswers
          .filter((ans) => ans.trim())
          .map((ans) => ans.trim());
        if (formData.options.some((opt) => opt.trim())) {
          taskData.options = formData.options
            .filter((opt) => opt.trim())
            .map((opt) => opt.trim());
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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
          <Plus className="mr-2" />
          Vytvořit novou úlohu
        </h2>
        {onClose && (
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Název úlohy *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Zadejte název úlohy..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Předmět
            </label>
            <select
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Vyberte předmět</option>
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
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Popis úlohy *
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="Popište, co má student udělat..."
            required
          />
        </div>

        {/* Type and Difficulty */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Typ úlohy *
            </label>
            <select
              value={formData.type}
              onChange={(e) => handleInputChange("type", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              {taskTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.icon} {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Obtížnost *
            </label>
            <select
              value={formData.difficulty}
              onChange={(e) => handleInputChange("difficulty", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              {difficulties.map((diff) => (
                <option key={diff.value} value={diff.value}>
                  {diff.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              XP body *
            </label>
            <input
              type="number"
              min="1"
              max="100"
              value={formData.xp}
              onChange={(e) => handleInputChange("xp", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>

        {/* Type-specific fields */}
        {formData.type === "multipleChoice" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Správná odpověď *
              </label>
              <input
                type="text"
                value={formData.correctAnswer}
                onChange={(e) =>
                  handleInputChange("correctAnswer", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Zadejte správnou odpověď..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Možnosti odpovědí *
              </label>
              {formData.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) =>
                      handleArrayChange("options", index, e.target.value)
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder={`Možnost ${index + 1}...`}
                  />
                  {formData.options.length > 2 && (
                    <button
                      type="button"
                      onClick={() => removeArrayItem("options", index)}
                      className="p-2 text-red-500 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem("options")}
                className="mt-2 px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Přidat možnost
              </button>
            </div>
          </div>
        )}

        {formData.type === "written" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Správná odpověď *
            </label>
            <input
              type="text"
              value={formData.correctAnswer}
              onChange={(e) =>
                handleInputChange("correctAnswer", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Zadejte správnou odpověď..."
            />
          </div>
        )}

        {formData.type === "multiAnswer" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Správné odpovědi *
            </label>
            {formData.correctAnswers.map((answer, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  value={answer}
                  onChange={(e) =>
                    handleArrayChange("correctAnswers", index, e.target.value)
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder={`Správná odpověď ${index + 1}...`}
                />
                {formData.correctAnswers.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem("correctAnswers", index)}
                    className="p-2 text-red-500 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem("correctAnswers")}
              className="mt-2 px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Přidat správnou odpověď
            </button>
          </div>
        )}

        {/* Explanation */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Vysvětlení *
          </label>
          <textarea
            value={formData.explanation}
            onChange={(e) => handleInputChange("explanation", e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="Vysvětlete správnou odpověď..."
            required
          />
        </div>

        {/* Hints */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Nápovědy (volitelné)
          </label>
          {formData.hints.map((hint, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                value={hint}
                onChange={(e) =>
                  handleArrayChange("hints", index, e.target.value)
                }
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder={`Nápověda ${index + 1}...`}
              />
              {formData.hints.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayItem("hints", index)}
                  className="p-2 text-red-500 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem("hints")}
            className="mt-2 px-4 py-2 text-sm bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Přidat nápovědu
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700">
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Zrušit
            </button>
          )}
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Vytvářím...
              </>
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" />
                Vytvořit úlohu
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskCreator;
