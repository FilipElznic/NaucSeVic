import React from "react";
import Layout from "../components/layout/Layout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  User,
  Zap,
  TrendingUp,
  Calendar as CalendarIcon,
  BookOpen,
  Award,
  Star,
  Activity,
  Target,
} from "lucide-react";

const Home = () => {
  // Dummy Data
  const activityData = [
    { name: "Po", xp: 400 },
    { name: "Út", xp: 300 },
    { name: "St", xp: 600 },
    { name: "Čt", xp: 450 },
    { name: "Pá", xp: 700 },
    { name: "So", xp: 500 },
    { name: "Ne", xp: 800 },
  ];

  const userStats = {
    name: "Filip Elznic",
    email: "filip.elznic@example.com",
    level: 12,
    xp: 2450,
    maxXp: 3000,
    coins: 450,
    streak: 15,
  };

  const activeBoosters = [
    {
      id: 1,
      name: "2x XP",
      duration: "2h 30m",
      icon: Zap,
      color: "text-amber-400",
    },
    {
      id: 2,
      name: "Síla mozku",
      duration: "45m",
      icon: BrainIcon,
      color: "text-purple-400",
    },
  ];

  const upcomingTasks = [
    { id: 1, title: "Kvíz z geometrie", time: "14:00 Dnes", type: "Quiz" },
    { id: 2, title: "Fyzikální laboratoř", time: "Zítra", type: "Assignment" },
    { id: 3, title: "Opakování matematiky", time: "St", type: "Review" },
  ];

  // Calendar Logic
  const date = new Date();
  const monthName = date.toLocaleString("cs-CZ", { month: "long" });
  const year = date.getFullYear();
  const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, date.getMonth(), 1).getDay(); // 0 = Sun
  const startingDayIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Mon start

  const daysOfWeek = ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"];
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const padding = Array.from({ length: startingDayIndex }, () => null);

  // Simulated active days (placeholder for future real data)
  const activeDays = [3, 7, 12, 14, 18, 22, 25, 28];

  const favoriteCourses = [
    { id: 1, title: "Pokročilá geometrie", progress: 75, color: "bg-blue-500" },
    { id: 2, title: "Kvantová fyzika", progress: 40, color: "bg-fuchsia-500" },
    {
      id: 3,
      title: "Matematická analýza I",
      progress: 90,
      color: "bg-emerald-500",
    },
  ];

  // Helper component for styled panels
  const Panel = ({ children, className = "" }) => (
    <div
      className={`bg-white/80 dark:bg-[#151725]/80 backdrop-blur-xl border border-black/20 dark:border-purple-500/20 shadow-sm dark:shadow-[0_0_15px_rgba(168,85,247,0.15)] rounded-3xl p-6 ${className}`}
    >
      {children}
    </div>
  );

  return (
    <Layout>
      <div className="pt-6 pb-6 px-4 mx-auto text-gray-900 dark:text-white">
        {/* Main Container: Flex row to hold Sidebar and Right Content */}
        <div className="w-full h-auto min-h-[90vh] pt-12 flex gap-4">
          {/* 1. Left Sidebar (Dark Blue) */}
          <div className="w-1/6 hidden lg:flex flex-col gap-6 bg-white/80 dark:bg-[#151725]/80 backdrop-blur-xl rounded-3xl p-6 border border-black/20 dark:border-purple-500/20 shadow-sm dark:shadow-[0_0_15px_rgba(168,85,247,0.15)] sticky top-24 h-[calc(100vh-6rem)] transition-all duration-300">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 to-fuchsia-600 p-1">
                <div className="w-full h-full rounded-full bg-blue-50 dark:bg-[#0B0C15] flex items-center justify-center overflow-hidden">
                  <User size={48} className="text-gray-400" />
                  {/* <img src="avatar_url" alt="User" /> */}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold">{userStats.name}</h2>
                <p className="text-sm text-gray-400 break-all">
                  {userStats.email}
                </p>
              </div>
            </div>

            <div className="space-y-4 w-full">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 dark:text-gray-400">
                  Úroveň {userStats.level}
                </span>
                <span className="font-mono text-purple-600 dark:text-purple-400">
                  {userStats.xp} / {userStats.maxXp} XP
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-purple-600 h-full rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(147,51,234,0.5)]"
                  style={{
                    width: `${(userStats.xp / userStats.maxXp) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="bg-black/5 dark:bg-[#0B0C15]/50 border border-transparent dark:border-white/5 rounded-xl p-3 flex flex-col items-center">
                <Star
                  className="text-amber-500 dark:text-amber-400 mb-1"
                  size={20}
                />
                <span className="font-bold">{userStats.coins}</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase">
                  Mince
                </span>
              </div>
              <div className="bg-black/5 dark:bg-[#0B0C15]/50 border border-transparent dark:border-white/5 rounded-xl p-3 flex flex-col items-center">
                <Zap
                  className="text-blue-500 dark:text-fuchsia-500 mb-1"
                  size={20}
                />
                <span className="font-bold">{userStats.streak}</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase">
                  Série
                </span>
              </div>
            </div>

            <div className="mt-auto">
              <button className="w-full py-2 bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 rounded-xl text-sm transition-colors border border-black/5 dark:border-white/5">
                Upravit profil
              </button>
            </div>
          </div>

          {/* 2. Right Content Area (Flex Column) */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Row A: Header */}
            <Panel className="h-auto min-h-20 flex flex-col justify-center">
              <h1 className="text-2xl font-bold flex items-center gap-2">
                Vítejte zpět, {userStats.name.split(" ")[0]}!{" "}
                <span className="text-2xl">👋</span>
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Máte {upcomingTasks.length} nevyřízených úkolů na dnešek.
              </p>
            </Panel>

            {/* Row B: Middle Grid */}
            <div className="flex flex-col lg:flex-row gap-4 w-full min-h-[300px]">
              {/* Activity Graph */}
              <Panel className="flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-700 dark:text-white">
                  <Activity
                    size={18}
                    className="text-purple-600 dark:text-purple-400"
                  />
                  Studijní aktivita
                </h3>
                <div className="flex-1 min-h-[200px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={activityData}>
                      <defs>
                        <linearGradient
                          id="colorXp"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#8b5cf6"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="95%"
                            stopColor="#8b5cf6"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#ffffff10"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="name"
                        stroke="#6b7280"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="#6b7280"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#0B0C15",
                          borderColor: "#8b5cf6",
                          color: "#fff",
                        }}
                        cursor={{ stroke: "#8b5cf6", strokeWidth: 1 }}
                      />
                      <Area
                        type="monotone"
                        dataKey="xp"
                        stroke="#8b5cf6"
                        fillOpacity={1}
                        fill="url(#colorXp)"
                        strokeWidth={3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Panel>

              {/* Stats & Boosters Column */}
              <div className="w-full lg:w-2/5 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4 h-full">
                  {/* Calendar / Tasks */}
                  <Panel className="flex-1 !bg-white/80 dark:!bg-[#151725]/80 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <CalendarIcon size={16} /> {monthName} {year}
                      </h3>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                      {daysOfWeek.map((day) => (
                        <div key={day} className="text-gray-500 font-medium">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-xs">
                      {padding.map((_, index) => (
                        <div key={`pad-${index}`} />
                      ))}
                      {days.map((day) => {
                        const isToday = day === date.getDate();
                        const isActive = activeDays.includes(day);
                        return (
                          <div
                            key={day}
                            className={`
                                        aspect-square flex flex-col items-center justify-center rounded-lg cursor-pointer transition-colors relative
                                        ${
                                          isToday
                                            ? "bg-purple-600 text-white font-bold shadow-[0_0_10px_rgba(147,51,234,0.5)]"
                                            : "hover:bg-black/5 dark:hover:bg-purple-500/10 text-gray-600 dark:text-gray-400"
                                        }
                                        ${
                                          isActive && !isToday
                                            ? "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 border border-fuchsia-500/30"
                                            : ""
                                        }
                                     `}
                          >
                            <span>{day}</span>
                            {isActive && !isToday && (
                              <div className="w-1 h-1 bg-fuchsia-500 dark:bg-fuchsia-400 rounded-full mt-0.5 shadow-[0_0_5px_rgba(232,121,249,0.8)]"></div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </Panel>

                  {/* Active Boosters */}
                  <Panel className="flex-1">
                    <h3 className="text-sm font-semibold mb-3 flex items-center gap-2 text-blue-700 dark:text-fuchsia-300">
                      <Zap
                        size={16}
                        className="text-blue-500 dark:text-fuchsia-500"
                      />{" "}
                      Aktivní vylepšení
                    </h3>
                    <div className="space-y-3">
                      {activeBoosters.map((booster) => (
                        <div
                          key={booster.id}
                          className="flex items-center gap-3 p-2 rounded-lg bg-white/50 dark:bg-purple-500/5 border border-blue-200 dark:border-purple-500/20"
                        >
                          <div
                            className={`p-1.5 rounded-md bg-white dark:bg-white/5 ${booster.color}`}
                          >
                            <booster.icon size={14} />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-900 dark:text-white">
                              {booster.name}
                            </div>
                            <div className="text-[10px] text-blue-600 dark:text-purple-300">
                              {booster.duration} zbývá
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Panel>
                </div>
              </div>
            </div>

            {/* Row C: Bottom Section */}
            <div className="flex flex-col lg:flex-row gap-4 w-full flex-1">
              {/* Quick Links */}
              <Panel className="lg:w-1/4 flex flex-col">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Rychlé akce
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-black/5 hover:bg-black/10 dark:bg-[#1e1b2e]/50 dark:hover:bg-[#1e1b2e]/80 transition-all border border-black/5 dark:border-white/5 group">
                    <BookOpen
                      size={20}
                      className="mb-2 text-emerald-500 dark:text-emerald-400 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300">
                      Pokračovat v úkolu
                    </span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-black/5 hover:bg-black/10 dark:bg-[#1e1b2e]/50 dark:hover:bg-[#1e1b2e]/80 transition-all border border-black/5 dark:border-white/5 group">
                    <Target
                      size={20}
                      className="mb-2 text-rose-500 dark:text-rose-400 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300">
                      Denní kvíz
                    </span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-black/5 hover:bg-black/10 dark:bg-[#1e1b2e]/50 dark:hover:bg-[#1e1b2e]/80 transition-all border border-black/5 dark:border-white/5 group">
                    <TrendingUp
                      size={20}
                      className="mb-2 text-blue-500 dark:text-purple-400 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300">
                      Statistiky
                    </span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-black/5 hover:bg-black/10 dark:bg-[#1e1b2e]/50 dark:hover:bg-[#1e1b2e]/80 transition-all border border-black/5 dark:border-white/5 group">
                    <Award
                      size={20}
                      className="mb-2 text-amber-500 dark:text-fuchsia-400 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300">
                      Žebříček
                    </span>
                  </button>
                </div>
              </Panel>

              {/* Favorite Courses */}
              <Panel className="flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Pokračovat v učení
                  </h3>
                  <button className="text-xs text-blue-600 dark:text-purple-400 hover:text-blue-500 dark:hover:text-purple-300">
                    Zobrazit vše
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {favoriteCourses.map((course) => (
                    <div
                      key={course.id}
                      className="group flex flex-col justify-between p-4 rounded-xl bg-black/5 hover:bg-black/10 dark:bg-[#1e1b2e]/50 dark:hover:bg-[#1e1b2e]/80 border border-black/5 dark:border-white/5 transition-colors cursor-pointer h-full"
                    >
                      <div className="flex items-start justify-between">
                        <div
                          className={`w-10 h-10 rounded-lg ${course.color} flex items-center justify-center    group-hover:scale-105 transition-transform`}
                        >
                          <BookOpen size={18} className="text-white" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-black/10 dark:group-hover:bg-white/20">
                          <PlayIcon
                            size={14}
                            className="ml-1 text-gray-900 dark:text-white"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">
                          {course.title}
                        </h4>
                        <div className="w-full h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${course.color} rounded-full`}
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <div className="text-right mt-1">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {course.progress}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Simple icons component for usage
const BrainIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.5 2A2.5 12.15 0 0 1 12 4.15 2.5 12.15 0 0 1 14.5 2c2 0 4.05 1.65 4.05 4.5V11c0 .9-.55 1.6-1.55 1.6-2 0-3.05-1.15-4-3.5 0 0-1.5 1.65-2 3-1 2.5-3.5 2.5-3.5 2.5A3.5 3.5 0 0 1 2 11c0-2.85 2.05-4.5 4.05-4.5A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M2.5 14.5A3.5 3.5 0 0 0 4.5 21a2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0 2-3" />
  </svg>
);

const PlayIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

export default Home;
