import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Hero } from "../components/landing/Hero"; // Correct import
import { Features } from "@/components/landing/Features"; // Correct import
import { Demo } from "@/components/landing/Demo"; // Correct import

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      
      <header className="bg-white shadow-sm">
        <nav className="container max-w-6xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            AI Paper
          </Link>
          <Button asChild>
            <Link href="/editor">Start Writing</Link>
          </Button>
        </nav>
      </header>

      
      <Hero />

      
      <Features />

      
      <Demo />

      
      <footer className="py-8 text-center text-muted-foreground">
        <p>© 2024 AI Paper. All rights reserved.</p>
      </footer>
    </div>
  );
}