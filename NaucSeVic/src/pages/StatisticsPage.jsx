import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
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
import { BookOpen, CheckCircle, Zap, Calendar, TrendingUp } from "lucide-react";
import { useDarkMode } from "../contexts/DarkModeContext";

// --- Components ---

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
            : "bg-white/95 border-gray-200"
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
      <div className="container mx-auto p-4 md:p-8 max-w-7xl">
        {/* Hero Header Section */}
        <div
          className={`relative rounded-3xl overflow-hidden mb-8 p-8 lg:p-12 ${
            darkMode
              ? "bg-gradient-to-br from-purple-950/30 via-violet-950/20 to-fuchsia-950/30 border border-purple-500/20"
              : "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] shadow-gray-300/50"
          }`}
        >
          {/* Futuristic background effects */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${
                darkMode ? "bg-purple-600/10" : "bg-purple-200/30"
              }`}
              style={{ transform: "translate(30%, -30%)" }}
            />
            <div
              className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${
                darkMode ? "bg-fuchsia-600/10" : "bg-fuchsia-200/30"
              }`}
              style={{ transform: "translate(-30%, 30%)" }}
            />
          </div>

          <div className="relative z-10">
            <h1
              className={`text-4xl lg:text-6xl font-black mb-4 ${
                darkMode
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-300 to-fuchsia-300"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-violet-700 to-fuchsia-700"
              }`}
            >
              Váš Pokrok
            </h1>
            <p
              className={`text-base lg:text-lg ${
                darkMode ? "text-purple-200/70" : "text-gray-600"
              }`}
            >
              Detailní přehled vašich úspěchů a statistik
            </p>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Zap}
            title="Celkem XP"
            value={userStats.totalXp}
            color={darkMode ? "text-amber-400" : "text-amber-600"}
            isDarkMode={darkMode}
          />
          <StatCard
            icon={CheckCircle}
            title="Splněné úkoly"
            value={userStats.totalTasks}
            color={darkMode ? "text-emerald-400" : "text-emerald-600"}
            isDarkMode={darkMode}
          />
          <StatCard
            icon={BookOpen}
            title="Dokončené lekce"
            value={userStats.totalLessons}
            color={darkMode ? "text-blue-400" : "text-blue-600"}
            isDarkMode={darkMode}
          />
          <StatCard
            icon={Calendar}
            title="Dny aktivity"
            value={userStats.loginDays}
            color={darkMode ? "text-purple-400" : "text-purple-600"}
            isDarkMode={darkMode}
          />
        </div>

        {/* Main Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* XP Chart */}
          <div
            className={`relative rounded-2xl overflow-hidden p-6 transition-all duration-300 ${
              darkMode
                ? "bg-gradient-to-br from-purple-950/40 to-violet-950/40 border border-purple-500/20"
                : "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100"
            }`}
          >
            {/* Decorative element */}
            <div
              className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl ${
                darkMode ? "bg-purple-500/10" : "bg-purple-100/50"
              }`}
            />

            <div className="relative z-10">
              <h2
                className={`text-xl font-bold mb-6 flex items-center gap-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    darkMode ? "bg-purple-500/20" : "bg-amber-100"
                  }`}
                >
                  <Zap
                    className={`w-5 h-5 ${darkMode ? "text-amber-400" : "text-amber-600"}`}
                    strokeWidth={2.5}
                  />
                </div>
                Týdenní XP
              </h2>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={weeklyActivity}>
                    <defs>
                      <linearGradient id="colorXp" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor={darkMode ? "#a78bfa" : "#8b5cf6"}
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor={darkMode ? "#c084fc" : "#a855f7"}
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke={
                        darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"
                      }
                    />
                    <XAxis
                      dataKey="name"
                      stroke={darkMode ? "#a78bfa" : "#8b5cf6"}
                      tick={{
                        fill: darkMode ? "#a78bfa" : "#8b5cf6",
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                      tickLine={false}
                    />
                    <YAxis
                      stroke={darkMode ? "#a78bfa" : "#8b5cf6"}
                      tick={{
                        fill: darkMode ? "#a78bfa" : "#8b5cf6",
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                      tickLine={false}
                    />
                    <Tooltip
                      content={<CustomChartTooltip isDarkMode={darkMode} />}
                      cursor={{
                        stroke: darkMode ? "#a78bfa" : "#8b5cf6",
                        strokeWidth: 2,
                        strokeDasharray: "4 4",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="xp"
                      stroke={darkMode ? "#a78bfa" : "#8b5cf6"}
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorXp)"
                      animationDuration={2000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Tasks Chart */}
          <div
            className={`relative rounded-2xl overflow-hidden p-6 transition-all duration-300 ${
              darkMode
                ? "bg-gradient-to-br from-purple-950/40 to-violet-950/40 border border-purple-500/20"
                : "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100"
            }`}
          >
            {/* Decorative element */}
            <div
              className={`absolute bottom-0 left-0 w-32 h-32 rounded-full blur-2xl ${
                darkMode ? "bg-fuchsia-500/10" : "bg-emerald-100/50"
              }`}
            />

            <div className="relative z-10">
              <h2
                className={`text-xl font-bold mb-6 flex items-center gap-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    darkMode ? "bg-purple-500/20" : "bg-emerald-100"
                  }`}
                >
                  <CheckCircle
                    className={`w-5 h-5 ${darkMode ? "text-emerald-400" : "text-emerald-600"}`}
                    strokeWidth={2.5}
                  />
                </div>
                Splněné úkoly
              </h2>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyActivity}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke={
                        darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"
                      }
                    />
                    <XAxis
                      dataKey="name"
                      stroke={darkMode ? "#a78bfa" : "#8b5cf6"}
                      tick={{
                        fill: darkMode ? "#a78bfa" : "#8b5cf6",
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                      tickLine={false}
                    />
                    <YAxis
                      stroke={darkMode ? "#a78bfa" : "#8b5cf6"}
                      tick={{
                        fill: darkMode ? "#a78bfa" : "#8b5cf6",
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                      tickLine={false}
                    />
                    <Tooltip
                      content={<CustomChartTooltip isDarkMode={darkMode} />}
                      cursor={{
                        fill: darkMode
                          ? "rgba(168, 139, 250, 0.05)"
                          : "rgba(139, 92, 246, 0.05)",
                      }}
                    />
                    <Bar
                      dataKey="tasks"
                      fill={darkMode ? "#a78bfa" : "#8b5cf6"}
                      radius={[8, 8, 0, 0]}
                      animationDuration={2000}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StatisticsPage;
