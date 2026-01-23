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

// --- Components ---

const StatCard = ({ icon: Icon, title, value, color }) => (
  <div className="bg-white dark:bg-[#151725] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 transition-all hover:scale-[1.02] hover:shadow-md">
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-xl ${color} bg-opacity-10 backdrop-blur-sm`}>
        <Icon className={`w-6 h-6 ${color.replace("bg-", "text-")}`} />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
          {value}
        </p>
      </div>
    </div>
  </div>
);

const ActivityCalendar = ({ activityHistory }) => {
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
    <div className="bg-white dark:bg-[#151725] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
        <Calendar className="w-5 h-5 text-purple-500" />
        Aktivita v kalendáři
      </h2>
      <div className="min-w-[800px] flex flex-col gap-2">
        {/* Months - Simplified rendering */}
        <div className="flex text-xs text-gray-400 mb-2 pl-8">
          {/* Approximate month labels logic would be complex, just showing quarters/static for now or skip */}
        </div>

        <div className="flex gap-1">
          {/* Days Labels */}
          <div className="flex flex-col gap-1 text-xs text-gray-400 mr-2 justify-between py-1">
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
                  return <div key={`empty-${dayIndex}`} className="w-3 h-3" />;

                const colors = [
                  "bg-gray-100 dark:bg-gray-800", // 0
                  "bg-emerald-200 dark:bg-emerald-900", // 1
                  "bg-emerald-300 dark:bg-emerald-700", // 2
                  "bg-emerald-400 dark:bg-emerald-600", // 3
                  "bg-emerald-500 dark:bg-emerald-500", // 4
                ];

                return (
                  <div
                    key={day.date}
                    className={`w-3 h-3 rounded-sm ${colors[day.intensity]} hover:ring-2 ring-emerald-400/50 transition-all cursor-default relative group`}
                  >
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-50 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none">
                      {new Date(day.date).toLocaleDateString("cs-CZ")}:{" "}
                      {day.value} akcí
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-400 mt-4 justify-end">
          <span>Méně</span>
          <div className="w-3 h-3 rounded-sm bg-gray-100 dark:bg-gray-800"></div>
          <div className="w-3 h-3 rounded-sm bg-emerald-200 dark:bg-emerald-900"></div>
          <div className="w-3 h-3 rounded-sm bg-emerald-400 dark:bg-emerald-600"></div>
          <div className="w-3 h-3 rounded-sm bg-emerald-500 dark:bg-emerald-500"></div>
          <span>Více</span>
        </div>
      </div>
    </div>
  );
};

const CustomChartTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-[#1f2937] p-3 border border-gray-100 dark:border-gray-700 rounded-lg shadow-lg">
        <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">{label}</p>
        <p className="text-violet-600 dark:text-violet-400 font-bold">
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
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
            Váš Pokrok
          </span>
        </h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Zap}
            title="Celkem XP"
            value={userStats.totalXp}
            color="bg-amber-500 text-amber-500"
          />
          <StatCard
            icon={CheckCircle}
            title="Splněné úkoly"
            value={userStats.totalTasks}
            color="bg-green-500 text-green-500"
          />
          <StatCard
            icon={BookOpen}
            title="Dokončené lekce"
            value={userStats.totalLessons}
            color="bg-blue-500 text-blue-500"
          />
          <StatCard
            icon={Calendar}
            title="Dny aktivity"
            value={userStats.loginDays}
            color="bg-purple-500 text-purple-500"
          />
        </div>

        {/* Main Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* XP Chart */}
          <div className="bg-white dark:bg-[#151725] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
              <Zap className="w-5 h-5 text-amber-500" />
              Týdenní XP
            </h2>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyActivity}>
                  <defs>
                    <linearGradient id="colorXp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#374151"
                    opacity={0.1}
                  />
                  <XAxis
                    dataKey="name"
                    stroke="#9ca3af"
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                  />
                  <YAxis
                    stroke="#9ca3af"
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                  />
                  <Tooltip
                    content={<CustomChartTooltip />}
                    cursor={{
                      stroke: "#8b5cf6",
                      strokeWidth: 1,
                      strokeDasharray: "4 4",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="xp"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorXp)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Tasks Chart */}
          <div className="bg-white dark:bg-[#151725] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              Splněné úkoly
            </h2>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyActivity}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#374151"
                    opacity={0.1}
                  />
                  <XAxis
                    dataKey="name"
                    stroke="#9ca3af"
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                  />
                  <YAxis
                    stroke="#9ca3af"
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                  />
                  <Tooltip
                    content={<CustomChartTooltip />}
                    cursor={{ fill: "rgba(255, 255, 255, 0.05)" }}
                  />
                  <Bar dataKey="tasks" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StatisticsPage;
