"use client";

import { useState } from "react";

export default function AskKrishnaPage() {
  const [emotion, setEmotion] = useState("");
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!emotion.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("/api/ask-krishna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emotion }),
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error asking Krishna:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-yellow-50 to-pink-50 p-6 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-4xl font-bold text-purple-900 mb-2 text-center">
        Ask Krishna for Guidance
      </h1>
      <p className="text-purple-700 mb-6 text-center max-w-lg leading-relaxed">
        Take a deep breath, share your heart, and let the timeless wisdom of the
        Bhagavad Gita bring you peace.
      </p>

      {/* Input */}
      <textarea
        value={emotion}
        onChange={(e) => setEmotion(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full max-w-lg p-4 border border-purple-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white/70 backdrop-blur-lg"
        rows={4}
      />

      {/* Button */}
      <button
        onClick={handleAsk}
        disabled={loading}
        className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-purple-400 to-yellow-300 text-purple-900 font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        {loading ? "🙏 Seeking wisdom..." : "✨ Ask Krishna"}
      </button>

      {/* Response */}
      {response && !loading && (
        <div className="mt-8 max-w-lg p-6 rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg border border-purple-200 animate-fadeIn">
          <p className="text-xl font-bold text-purple-900 mb-2 text-center">
            {response.advice.shloka}
          </p>
          <p className="text-purple-600 italic text-center">
            "{response.advice.translation}"
          </p>
          <p className="text-gray-700 mt-4 text-center leading-relaxed">
            {response.advice.meaning}
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
}
