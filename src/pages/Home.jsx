import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
const API = import.meta.env.VITE_API_URL;
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {

    axios
      .get( `${API}/api/affirmations`)
      .then(res => {
        setQuote(res.data.quote);
        setAuthor(res.data.author);
      })
      .catch(err => {
        console.error("Failed to fetch affirmation", err);
      });

  }, [API]);

  return (
    <div className="bg-gradient-to-b from-teal-50 to-white min-h-screen">

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Your Digital Wellness Companion
        </h1>

        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Track your moods, write daily reflections, and grow emotionally
          with a calm and mindful digital space.
        </p>

        <Link
          to="/mood"
          className="bg-[#297194] text-white px-8 py-3 rounded-xl hover:bg-[#EC993D] transition duration-300"
        >
          Start Your Wellness Journey
        </Link>
      </section>

      {/* Daily Affirmation */}
      <section className="max-w-2xl mx-auto mb-16 px-6">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold mb-3">🌿 Daily Affirmation</h2>

          {quote ? (
            <>
              <p className="text-gray-700 italic">"{quote}"</p>
              <p className="text-sm text-gray-400 mt-2">— {author}</p>
            </>
          ) : (
            <p className="text-gray-400">Loading affirmation...</p>
          )}

        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pb-20 max-w-6xl mx-auto">

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-3">😊 Mood Tracker</h3>
          <p className="text-gray-600">
            Record your daily emotions and visualize your weekly mood trends.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-3">📓 Journal</h3>
          <p className="text-gray-600">
            Write reflections and keep track of your thoughts securely.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-3">🤖 AI Companion</h3>
          <p className="text-gray-600">
            Chat with your wellness assistant for guidance and motivation.
          </p>
        </div>

      </section>
    </div>
  );
}