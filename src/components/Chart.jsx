import { moodData } from "../data/moodData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function Chart() {
  return (
    <div className="mt-16 max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-8">

      <h2 className="text-xl font-semibold text-center mb-6 text-gray-700">
        Weekly Mood Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <BarChart data={moodData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis domain={[0,5]} />

          <Tooltip />

          <Bar
            dataKey="mood"
            fill="#297194"
            radius={[8,8,0,0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default Chart;