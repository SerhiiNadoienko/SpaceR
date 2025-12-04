"use client";

import { useState } from "react";
import { getSupabaseBrowserClient } from "@/src/lib/supabase/browser-client";
import { Button } from "@/src/components/ui/button";
import { motion } from "motion/react";
import { ROUTES } from "@/src/constants/routes";

type EmailPasswordFormProps = {
  mode: "signin" | "signup";
  onBack: () => void;
};

export const EmailPasswordForm = ({ mode, onBack }: EmailPasswordFormProps) => {
  const supabase = getSupabaseBrowserClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (mode === "signup") {
      const { error, data } = await supabase.auth.signUp({
        email,
        password,
        options: {
          // TODO: Replace navigation
          emailRedirectTo: `${window.location.origin}${ROUTES.SIGN_UP}`,
        },
      });

      if (error) setStatus(error.message);
      else setStatus("Check your inbox to confirm");

      console.log({ data });
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) setStatus(error.message);
      else setStatus("Signed in successfully");
    }
  }

  return (
    <div className="flex flex-col gap-6 p-0">
      <h1 className="text-4xl font-bold text-center">
        Sign {mode === "signup" ? "up" : "in"} with email{" "}
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          key="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md bg-transparent text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          key="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md bg-transparent text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </form>
      {status && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-yellow-300"
        >
          {status}
        </motion.p>
      )}
      <div className="flex flex-col gap-3">
        <Button
          key="submit"
          type="submit"
          size="xl"
          className="w-full"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <Button variant="border" size="xl" className="w-full" onClick={onBack}>
          Back to options
        </Button>
      </div>
    </div>
  );
};
