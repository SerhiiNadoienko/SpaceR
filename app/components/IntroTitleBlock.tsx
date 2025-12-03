"use client";

import { motion } from "motion/react";

export const IntroTitleBlock = () => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
      // className="z-1 text-2xl text-center max-w-[800px] mx-auto mt-17 font-semibold text-gray-300"
      className="md:text-2xl max-w-[800px] mt-17 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
    >
      From your first JSX to production-grade React applications — a clear,
      structured path from absolute zero.
    </motion.h1>
  );
};
