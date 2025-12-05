"use client";

import { useRef, useState } from "react";
import { createClient } from "@/src/lib/supabase/client";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { Confetti, ConfettiRef } from "@/components/ui/confetti";

export const UpdatePasswordForm = () => {
  const supabase = createClient();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const confettiRef = useRef<ConfettiRef>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setStatus(error.message);
    } else {
      setIsUpdated(true);
      setTimeout(() => {
        router.push("/");
      }, 2500);
    }
  };

  return (
    <>
      {isUpdated ? (
        <>
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-3 items-center justify-center text-center relative z-10 p-4"
            >
              <h1 className="text-3xl font-extrabold  drop-shadow-md">
                All set! 🎉
              </h1>
              <p className="text-gray-400 text-base max-w-xs">
                Your password has been updated successfully. You’ll be
                redirected shortly… 🚀
              </p>
            </motion.div>
            <Confetti
              ref={confettiRef}
              className="absolute  inset-0 z-0 w-full h-full"
            />
          </>
        </>
      ) : (
        <>
          <h1 className=" font-bold text-left mb-2">Almost done!</h1>
          <p className="text-left text-gray-400 text-sm mb-4">
            Just set your new password and you’re ready to go 🚀
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 w-full max-w-md"
          >
            <Input
              type="password"
              placeholder="New password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="secondary" size="xl">
              Update password
            </Button>
            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-sm text-gray-500`}
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
