import React, { useState } from "react";
import FallingBall from "./FallingBall";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { X, ArrowRight, BookOpen } from "lucide-react";
import CharacterAssistant from "../components/CharacterAssistant";

const GravitySimulation = () => {
  const [open, setOpen] = useState(false);
  const [showAssistant, setShowAssistant] = useState(false);

  return (
    <>
      {/* Card / Launcher */}
      <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all group">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
              g
            </div>
          </div>
          <span className="px-3 py-1 bg-slate-100 dark:bg-zinc-800 rounded-full text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
            Fyzika
          </span>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          Gravitace v akci
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          Proč věci padají dolů? Vyzkoušej si interaktivní simulaci volného pádu
          a pochop gravitační sílu.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-purple-600 dark:hover:bg-purple-400 dark:hover:text-white transition-all duration-300"
        >
          Spustit simulaci
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Fullscreen/Large Modal */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
          <div
            className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="relative bg-white dark:bg-zinc-950 w-full max-w-7xl max-h-[90vh] overflow-hidden rounded-[2rem] shadow-2xl flex flex-col md:flex-row border border-slate-200 dark:border-zinc-800 animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 bg-white/80 dark:bg-black/50 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full text-slate-500 dark:text-slate-400 transition-colors backdrop-blur-md border border-slate-200 dark:border-zinc-800"
            >
              <X size={24} />
            </button>

            {/* Left Side - Simulation (Swapped) */}
            <div className="w-full md:w-1/2 lg:w-3/5 relative bg-white dark:bg-black min-h-[500px] border-b md:border-b-0 md:border-r border-slate-200 dark:border-zinc-800 order-first">
              <div className="absolute inset-0 overflow-y-auto overflow-x-hidden">
                <div className="w-full h-full flex flex-col">
                  {/* The actual simulation component */}
                  <div className="flex-1 p-4 md:p-8 flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px]">
                    <div className="w-full max-w-2xl">
                      <FallingBall />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Educational Content (Swapped) */}
            <div className="w-full md:w-1/2 lg:w-2/5 p-8 md:p-10 overflow-y-auto bg-white dark:bg-zinc-900">
              <div className="max-w-lg mx-auto md:mx-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <BookOpen
                      className="text-purple-600 dark:text-purple-400"
                      size={24}
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                    Proč míč padá?
                  </h2>
                </div>

                <div className="prose dark:prose-invert prose-lg text-slate-600 dark:text-slate-300">
                  <p className="lead font-medium text-slate-900 dark:text-white mb-6">
                    Ahoj badateli! 👋 Všiml sis někdy, že když pustíš věc z
                    ruky, vždycky spadne dolů? Nikdy neodletí nahoru do nebe.
                    Může za to <strong>gravitace</strong>.
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                    Co je to gravitace?
                  </h3>
                  <p className="mb-6">
                    Představ si, že Země 🌍 je jako obrovský magnet, který
                    všechno přitahuje k sobě. Táhne k sobě tebe, tvou židli, i
                    tento míč v simulaci. Této neviditelné síle říkáme{" "}
                    <strong>gravitační síla</strong>.
                  </p>

                  <div className="my-8 p-6 bg-slate-50 dark:bg-zinc-800/50 rounded-2xl border border-slate-200 dark:border-zinc-800">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">
                      Vzoreček pro zvídavé
                    </p>
                    <BlockMath math="F_g = m \cdot g" />
                    <div className="mt-4 space-y-2 text-base">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono font-bold text-purple-600 bg-purple-100 dark:bg-purple-900/30 px-2 py-0.5 rounded">
                          F_g
                        </span>
                        <span>= Gravitační síla (jak moc to táhne)</span>
                      </div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono font-bold text-blue-600 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded">
                          m
                        </span>
                        <span>= Hmotnost (jak je věc těžká)</span>
                      </div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono font-bold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded">
                          g
                        </span>
                        <span>= Gravitační zrychlení (síla Země)</span>
                      </div>
                    </div>
                  </div>

                  <p className="mb-4">
                    Na naší planetě Zemi je hodnota <InlineMath math="g" />{" "}
                    přibližně <InlineMath math="9.81 \, m/s^2" />. To znamená,
                    že každou sekundu padá míč rychleji a rychleji! 🚀
                  </p>

                  <button
                    onClick={() => setShowAssistant(true)}
                    className="text-sm text-left text-purple-600 dark:text-purple-400 italic mt-8 border-t border-slate-200 dark:border-zinc-800 pt-4 hover:underline cursor-pointer"
                  >
                    Tip: Klikni zde pro nápovědu od asistenta
                  </button>

                  {showAssistant && (
                    <CharacterAssistant
                      image="/ucitel.png"
                      texts={[
                        "Vlevo vidíš míč, na který působí gravitace.",
                        "Červená šipka (vektor) ukazuje směr gravitační síly.",
                        "Všimni si, že míč zrychluje směrem dolů, přesně podle Newtonova zákona!",
                      ]}
                      language="cs"
                      enableBlur={false}
                      onHide={() => setShowAssistant(false)}
                      positions={["bottom-left", "bottom-left", "bottom-left"]}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GravitySimulation;
