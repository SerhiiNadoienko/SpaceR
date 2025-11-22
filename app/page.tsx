"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "motion/react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { TopBar } from "./components";

export default function Home() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center  overflow-hidden rounded-md">
      <TopBar />

      <div className="relative z-10 text-center px-4 mt-16">
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
      </div>

      <div className="absolute inset-0 h-screen w-full z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#616161"
        />
      </div>
    </div>
  );
}
