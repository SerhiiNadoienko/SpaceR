"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ROUTES } from "@/constants/routes";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { EmailPasswordForm } from "@/components/EmailPasswordForm";

type AuthDemoProps = {
  mode: "in" | "up";
};

export const AuthDemo = ({ mode }: AuthDemoProps) => {
  const config = {
    title: `${mode === "up" ? "Create" : "Sign in to"} your account`,
    href: mode === "up" ? ROUTES.SIGN_IN : ROUTES.SIGN_UP,
    buttonText: mode === "up" ? "in" : "up",
  };

  const supabase = createClient();
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleOAuthSignIn = async (provider: "google" | "github") => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}${ROUTES.HOME}`,
        skipBrowserRedirect: false,
      },
    });
  };

  const buttonsList = [
    {
      icon: <FcGoogle className="size-5" />,
      text: "Google",
      onClick: () => handleOAuthSignIn("google"),
    },
    {
      icon: <FaGithub size={30} className="text-white size-5" />,
      text: "GitHub",
      onClick: () => handleOAuthSignIn("github"),
    },
    {
      icon: <HiOutlineMail size={30} className="text-white size-5" />,
      text: "email",
      onClick: () => setShowEmailForm(true),
    },
  ];

  return (
    <>
      {showEmailForm ? (
        <EmailPasswordForm mode={mode} onBack={() => setShowEmailForm(false)} />
      ) : (
        <>
          <h1 className="text-4xl font-bold text-center">{config.title}</h1>
          <div className="flex flex-col gap-3 mt-4">
            {buttonsList.map(({ icon, text, onClick }, i) => {
              const fromLeft = mode === "up" ? i % 2 === 0 : i % 2 !== 0;

              return (
                <motion.div
                  key={text}
                  initial={{
                    x: fromLeft ? -10 : 10,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: i * 0.1,
                  }}
                >
                  <Button
                    variant="border"
                    size="xl"
                    onClick={onClick}
                    className="w-full"
                  >
                    {icon}
                    <span className="text-white font-sans">
                      Sign {mode} with {text}
                    </span>
                  </Button>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />{" "}
          <div className="flex gap-2 justify-center">
            <span className="font-sans text-gray-500">
              Already have an account?
            </span>
            <Link href={config.href}>Sign {config.buttonText}</Link>
          </div>
        </>
      )}
    </>
  );
};
