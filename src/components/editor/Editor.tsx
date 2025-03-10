// components/editor/Editor.tsx
'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Toolbar } from './Toolbar';
import { AIPrompt } from './AIPrompt';
import { useEffect, useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export function Editor({ userId }: { userId: string }) {
  const [selectedText, setSelectedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const editor = useEditor({
    extensions: [StarterKit.configure({
      heading: { levels: [1, 2, 3] },
    })],
    content: '<p>Start writing your masterpiece...</p>',
  });

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      setSelectedText(selection?.toString() || '');
    };
    
    document.addEventListener('selectionchange', handleSelection);
    return () => document.removeEventListener('selectionchange', handleSelection);
  }, []);

  const handleAITransform = async (prompt: string) => {
    if (!selectedText) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        body: JSON.stringify({ text: selectedText, prompt, userId }),
      });
      const { result } = await response.json();
      editor?.commands.insertContent(result);
    } catch (error) {
      console.error("AI transformation failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!editor) {
    return (
      <div className="space-y-4 p-6">
        <Skeleton className="h-10 w-48 mb-6" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-6 w-2/3" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-xl shadow-lg p-6">
      <Toolbar editor={editor} />
      <EditorContent 
        editor={editor} 
        className="prose prose-lg max-w-none min-h-[500px] p-4 focus:outline-none" 
      />
      <AIPrompt onSubmit={handleAITransform} isLoading={isLoading} />
    </div>
  );
}