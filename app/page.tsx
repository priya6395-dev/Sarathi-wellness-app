"use client";

import FeatureCard from "@/components/home/FeatureCard";
import Link from "next/link";

const features = [
  {
    icon: "📖",
    title: "Daily Wisdom",
    description: "Receive a new verse or teaching from the Bhagavad Gita every day to stay inspired.",
    href: "/daily-wisdom",
  },
  {
    icon: "🙏",
    title: "Ask Krishna",
    description: "Ask your life questions and get thoughtful, spiritual responses inspired by the Gita.",
    href: "/ask-krishna",
  },
  {
    icon: "📝",
    title: "Mindful Journaling",
    description: "Reflect on your thoughts and track your inner journey with guided prompts.",
    href: "/mindful-journaling",
  },
  {
    icon: "📊",
    title: "Progress Tracker",
    description: "Track your mental wellness and spiritual progress over time.",
    href: "/progress-tracker",
  },
  {
    icon: "💡",
    title: "Daily Challenges",
    description: "Take on mindful challenges inspired by the Gita to grow every day.",
    href: "/daily-challenges",
  },
  {
    icon: "🕉️",
    title: "Meditation Guide",
    description: "Guided meditations to calm your mind and connect with your inner self.",
    href: "/meditation-guide",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6">
      {/* Header */}
      <header className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <h1 className="text-3xl font-bold text-indigo-700">
          Sarathi: Your Spiritual Charioteer to Inner Peace
        </h1>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition"
          >
            Signup
          </Link>
        </div>
      </header>

      {/* Features */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <Link key={idx} href={feature.href} className="no-underline">
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
