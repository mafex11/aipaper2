import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container max-w-6xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          WriteAI
        </Link>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/features">Features</Link>
          </Button>
          <Button asChild>
            <Link href="/editor">Start Writing</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}