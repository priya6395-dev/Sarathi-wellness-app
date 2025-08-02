import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-[#f4f9f6] to-[#e8f0ec] dark:from-[#1c1f1e] dark:to-[#141615]">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
        Just as Krishna guided Arjuna through the battlefield,
        <br /> Sarathi.ai guides you through life's inner battles.
      </h1>

      <p className="text-lg text-muted-foreground max-w-2xl mb-8">
        Your AI-powered digital charioteer for peace, wisdom, and self-discovery — inspired by the timeless teachings of the Bhagavad Gita.
      </p>

      <Link href="/ask-krishna">
        <button className="btn-hover px-6 py-3 rounded-lg bg-primary text-primary-foreground shadow-md">
          Ask Krishna
        </button>
      </Link>
    </section>
  );
}
