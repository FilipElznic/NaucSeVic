import React, { useState, useEffect } from "react";
import { X, ChevronRight } from "lucide-react";

/**
 * CharacterHelper - Univerzální komponenta pro zobrazení pomocné postavy s textem
 *
 * @param {string|array} img - Číslo obrázku nebo pole obrázků pro více zpráv
 * @param {string|array} text - Text nebo pole textů (pro více zpráv)
 * @param {string} position - Pozice postavy: "left" nebo "right" (default: "left")
 * @param {string} characterName - Jméno postavy (default: "Pomocník")
 * @param {string} size - Velikost komponenty: "small", "medium", "large" (default: "medium")
 * @param {string} variant - Styl bubliny: "default", "success", "info", "warning" (default: "default")
 * @param {boolean} typing - Zapnout typing animaci (default: false)
 * @param {number} typingSpeed - Rychlost typing animace v ms (default: 50)
 * @param {boolean} fixed - Fixní pozice v rohu obrazovky (default: false)
 * @param {boolean} showControls - Zobrazit tlačítka pro skrytí/další (default: true)
 * @param {function} onHide - Callback když je komponenta skryta
 * @param {function} onComplete - Callback když uživatel projde všechny zprávy
 * @param {boolean} wider - Širší bublina pro více textu (default: false)
 */
const CharacterHelper = ({
  img = "1",
  text = "",
  position = "left",
  characterName = "Pomocník",
  size = "medium",
  variant = "default",
  typing = false,
  typingSpeed = 50,
  fixed = false,
  showControls = true,
  onHide,
  onComplete,
  wider = true,
}) => {
  // Podpora pro pole textů
  const texts = Array.isArray(text) ? text : [text];
  const images = Array.isArray(img) ? img : [img];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [displayedText, setDisplayedText] = useState(typing ? "" : texts[0]);
  const [isTyping, setIsTyping] = useState(typing);
  const [showPopup, setShowPopup] = useState(false);

  const currentText = texts[currentIndex];
  const currentImage = images[currentIndex] || images[0] || img;

  // Typing animation effect
  useEffect(() => {
    if (typing) {
      setDisplayedText("");
      setIsTyping(true);
      let charIndex = 0;

      const typingInterval = setInterval(() => {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          charIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    } else {
      setDisplayedText(currentText);
    }
  }, [currentText, typing, typingSpeed, currentIndex]);

  // Handle next message
  const handleNext = () => {
    if (currentIndex < texts.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 500);
    } else {
      if (onComplete) onComplete();
    }
  };

  // Handle hide
  const handleHide = () => {
    setIsVisible(false);
    if (onHide) onHide();
  };

  // Don't render if hidden
  if (!isVisible) return null;
  // Mapování čísel na obrázky - zde můžete přidat skutečné cesty k obrázkům
  const characterImages = {
    1: "/ucitel.png",
    2: "/characters/character-2.png",
    3: "/characters/character-3.png",
    4: "/characters/character-4.png",
    5: "/characters/character-5.png",
    // Nebo použijte emoji jako placeholder
    happy: "😊",
    thinking: "🤔",
    excited: "🤩",
    celebrating: "🎉",
    learning: "📚",
  };

  // Velikosti
  const sizes = {
    small: {
      container: "max-w-3xl",
      image: "w-48 h-48",
      text: "text-sm",
      padding: "px-6 py-3",
    },
    medium: {
      container: "max-w-4xl",
      image: "w-64 h-64",
      text: "text-base",
      padding: "px-8 py-4",
    },
    large: {
      container: "max-w-6xl",
      image: "w-96 h-96",
      text: "text-xl",
      padding: "px-20 py-5",
    },
  };

  // Varianty barev pro bublinu
  const variants = {
    default: {
      bg: "bg-white",
      text: "text-gray-900",
    },
    success: {
      bg: "bg-green-50",
      text: "text-gray-900",
    },
    info: {
      bg: "bg-blue-50",
      text: "text-gray-900",
    },
    warning: {
      bg: "bg-yellow-50",
      text: "text-gray-900",
    },
  };

  const currentSize = sizes[size] || sizes.medium;
  const currentVariant = variants[variant] || variants.default;

  // Získání obrázku
  const imageSource = characterImages[currentImage] || currentImage;
  const isEmoji = imageSource.length <= 2; // Detekce emoji

  // Fixed positioning styles
  const containerWidth = wider ? "max-w-5xl" : currentSize.container;
  const fixedClasses = fixed
    ? "fixed bottom-4 left-4 z-50 w-[500px] animate-fade-in"
    : `${containerWidth} mx-auto mb-6`;

  return (
    <div className={`${fixedClasses} ${showPopup ? "animate-bounce" : ""}`}>
      <div
        className={`flex ${
          position === "right" ? "flex-row-reverse" : "flex-row"
        } items-end gap-4`}
      >
        {/* Postava / Avatar */}
        <div className="flex-shrink-0 relative">
          <div
            className={`${
              currentSize.image
            } transition-transform duration-300 ${
              showPopup ? "scale-110" : ""
            }`}
          >
            {isEmoji ? (
              <span className="text-6xl">{imageSource}</span>
            ) : (
              <img
                src={imageSource}
                alt={characterName}
                className="w-full h-full object-contain transition-all duration-300"
                onError={(e) => {
                  // Fallback pokud obrázek neexistuje
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<span class="text-6xl">🤖</span>';
                }}
              />
            )}
          </div>
        </div>

        {/* Řečová bublina */}
        <div className="flex-1 relative">
          {/* Špička bubliny - comics style */}
          <div
            className={`absolute ${
              position === "right" ? "right-[-12px]" : "left-[-12px]"
            } bottom-6`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className={position === "right" ? "scale-x-[-1]" : ""}
            >
              <path
                d="M0,0 L20,10 L0,15 Z"
                fill="white"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Obsah bubliny */}
          <div
            className={`${currentVariant.bg} rounded-3xl ${currentSize.padding} border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative min-w-[400px]`}
          >
            {/* Control Buttons */}
            {showControls && (
              <div className="absolute top-2 right-2 flex gap-1">
                {texts.length > 1 && currentIndex < texts.length - 1 && (
                  <button
                    onClick={handleNext}
                    className="bg-gray-200 hover:bg-gray-300 p-1 rounded-full transition-colors"
                    title="Další zpráva"
                  >
                    <ChevronRight className="h-4 w-4 text-gray-700" />
                  </button>
                )}
                <button
                  onClick={handleHide}
                  className="bg-gray-200 hover:bg-red-200 p-1 rounded-full transition-colors"
                  title="Skrýt"
                >
                  <X className="h-4 w-4 text-gray-700" />
                </button>
              </div>
            )}

            {/* Text */}
            <p
              className={`${currentVariant.text} ${currentSize.text} leading-relaxed font-medium pr-16 whitespace-normal break-words`}
            >
              {displayedText}
              {isTyping && (
                <span className="inline-block w-1 h-5 ml-1 bg-gray-900 animate-pulse">
                  |
                </span>
              )}
            </p>

            {/* Progress indicator pro více zpráv */}
            {texts.length > 1 && (
              <div className="flex gap-1 mt-3 justify-center">
                {texts.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-6 bg-gray-700"
                        : "w-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterHelper;
