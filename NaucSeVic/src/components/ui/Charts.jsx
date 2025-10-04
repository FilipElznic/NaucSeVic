import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// Activity Line Chart Component
export const ActivityChart = ({ data, type = "tasks" }) => {
  const dataKey = type === "tasks" ? "completedTasks" : "gainedXP";
  const color = type === "tasks" ? "#8884d8" : "#82ca9d";
  const label = type === "tasks" ? "Dokončené úkoly" : "Získané XP";

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getDate()}.${date.getMonth() + 1}.`;
  };

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={formatDate}
            tick={{ fontSize: 12 }}
          />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            labelFormatter={(value) => `Datum: ${formatDate(value)}`}
            formatter={(value) => [value, label]}
          />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={2}
            dot={{ fill: color, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// Activity Bar Chart Component
export const ActivityBarChart = ({ data, type = "tasks" }) => {
  const dataKey = type === "tasks" ? "completedTasks" : "gainedXP";
  const color = type === "tasks" ? "#8884d8" : "#82ca9d";
  const label = type === "tasks" ? "Dokončené úkoly" : "Získané XP";

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getDate()}.${date.getMonth() + 1}.`;
  };

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={formatDate}
            tick={{ fontSize: 12 }}
          />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            labelFormatter={(value) => `Datum: ${formatDate(value)}`}
            formatter={(value) => [value, label]}
          />
          <Bar dataKey={dataKey} fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Combined Chart showing both tasks and XP
export const CombinedActivityChart = ({ data }) => {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getDate()}.${date.getMonth() + 1}.`;
  };

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={formatDate}
            tick={{ fontSize: 12 }}
          />
          <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
          <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
          <Tooltip
            labelFormatter={(value) => `Datum: ${formatDate(value)}`}
            formatter={(value, name) => [value, name]}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="completedTasks"
            stroke="#8884d8"
            strokeWidth={2}
            name="Dokončené úkoly"
            dot={{ fill: "#8884d8", strokeWidth: 2 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="gainedXP"
            stroke="#82ca9d"
            strokeWidth={2}
            name="Získané XP"
            dot={{ fill: "#82ca9d", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// Weekly progress chart
export const WeeklyProgressChart = ({ data }) => {
  const daysOfWeek = ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"];

  // Transform data to show last 7 days
  const last7Days = [];
  const today = new Date();

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split("T")[0];

    const dayData = data.find((d) => d.date === dateStr);
    last7Days.push({
      day: daysOfWeek[date.getDay() === 0 ? 6 : date.getDay() - 1], // Convert Sunday (0) to Saturday (6)
      date: dateStr,
      completedTasks: dayData ? dayData.completedTasks : 0,
      gainedXP: dayData ? dayData.gainedXP : 0,
    });
  }

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={last7Days}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            formatter={(value, name) => [
              value,
              name === "completedTasks" ? "Dokončené úkoly" : "Získané XP",
            ]}
          />
          <Bar dataKey="completedTasks" fill="#8884d8" name="completedTasks" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
