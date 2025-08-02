"use client";
import { useState, useEffect } from "react";

const challenges = [
  "Meditate for 10 minutes",
  "Help someone in need today",
  "Avoid using your phone for 1 hour",
  "Write 3 things you are grateful for",
  "Smile at a stranger",
];

export default function DailyChallengesPage() {
  const [challenge, setChallenge] = useState("");
  const [completed, setCompleted] = useState(false);
  const [streak, setStreak] = useState(0);

  // Set new challenge each day
  useEffect(() => {
    const savedDate = localStorage.getItem("challengeDate");
    const today = new Date().toDateString();

    if (savedDate === today) {
      setChallenge(localStorage.getItem("challenge") || "");
      setCompleted(localStorage.getItem("completed") === "true");
      setStreak(parseInt(localStorage.getItem("streak") || "0"));
    } else {
      const newChallenge =
        challenges[Math.floor(Math.random() * challenges.length)];
      setChallenge(newChallenge);
      localStorage.setItem("challenge", newChallenge);
      localStorage.setItem("challengeDate", today);
      setCompleted(false);
    }
  }, []);

  const handleComplete = () => {
    setCompleted(true);
    localStorage.setItem("completed", "true");

    let currentStreak = streak + 1;
    setStreak(currentStreak);
    localStorage.setItem("streak", currentStreak.toString());
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-orange-700 mb-4">💡 Daily Challenge</h1>

      {/* Challenge Card */}
      <div className="bg-white p-6 rounded-xl shadow-md text-lg text-gray-700 max-w-lg text-center mb-6">
        {challenge}
      </div>

      {/* Complete Button */}
      {!completed ? (
        <button
          onClick={handleComplete}
          className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
        >
          Mark as Done ✅
        </button>
      ) : (
        <p className="text-green-600 font-semibold">✔ Challenge Completed!</p>
      )}

      {/* Streak Counter */}
      <div className="mt-4 bg-white px-6 py-2 rounded-lg shadow">
        🔥 Current Streak: <span className="font-bold">{streak} days</span>
      </div>
    </div>
  );
}
