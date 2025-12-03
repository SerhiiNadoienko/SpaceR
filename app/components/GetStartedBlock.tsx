"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SparklesPreview } from "@/components/ui/sparcles-preview";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";

export const GetStartedBlock = () => {
  return (
    <SparklesPreview className="mb-4">
      <Link href={ROUTES.SIGN_UP}>
        <HoverBorderGradient containerClassName="rounded-sm" as="button">
          <span className="text-xl font-bold">Get Started</span>
        </HoverBorderGradient>
      </Link>
    </SparklesPreview>
  );
};
