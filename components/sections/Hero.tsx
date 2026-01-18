"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import TypingCursor from "@/components/ui/TypingCursor";
import FloatingCode from "@/components/ui/FloatingCode";
import { SITE_CONFIG, TERMINAL_PROMPTS } from "@/lib/constants";

export default function Hero() {
  const commands = [
    { command: "whoami", output: SITE_CONFIG.name },
    {
      command: "cat role.txt",
      output: `${SITE_CONFIG.role} @ ${SITE_CONFIG.company}`,
    },
    { command: "echo $LOCATION", output: SITE_CONFIG.location },
    {
      command: "cat bio.txt",
      output: "Building elegant solutions to complex problems",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-animated pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />

      {/* Floating Code Snippets */}
      <FloatingCode />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-30 animate-pulse" />
              <Image
                src="/images/profile.jpg"
                alt={SITE_CONFIG.name}
                width={160}
                height={160}
                className="relative rounded-full border-4 border-border shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface border border-border rounded-lg overflow-hidden shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-elevated border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-muted-foreground font-mono ml-2">
                terminal — bash
              </span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 sm:p-8 font-mono text-sm space-y-4">
              {commands.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.3, duration: 0.3 }}
                >
                  {/* Command Line */}
                  <div className="flex items-center gap-2">
                    <span className="text-primary">{TERMINAL_PROMPTS.prompt}</span>
                    <span className="text-foreground">{item.command}</span>
                    {index === commands.length - 1 && <TypingCursor />}
                  </div>

                  {/* Output */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 + 0.15, duration: 0.3 }}
                    className="text-muted-foreground pl-4 mt-1"
                  >
                    <span className="text-secondary">&gt;</span> {item.output}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mt-12"
          >
            <a href="#contact">
              <Button size="lg" className="shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all ">
                Get in Touch
              </Button>
            </a>
            <a href="#experience">
              <Button variant="outline" size="lg" className="border-2 hover:bg-surface-elevated hover:border-primary hover:scale-105 transition-all">
                View Experience
              </Button>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="flex justify-center mt-16"
          >
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll to about section"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronDown className="h-6 w-6" />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background pointer-events-none" />
    </section>
  );
}
