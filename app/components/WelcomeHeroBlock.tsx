"use client";

import { motion } from "motion/react";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

export const WelcomeHeroBlock = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-10 text-center px-4 mt-16"
    >
      <motion.div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <LayoutTextFlip
          text="Welcome to "
          words={[
            "React Mastery",
            "Frontend Ascension",
            "The Engineering Path",
          ]}
        />
      </motion.div>

      <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 flex flex-wrap justify-center items-center gap-2">
        The most structured way to master React from scratch to senior.
        <AnimatedGradientText>No Costs. Just Code.</AnimatedGradientText>
      </p>
    </motion.div>
  );
};
