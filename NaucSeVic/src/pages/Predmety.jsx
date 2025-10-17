import React from "react";
import { Link } from "react-router-dom";
import { Calculator, Atom, Triangle } from "lucide-react";

const Predmety = () => {
  const subjects = [
    {
      id: "matematika",
      title: "Matematika",
      description: "Algebra, čísla, rovnice",
      icon: Calculator,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "geometrie",
      title: "Geometrie",
      description: "Tvary, prostory, konstrukce",
      icon: Triangle,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "fyzika",
      title: "Fyzika",
      description: "Mechanika, elektřina, optika",
      icon: Atom,
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Předměty
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Vyberte si předmět, který chcete studovat
            </p>
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {subjects.map((subject) => {
            const IconComponent = subject.icon;

            return (
              <Link
                key={subject.id}
                to={`/predmety/${subject.id}`}
                className="group cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <div className="relative p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${subject.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${subject.color} rounded-xl mb-4 shadow-lg`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {subject.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{subject.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Predmety;
