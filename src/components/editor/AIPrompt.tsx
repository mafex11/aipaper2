// components/editor/AIPrompt.tsx
'use client';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import { useState } from "react";

export function AIPrompt({ onSubmit, isLoading }: { onSubmit: (prompt: string) => void, isLoading: boolean }) {
  const [prompt, setPrompt] = useState('');
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          className="absolute bottom-4 right-4 rounded-full shadow-lg"
        >
          <Wand2 className="w-5 h-5 mr-2" /> AI Assist
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-4">
        <div className="space-y-4">
          <h4 className="font-medium">AI Transformation</h4>
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Make this text more professional..."
          />
          <Button onClick={() => onSubmit(prompt)} disabled={isLoading}>
            {isLoading ? "Processing..." : "Apply Transformation"}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}