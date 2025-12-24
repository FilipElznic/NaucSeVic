"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useDarkMode } from "../../contexts/DarkModeContext";

gsap.registerPlugin(SplitText, useGSAP);

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
            ? "from-black/60 via-transparent to-black/40"
            : "from-white/60 via-transparent to-white/40"
        }`}
      />
    </div>
  );
}

// ===================== HERO =====================
export default function MatematikaHero({
  title = "Matematika",
  description = "Objevte krásu čísel, rovnic a logiky. Naučte se matematické principy od základů po pokročilé koncepty.",
  badgeText = "Interaktivní výuka",
  badgeLabel = "Novinka",
  ctaButtons = [
    { text: "Začít studovat", href: "#get-started", primary: true },
    { text: "Prohlédnout kurzy", href: "#courses" },
  ],
  microDetails = ["Algebra & Analýza", "Interaktivní grafy", "Řešení problémů"],
}) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const paraRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);
  const microRef = useRef(null);
  const microItem1Ref = useRef(null);
  const microItem2Ref = useRef(null);
  const microItem3Ref = useRef(null);

  useGSAP(
    () => {
      if (!headerRef.current) return;

      document.fonts.ready.then(() => {
        const split = new SplitText(headerRef.current, {
          type: "lines",
          wordsClass: "lines",
        });

        gsap.set(split.lines, {
          filter: "blur(16px)",
          yPercent: 30,
          autoAlpha: 0,
          scale: 1.06,
          transformOrigin: "50% 100%",
        });

        if (badgeRef.current) {
          gsap.set(badgeRef.current, { autoAlpha: 0, y: -8 });
        }
        if (paraRef.current) {
          gsap.set(paraRef.current, { autoAlpha: 0, y: 8 });
        }
        if (ctaRef.current) {
          gsap.set(ctaRef.current, { autoAlpha: 0, y: 8 });
        }
        const microItems = [
          microItem1Ref.current,
          microItem2Ref.current,
          microItem3Ref.current,
        ].filter(Boolean);
        if (microItems.length > 0) {
          gsap.set(microItems, { autoAlpha: 0, y: 6 });
        }

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        if (badgeRef.current) {
          tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.0);
        }

        tl.to(
          split.lines,
          {
            filter: "blur(0px)",
            yPercent: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.15,
          },
          0.1
        );

        if (paraRef.current) {
          tl.to(
            paraRef.current,
            { autoAlpha: 1, y: 0, duration: 0.5 },
            "-=0.55"
          );
        }
        if (ctaRef.current) {
          tl.to(
            ctaRef.current,
            { autoAlpha: 1, y: 0, duration: 0.5 },
            "-=0.35"
          );
        }
        if (microItems.length > 0) {
          tl.to(
            microItems,
            { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 },
            "-=0.25"
          );
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center"
    >
      <MathShaderBackground />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-24 pt-36 sm:gap-8 sm:pt-44 md:px-10 lg:px-16">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 backdrop-blur-sm"
        >
          <span className="text-[10px] uppercase tracking-[0.08em] text-blue-600 dark:text-blue-300">
            {badgeLabel}
          </span>
          <span className="h-1 w-1 rounded-full bg-blue-600 dark:bg-blue-400" />
          <span className="text-xs tracking-tight text-blue-700 dark:text-blue-200">
            {badgeText}
          </span>
        </div>

        <h1
          ref={headerRef}
          className="max-w-2xl font-bold text-left text-5xl text-gray-900 dark:text-white sm:text-6xl md:text-7xl"
        >
          {title}
        </h1>

        <p
          ref={paraRef}
          className="max-w-xl text-left text-base leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 sm:text-lg"
        >
          {description}
        </p>

        <div ref={ctaRef} className="flex flex-wrap items-center gap-3 pt-2">
          {ctaButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`rounded-2xl border px-5 py-3 text-sm tracking-tight transition-colors focus:outline-none focus:ring-2 duration-300 ${
                button.primary
                  ? "border-blue-500 bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
                  : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500"
              }`}
            >
              {button.text}
            </a>
          ))}
        </div>

        <ul
          ref={microRef}
          className="mt-8 flex flex-wrap gap-6 text-xs tracking-tight text-gray-600 dark:text-gray-400"
        >
          {microDetails.map((detail, index) => {
            const refMap = [microItem1Ref, microItem2Ref, microItem3Ref];
            return (
              <li
                key={index}
                ref={refMap[index]}
                className="flex items-center gap-2"
              >
                <span className="h-1 w-1 rounded-full bg-blue-500" /> {detail}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
