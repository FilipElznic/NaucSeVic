import React, { useRef, useEffect, useState, useCallback } from "react";
import { RotateCcw } from "lucide-react";

const CANVAS_W = 640;
const CANVAS_H = 420;

function drawArrow(ctx, fromX, fromY, toX, toY, color) {
  const headLen = 14;
  const dx = toX - fromX;
  const dy = toY - fromY;
  const ang = Math.atan2(dy, dx);
  ctx.beginPath();
  ctx.moveTo(toX, toY);
  ctx.lineTo(
    toX - headLen * Math.cos(ang - Math.PI / 6),
    toY - headLen * Math.sin(ang - Math.PI / 6),
  );
  ctx.lineTo(
    toX - headLen * Math.cos(ang + Math.PI / 6),
    toY - headLen * Math.sin(ang + Math.PI / 6),
  );
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

const MEDIA = [
  { label: "Vzduch", n: 1.0 },
  { label: "Voda", n: 1.33 },
  { label: "Sklo", n: 1.5 },
  { label: "Diamant", n: 2.42 },
];

const LightRay = () => {
  const canvasRef = useRef(null);
  const [angle, setAngle] = useState(40);
  const [n2Index, setN2Index] = useState(2); // glass by default

  const n1 = 1.0;
  const n2 = MEDIA[n2Index].n;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = CANVAS_W;
    const H = CANVAS_H;
    const cx = W / 2;
    const cy = H / 2;
    const RAY_LEN = 160;

    ctx.clearRect(0, 0, W, H);

    // ---- Backgrounds ----
    // Top: air
    const airGrad = ctx.createLinearGradient(0, 0, 0, cy);
    airGrad.addColorStop(0, "rgba(186,230,253,0.25)");
    airGrad.addColorStop(1, "rgba(186,230,253,0.08)");
    ctx.fillStyle = airGrad;
    ctx.fillRect(0, 0, W, cy);

    // Bottom: medium
    const medGrad = ctx.createLinearGradient(0, cy, 0, H);
    medGrad.addColorStop(0, "rgba(99,102,241,0.18)");
    medGrad.addColorStop(1, "rgba(99,102,241,0.06)");
    ctx.fillStyle = medGrad;
    ctx.fillRect(0, cy, W, H - cy);

    // ---- Medium labels ----
    ctx.font = "bold 13px Arial";
    ctx.fillStyle = "rgba(59,130,246,0.85)";
    ctx.fillText("Vzduch  (n₁ = 1.0)", 12, 24);
    ctx.fillStyle = "rgba(99,102,241,0.85)";
    ctx.fillText(
      `${MEDIA[n2Index].label}  (n₂ = ${n2.toFixed(2)})`,
      12,
      cy + 22,
    );

    // ---- Boundary line ----
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(W, cy);
    ctx.strokeStyle = "rgba(148,163,184,0.7)";
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 6]);
    ctx.stroke();
    ctx.setLineDash([]);

    // ---- Normal (vertical dashed) ----
    ctx.beginPath();
    ctx.moveTo(cx, cy - 130);
    ctx.lineTo(cx, cy + 130);
    ctx.strokeStyle = "rgba(148,163,184,0.5)";
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.stroke();
    ctx.setLineDash([]);

    // ---- Incident ray ----
    const theta1 = (angle * Math.PI) / 180;
    const incX = cx - Math.sin(theta1) * RAY_LEN;
    const incY = cy - Math.cos(theta1) * RAY_LEN;

    ctx.beginPath();
    ctx.moveTo(incX, incY);
    ctx.lineTo(cx, cy);
    ctx.strokeStyle = "#fcd34d";
    ctx.lineWidth = 3;
    ctx.shadowColor = "#fcd34d";
    ctx.shadowBlur = 8;
    ctx.stroke();
    ctx.shadowBlur = 0;
    drawArrow(ctx, incX, incY, cx, cy, "#fcd34d");

    // ---- Reflected ray (dashed orange) ----
    const refX = cx + Math.sin(theta1) * RAY_LEN;
    const refY = cy - Math.cos(theta1) * RAY_LEN;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(refX, refY);
    ctx.strokeStyle = "#fb923c";
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 5]);
    ctx.stroke();
    ctx.setLineDash([]);

    // ---- Snell's law: refracted ray ----
    const sinTheta2 = (n1 * Math.sin(theta1)) / n2;
    const tir = Math.abs(sinTheta2) > 1;

    if (!tir) {
      const theta2 = Math.asin(sinTheta2);
      const rfrX = cx + Math.sin(theta2) * RAY_LEN;
      const rfrY = cy + Math.cos(theta2) * RAY_LEN;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(rfrX, rfrY);
      ctx.strokeStyle = "#fcd34d";
      ctx.lineWidth = 3;
      ctx.shadowColor = "#fcd34d";
      ctx.shadowBlur = 8;
      ctx.stroke();
      ctx.shadowBlur = 0;
      drawArrow(ctx, cx, cy, rfrX, rfrY, "#fcd34d");

      // Angle arc - incidence
      ctx.beginPath();
      ctx.arc(cx, cy, 42, -Math.PI / 2, -Math.PI / 2 + theta1, false);
      ctx.strokeStyle = "#fcd34d88";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Angle arc - refraction
      ctx.beginPath();
      ctx.arc(cx, cy, 42, Math.PI / 2 - theta2, Math.PI / 2, false);
      ctx.strokeStyle = "#a5f3fc88";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Labels
      ctx.font = "bold 14px Arial";
      ctx.fillStyle = "#fcd34d";
      ctx.fillText(`θ₁ = ${angle}°`, cx - 52, cy - 18);
      ctx.fillStyle = "#a5f3fc";
      ctx.fillText(
        `θ₂ = ${Math.round((theta2 * 180) / Math.PI)}°`,
        cx + 10,
        cy + 38,
      );
    } else {
      // Total internal reflection message
      ctx.font = "bold 16px Arial";
      ctx.fillStyle = "#f87171";
      ctx.shadowColor = "#f87171";
      ctx.shadowBlur = 6;
      ctx.fillText("Totální vnitřní odraz!", cx - 95, cy + 70);
      ctx.shadowBlur = 0;
    }

    // ---- Snell formula display ----
    ctx.font = "13px Arial";
    ctx.fillStyle = "rgba(148,163,184,0.9)";
    ctx.fillText(`n₁·sin(θ₁) = n₂·sin(θ₂)`, W - 190, H - 12);
  }, [angle, n2, n2Index]);

  useEffect(() => {
    draw();
  }, [draw]);

  const handleReset = () => setAngle(40);

  return (
    <div className="w-full relative">
      <canvas
        ref={canvasRef}
        width={CANVAS_W}
        height={CANVAS_H}
        className="w-full rounded-2xl"
        style={{ background: "transparent" }}
      />

      {/* Reset */}
      <div className="absolute top-4 right-4">
        <button
          onClick={handleReset}
          className="p-3 bg-white/90 dark:bg-zinc-800/90 backdrop-blur text-slate-700 dark:text-slate-200 rounded-full shadow-lg border border-slate-200 dark:border-zinc-700 hover:scale-110 active:scale-95 transition-all"
          title="Resetovat"
        >
          <RotateCcw size={18} />
        </button>
      </div>

      {/* Controls */}
      <div className="mt-4 space-y-3 px-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300 w-44 shrink-0">
            Úhel dopadu θ₁: <strong>{angle}°</strong>
          </span>
          <input
            type="range"
            min={0}
            max={89}
            value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
            className="flex-1 accent-yellow-400"
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300 w-44 shrink-0">
            Druhé prostředí:
          </span>
          <div className="flex gap-2 flex-wrap">
            {MEDIA.map((m, i) => (
              <button
                key={i}
                onClick={() => setN2Index(i)}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                  n2Index === i
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white dark:bg-zinc-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-zinc-700 hover:border-indigo-400"
                }`}
              >
                {m.label} ({m.n})
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightRay;
