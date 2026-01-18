"use client";

import { motion } from "framer-motion";

export default function TypingCursor() {
  return (
    <motion.span
      className="inline-block w-[2px] h-5 bg-primary ml-1"
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
