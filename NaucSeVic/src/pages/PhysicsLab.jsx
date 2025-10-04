import React, { useState, useEffect } from "react";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";
import { getAllPhysicsData } from "../services/databaseService";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import {
  Atom,
  Zap,
  Thermometer,
  Gauge,
  Beaker,
  Calculator,
} from "lucide-react";

const PhysicsLab = () => {
  const { user } = useFirebaseAuth();
  const [physicsData, setPhysicsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedExperiment, setSelectedExperiment] = useState(null);
  const [calculations, setCalculations] = useState({});

  useEffect(() => {
    const fetchPhysicsData = async () => {
      try {
        setLoading(true);
        const data = await getAllPhysicsData();
        setPhysicsData(data);
      } catch (error) {
        console.error("Error fetching physics data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchPhysicsData();
    }
  }, [user]);

  const handleCalculate = (experiment, values) => {
    let result = {};

    switch (experiment.type) {
      case "mechanics":
        if (values.force && values.mass) {
          result.acceleration = values.force / values.mass;
        }
        if (values.velocity && values.time) {
          result.distance = values.velocity * values.time;
        }
        break;
      case "electricity":
        if (values.voltage && values.current) {
          result.resistance = values.voltage / values.current;
          result.power = values.voltage * values.current;
        }
        break;
      case "thermodynamics":
        if (values.mass && values.specificHeat && values.temperatureChange) {
          result.heatEnergy =
            values.mass * values.specificHeat * values.temperatureChange;
        }
        break;
      case "optics":
        if (values.objectDistance && values.focalLength) {
          const imageDistance =
            1 / (1 / values.focalLength - 1 / values.objectDistance);
          result.imageDistance = imageDistance;
          result.magnification = -imageDistance / values.objectDistance;
        }
        break;
      default:
        break;
    }

    setCalculations({ ...calculations, [experiment.id]: result });
  };

  const getExperimentIcon = (type) => {
    switch (type) {
      case "mechanics":
        return <Gauge className="h-6 w-6" />;
      case "electricity":
        return <Zap className="h-6 w-6" />;
      case "thermodynamics":
        return <Thermometer className="h-6 w-6" />;
      case "optics":
        return <Beaker className="h-6 w-6" />;
      default:
        return <Atom className="h-6 w-6" />;
    }
  };

  const getCategoryColor = (type) => {
    switch (type) {
      case "mechanics":
        return "text-blue-600 dark:text-blue-400";
      case "electricity":
        return "text-yellow-600 dark:text-yellow-400";
      case "thermodynamics":
        return "text-red-600 dark:text-red-400";
      case "optics":
        return "text-purple-600 dark:text-purple-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Atom className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Physics Lab
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Prozkoumejte fyzikální experimenty a zákonitosti
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Calculator className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Experimenty celkem
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {physicsData.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Gauge className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Mechanika
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {
                    physicsData.filter((item) => item.type === "mechanics")
                      .length
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Elektřina
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {
                    physicsData.filter((item) => item.type === "electricity")
                      .length
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Thermometer className="h-8 w-8 text-red-600 dark:text-red-400" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Termodynamika
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {
                    physicsData.filter((item) => item.type === "thermodynamics")
                      .length
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {physicsData.map((experiment) => (
            <div
              key={experiment.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className={getCategoryColor(experiment.type)}>
                  {getExperimentIcon(experiment.type)}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">
                  {experiment.name}
                </h3>
              </div>

              <div className="mb-4">
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                    experiment.type
                  )} bg-gray-100 dark:bg-gray-700`}
                >
                  {experiment.category || experiment.type}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {experiment.description}
              </p>

              {experiment.formula && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Vzorce:
                  </h4>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                    {Object.entries(experiment.formula).map(([key, value]) => (
                      <div key={key} className="mb-1">
                        <strong>{key}:</strong> {value}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {experiment.units && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Jednotky:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {Object.entries(experiment.units).map(([key, value]) => (
                      <span
                        key={key}
                        className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                      >
                        {key}: {value}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() =>
                  setSelectedExperiment(
                    selectedExperiment === experiment.id ? null : experiment.id
                  )
                }
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <Calculator className="h-4 w-4 mr-2" />
                {selectedExperiment === experiment.id
                  ? "Skrýt kalkulačku"
                  : "Otevřít kalkulačku"}
              </button>

              {/* Calculator for selected experiment */}
              {selectedExperiment === experiment.id && (
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Kalkulačka pro {experiment.name}
                  </h4>
                  <ExperimentCalculator
                    experiment={experiment}
                    onCalculate={(values) =>
                      handleCalculate(experiment, values)
                    }
                    result={calculations[experiment.id]}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {physicsData.length === 0 && !loading && (
          <div className="text-center py-12">
            <Atom className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Žádné fyzikální experimenty
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Fyzikální data se načítají nebo nejsou k dispozici.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Calculator component for physics experiments
const ExperimentCalculator = ({ experiment, onCalculate, result }) => {
  const [values, setValues] = useState({});

  const handleInputChange = (key, value) => {
    setValues({ ...values, [key]: parseFloat(value) || 0 });
  };

  const handleCalculate = () => {
    onCalculate(values);
  };

  const getInputFields = () => {
    switch (experiment.type) {
      case "mechanics":
        return (
          <>
            <input
              type="number"
              placeholder="Síla (N)"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white mb-2"
              onChange={(e) => handleInputChange("force", e.target.value)}
            />
            <input
              type="number"
              placeholder="Hmotnost (kg)"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white mb-2"
              onChange={(e) => handleInputChange("mass", e.target.value)}
            />
            <input
              type="number"
              placeholder="Rychlost (m/s)"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white mb-2"
              onChange={(e) => handleInputChange("velocity", e.target.value)}
            />
            <input
              type="number"
              placeholder="Čas (s)"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white mb-2"
              onChange={(e) => handleInputChange("time", e.target.value)}
            />
          </>
        );
      case "electricity":
        return (
          <>
            <input
              type="number"
              placeholder="Napětí (V)"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white mb-2"
              onChange={(e) => handleInputChange("voltage", e.target.value)}
            />
            <input
              type="number"
              placeholder="Proud (A)"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white mb-2"
              onChange={(e) => handleInputChange("current", e.target.value)}
            />
          </>
        );
      case "thermodynamics":
        return (
          <>
            <input
              type="number"
              placeholder="Hmotnost (kg)"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white mb-2"
              onChange={(e) => handleInputChange("mass", e.target.value)}
            />
            <input
              type="number"
              placeholder="Měrná tepelná kapacita (J/kg·K)"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white mb-2"
              onChange={(e) =>
                handleInputChange("specificHeat", e.target.value)
              }
            />
            <input
              type="number"
              placeholder="Změna teploty (K)"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white mb-2"
              onChange={(e) =>
                handleInputChange("temperatureChange", e.target.value)
              }
            />
          </>
        );
      case "optics":
        return (
          <>
            <input
              type="number"
              placeholder="Vzdálenost předmětu (m)"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white mb-2"
              onChange={(e) =>
                handleInputChange("objectDistance", e.target.value)
              }
            />
            <input
              type="number"
              placeholder="Ohnisková vzdálenost (m)"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white mb-2"
              onChange={(e) => handleInputChange("focalLength", e.target.value)}
            />
          </>
        );
      default:
        return (
          <p className="text-gray-600 dark:text-gray-300">
            Kalkulačka pro tento typ experimentu není k dispozici.
          </p>
        );
    }
  };

  return (
    <div>
      {getInputFields()}
      <button
        onClick={handleCalculate}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors mt-2"
      >
        Vypočítat
      </button>

      {result && Object.keys(result).length > 0 && (
        <div className="mt-3 p-3 bg-green-100 dark:bg-green-900 rounded">
          <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">
            Výsledky:
          </h5>
          {Object.entries(result).map(([key, value]) => (
            <div key={key} className="text-green-700 dark:text-green-300">
              <strong>{key}:</strong>{" "}
              {typeof value === "number" ? value.toFixed(3) : value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhysicsLab;
