"use client";
import { useState, useEffect } from "react";

export default function MeditationGuidePage() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [breathText, setBreathText] = useState("Breathe In 🌬️");
  const [breathSize, setBreathSize] = useState("scale-75");

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBreathText((prev) =>
        prev === "Breathe In 🌬️" ? "Breathe Out 😌" : "Breathe In 🌬️"
      );
      setBreathSize((prev) =>
        prev === "scale-75" ? "scale-110" : "scale-75"
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">🕉️ Meditation Guide</h1>
      <p className="text-gray-600 mb-6">
        Close your eyes, follow the breathing pattern, and calm your mind.
      </p>

      {/* Breathing Circle */}
      <div
        className={`w-48 h-48 bg-indigo-300 rounded-full flex items-center justify-center text-lg font-semibold text-white shadow-lg transition-transform duration-1000 ${breathSize}`}
      >
        {breathText}
      </div>

      {/* Timer */}
      <div className="mt-6 bg-white px-6 py-3 rounded-xl shadow-md text-center">
        <p className="text-lg font-medium">Time Left</p>
        <p className="text-4xl font-bold text-indigo-600">{timeLeft}s</p>
      </div>
    </div>
  );
}
