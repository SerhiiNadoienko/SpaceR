"use client";

import { useState } from "react";
import { getSupabaseBrowserClient } from "@/src/lib/supabase/browser-client";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export const UpdatePasswordForm = () => {
  const supabase = getSupabaseBrowserClient();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);

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
      }, 1500);
    }
  };

  return (
    <>
      {!isUpdated ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-2 text-center"
        >
          <h1 className="text-2xl font-bold">All set!</h1>
          <p className="text-gray-400 text-sm">
            Your password has been updated. You’ll be redirected shortly… 🚀
          </p>
        </motion.div>
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
