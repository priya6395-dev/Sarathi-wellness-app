import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md max-w-6xl mx-auto">
      <Link href="/">
        <h1 className="font-bold text-xl text-primary cursor-pointer">Sarathi</h1>
      </Link>

      <div className="space-x-6">
        <Link href="/login" className="text-primary hover:underline">
          Login
        </Link>
        <Link href="/signup" className="text-primary hover:underline">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
