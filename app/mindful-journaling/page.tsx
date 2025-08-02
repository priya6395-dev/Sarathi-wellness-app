"use client";
import { useState } from "react";

export default function JournalPage() {
  const [entry, setEntry] = useState("");
  const [savedEntries, setSavedEntries] = useState<string[]>([]);

  const handleSave = () => {
    if (entry.trim() === "") return;
    setSavedEntries([entry, ...savedEntries]);
    setEntry("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-blue-50 px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        ✨ My Journal
      </h1>
      <p className="text-gray-600 mb-8 max-w-xl text-center">
        Write down your thoughts, feelings, or gratitude moments.
        This is your safe space — just like Arjuna’s heart when he spoke to Krishna.
      </p>

      {/* Input area */}
      <textarea
        className="w-full max-w-2xl p-4 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-emerald-400 outline-none min-h-[120px] resize-none"
        placeholder="Dear Krishna, today I feel..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />

      <button
        onClick={handleSave}
        className="mt-4 px-6 py-3 rounded-full bg-emerald-600 text-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        💌 Save to Journal
      </button>

      {/* Saved entries */}
      <div className="mt-10 w-full max-w-2xl">
        {savedEntries.length > 0 ? (
          savedEntries.map((item, index) => (
            <div
              key={index}
              className="glass-card p-4 rounded-xl shadow-md mb-4 text-gray-700 whitespace-pre-line"
            >
              {item}
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic text-center">
            Your journal is empty. Start writing your thoughts.
          </p>
        )}
      </div>
    </div>
  );
}
