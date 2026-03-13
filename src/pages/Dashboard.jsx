import Chart from "../components/Chart";
import { moodData } from "../data/moodData";

export default function Dashboard() {

  // Total mood entries
  const totalEntries = moodData.length;

  // Calculate average mood
  const averageMood =
    moodData.reduce((sum, item) => sum + item.mood, 0) / totalEntries;

  // Simple streak calculation (consecutive days with mood > 0)
  let streak = 0;
  moodData.forEach((item) => {
    if (item.mood > 0) {
      streak++;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-100 p-10">

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Your Wellness Dashboard
      </h1>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">

        {/* Total Entries */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg font-semibold text-gray-500 mb-4">
            Total Entries
          </h2>
          <p className="text-4xl font-bold text-teal-600">
            {totalEntries}
          </p>
        </div>

        {/* Average Mood */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg font-semibold text-gray-500 mb-4">
            Average Mood
          </h2>
          <p className="text-4xl font-bold text-teal-600">
            {averageMood.toFixed(1)} / 5
          </p>
        </div>

        {/* Streak */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg font-semibold text-gray-500 mb-4">
            Current Streak
          </h2>
          <p className="text-4xl font-bold text-teal-600">
            🔥 {streak} days
          </p>
        </div>

      </div>

      {/* Chart Section */}
      <Chart/>

    </div>
  );
}