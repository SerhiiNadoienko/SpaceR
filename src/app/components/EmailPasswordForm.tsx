"use client";

import { useState } from "react";
import { getSupabaseBrowserClient } from "@/src/lib/supabase/browser-client";
import { Button } from "@/src/components/ui/button";
import { motion } from "motion/react";
import { Input } from "@/src/components/ui/input";
import { useRouter } from "next/navigation"; // если Next 13+ app router

type EmailPasswordFormProps = {
  mode: "signin" | "signup";
  onBack: () => void;
};

export const EmailPasswordForm = ({ mode, onBack }: EmailPasswordFormProps) => {
  const supabase = getSupabaseBrowserClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [emailError, setEmailError] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmailError(false);
    setStatus("");

    if (mode === "signup") {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        if (error.code === "user_already_exists") {
          setEmailError(true);
          setStatus("The email address you entered is already in use.");
        } else {
          setStatus(error.message);
        }
        return;
      }

      if (data.user) {
        router.push("/");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setStatus(error.message);
      } else {
        router.push("/");
      }
    }
  }

  return (
    <div className="flex flex-col gap-6 p-0">
      <h1 className="text-4xl font-bold text-center">
        Sign {mode === "signup" ? "up" : "in"} with email
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input
          key="email"
          type="email"
          placeholder="Email"
          value={email}
          required
          className={`w-full ${emailError ? "border-red-500" : ""}`}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-red-500"
          >
            The email address you entered is already in use.
          </motion.p>
        )}
        <Input
          key="password"
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      {status && !emailError && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-yellow-300"
        >
          {status}
        </motion.p>
      )}
      <div className="flex flex-col gap-3 w-full">
        <Button
          key="submit"
          type="submit"
          variant="secondary"
          size="xl"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <Button variant="border" size="xl" onClick={onBack}>
          Back to options
        </Button>
      </div>
    </div>
  );
};
