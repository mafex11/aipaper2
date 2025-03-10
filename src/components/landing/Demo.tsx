"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Demo() { // Ensure this is exported
  return (
    <section className="py-16 bg-slate-50">
      <div className="container max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6"
        >
          See It in Action
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted-foreground mb-8"
        >
          Watch a quick demo of how AI Paper can transform your writing workflow
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center"
        >
          <Button variant="outline" size="lg">
            Play Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}