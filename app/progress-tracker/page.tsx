"use client";
import { useState } from "react";

export default function ProgressPage() {
  const [streak, setStreak] = useState(7); // Example: 7 days streak
  const [mood, setMood] = useState<string | null>(null);

  const moods = [
    { emoji: "😊", label: "Happy" },
    { emoji: "😌", label: "Calm" },
    { emoji: "😔", label: "Sad" },
    { emoji: "😠", label: "Frustrated" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        📈 My Progress
      </h1>
      <p className="text-gray-600 mb-8 max-w-xl text-center">
        Track your mental wellness journey. Every small step matters — just like Arjuna grew day by day under Krishna’s guidance.
      </p>

      {/* Streak Counter */}
      <div className="glass-card px-8 py-6 rounded-xl shadow-lg text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          🔥 {streak} Day Streak
        </h2>
        <p className="text-gray-600">Keep going! Your consistency is your strength.</p>
      </div>

      {/* Mood Tracking */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">How do you feel today?</h2>
      <div className="flex gap-4 flex-wrap justify-center">
        {moods.map((m) => (
          <button
            key={m.label}
            onClick={() => setMood(m.label)}
            className={`px-4 py-2 rounded-xl shadow-md transition-all duration-300 ${
              mood === m.label ? "bg-purple-600 text-white scale-105" : "bg-white hover:scale-105"
            }`}
          >
            <span className="text-2xl">{m.emoji}</span>
            <div className="text-sm mt-1">{m.label}</div>
          </button>
        ))}
      </div>

      {mood && (
        <p className="mt-6 text-lg text-gray-700">
          Today you are feeling: <span className="font-semibold">{mood}</span>
        </p>
      )}
    </div>
  );
}
