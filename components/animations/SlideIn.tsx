"use client";

import { motion, UseInViewOptions } from "framer-motion";
import { ReactNode } from "react";

interface SlideInProps {
  children: ReactNode;
  delay?: number;
  direction?: "left" | "right";
  className?: string;
  viewport?: UseInViewOptions;
}

export default function SlideIn({
  children,
  delay = 0,
  direction = "left",
  className,
  viewport = { once: true, margin: "-100px" },
}: SlideInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -50 : 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={viewport}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.45, 0.27, 0.9],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
