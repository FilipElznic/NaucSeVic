"use client";

import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { useDarkMode } from "../../contexts/DarkModeContext";

function Geometries() {
  const { darkMode } = useDarkMode();

  // Material props based on theme
  const materialProps = useMemo(
    () => ({
      color: darkMode ? "#a855f7" : "#3b82f6", // Purple in dark, Blue in light
      roughness: 0,
      metalness: 0.5,
      wireframe: true,
    }),
    [darkMode]
  );

  return (
    <group>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[0, 0, 0]} scale={1.5}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[3, 1, -2]} scale={1}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            {...materialProps}
            color={darkMode ? "#22c55e" : "#ef4444"}
          />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-3, -1, -1]} scale={1.2}>
          <tetrahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            {...materialProps}
            color={darkMode ? "#3b82f6" : "#a855f7"}
          />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1}>
        <mesh position={[2, -2, 0]} scale={0.8}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            {...materialProps}
            wireframe={false}
            transparent
            opacity={0.1}
          />
          <lineSegments>
            <edgesGeometry args={[new THREE.DodecahedronGeometry(1, 0)]} />
            <lineBasicMaterial color={darkMode ? "white" : "black"} />
          </lineSegments>
        </mesh>
      </Float>
    </group>
  );
}

export default function GeometryBackground({ children }) {
  const { darkMode } = useDarkMode();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas gl={{ antialias: true, alpha: true }}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Geometries />
        </Canvas>
        <div
          className={`absolute inset-0 bg-gradient-to-t ${
            darkMode
              ? "from-black/80 via-transparent to-black/40"
              : "from-white/80 via-transparent to-white/40"
          }`}
        />
      </div>
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
