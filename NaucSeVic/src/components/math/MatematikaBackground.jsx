"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useDarkMode } from "../../contexts/DarkModeContext";

// ===================== SHADER =====================
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  #ifdef GL_ES
    precision lowp float;
  #endif
  uniform float iTime;
  uniform vec2 iResolution;
  uniform float isDarkMode;
  varying vec2 vUv;
  
  // Simple grid pattern for Math
  float grid(vec2 uv, float scale) {
    vec2 grid = abs(fract(uv * scale - 0.5) - 0.5) / fwidth(uv * scale);
    float line = min(grid.x, grid.y);
    return 1.0 - min(line, 1.0);
  }
  
  void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    uv.x *= iResolution.x / iResolution.y;
    
    // Rotate uv over time
    float c = cos(iTime * 0.1);
    float s = sin(iTime * 0.1);
    mat2 rot = mat2(c, -s, s, c);
    uv = rot * uv;
    
    // Create a dynamic grid
    float g1 = grid(uv + vec2(iTime * 0.1, iTime * 0.05), 5.0);
    float g2 = grid(uv * 1.5 - vec2(iTime * 0.05, -iTime * 0.1), 8.0);
    
    vec3 color1 = vec3(0.2, 0.4, 0.8); // Blue
    vec3 color2 = vec3(0.0, 0.8, 0.8); // Cyan
    
    vec3 finalColor = mix(vec3(0.05, 0.05, 0.1), color1, g1 * 0.5);
    finalColor = mix(finalColor, color2, g2 * 0.3);
    
    // Add some glow/vignette
    float dist = length(vUv - 0.5);
    finalColor *= 1.0 - dist * 0.5;
    
    // Light mode adjustment
    vec3 lightColor = 1.0 - finalColor;
    lightColor = mix(lightColor, vec3(0.9, 0.95, 1.0), 0.8); // Make it very light blueish white
    
    gl_FragColor = vec4(mix(lightColor, finalColor, isDarkMode), 1.0);
  }
`;

const MathShaderMaterial = shaderMaterial(
  { iTime: 0, iResolution: new THREE.Vector2(2, 2), isDarkMode: 1.0 },
  vertexShader,
  fragmentShader
);

extend({ MathShaderMaterial });

function ShaderPlane({ isDarkMode }) {
  const meshRef = useRef(null);
  const materialRef = useRef(null);

  useFrame((state) => {
    if (!materialRef.current) return;
    materialRef.current.iTime = state.clock.elapsedTime;
    const { width, height } = state.size;
    materialRef.current.iResolution.set(width, height);
    materialRef.current.isDarkMode = isDarkMode ? 1.0 : 0.0;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[20, 20]} />
      <mathShaderMaterial ref={materialRef} side={THREE.DoubleSide} />
    </mesh>
  );
}

function MathShaderBackground() {
  const canvasRef = useRef(null);
  const { darkMode } = useDarkMode();

  const camera = useMemo(
    () => ({ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }),
    []
  );

  useGSAP(
    () => {
      if (!canvasRef.current) return;

      gsap.set(canvasRef.current, {
        filter: "blur(20px)",
        scale: 1.1,
        autoAlpha: 0.7,
      });

      gsap.to(canvasRef.current, {
        filter: "blur(0px)",
        scale: 1,
        autoAlpha: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3,
      });
    },
    { scope: canvasRef }
  );

  return (
    <div
      ref={canvasRef}
      className="bg-white dark:bg-black fixed inset-0"
      style={{ zIndex: 0 }}
    >
      <Canvas
        camera={camera}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
        style={{ width: "100vw", height: "100%", display: "block" }}
      >
        <ShaderPlane isDarkMode={darkMode} />
      </Canvas>
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${
          darkMode
            ? "from-black/30 via-transparent to-black/20"
            : "from-white/30 via-transparent to-white/20"
        }`}
      />
    </div>
  );
}

export default function MatematikaBackground({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <MathShaderBackground />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
