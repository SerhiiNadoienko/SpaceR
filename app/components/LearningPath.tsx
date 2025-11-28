"use client";

import { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Card, CardTitle } from "@/components/Card";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const LearningPathCard = forwardRef<
  HTMLDivElement,
  { name: string; label: string; id: number; tooltip: string }
>(({ name, label, id, tooltip }, ref) => {
  const items = [
    {
      id,
      name: name,
      designation: tooltip,
      component: (
        <Card ref={ref} className="w-40 text-center z-20 relative">
          <CardTitle>{label}</CardTitle>
        </Card>
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
    <div
      ref={containerRef}
      className="
        relative flex
        gap-15
        p-10
        z-20
      "
    >
      <LearningPathCard
        ref={beginnerRef}
        name="Beginner"
        label="Red Dwarf 😕"
        id={1}
        tooltip={"Knows JS & HTML basics"}
      />
      <LearningPathCard
        ref={juniorRef}
        name="Junior"
        label="Yellow Star 🤓"
        id={3}
        tooltip={"React basics in sight"}
      />
      <LearningPathCard
        ref={midRef}
        name="Mid-Level"
        label="Blue Giant 🧐"
        id={3}
        tooltip={"Can launch a project solo"}
      />
      <LearningPathCard
        ref={seniorRef}
        name="Senior"
        label="Nova 😎"
        id={4}
        tooltip={"Google fears him"}
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
