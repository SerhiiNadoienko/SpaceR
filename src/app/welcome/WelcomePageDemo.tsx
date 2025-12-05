"use client";

import { motion } from "motion/react";
import { LayoutTextFlip } from "@/src/components/ui/layout-text-flip";
import { AnimatedGradientText } from "@/src/components/ui/animated-gradient-text";
import { HoverBorderGradient } from "@/src/components/ui/hover-border-gradient";
import { SparklesPreview } from "@/src/components/ui/sparcles-preview";
import { ROUTES } from "@/src/constants/routes";
import Link from "next/link";

export const WelcomePageDemo = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="md:text-2xl max-w-[800px] mt-17 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
      >
        From your first JSX to production-grade React applications — a clear,
        structured path from absolute zero.
      </motion.h1>
      <SparklesPreview className="mb-4">
        <Link href={ROUTES.SIGN_UP}>
          <HoverBorderGradient containerClassName="rounded-sm" as="button">
            <span className="text-xl font-bold">Get Started</span>
          </HoverBorderGradient>
        </Link>
      </SparklesPreview>
    </>
  );
};
