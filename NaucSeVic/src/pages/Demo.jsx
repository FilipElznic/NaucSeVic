import { useState } from "react";
import CharacterHelper from "../components/CharacterHelper";

function Demo() {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const correctAnswer = 15;

  const handleSubmit = () => {
    const userAnswer = parseInt(answer);
    setAttempts(attempts + 1);

    if (userAnswer === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      if (attempts >= 1) {
        setShowHint(true);
      }
    }
  };

  const handleReset = () => {
    setAnswer("");
    setIsCorrect(null);
    setShowHint(false);
    setAttempts(0);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && answer) {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.15),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Matematická výzva
            </span>
          </h1>
          <p className="text-xl text-zinc-300">
            Řeš problém a uč se zábavnou formou!
          </p>
        </div>

        {/* Math Problem Card */}
        <div className="bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/60 rounded-2xl shadow-lg p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-white">
              📚 Úkol: Sčítání
            </h2>
            <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-4 py-2 rounded-full text-sm font-medium">
              Úroveň: Začátečník
            </span>
          </div>

          {/* Problem */}
          <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-xl p-6 mb-6">
            <p className="text-lg text-zinc-200 mb-4">
              Tomáš má 8 jablek a Marie má 7 jablek. Kolik jablek mají
              dohromady?
            </p>
            <div className="text-4xl font-bold text-center text-purple-300">
              8 + 7 = ?
            </div>
          </div>

          {/* Hint */}
          {showHint && !isCorrect && (
            <div className="bg-yellow-500/20 border-l-4 border-yellow-400 p-4 mb-6 rounded">
              <p className="text-yellow-200">
                💡 <strong>Nápověda:</strong> Zkus si to představit: 8 prstů na
                jedné ruce a palec, plus 7 prstů na druhé ruce...
              </p>
            </div>
          )}

          {/* Answer Input */}
          {isCorrect === null || isCorrect === false ? (
            <div className="space-y-4">
              <div>
                <label className="block text-zinc-200 font-medium mb-2">
                  Tvoje odpověď:
                </label>
                <input
                  type="number"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-3 bg-zinc-700/50 border-2 border-zinc-600 rounded-lg focus:border-purple-500 focus:outline-none text-lg text-white placeholder-zinc-400"
                  placeholder="Zadej číslo..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleSubmit}
                  disabled={!answer}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 disabled:from-zinc-600 disabled:to-zinc-600 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition duration-200"
                >
                  Zkontrolovat odpověď
                </button>
                {attempts > 0 && (
                  <button
                    onClick={handleReset}
                    className="px-6 bg-zinc-700/60 hover:bg-zinc-700 border border-zinc-600 text-white font-semibold py-3 rounded-lg transition duration-200"
                  >
                    Začít znovu
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <button
                onClick={handleReset}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
              >
                Další úkol
              </button>
            </div>
          )}

          {/* Feedback */}
          {isCorrect === false && (
            <div className="mt-4 bg-red-500/20 border-l-4 border-red-400 p-4 rounded">
              <p className="text-red-200">
                ❌ To není správně. Zkus to znovu! (Pokus {attempts})
              </p>
            </div>
          )}
        </div>

        {/* Character Helper - Wrong answer */}
        {isCorrect === false && attempts === 1 && (
          <CharacterHelper
            img="1"
            text="Nevadí! Každý dělá chyby. Zkus to ještě jednou, věřím ti!"
            position="right"
            characterName="Učitel"
            size="medium"
            typing={true}
            typingSpeed={40}
            wider={true}
          />
        )}

        {/* Character Helper - Correct answer */}
        {isCorrect === true && (
          <div className="mb-6">
            <CharacterHelper
              img="1"
              text="Skvělá práce! Dokončil jsi lekci! Správná odpověď je 15. 🎉"
              position="left"
              characterName="Učitel"
              size="large"
              typing={true}
              typingSpeed={40}
              wider={true}
            />

            {/* Success celebration */}
            <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-6 text-center backdrop-blur-sm">
              <div className="text-6xl mb-4">🎊</div>
              <h3 className="text-2xl font-bold text-green-300 mb-2">
                Výborně!
              </h3>
              <p className="text-green-200">
                Získal jsi 10 bodů! Pokračuj v učení!
              </p>
            </div>
          </div>
        )}

        {/* Progress indicator */}
        <div className="bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/60 rounded-xl shadow p-6">
          <h3 className="font-semibold text-white mb-3">Tvůj pokrok</h3>
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-zinc-700/50 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-purple-500 to-indigo-500 h-4 rounded-full transition-all duration-500"
                style={{ width: isCorrect ? "100%" : "0%" }}
              ></div>
            </div>
            <span className="text-zinc-200 font-medium">
              {isCorrect ? "1/1" : "0/1"}
            </span>
          </div>
        </div>
      </div>

      {/* Fixed Character in Bottom Left Corner */}
      <CharacterHelper
        img={["1", "1", "1"]}
        text={[
          "Potřebuješ pomoc? Jsem tu pro tebe!",
          "Máš nějaké dotazy? Klikni na mě a zeptej se!",
          "Pamatuj: Chyby jsou součástí učení. Nikdy se nevzdávej! 💪",
        ]}
        position="left"
        size="large"
        fixed={true}
        typing={true}
        typingSpeed={50}
        wider={true}
        showControls={true}
      />
    </div>
  );
}

export default Demo;
