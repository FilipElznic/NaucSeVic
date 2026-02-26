import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { RotateCcw } from "lucide-react";

const Pendulum = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const runnerRef = useRef(null);
  const bobRef = useRef(null);
  const pivotRef = useRef(null);
  const [isResetting, setIsResetting] = useState(false);

  const ROPE_LENGTH = 200;

  useEffect(() => {
    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Constraint,
      Mouse,
      MouseConstraint,
      Events,
    } = Matter;

    const container = sceneRef.current;
    const width = container ? container.clientWidth : 800;
    const height = container ? container.clientHeight : 600;

    const engine = Engine.create();
    engineRef.current = engine;

    const render = Render.create({
      element: container,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio,
      },
    });
    renderRef.current = render;

    // Pivot (static, invisible)
    const pivotX = width / 2;
    const pivotY = 80;
    const pivot = Bodies.circle(pivotX, pivotY, 8, {
      isStatic: true,
      render: { fillStyle: "#6366f1", strokeStyle: "#4338ca", lineWidth: 3 },
      label: "Pivot",
    });
    pivotRef.current = pivot;

    // Bob – starts 30° to the right
    const startAngle = Math.PI / 6;
    const bobX = pivotX + Math.sin(startAngle) * ROPE_LENGTH;
    const bobY = pivotY + Math.cos(startAngle) * ROPE_LENGTH;
    const bob = Bodies.circle(bobX, bobY, 28, {
      restitution: 0.0,
      friction: 0.0,
      frictionAir: 0.002,
      density: 0.05,
      render: {
        fillStyle: "#8b5cf6",
        strokeStyle: "#6d28d9",
        lineWidth: 4,
      },
      label: "Bob",
    });
    bobRef.current = bob;

    // String constraint
    const string = Constraint.create({
      bodyA: pivot,
      bodyB: bob,
      length: ROPE_LENGTH,
      stiffness: 1,
      render: {
        visible: true,
        lineWidth: 4,
        strokeStyle: "#94a3b8",
        type: "line",
      },
    });

    // Ground (invisible, just in case)
    const ground = Bodies.rectangle(width / 2, height + 30, width * 2, 60, {
      isStatic: true,
      render: { visible: false },
    });

    Composite.add(engine.world, [pivot, bob, string, ground]);

    // Mouse interaction
    const mouse = Mouse.create(render.canvas);
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Custom rendering – angle arc + labels
    Events.on(render, "afterRender", () => {
      const ctx = render.context;
      const b = bobRef.current;
      const p = pivotRef.current;
      if (!b || !p) return;

      const dx = b.position.x - p.position.x;
      const dy = b.position.y - p.position.y;
      const deg = Math.round((Math.atan2(dx, dy) * 180) / Math.PI);

      // Draw arc showing angle from vertical
      const arcRadius = 55;
      ctx.beginPath();
      ctx.arc(
        p.position.x,
        p.position.y,
        arcRadius,
        Math.PI / 2,
        Math.PI / 2 + Math.atan2(dx, dy),
        dx < 0,
      );
      ctx.strokeStyle = "rgba(139,92,246,0.6)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Vertical reference line (dashed)
      ctx.beginPath();
      ctx.moveTo(p.position.x, p.position.y);
      ctx.lineTo(p.position.x, p.position.y + 70);
      ctx.strokeStyle = "rgba(148,163,184,0.4)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Angle label
      ctx.font = "bold 14px Arial";
      ctx.fillStyle = "#a78bfa";
      const labelX = p.position.x + (dx > 0 ? 14 : -60);
      ctx.fillText(`θ = ${Math.abs(deg)}°`, labelX, p.position.y + 42);

      // Speed label at bob
      const speed = Math.round(
        Math.sqrt(b.velocity.x ** 2 + b.velocity.y ** 2) * 10,
      );
      ctx.font = "12px Arial";
      ctx.fillStyle = "#fcd34d";
      ctx.fillText(`v = ${speed}`, b.position.x + 32, b.position.y - 6);
    });

    Render.run(render);
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas) render.canvas.remove();
      Matter.Engine.clear(engine);
    };
  }, []);

  const resetSimulation = () => {
    const bob = bobRef.current;
    const pivot = pivotRef.current;
    const render = renderRef.current;
    if (!bob || !pivot || !render) return;

    setIsResetting(true);
    const pivotX = pivot.position.x;
    const pivotY = pivot.position.y;
    const startAngle = Math.PI / 6;
    Matter.Body.setPosition(bob, {
      x: pivotX + Math.sin(startAngle) * ROPE_LENGTH,
      y: pivotY + Math.cos(startAngle) * ROPE_LENGTH,
    });
    Matter.Body.setVelocity(bob, { x: 0, y: 0 });
    Matter.Body.setAngularVelocity(bob, 0);
    setTimeout(() => setIsResetting(false), 500);
  };

  return (
    <div className="w-full h-full relative group">
      <div
        ref={sceneRef}
        className="w-full h-full rounded-2xl overflow-hidden cursor-crosshair touch-none"
        style={{ minHeight: "400px" }}
      />

      {/* Floating controls */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={resetSimulation}
          className={`p-3 bg-white/90 dark:bg-zinc-800/90 backdrop-blur text-slate-700 dark:text-slate-200 rounded-full shadow-lg border border-slate-200 dark:border-zinc-700 hover:scale-110 active:scale-95 transition-all ${isResetting ? "rotate-180 text-purple-600" : ""}`}
          title="Restartovat simulaci"
        >
          <RotateCcw size={20} />
        </button>
      </div>

      {/* Helper text */}
      <div className="absolute top-4 left-0 right-0 text-center pointer-events-none opacity-60">
        <span className="px-3 py-1 bg-white/50 dark:bg-black/50 rounded-full text-xs font-medium text-slate-600 dark:text-slate-400">
          Chyť kyvadlo myší a pusť ho!
        </span>
      </div>
    </div>
  );
};

export default Pendulum;
