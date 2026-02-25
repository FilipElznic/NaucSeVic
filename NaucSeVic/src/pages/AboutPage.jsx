import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ArrowLeft, Users, Target, Award, Brain } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <SEO
        title="O Nás | NaucSeVic"
        description="Jsme tým, který mění způsob výuky. Zjistěte více o naší misi zpřístupnit vzdělání všem."
      />
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600 flex items-center justify-center shadow-lg">
              <Users className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Něco málo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600">
              o nás
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Jsme tým nadšenců, kteří věří, že vzdělání by mělo být dostupné,
            zábavné a efektivní pro každého.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Our Mission */}
          <div className="bg-white dark:bg-black rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 shadow-xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600 flex-shrink-0 flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Naše mise
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Naším cílem je modernizovat způsob výuky přírodních věd a
                  matematiky. Pomocí interaktivních nástrojů, vizualizací a
                  gamifikace se snažíme, aby studenti látku nejen pochopili, ale
                  aby je i bavila. Chceme vytvořit prostředí, kde se nikdo
                  nebude bát udělat chybu, protože právě chyby jsou cestou k
                  pochopení.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-black rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-lg hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Inovace
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Neustále hledáme nové způsoby, jak vysvětlit složité koncepty
                jednoduše. Využíváme nejnovější technologie pro zlepšení zážitku
                z učení.
              </p>
            </div>

            <div className="bg-white dark:bg-black rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-lg hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Kvalita
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Veškerý náš obsah je pečlivě kontrolován a zpracován tak, aby
                odpovídal standardům a byl fakticky správný.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
