import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CharacterAssistant({
  image,
  texts = [],
  language = "cs",
  enableBlur = false,
  onStepChange,
  onHide,
  positions = [],
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const currentText = texts[currentIndex] || "";
  const currentPosition = positions[currentIndex] || "bottom-right";

  // Report step changes to parent
  useEffect(() => {
    onStepChange?.(currentIndex);
  }, [currentIndex, onStepChange]);

  // Typing animation effect
  useEffect(() => {
    if (!currentText) {
      setDisplayedText("");
      return;
    }

    setIsTyping(true);
    setDisplayedText("");
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [currentText]);

  const handleNext = () => {
    if (currentIndex < texts.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleHide = () => {
    setIsVisible(false);
    onHide?.();
  };

  if (!isVisible) return null;

  const labels = {
    cs: { hide: "Skrýt", previous: "Předchozí", next: "Další" },
    en: { hide: "Hide", previous: "Previous", next: "Next" },
  };

  const currentLabels = labels[language] || labels.cs;

  // Position mapping
  const getPositionClasses = (position) => {
    const positionMap = {
      "top-left": "top-8 left-8",
      "top-right": "top-8 right-8",
      "bottom-left": "bottom-8 left-8",
      "bottom-right": "bottom-8 right-8",
      center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    };
    return positionMap[position] || positionMap["bottom-right"];
  };

  return (
    <AnimatePresence>
      {/* Blur Background */}
      {enableBlur && (
        <motion.div
          key="blur-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={handleHide}
        />
      )}

      <motion.div
        key={`character-assistant-${currentIndex}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className={`fixed ${getPositionClasses(currentPosition)} z-50 max-w-md`}
        role="complementary"
        aria-label={language === "cs" ? "Asistent" : "Assistant"}
      >
        <div className="flex items-start gap-4">
          {/* Character Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="flex-shrink-0"
          >
            <img
              src={image}
              alt={
                language === "cs" ? "Postava asistenta" : "Assistant character"
              }
            />
          </motion.div>

          {/* Text Bubble */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="relative"
            >
              <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-slate-200 dark:border-zinc-800 shadow-xl">
                {/* Close Button */}
                <button
                  onClick={handleHide}
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-all hover:scale-110"
                  aria-label={currentLabels.hide}
                  type="button"
                >
                  <svg
                    className="w-4 h-4 text-gray-600 dark:text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Text Content */}
                <div className="pr-10 mb-4">
                  <p className="text-gray-900 dark:text-white text-lg font-medium leading-relaxed min-h-[4rem]">
                    {displayedText}
                    {isTyping && (
                      <span className="inline-block w-0.5 h-6 bg-gradient-to-b from-blue-500 to-purple-500 ml-1 animate-pulse" />
                    )}
                  </p>
                </div>

                {/* Navigation Buttons */}
                {texts.length > 1 && (
                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-500 dark:border-gray-800">
                    <button
                      onClick={handlePrevious}
                      disabled={currentIndex === 0}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-105"
                      aria-label={currentLabels.previous}
                      type="button"
                    >
                      <svg
                        className="w-5 h-5 text-gray-700 dark:text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    {/* Progress Indicator */}
                    <div className="flex gap-2">
                      {texts.map((_, index) => (
                        <div
                          key={index}
                          className={`h-2 rounded-full transition-all ${
                            index === currentIndex
                              ? "bg-gradient-to-r from-blue-500 to-purple-500 w-8"
                              : "bg-gray-300 dark:bg-gray-700 w-2"
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={handleNext}
                      disabled={currentIndex === texts.length - 1}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-105 shadow-lg"
                      aria-label={currentLabels.next}
                      type="button"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default CharacterAssistant;
