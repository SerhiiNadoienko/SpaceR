"use client";

import { Button } from "@/src/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "motion/react";
import Link from "next/link";
import { ROUTES } from "@/src/constants/routes";

export default function SignUp() {
  const buttonsList = [
    {
      icon: <FcGoogle className="size-5" />,
      text: "Google",
      onClick: () => console.log("Sign up with Google"),
    },
    {
      icon: <HiOutlineMail size={30} className="text-white size-5" />,
      text: "Email",
      onClick: () => console.log("Sign up with email"),
    },
    {
      icon: <FaGithub size={30} className="text-white size-5" />,
      text: "GitHub",
      onClick: () => console.log("Sign up with GitHub"),
    },
    {
      icon: <FaApple size={30} className="text-white size-5" />,
      text: "Apple",
      onClick: () => console.log("Sign up with Apple"),
    },
  ];

  return (
    <div className="pt-12">
      <div className="w-full max-w-md flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-center">Create your account</h1>

        <div className="flex flex-col gap-3 mt-4">
          {buttonsList.map(({ icon, text, onClick }, i) => {
            const fromLeft = i % 2 === 0;

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
                className="w-full"
              >
                <Button
                  variant="border"
                  size="xl"
                  onClick={onClick}
                  className="w-full"
                >
                  {icon}
                  <span className="text-white font-sans">
                    Sign up with {text}
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
        />

        <div className="flex gap-2 justify-center">
          <span className="font-sans text-gray-500">
            Already have an account?
          </span>
          <Link href={ROUTES.SIGN_IN}>Sign in</Link>
        </div>
      </div>
    </div>
  );
}
