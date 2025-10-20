import CharacterAssistant from "../components/CharacterAssistant";

function Demo() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black transition-colors duration-200">
      <CharacterAssistant
        image="/ucitel.png"
        texts={[
          "Ahoj! Jak ti mohu pomoci?",
          "Můžeme se naučit něco nového.",
          "Jaké téma tě zajímá?",
        ]}
        language="cs"
        enableBlur={true}
      />

      <main className="w-full max-w-4xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Task Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <svg
              className="w-4 h-4 text-blue-600 dark:text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Mathematics Practice
            </span>
          </div>

          {/* Task Name */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Basic Addition
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Solve the following addition problem by selecting the correct answer
            from the options below.
          </p>
        </div>

        {/* Question Card with Enhanced Design */}
        <div className="mb-12">
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-12 text-center shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full translate-x-20 translate-y-20"></div>

            {/* Question */}
            <div className="relative z-10">
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                Question
              </div>
              <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                8 + 7 = ?
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Answer Options with Enhanced Hover Effects */}
        <div className="flex justify-center gap-6 mb-16">
          <button className="group relative w-24 h-24 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-2xl text-2xl font-bold text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1">
            <span className="relative z-10">4</span>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
          </button>
          <button className="group relative w-24 h-24 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-2xl text-2xl font-bold text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1">
            <span className="relative z-10">15</span>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
          </button>
          <button className="group relative w-24 h-24 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-2xl text-2xl font-bold text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1">
            <span className="relative z-10">12</span>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
          </button>
        </div>

        {/* Progress Section with Enhanced Design */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Progress
            </span>
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              13 / 24
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
              style={{ width: "54%" }}
            ></div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-1.5 flex-wrap">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i < 12
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-110"
                    : i === 12
                    ? "bg-blue-500 dark:bg-blue-400 ring-4 ring-blue-200 dark:ring-blue-900 scale-125"
                    : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
            Previous
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
            Next Question
          </button>
        </div>
      </main>
    </div>
  );
}

export default Demo;
