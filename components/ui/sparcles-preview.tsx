"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { motion } from "motion/react";

interface SparklesPreviewType {
  children: React.ReactNode;
  className?: string;
}

export const SparklesPreview = ({
  children,
  className,
}: SparklesPreviewType) => {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md z-1">
      <div className={className}>{children}</div>

      <div className="w-[40rem] h-40 relative">
        {/* ─────────────────────────────────────────────
            1) ANIMATION: Gradient lines stretch from 0 → full width
        ─────────────────────────────────────────────*/}
        <motion.div
          className="absolute top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] blur-sm mx-auto left-0 right-0 origin-center"
          initial={{ width: 0 }}
          animate={{ width: "75%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.div
          className="absolute top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px mx-auto left-0 right-0 origin-center"
          initial={{ width: 0 }}
          animate={{ width: "75%" }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        />

        <motion.div
          className="absolute top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] blur-sm mx-auto left-0 right-0 origin-center"
          initial={{ width: 0 }}
          animate={{ width: "25%" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />

        <motion.div
          className="absolute top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px mx-auto left-0 right-0 origin-center"
          initial={{ width: 0 }}
          animate={{ width: "25%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* ─────────────────────────────────────────────
            2) ANIMATION: Sparkles appear AFTER gradient finishes
        ─────────────────────────────────────────────*/}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
          className="w-full h-full absolute inset-0"
        >
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </motion.div>

        {/* Mask gradient */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  );
};
