'use client';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileTextIcon, GlobeIcon, CodeIcon } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto"> {/* Adjusted max-width */}
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-blue-600" />
                </CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardContent>{feature.description}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  // {
  //   title: "AI Transformations",
  //   description: "Rewrite text with professional, casual, or creative styles",
  //   icon: MagicWandIcon,
  // },
  {
    title: "Rich Text Editing",
    description: "Supports headers, bold, italic, underline, and more",
    icon: FileTextIcon,
  },
  {
    title: "Real-Time Collaboration",
    description: "Work together with your team in real-time",
    icon: GlobeIcon,
  },
  {
    title: "Code Blocks",
    description: "Easily add and format code snippets",
    icon: CodeIcon,
  },
];