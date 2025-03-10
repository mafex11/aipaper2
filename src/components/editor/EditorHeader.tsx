// components/editor/EditorHeader.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function EditorHeader() {
  return (
    <header className="bg-white border-b">
      <div className="container max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Button variant="ghost" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>

        <div className="flex items-center gap-4">
          <Button variant="outline">Save Draft</Button>
          <Button>Publish</Button>
        </div>
      </div>
    </header>
  );
}