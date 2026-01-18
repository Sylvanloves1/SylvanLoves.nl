"use client";

import { motion, UseInViewOptions } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  viewport?: UseInViewOptions;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  viewport = { once: true, margin: "-100px" },
}: FadeInProps) {
  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { y: 0, x: 20 },
    right: { y: 0, x: -20 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={viewport}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.45, 0.27, 0.9],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
