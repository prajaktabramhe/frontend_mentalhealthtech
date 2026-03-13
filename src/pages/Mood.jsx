import { useState, useEffect } from "react";
import axios from "axios";

const Mood = () => {
const API = import.meta.env.VITE_API_URL;
  const moods = [
    { emoji: "😊", value: "Happy" },
    { emoji: "😔", value: "Sad" },
    { emoji: "😰", value: "Stressed" },
    { emoji: "😌", value: "Relaxed" },
    { emoji: "😡", value: "Angry" }
  ];

  const [selectedMood, setSelectedMood] = useState("");
  const [note, setNote] = useState("");
  const [moodHistory, setMoodHistory] = useState([]);

  const token = localStorage.getItem("token");

  // Fetch moods from MongoDB
  const fetchMoods = async () => {
     if (!token) return;
    try {

      const res = await axios.get(
        `${API}/api/moods`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setMoodHistory(res.data);

    } catch (error) {
      console.error("Error fetching moods:", error);
    }
  };

  useEffect(() => {
    fetchMoods();
  }, [[API, token]]);

  // Save mood
  const saveMood = async () => {
    try {

      if (!selectedMood) {
        alert("Please select a mood");
        return;
      }

      await axios.post(
       `${API}/api/moods`,
        {
          moodType: selectedMood,
          note: note
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setNote("");
      setSelectedMood("");

      fetchMoods();

    } catch (error) {
      console.error("Error saving mood:", error);
    }
  };

  // Delete mood
  const deleteMood = async (id) => {
    try {

      await axios.delete(
        `${API}/api/moods/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      fetchMoods();

    } catch (error) {
      console.error("Error deleting mood:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f6f4] p-10">

      <h1 className="text-3xl font-bold text-center mb-10">
        How are you feeling today?
      </h1>

      {/* Mood Selection */}
      <div className="flex justify-center gap-6 mb-8">

        {moods.map((mood, index) => (

          <button
            key={index}
            onClick={() => setSelectedMood(mood.value)}
            className={`text-4xl p-4 rounded-xl ${
              selectedMood === mood.value
                ? "bg-[#297194] text-white"
                : "bg-white"
            }`}
          >
            {mood.emoji}
          </button>

        ))}

      </div>

      {/* Note */}
      <div className="max-w-xl mx-auto">

        <textarea
          placeholder="Write a short reflection..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-4 rounded-xl border"
        />

        <div className="text-center mt-4">
          <button
            onClick={saveMood}
            className="bg-[#297194] text-white px-6 py-2 rounded-lg"
          >
            Save Mood
          </button>
        </div>

      </div>

      {/* Mood History */}

      <h2 className="text-2xl font-semibold text-center mt-12 mb-6">
        Your Mood History
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">

        {moodHistory.map((mood) => (

          <div
            key={mood._id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >

            <div>

              <p className="font-semibold">
                Mood: {mood.moodType}
              </p>

              {mood.note && (
                <p className="text-gray-600">
                  {mood.note}
                </p>
              )}

              <p className="text-sm text-gray-400">
                {new Date(mood.date).toLocaleDateString()}
              </p>

            </div>

            <button
              onClick={() => deleteMood(mood._id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Mood;