import React, { useEffect, useState, useRef, useCallback } from "react";
import Layout from "../components/layout/Layout";
import { gsap } from "gsap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import cloudFunctionsService from "../services/cloudFunctions";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import {
  BookOpen,
  CheckCircle,
  Zap,
  Calendar,
  TrendingUp,
  Wallet,
  ListTodo,
} from "lucide-react";
import { useDarkMode } from "../contexts/DarkModeContext";

const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "132, 0, 255";

const calculateSpotlightValues = (radius) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
});

const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--glow-x", `${relativeX}%`);
  card.style.setProperty("--glow-y", `${relativeY}%`);
  card.style.setProperty("--glow-intensity", glow.toString());
  card.style.setProperty("--glow-radius", `${radius}px`);
};

// --- Components ---

const GlobalSpotlight = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
  isDarkMode = true,
}) => {
  const spotlightRef = useRef(null);
  const isInsideSection = useRef(false);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    // Create spotlight element
    // Check if it already exists to avoid duplicates if effect runs twice
    let spotlight = spotlightRef.current;
    if (!spotlight) {
        spotlight = document.createElement("div");
        spotlight.className = "global-spotlight";
        spotlightRef.current = spotlight;
        document.body.appendChild(spotlight);
    }
    
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: ${isDarkMode ? "screen" : "normal"};
    `;

    const handleMouseMove = (e) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current; // Directly use gridRef as section
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      isInsideSection.current = mouseInside || false;
      const cards = gridRef.current.querySelectorAll(".card");

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        cards.forEach((card) => {
          card.style.setProperty("--glow-intensity", "0");
        });
        return;
      }

      const { proximity, fadeDistance } =
        calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach((card) => {
        const cardElement = card;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) -
          Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity =
            (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(
          cardElement,
          e.clientX,
          e.clientY,
          glowIntensity,
          spotlightRadius,
        );
      });

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
            : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      isInsideSection.current = false;
      if (gridRef.current) {
        gridRef.current.querySelectorAll(".card").forEach((card) => {
            card.style.setProperty("--glow-intensity", "0");
        });
      }
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (spotlightRef.current && spotlightRef.current.parentNode) {
        spotlightRef.current.parentNode.removeChild(spotlightRef.current);
      }
      spotlightRef.current = null;
    };
  }, [
    gridRef,
    disableAnimations,
    enabled,
    spotlightRadius,
    glowColor,
    isDarkMode,
  ]);

  return null;
};

const MeasuredContainer = ({ children }) => {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setReady(true);
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
    >
      {ready ? children : null}
    </div>
  );
};

const BentoItem = ({
  children,
  className = "",
  style = {},
  padding = "p-6",
  isDarkMode = true,
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border transition-all duration-300 ${padding} ${className} card group hover:-translate-y-1 ${
        isDarkMode
          ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/30 shadow-lg shadow-black/20 hover:shadow-purple-500/10"
          : "bg-white border-gray-200 hover:border-purple-200 shadow-xl shadow-gray-200/50 hover:shadow-purple-200/50"
      }`}
      style={style}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(
            var(--glow-radius, 0px) circle at var(--glow-x, 50%) var(--glow-y, 50%),
            rgba(${DEFAULT_GLOW_COLOR.split(",").join(",")}, var(--glow-intensity, 0)) 0%,
            transparent 100%
          )`,
        }}
      />
      {children}
    </div>
  );
};

const StatCard = ({ icon: Icon, title, value, color, isDarkMode }) => (
  <div
    className={`relative rounded-2xl overflow-hidden p-6 transition-all duration-300 transform hover:scale-[1.02] ${
      isDarkMode
        ? "bg-gradient-to-br from-purple-950/40 to-violet-950/40 border border-purple-500/20 hover:border-purple-400/30"
        : "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-gray-100"
    }`}
  >
    {/* Decorative glow effect */}
    <div
      className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl ${
        isDarkMode ? "bg-purple-500/10" : "bg-purple-100/50"
      }`}
    />

    <div className="relative z-10 flex items-center gap-4">
      <div
        className={`p-3 rounded-xl ${
          isDarkMode
            ? "bg-purple-500/20 backdrop-blur-sm"
            : "bg-gradient-to-br from-purple-100 to-violet-100"
        }`}
      >
        <Icon className={`w-6 h-6 ${color}`} strokeWidth={2.5} />
      </div>
      <div>
        <p
          className={`text-sm font-medium ${
            isDarkMode ? "text-purple-300/70" : "text-gray-600"
          }`}
        >
          {title}
        </p>
        <p
          className={`text-2xl font-black mt-1 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  </div>
);

const ActivityCalendar = ({ activityHistory, isDarkMode }) => {
  const months = [
    "Leden",
    "Únor",
    "Březen",
    "Duben",
    "Květen",
    "Červen",
    "Červenec",
    "Srpen",
    "Září",
    "Říjen",
    "Listopad",
    "Prosinec",
  ];

  // Generate last 365 days (approx 52 weeks)
  const today = new Date();
  const weeks = [];
  let currentGroup = [];

  // Start from 365 days ago
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 364);

  // Adjust to start on Monday (for aesthetics) if needed,
  // currently just rendering grid top-left to bottom-right flow or column-major
  // Standard GitHub graph is Column-Major (Sun-Sat or Mon-Sun)

  // Let's do a simple 53 columns x 7 rows grid
  // We need to generate dates first
  const calendarData = []; // Array of { date, value, intensity }

  for (let i = 0; i < 365 + today.getDay(); i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    if (d > today) break;

    const dateStr = d.toISOString().split("T")[0];
    const historyItem = activityHistory?.[dateStr];
    const value = historyItem?.value || 0;

    // Intensity 0-4
    let intensity = 0;
    if (value > 0) intensity = 1;
    if (value > 2) intensity = 2;
    if (value > 5) intensity = 3;
    if (value > 10) intensity = 4;

    calendarData.push({
      date: dateStr,
      value,
      intensity,
      dayOfWeek: d.getDay(),
    });
  }

  // Transform into columns of 7 days
  const cols = [];
  let currentCol = [];

  // Pad the first column if start date isn't Sunday (0) [GitHub uses Sunday as row 0]
  // Let's say Row 0 = Sunday, Row 6 = Saturday
  const startDay = new Date(calendarData[0]?.date).getDay();
  for (let i = 0; i < startDay; i++) {
    currentCol.push(null);
  }

  calendarData.forEach((day) => {
    currentCol.push(day);
    if (currentCol.length === 7) {
      cols.push(currentCol);
      currentCol = [];
    }
  });
  if (currentCol.length > 0) cols.push(currentCol);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden p-6 transition-all duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-purple-950/40 to-violet-950/40 border border-purple-500/20"
          : "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100"
      }`}
    >
      {/* Decorative background */}
      <div
        className={`absolute bottom-0 left-0 w-32 h-32 rounded-full blur-3xl ${
          isDarkMode ? "bg-fuchsia-500/10" : "bg-fuchsia-100/50"
        }`}
      />

      <div className="relative z-10">
        <h2
          className={`text-xl font-bold mb-6 flex items-center gap-2 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          <div
            className={`p-2 rounded-lg ${
              isDarkMode ? "bg-purple-500/20" : "bg-purple-100"
            }`}
          >
            <Calendar
              className={`w-5 h-5 ${isDarkMode ? "text-purple-300" : "text-purple-600"}`}
            />
          </div>
          Aktivita v kalendáři
        </h2>
        <div className="overflow-x-auto">
          <div className="min-w-[800px] flex flex-col gap-2">
            {/* Months - Simplified rendering */}
            <div className="flex text-xs text-gray-400 mb-2 pl-8">
              {/* Approximate month labels logic would be complex, just showing quarters/static for now or skip */}
            </div>

            <div className="flex gap-1">
              {/* Days Labels */}
              <div
                className={`flex flex-col gap-1 text-xs mr-2 justify-between py-1 ${
                  isDarkMode ? "text-purple-300/60" : "text-gray-500"
                }`}
              >
                <span>Ne</span>
                <span>&nbsp;</span>
                <span>Út</span>
                <span>&nbsp;</span>
                <span>Čt</span>
                <span>&nbsp;</span>
                <span>So</span>
              </div>

              {/* Grid */}
              {cols.map((col, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-1">
                  {col.map((day, dayIndex) => {
                    if (!day)
                      return (
                        <div key={`empty-${dayIndex}`} className="w-3 h-3" />
                      );

                    const colors = isDarkMode
                      ? [
                          "bg-gray-800/50", // 0
                          "bg-purple-900/50", // 1
                          "bg-purple-700/70", // 2
                          "bg-purple-600", // 3
                          "bg-purple-500", // 4
                        ]
                      : [
                          "bg-gray-100", // 0
                          "bg-purple-200", // 1
                          "bg-purple-300", // 2
                          "bg-purple-400", // 3
                          "bg-purple-500", // 4
                        ];

                    return (
                      <div
                        key={day.date}
                        className={`w-3 h-3 rounded-sm ${colors[day.intensity]} hover:ring-2 ${
                          isDarkMode
                            ? "ring-purple-400/50"
                            : "ring-purple-500/50"
                        } transition-all cursor-default relative group`}
                      >
                        <div
                          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-50 whitespace-nowrap text-xs px-2 py-1 rounded shadow-lg pointer-events-none ${
                            isDarkMode
                              ? "bg-gray-900 text-white"
                              : "bg-gray-800 text-white"
                          }`}
                        >
                          {new Date(day.date).toLocaleDateString("cs-CZ")}:{" "}
                          {day.value} akcí
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <div
              className={`flex items-center gap-2 text-xs mt-4 justify-end ${
                isDarkMode ? "text-purple-300/60" : "text-gray-500"
              }`}
            >
              <span>Méně</span>
              {(isDarkMode
                ? [
                    "bg-gray-800/50",
                    "bg-purple-900/50",
                    "bg-purple-600",
                    "bg-purple-500",
                  ]
                : [
                    "bg-gray-100",
                    "bg-purple-200",
                    "bg-purple-400",
                    "bg-purple-500",
                  ]
              ).map((color, i) => (
                <div key={i} className={`w-3 h-3 rounded-sm ${color}`}></div>
              ))}
              <span>Více</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomChartTooltip = ({ active, payload, label, isDarkMode }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className={`p-3 border rounded-xl shadow-lg backdrop-blur-sm ${
          isDarkMode
            ? "bg-gray-900/95 border-purple-500/30"
            : "bg-white/95 border-gray-500"
        }`}
      >
        <p
          className={`text-xs mb-1 font-semibold ${
            isDarkMode ? "text-purple-300/70" : "text-gray-600"
          }`}
        >
          {label}
        </p>
        <p
          className={`font-bold ${
            isDarkMode ? "text-purple-300" : "text-purple-600"
          }`}
        >
          {payload[0].value} {payload[0].name === "xp" ? "XP" : "Úkolů"}
        </p>
      </div>
    );
  }
  return null;
};

const StatisticsPage = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { darkMode } = useDarkMode();
  const gridRef = useRef(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await cloudFunctionsService.getUserStatistics();
        setStats(data);
      } catch (err) {
        console.error("Failed to fetch statistics:", err);
        setError("Nepodařilo se načíst statistiky.");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[50vh]">
          <LoadingSpinner size="lg" />
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[50vh] text-red-500">
          {error}
        </div>
      </Layout>
    );
  }

  const { weeklyActivity, stats: userStats } = stats;

  return (
    <Layout>
      <GlobalSpotlight gridRef={gridRef} isDarkMode={darkMode} />
      <div
        ref={gridRef}
        className="container mx-auto p-4 md:p-8 max-w-[1600px] overflow-hidden"
      >
        {/* Main Header */}
        <div className="text-center mb-12 mt-8">
          <h1
            className={`text-6xl md:text-8xl font-black mb-4 pb-4 ${
              darkMode
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-300 to-fuchsia-300"
                : "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-violet-700 to-fuchsia-700"
            }`}
          >
            Statistiky
          </h1>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              darkMode ? "text-purple-200/70" : "text-gray-600"
            }`}
          >
            Detailní přehled o tvém studiu a postupu. Podívej se, jak se
            zlepšuješ.
          </p>
        </div>

        {/* Big XP Graph Section */}
        <div className="w-full flex justify-center mb-24">
          <BentoItem
            className="w-full max-w-[90%] lg:max-w-[80%] h-[400px] md:h-[500px]"
            padding="p-0"
            isDarkMode={darkMode}
          >
            {/* Header for context */}
            <div className="absolute top-6 left-6 z-20">
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md ${
                  darkMode
                    ? "bg-purple-500/10 border border-purple-500/20 text-purple-200"
                    : "bg-white/80 border border-purple-200 text-purple-700"
                }`}
              >
                <Zap size={18} />
                <span className="font-bold">Týdenní XP Aktivita</span>
              </div>
            </div>

            <MeasuredContainer>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={weeklyActivity}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="xpGradientBig"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor={darkMode ? "#a78bfa" : "#8b5cf6"}
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="100%"
                        stopColor={darkMode ? "#c084fc" : "#a855f7"}
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={
                      darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
                    }
                  />
                  <XAxis
                    dataKey="name"
                    tick={{
                      fill: darkMode ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
                      fontSize: 12,
                    }}
                    axisLine={false}
                    tickLine={false}
                    interval={0}
                  />
                  <Tooltip
                    cursor={{
                      stroke: darkMode
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(0,0,0,0.1)",
                      strokeWidth: 2,
                    }}
                    contentStyle={{
                      backgroundColor: darkMode
                        ? "rgba(15, 16, 22, 0.9)"
                        : "rgba(255, 255, 255, 0.9)",
                      border: darkMode
                        ? "1px solid rgba(168, 139, 250, 0.2)"
                        : "1px solid rgba(229, 231, 235, 1)",
                      borderRadius: "12px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                      backdropFilter: "blur(8px)",
                    }}
                    itemStyle={{
                      color: darkMode ? "#fff" : "#000",
                      fontWeight: 700,
                    }}
                    labelStyle={{ display: "none" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="xp"
                    stroke={darkMode ? "#a78bfa" : "#8b5cf6"}
                    strokeWidth={4}
                    fill="url(#xpGradientBig)"
                    animationDuration={1500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </MeasuredContainer>
          </BentoItem>
        </div>

        {/* Detailed Stats Section */}
        <div className="w-full mt-12 col-span-full mb-24">
          <div
            className={`relative rounded-3xl overflow-hidden transition-all duration-300 `}
          >
            {/* Content Container */}
            <div className="relative z-10 p-4 lg:p-12 ">
              {/* Header Section */}
              <div className="text-start mb-12">
                <h2
                  className={`text-4xl lg:text-7xl font-black mb-4 pb-4 ${
                    darkMode
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-300 to-fuchsia-300"
                      : "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-violet-700 to-fuchsia-700"
                  }`}
                >
                  Detailní přehled úkolů
                </h2>
                <div className="w-24 h-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full mb-6"></div>
              </div>

              {/* SECTION 1: Tasks */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-24">
                {/* Left Column: Text Description */}
                <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
                  <h3
                    className={`text-3xl lg:text-5xl font-black leading-tight ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Splněné úkoly <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                      každý týden
                    </span>
                  </h3>

                  <p
                    className={`text-lg leading-relaxed ${
                      darkMode ? "text-purple-200/70" : "text-gray-600"
                    }`}
                  >
                    Sleduj, kolik úkolů se ti podařilo dokončit. Pravidelné
                    plnění úkolů je klíčem k úspěchu. Graf ti ukáže tvou
                    produktivitu v jednotlivých dnech.
                  </p>

                  <div className="flex gap-4 mt-4">
                    <StatCard
                      icon={CheckCircle}
                      title="Hotové úkoly"
                      value={userStats.totalTasks}
                      color={darkMode ? "text-emerald-400" : "text-emerald-600"}
                      isDarkMode={darkMode}
                    />
                  </div>
                </div>

                {/* Right Column: Tasks Graph */}
                <BentoItem
                  className="min-h-[400px] flex flex-col gap-6 order-1 lg:order-2"
                  padding="p-6 md:p-8"
                  isDarkMode={darkMode}
                >
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-2 rounded-lg ${darkMode ? "bg-emerald-500/20 text-emerald-300" : "bg-emerald-100 text-emerald-600"}`}
                      >
                        <ListTodo size={20} />
                      </div>
                      <h4
                        className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
                      >
                        Aktivita úkolů
                      </h4>
                    </div>
                    <MeasuredContainer>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={weeklyActivity}>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke={
                              darkMode
                                ? "rgba(255,255,255,0.05)"
                                : "rgba(0,0,0,0.05)"
                            }
                          />
                          <Bar
                            dataKey="tasks"
                            fill={darkMode ? "#34d399" : "#10b981"}
                            radius={[8, 8, 0, 0]}
                          />
                          <XAxis
                            dataKey="name"
                            tick={{
                              fill: darkMode ? "#9ca3af" : "#4b5563",
                              fontSize: 12,
                            }}
                            tickLine={false}
                            axisLine={false}
                          />
                          <Tooltip
                            cursor={{ fill: "transparent" }}
                            contentStyle={{
                              backgroundColor: darkMode ? "#1f2937" : "#fff",
                              borderColor: darkMode ? "#374151" : "#e5e7eb",
                              borderRadius: "8px",
                            }}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </MeasuredContainer>
                  </div>
                </BentoItem>
              </div>

              {/* SECTION 2: XP/Coins */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Column: XP/Coins Graph - Alternating Layout */}
                <BentoItem
                  className="min-h-[400px] flex flex-col gap-6 order-1"
                  padding="p-6 md:p-8"
                  isDarkMode={darkMode}
                >
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-2 rounded-lg ${darkMode ? "bg-amber-500/20 text-amber-300" : "bg-amber-100 text-amber-600"}`}
                      >
                        <Wallet size={20} />
                      </div>
                      <h4
                        className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
                      >
                        Získané mince
                      </h4>
                    </div>
                    <MeasuredContainer>
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={weeklyActivity}>
                          <defs>
                            <linearGradient
                              id="coinsGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#fbbf24"
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="95%"
                                stopColor="#fbbf24"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke={
                              darkMode
                                ? "rgba(255,255,255,0.05)"
                                : "rgba(0,0,0,0.05)"
                            }
                          />
                          <Area
                            type="monotone"
                            dataKey="coinsGained"
                            stroke="#fbbf24"
                            fill="url(#coinsGradient)"
                            strokeWidth={3}
                          />
                          <XAxis
                            dataKey="name"
                            tick={{
                              fill: darkMode ? "#9ca3af" : "#4b5563",
                              fontSize: 12,
                            }}
                            axisLine={false}
                            tickLine={false}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: darkMode ? "#1f2937" : "#fff",
                              borderColor: darkMode ? "#374151" : "#e5e7eb",
                              borderRadius: "8px",
                            }}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </MeasuredContainer>
                  </div>
                </BentoItem>

                {/* Right Column: Text Description */}
                <div className="flex flex-col justify-center space-y-8 order-2">
                  <h3
                    className={`text-3xl lg:text-5xl font-black leading-tight ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Sbírání mincí <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                      za aktivitu
                    </span>
                  </h3>

                  <p
                    className={`text-lg leading-relaxed ${
                      darkMode ? "text-purple-200/70" : "text-gray-600"
                    }`}
                  >
                    Získávej mince za každou dokončenou lekci a splněný úkol.
                    Využij je v obchodě pro nákup boosterů a speciálních
                    vylepšení.
                  </p>

                  <div className="flex gap-4 mt-4">
                    <StatCard
                      icon={Wallet}
                      title="Mince v týdnu"
                      value={weeklyActivity.reduce(
                        (acc, cur) => acc + (cur.coinsGained || 0),
                        0,
                      )}
                      color={darkMode ? "text-amber-400" : "text-amber-600"}
                      isDarkMode={darkMode}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StatisticsPage;
