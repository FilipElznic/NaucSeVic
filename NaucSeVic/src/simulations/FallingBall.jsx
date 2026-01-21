import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { RotateCcw } from "lucide-react";

const FallingBall = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const runnerRef = useRef(null);
  const ballRef = useRef(null);

  // We use a state to force re-render if needed, but mostly for the button connection
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    // Module aliases
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint,
      Events = Matter.Events;

    // Create an engine
    const engine = Engine.create();
    engineRef.current = engine;

    // Get the element dimensions
    // Use the container's actual size or defaults
    const container = sceneRef.current;
    const width = container ? container.clientWidth : 800;
    const height = container ? container.clientHeight : 600;

    // Create a renderer
    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio,
      },
    });
    renderRef.current = render;

    // --- Create Bodies ---

    // A ball falling from the top
    const ballRadius = 40;
    const ball = Bodies.circle(width / 2, 80, ballRadius, {
      restitution: 0.0, // No bounce
      friction: 0.005,
      density: 0.04,
      render: {
        fillStyle: "#8B5CF6", // Tailwind purple-500
        strokeStyle: "#7C3AED",
        lineWidth: 4,
      },
      label: "Ball",
    });
    ballRef.current = ball;

    // Ground - make it wide and positioned at bottom
    // Extend width to ensure ball doesn't slip through corners
    const ground = Bodies.rectangle(width / 2, height, width * 2, 60, {
      isStatic: true,
      render: {
        fillStyle: "#e5e7eb", // Tailwind gray-200
        visible: true,
      },
    });

    // Walls - invisible but essential
    const wallThickness = 100;
    const leftWall = Bodies.rectangle(
      0 - wallThickness / 2,
      height / 2,
      wallThickness,
      height * 5,
      {
        isStatic: true,
        render: { visible: false },
      },
    );
    const rightWall = Bodies.rectangle(
      width + wallThickness / 2,
      height / 2,
      wallThickness,
      height * 5,
      {
        isStatic: true,
        render: { visible: false },
      },
    );

    Composite.add(engine.world, [ball, ground, leftWall, rightWall]);

    // --- Interaction ---
    const mouse = Mouse.create(render.canvas);
    // Allow mouse to scroll over canvas without capturing it unless dragging
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // --- Custom Rendering (Force Vector) ---
    Events.on(render, "afterRender", function () {
      const context = render.context;
      const currentBall = ballRef.current;
      if (!currentBall) return;

      // Vector properties
      const start = currentBall.position;
      // Check if ball is roughly stopped on ground to stop drawing vector? No, gravity is always there.

      const vectorLength = 80;
      const end = { x: start.x, y: start.y + vectorLength };

      // Draw Arrow Line
      context.beginPath();
      context.moveTo(start.x, start.y);
      context.lineTo(end.x, end.y);
      context.lineWidth = 6;
      context.strokeStyle = "rgba(239, 68, 68, 0.8)";
      context.stroke();

      // Draw Arrow Head
      const headLength = 15;
      context.beginPath();
      context.moveTo(end.x, end.y);
      context.lineTo(end.x - 10, end.y - headLength);
      context.lineTo(end.x + 10, end.y - headLength);
      context.lineTo(end.x, end.y);
      context.fillStyle = "rgba(239, 68, 68, 1)";
      context.fill();

      // Draw Text "Fg"
      context.font = "bold 24px Arial";
      context.fillStyle = "#ef4444";
      context.fillText("F", end.x + 15, end.y - 10);
      context.font = "bold 16px Arial";
      context.fillText("g", end.x + 30, end.y - 5);
    });

    // Start
    Render.run(render);
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // Cleanup
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas) render.canvas.remove();
      // Safe cleanup of world if needed
      // Matter.World.clear(engine.world);
      Matter.Engine.clear(engine);
    };
  }, []); // Run once on mount

  const resetSimulation = () => {
    const ball = ballRef.current;
    if (!ball || !renderRef.current) return;

    setIsResetting(true);

    // Reset position to top center
    const width = renderRef.current.options.width;
    Matter.Body.setPosition(ball, { x: width / 2, y: 80 });
    Matter.Body.setVelocity(ball, { x: 0, y: 0 });
    Matter.Body.setAngularVelocity(ball, 0);

    setTimeout(() => setIsResetting(false), 500);
  };

  return (
    <div className="w-full h-full relative group">
      {/* Simulation Canvas Container */}
      <div
        ref={sceneRef}
        className="w-full h-full rounded-2xl overflow-hidden cursor-crosshair touch-none"
        style={{ minHeight: "400px" }}
      />

      {/* Floating Controls */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={resetSimulation}
          className={`p-3 bg-white/90 dark:bg-zinc-800/90 backdrop-blur text-slate-700 dark:text-slate-200 rounded-full shadow-lg border border-slate-200 dark:border-zinc-700 hover:scale-110 active:scale-95 transition-all ${isResetting ? "rotate-180 text-purple-600" : ""}`}
          title="Restartovat simulaci"
        >
          <RotateCcw size={20} />
        </button>
      </div>

      {/* Helper text overlay at bottom */}
      <div className="absolute top-4 left-0 right-0 text-center pointer-events-none opacity-60">
        <span className="px-3 py-1 bg-white/50 dark:bg-black/50 rounded-full text-xs font-medium text-slate-600 dark:text-slate-400">
          Chyť míč myší a hoď ho!
        </span>
      </div>
    </div>
  );
};

export default FallingBall;
