"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeSnippets = [
  "const dev = () => {}",
  "function solve()",
  "// TODO: Build",
  "npm install",
  "git commit -m",
  "return true;",
  "async await",
  "<Component />",
  "useState()",
  "API.fetch()",
  ".then(res =>",
  "{ code: 200 }",
  "while(true)",
  "for (let i",
  "import React",
  "export default",
];

// Pre-calculated positions to avoid hydration issues
const positions = [
  { x: 10, y: 20, delay: 0, duration: 25 },
  { x: 70, y: 10, delay: 1, duration: 22 },
  { x: 30, y: 60, delay: 2, duration: 28 },
  { x: 85, y: 40, delay: 0.5, duration: 24 },
  { x: 15, y: 80, delay: 3, duration: 26 },
  { x: 60, y: 30, delay: 1.5, duration: 23 },
  { x: 40, y: 70, delay: 2.5, duration: 27 },
  { x: 90, y: 15, delay: 0.8, duration: 25 },
  { x: 25, y: 50, delay: 3.5, duration: 22 },
  { x: 75, y: 65, delay: 1.2, duration: 29 },
  { x: 50, y: 25, delay: 2.8, duration: 24 },
  { x: 20, y: 45, delay: 0.3, duration: 26 },
  { x: 80, y: 75, delay: 3.2, duration: 23 },
  { x: 35, y: 35, delay: 1.8, duration: 28 },
  { x: 65, y: 55, delay: 2.2, duration: 25 },
  { x: 45, y: 85, delay: 1.5, duration: 27 },
];

export default function FloatingCode() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeSnippets.map((snippet, index) => {
        const pos = positions[index];

        return (
          <motion.div
            key={index}
            className="absolute font-mono text-xs text-primary/10 dark:text-primary/5 whitespace-nowrap"
            initial={{
              x: `${pos.x}%`,
              y: `${pos.y}%`,
              opacity: 0,
            }}
            animate={{
              y: [`${pos.y}%`, `${pos.y - 30}%`, `${pos.y}%`],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: pos.duration,
              repeat: Infinity,
              delay: pos.delay,
              ease: "linear",
            }}
          >
            {snippet}
          </motion.div>
        );
      })}
    </div>
  );
}
