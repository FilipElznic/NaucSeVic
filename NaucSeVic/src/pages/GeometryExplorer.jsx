import React, { useState, useEffect } from "react";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";
import { getAllGeometryData } from "../services/databaseService";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import {
  Shapes,
  Calculator,
  Triangle,
  Square,
  Circle,
  Ruler,
} from "lucide-react";

const GeometryExplorer = () => {
  const { user } = useFirebaseAuth();
  const [geometryData, setGeometryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedShape, setSelectedShape] = useState(null);
  const [calculations, setCalculations] = useState({});

  useEffect(() => {
    const fetchGeometryData = async () => {
      try {
        setLoading(true);
        const data = await getAllGeometryData();
        setGeometryData(data);
      } catch (error) {
        console.error("Error fetching geometry data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchGeometryData();
    }
  }, [user]);

  const handleCalculate = (shape, values) => {
    let result = {};

    switch (shape.type) {
      case "triangle":
        if (values.base && values.height) {
          result.area = (values.base * values.height) / 2;
          result.perimeter =
            values.a + values.b + values.c || "Potřebujete všechny strany";
        }
        break;
      case "rectangle":
        if (values.width && values.height) {
          result.area = values.width * values.height;
          result.perimeter = 2 * (values.width + values.height);
        }
        break;
      case "circle":
        if (values.radius) {
          result.area = Math.PI * values.radius * values.radius;
          result.circumference = 2 * Math.PI * values.radius;
        }
        break;
      default:
        break;
    }

    setCalculations({ ...calculations, [shape.id]: result });
  };

  const getShapeIcon = (type) => {
    switch (type) {
      case "triangle":
        return <Triangle className="h-6 w-6" />;
      case "rectangle":
      case "square":
        return <Square className="h-6 w-6" />;
      case "circle":
        return <Circle className="h-6 w-6" />;
      default:
        return <Shapes className="h-6 w-6" />;
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
            <Shapes className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Geometry Explorer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Prozkoumejte geometrické tvary a provádějte výpočty
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Calculator className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Dostupné tvary
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {geometryData.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Triangle className="h-8 w-8 text-green-600 dark:text-green-400" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Trojúhelníky
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {
                    geometryData.filter((item) => item.type === "triangle")
                      .length
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Square className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Čtyřúhelníky
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {
                    geometryData.filter(
                      (item) =>
                        item.type === "rectangle" || item.type === "square"
                    ).length
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Circle className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Kruhy
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {geometryData.filter((item) => item.type === "circle").length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Geometry Shapes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {geometryData.map((shape) => (
            <div
              key={shape.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {getShapeIcon(shape.type)}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">
                  {shape.name}
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {shape.description}
              </p>

              {shape.formula && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Vzorce:
                  </h4>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                    {Object.entries(shape.formula).map(([key, value]) => (
                      <div key={key} className="mb-1">
                        <strong>{key}:</strong> {value}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {shape.properties && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Vlastnosti:
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
                    {shape.properties.map((property, index) => (
                      <li key={index}>{property}</li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={() =>
                  setSelectedShape(selectedShape === shape.id ? null : shape.id)
                }
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <Ruler className="h-4 w-4 mr-2" />
                {selectedShape === shape.id
                  ? "Skrýt kalkulačku"
                  : "Otevřít kalkulačku"}
              </button>

              {/* Calculator for selected shape */}
              {selectedShape === shape.id && (
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Kalkulačka pro {shape.name}
                  </h4>
                  <ShapeCalculator
                    shape={shape}
                    onCalculate={(values) => handleCalculate(shape, values)}
                    result={calculations[shape.id]}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {geometryData.length === 0 && !loading && (
          <div className="text-center py-12">
            <Shapes className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Žádná geometrická data
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Geometrická data se načítají nebo nejsou k dispozici.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Calculator component for shapes
const ShapeCalculator = ({ shape, onCalculate, result }) => {
  const [values, setValues] = useState({});

  const handleInputChange = (key, value) => {
    setValues({ ...values, [key]: parseFloat(value) || 0 });
  };

  const handleCalculate = () => {
    onCalculate(values);
  };

  const getInputFields = () => {
    switch (shape.type) {
      case "triangle":
        return (
          <>
            <input
              type="number"
              placeholder="Základna"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white mb-2"
              onChange={(e) => handleInputChange("base", e.target.value)}
            />
            <input
              type="number"
              placeholder="Výška"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white mb-2"
              onChange={(e) => handleInputChange("height", e.target.value)}
            />
          </>
        );
      case "rectangle":
        return (
          <>
            <input
              type="number"
              placeholder="Šířka"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white mb-2"
              onChange={(e) => handleInputChange("width", e.target.value)}
            />
            <input
              type="number"
              placeholder="Výška"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white mb-2"
              onChange={(e) => handleInputChange("height", e.target.value)}
            />
          </>
        );
      case "circle":
        return (
          <input
            type="number"
            placeholder="Poloměr"
            className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white mb-2"
            onChange={(e) => handleInputChange("radius", e.target.value)}
          />
        );
      default:
        return null;
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
              {typeof value === "number" ? value.toFixed(2) : value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GeometryExplorer;
