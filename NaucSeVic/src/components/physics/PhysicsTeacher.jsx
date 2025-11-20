import ucitel from "/ucitel.png";

const PhysicsTeacher = () => {
  return (
    <div className="relative w-full py-32 dark:bg-black bg-white z-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-2/3 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 dark:bg-purple-500/10 border border-green-500/20 dark:border-purple-500/20 text-green-600 dark:text-purple-400 text-xs font-medium uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-green-500 dark:bg-purple-500 animate-pulse"></span>
                Váš průvodce
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
                Učení nemusí být <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-600 dark:from-purple-500 dark:to-violet-600">
                  jen otrava
                </span>
              </h2>
            </div>

            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              S námi vás fyzika bude bavit. Zapomeňte na nudné biflování
              vzorečků. Ukážeme vám, jak funguje svět kolem nás, od atomů až po
              galaxie. Připojte se k tisícům studentů, kteří už objevili krásu
              fyziky.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-lime-600 to-green-600 dark:from-purple-600 dark:to-violet-600 text-white font-semibold shadow-lg shadow-green-500/25 dark:shadow-purple-500/25 hover:shadow-green-500/40 dark:hover:shadow-purple-500/40 transform hover:-translate-y-1 transition duration-300">
                Zjistit více
              </button>
              <button className="px-8 py-4 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-white/5 transition duration-300">
                Ukázková lekce
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-white/10">
              <div>
                <div className="text-2xl font-bold text-black/80 dark:text-white/80">
                  10+
                </div>
                <div className="text-sm text-slate-400">Let praxe</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black/80 dark:text-white/80">
                  5k+
                </div>
                <div className="text-sm text-slate-400">Studentů</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black/80 dark:text-white/80">
                  4.9
                </div>
                <div className="text-sm text-slate-400">Hodnocení</div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <img
              src={ucitel}
              alt="Náš lektor"
              className="w-2/3 h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicsTeacher;
