"use client";

import { useState } from "react";
import { getSupabaseBrowserClient } from "@/src/lib/supabase/browser-client";
import { Button } from "@/src/components/ui/button";
import { motion } from "motion/react";
import { Input } from "@/src/components/ui/input";
import { useRouter } from "next/navigation"; // Next 13+ app router
import Link from "next/link";
import { ROUTES } from "@/src/constants/routes";

type EmailPasswordFormProps = {
  mode: "in" | "up";
  onBack: () => void;
};

export const EmailPasswordForm = ({ mode, onBack }: EmailPasswordFormProps) => {
  const supabase = getSupabaseBrowserClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);
    setStatus("");

    if (mode === "up") {
      const { data, error } = await supabase.auth.signUp({ email, password });

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
        if (error.code === "invalid_credentials") {
          setEmailError(true);
          setPasswordError(true);
          setStatus("Wrong email address or password.");
        } else {
          setStatus(error.message);
        }
        return;
      }
      router.push("/");
    }
  }

  return (
    <div className="flex flex-col gap-6 p-0">
      <h1 className="text-4xl font-bold text-center">Sign {mode} with email</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          required
          className={`w-full ${emailError ? "border-red-500" : ""}`}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          required
          className={`w-full ${passwordError ? "border-red-500" : ""}`}
          onChange={(e) => setPassword(e.target.value)}
        />
        {mode === "in" && (
          <motion.div
            className="text-right mt-1"
            animate={
              passwordError
                ? {
                    x: [0, -5, 5, -5, 5, 0],
                  }
                : { x: 0 }
            }
            transition={{ duration: 0.3 }}
          >
            <Link
              href={ROUTES.RESET_PASSWORD}
              className="text-sm text-gray-500 hover:underline"
            >
              Forgot password?
            </Link>
          </motion.div>
        )}
      </form>

      {status && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-red-500"
        >
          {status}
        </motion.p>
      )}
      <div className="flex flex-col gap-3 w-full">
        <Button
          type="submit"
          variant="secondary"
          size="xl"
          onClick={handleSubmit}
        >
          Sign {mode}
        </Button>
        <Button variant="border" size="xl" onClick={onBack}>
          Go back
        </Button>
      </div>
    </div>
  );
};
