import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "A beautiful Tailwind + Next.js project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* dark mode support */}
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {/* Navbar example */}
        <header className="glass p-4 shadow-md flex items-center justify-between">
          <h1 className="text-xl font-bold">My Website</h1>
          <nav className="flex gap-6">
            <a href="#" className="hover:text-primary transition">Home</a>
            <a href="#" className="hover:text-primary transition">About</a>
            <a href="#" className="hover:text-primary transition">Contact</a>
          </nav>
        </header>

        {/* Main content */}
        <main className="min-h-screen p-6">{children}</main>

        {/* Footer */}
        <footer className="glass p-4 mt-10 text-center text-sm">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
