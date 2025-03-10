// app/(editor)/page.tsx
import { Editor } from "@/components/editor/Editor";
import { EditorHeader } from "@/components/editor/EditorHeader";
import { auth } from "@clerk/nextjs/server";

export default function EditorPage() {
  // const { userId } = auth();
  
  return (
    <div className="min-h-screen bg-slate-50">
      <EditorHeader />
      
      <main className="container max-w-7xl mx-auto p-8">
        <Editor />
      </main>
    </div>
  );
}