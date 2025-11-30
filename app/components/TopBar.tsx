"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { motion } from "motion/react";

export const TopBar = () => {
  return (
    <div className="w-full flex items-center justify-between gap-4 py-4 z-10">
      <motion.div
        initial={{ x: -20, y: -10, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <h1 className="ml-2 text-white font-bold text-2xl">ReactNova</h1>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 20, y: -10, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex gap-4">
          <Button asChild variant="outline">
            <Link href="/signin">Sign in</Link>
          </Button>

          <Button asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
