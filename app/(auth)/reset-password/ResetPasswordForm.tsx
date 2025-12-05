"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";
import { ROUTES } from "@/constants/routes";
import { createClient } from "@/lib/supabase/client";

export const ResetPasswordForm = () => {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}${ROUTES.UPDATE_PASSWORD}`,
    });

    if (error) {
      setStatus(error.message);
    } else {
      setIsSent(true);
      setStatus("Check your inbox for a password reset link.");
    }
  };

  return (
    <>
      {isSent ? (
        <>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl font-bold  mb-2"
          >
            Almost done! Check your email
          </motion.h1>
        </>
      ) : (
        <>
          <h1 className=" font-bold text-left mb-2">
            Oops, forgot your password?
          </h1>
          <p className="text-left text-gray-400 text-sm mb-4">
            Just enter your email below and we’ll send you a reset link.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 w-full max-w-md"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" variant="secondary" size="xl">
              Send reset Link
            </Button>

            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-gray-500"
              >
                {status}
              </motion.p>
            )}
          </form>
        </>
      )}
    </>
  );
};
