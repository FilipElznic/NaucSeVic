import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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

  // Ensure the portal target exists (SSR safety)
  const portalTarget = typeof document !== "undefined" ? document.body : null;

  const labels = {
    cs: { hide: "Skrýt", previous: "Předchozí", next: "Další" },
    en: { hide: "Hide", previous: "Previous", next: "Next" },
  };

  const currentLabels = labels[language] || labels.cs;

  // Position mapping — each entry has explicit non-conflicting classes per breakpoint.
  // Mobile (unprefixed): full-width bar pinned to bottom.
  // Desktop (md:): specific corner, auto-width. md: breakpoint classes always win over
  // unprefixed ones in Tailwind's generated CSS, so no conflict-free resets are needed
  // as long as we never have two md:-prefixed utilities for the same property.
  const getPositionClasses = (position) => {
    const positionMap = {
      "top-left":
        "bottom-4 left-4 right-4 md:w-auto md:bottom-auto md:right-auto md:top-8 md:left-8",
      "top-right":
        "bottom-4 left-4 right-4 md:w-auto md:bottom-auto md:left-auto md:top-8 md:right-8",
      "bottom-left":
        "bottom-4 left-4 right-4 md:w-auto md:right-auto md:bottom-8 md:left-8",
      "bottom-right":
        "bottom-4 left-4 right-4 md:w-auto md:left-auto md:bottom-8 md:right-8",
      center:
        "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-auto",
    };
    return positionMap[position] || positionMap["bottom-right"];
  };

  const content = (
    <AnimatePresence>
      {/* Blur Background */}
      {enableBlur && (
        <motion.div
          key="blur-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9999]"
          onClick={handleHide}
        />
      )}

      <motion.div
        key={`character-assistant-${currentIndex}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className={`fixed ${getPositionClasses(currentPosition)} z-[10000] md:max-w-md`}
        role="complementary"
        aria-label={language === "cs" ? "Asistent" : "Assistant"}
      >
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-3 md:gap-4">
          {/* Character Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="flex-shrink-0 self-start md:self-auto hidden md:block"
          >
            <img
              src={image}
              alt={
                language === "cs" ? "Postava asistenta" : "Assistant character"
              }
              className="w-12 h-12 md:w-auto md:h-auto object-contain"
            />
          </motion.div>

          {/* Mobile Character Image (Small & Absolute or Inline) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="md:hidden absolute -top-12 left-0 w-12 h-12 bg-white rounded-full p-1 border border-slate-200 shadow-sm z-10"
          >
            <img
              src={image}
              alt="Assistant"
              className="w-full h-full object-contain rounded-full"
            />
          </motion.div>

          {/* Text Bubble */}
          <div className="relative w-full">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="relative"
            >
              <div className="bg-white dark:bg-zinc-900 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-slate-200 dark:border-zinc-800 shadow-xl w-full">
                {/* Close Button */}
                <button
                  onClick={handleHide}
                  className="absolute top-2 right-2 md:top-3 md:right-3 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-all hover:scale-110"
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
                <div className="pr-8 md:pr-10 mb-3 md:mb-4">
                  <p className="text-gray-900 dark:text-white text-base md:text-lg font-medium leading-relaxed min-h-[3rem] md:min-h-[4rem]">
                    {displayedText}
                    {isTyping && (
                      <span className="inline-block w-0.5 h-5 md:h-6 bg-gradient-to-b from-blue-500 to-purple-500 ml-1 animate-pulse" />
                    )}
                  </p>
                </div>

                {/* Navigation Buttons */}
                {texts.length > 1 && (
                  <div className="flex items-center justify-between gap-2 md:gap-4 pt-3 md:pt-4 border-t border-gray-200 dark:border-zinc-700">
                    <button
                      onClick={handlePrevious}
                      disabled={currentIndex === 0}
                      className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95"
                      aria-label={currentLabels.previous}
                      type="button"
                    >
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-gray-600 dark:text-gray-300"
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
                    <div className="flex gap-1.5 md:gap-2">
                      {texts.map((_, index) => (
                        <div
                          key={index}
                          className={`h-1.5 md:h-2 rounded-full transition-all ${
                            index === currentIndex
                              ? "bg-gradient-to-r from-blue-500 to-purple-500 w-6 md:w-8"
                              : "bg-gray-200 dark:bg-zinc-700 w-1.5 md:w-2"
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={handleNext}
                      disabled={currentIndex === texts.length - 1}
                      className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 shadow-md"
                      aria-label={currentLabels.next}
                      type="button"
                    >
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
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

  return portalTarget ? createPortal(content, portalTarget) : content;
}

export default CharacterAssistant;
