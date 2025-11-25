import { useState, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GraduationCap, Shapes, TrendingUp, Plus, Minus } from "lucide-react";
import * as THREE from "three";
import { useDarkMode } from "../../contexts/DarkModeContext";

const PolygonModel = ({ sides, isDarkMode }) => {
  const meshRef = useRef();

  const geometry = useMemo(
    () => new THREE.CylinderGeometry(2, 2, 1, sides),
    [sides]
  );

  return (
    <group>
      <mesh
        ref={meshRef}
        geometry={geometry}
        rotation={[Math.PI / 6, Math.PI / 6, 0]}
      >
        <meshStandardMaterial
          color={isDarkMode ? "#a855f7" : "#22c55e"}
          roughness={0.2}
          metalness={0.8}
        />
        <lineSegments>
          <edgesGeometry args={[geometry]} />
          <lineBasicMaterial color={isDarkMode ? "white" : "black"} />
        </lineSegments>
      </mesh>
    </group>
  );
};

const GeometrySimulation = () => {
  const { darkMode } = useDarkMode();
  const [sides, setSides] = useState(3);

  const handleAddPoint = () => {
    if (sides < 12) setSides((prev) => prev + 1);
  };

  const handleRemovePoint = () => {
    if (sides > 3) setSides((prev) => prev - 1);
  };

  return (
    <div className="relative w-full py-32 dark:bg-black bg-white overflow-hidden z-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 dark:bg-purple-500/10 border border-green-500/20 dark:border-purple-500/20 text-green-600 dark:text-purple-400 text-xs font-medium uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-green-500 dark:bg-purple-500 animate-pulse"></span>
                3D Vizualizace
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
                Prozkoumejte <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-600 dark:from-purple-500 dark:to-violet-600">
                  prostor interaktivně
                </span>
              </h2>
            </div>

            <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed">
              Naše interaktivní modely vám umožní otáčet, řezat a zkoumat
              geometrická tělesa ze všech úhlů. Pochopte vztahy mezi stěnami,
              hranami a vrcholy v reálném čase.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: GraduationCap,
                  title: "Postupné učení",
                  desc: "Od základů po pokročilé techniky",
                },
                {
                  icon: Shapes,
                  title: "Interaktivní modely",
                  desc: "3D vizualizace geometrických těles",
                },
                {
                  icon: TrendingUp,
                  title: "Sledování pokroku",
                  desc: "Vaše úspěšnost a statistiky",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-black/10 dark:border-white/10 hover:border-green-500/50 dark:hover:border-purple-500/50 transition duration-300"
                >
                  <div className="p-3 rounded-lg bg-green-500/10 dark:bg-purple-500/10 text-green-600 dark:text-purple-400">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold dark:text-white text-black ">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-slate-50 dark:bg-slate-900 aspect-video group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-600/5 dark:from-purple-500/20 dark:to-violet-600/20"></div>

              <div className="absolute inset-0">
                <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <PolygonModel sides={sides} isDarkMode={darkMode} />
                  <OrbitControls
                    enableZoom={true}
                    enablePan={true}
                    enableRotate={true}
                  />
                </Canvas>
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm p-2 rounded-xl border border-black/10 dark:border-white/10 z-10">
                <button
                  onClick={handleRemovePoint}
                  disabled={sides <= 3}
                  className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Minus className="w-5 h-5 text-black dark:text-white" />
                </button>
                <span className="font-mono font-bold text-lg w-8 text-center text-black dark:text-white">
                  {sides}
                </span>
                <button
                  onClick={handleAddPoint}
                  disabled={sides >= 12}
                  className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Plus className="w-5 h-5 text-black dark:text-white" />
                </button>
              </div>

              <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-black/10 dark:border-white/10 z-10">
                <span className="text-sm font-medium text-black dark:text-white">
                  {sides === 3
                    ? "Trojúhelník"
                    : sides === 4
                    ? "Čtverec"
                    : sides === 5
                    ? "Pětiúhelník"
                    : sides === 6
                    ? "Šestiúhelník"
                    : `${sides}-úhelník`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeometrySimulation;
