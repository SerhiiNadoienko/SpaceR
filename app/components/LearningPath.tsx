"use client";

import { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Card, CardTitle } from "@/components/Card";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { motion } from "motion/react";
import { Pointer } from "@/components/ui/pointer";

const LearningPathCard = forwardRef<
  HTMLDivElement,
  {
    name: string;
    label: string;
    id: number;
    tooltip: string;
    pointerIcon: React.ReactNode;
  }
>(({ name, label, id, tooltip, pointerIcon }, ref) => {
  const items = [
    {
      id,
      name,
      designation: tooltip,
      component: (
        <div className="relative">
          <Card ref={ref} className="w-40 text-center z-20 relative">
            <CardTitle>{label}</CardTitle>
          </Card>

          <Pointer>
            <motion.div
              animate={{
                scale: [0.8, 1, 0.8],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {pointerIcon}
            </motion.div>
          </Pointer>
        </div>
      ),
    },
  ];

  return <AnimatedTooltip items={items} />;
});

LearningPathCard.displayName = "LearningPathCard";

export function LearningPath() {
  const containerRef = useRef<HTMLDivElement>(null);

  const beginnerRef = useRef<HTMLDivElement>(null);
  const juniorRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const seniorRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative flex gap-15 z-20">
      <LearningPathCard
        ref={beginnerRef}
        name="Beginner"
        label="Red Dwarf 😕"
        id={1}
        tooltip="Knows JS & HTML basics"
        pointerIcon={<div className="text-2xl">👆</div>}
      />
      <LearningPathCard
        ref={juniorRef}
        name="Junior"
        label="Yellow Star 🤓"
        id={2}
        tooltip="React basics in sight"
        pointerIcon={<div className="text-2xl">✨</div>}
      />
      <LearningPathCard
        ref={midRef}
        name="Mid-Level"
        label="Blue Giant 🧐"
        id={3}
        tooltip="Can launch a project solo"
        pointerIcon={<div className="text-2xl">🚀</div>}
      />
      <LearningPathCard
        ref={seniorRef}
        name="Senior"
        label="Nova 😎"
        id={4}
        tooltip="Google fears him"
        pointerIcon={<div className="text-2xl">🌟</div>}
      />

      <AnimatedBeam
        duration={2}
        containerRef={containerRef}
        fromRef={beginnerRef}
        toRef={juniorRef}
      />
      <AnimatedBeam
        duration={2}
        containerRef={containerRef}
        fromRef={juniorRef}
        toRef={midRef}
      />
      <AnimatedBeam
        duration={2}
        containerRef={containerRef}
        fromRef={midRef}
        toRef={seniorRef}
      />
    </div>
  );
}
