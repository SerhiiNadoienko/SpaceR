"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SparklesPreview } from "@/components/ui/sparcles-preview";

export const GetStartedBlock = () => {
  return (
    <SparklesPreview className="mb-4">
      <HoverBorderGradient containerClassName="rounded-sm" as="button">
        <span className="text-xl font-bold">Get Started</span>
      </HoverBorderGradient>
    </SparklesPreview>
  );
};
