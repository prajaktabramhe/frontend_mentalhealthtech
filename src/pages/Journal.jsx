import { useState, useEffect } from "react";
import axios from "axios";

const Journal = () => {
    const API = import.meta.env.VITE_API_URL;

  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);

  const token = localStorage.getItem("token");

  // Fetch journals from MongoDB
  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const res = await axios.get(
             `${API}/api/journals`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setEntries(res.data);

      } catch (error) {
        console.error("Error fetching journals:", error);
      }
    };

    fetchJournals();
  }, [API, token]);

  // Add journal entry
  const addEntry = async () => {

    if (!entry) return;

    try {

      const res = await axios.post(
         `${API}/api/journals`,
        {
          title: "My Journal",
          content: entry
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEntries([res.data, ...entries]);
      setEntry("");

    } catch (error) {
      console.error("Error saving journal:", error);
    }
  };

  return (

    <div className="min-h-screen bg-[#f3f6f4] p-10">

      <h1 className="text-3xl font-bold text-center mb-8">
        Journal
      </h1>

      <div className="max-w-2xl mx-auto">

        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Write your thoughts..."
          className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-400"
        />

        <button
          onClick={addEntry}
          className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-xl hover:bg-teal-700"
        >
          Save Entry
        </button>

        <div className="mt-10 space-y-6">

          {entries.map((item) => (

            <div
              key={item._id}
              className="bg-white p-6 rounded-xl shadow"
            >

              <p className="text-gray-700">
                {item.content}
              </p>

              <p className="text-sm text-gray-400 mt-2">
                {new Date(item.createdAt).toLocaleString()}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
};

export default Journal;