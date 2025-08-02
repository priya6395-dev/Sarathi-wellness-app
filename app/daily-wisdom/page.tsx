"use client";
import { useState } from "react";

const shlokas = [
  {
    verse:
      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते संगोऽस्त्वकर्मणि ॥",
    translation:
      "You have a right to perform your duty, but not to the fruits of your actions. Do not let the fruits be your motive, nor let your attachment be to inaction.",
  },
  {
    verse:
      "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय ।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते ॥",
    translation:
      "Perform your duty with equanimity, abandoning all attachment to success or failure. Such evenness of mind is called Yoga.",
  },
  {
    verse:
      "उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत् ।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ॥",
    translation:
      "Elevate yourself through your own mind; do not degrade yourself. The mind can be your best friend and also your worst enemy.",
  },
  {
    verse:
      "ममैवांशो जीवलोके जीवभूतः सनातनः ।\nमनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति ॥",
    translation:
      "The living entities in this conditioned world are My eternal fragmental parts. Due to conditioned life, they struggle very hard with the six senses, including the mind.",
  },
];

export default function DailyWisdomPage() {
  const [currentShloka, setCurrentShloka] = useState(() => {
    return shlokas[Math.floor(Math.random() * shlokas.length)];
  });

  const handleNewShloka = () => {
    const newShloka = shlokas[Math.floor(Math.random() * shlokas.length)];
    setCurrentShloka(newShloka);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        🌸 Daily Wisdom from the Bhagavad Gita 🌸
      </h1>

      <div className="max-w-2xl w-full glass-card p-8 rounded-2xl shadow-lg border border-white/40 backdrop-blur-lg text-center">
        <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed font-sanskrit">
          {currentShloka.verse}
        </p>
        <p className="mt-6 text-gray-600 italic">{currentShloka.translation}</p>
      </div>

      <button
        onClick={handleNewShloka}
        className="mt-8 px-6 py-3 rounded-full bg-purple-600 text-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        🌿 Get Another Wisdom
      </button>
    </div>
  );
}
