import React from "react";
import Layout from "../components/layout/Layout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Po", score: 4000 },
  { name: "Út", score: 3000 },
  { name: "St", score: 2000 },
  { name: "Čt", score: 2780 },
  { name: "Pá", score: 1890 },
  { name: "So", score: 2390 },
  { name: "Ne", score: 3490 },
];

const StatisticsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-6">Statistiky</h1>
        <div className="bg-white dark:bg-[#151725] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-4">Týdenní aktivita</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#374151"
                />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    borderColor: "#374151",
                    color: "#f3f4f6",
                  }}
                  itemStyle={{ color: "#f3f4f6" }}
                />
                <Bar dataKey="score" fill="#8884d8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StatisticsPage;
