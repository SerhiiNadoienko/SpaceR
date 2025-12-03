"use client";

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function SignUp() {
  const buttonsList = [
    {
      icon: <FcGoogle className="size-5" />,
      text: "Google",
      onClick: () => console.log("Sign up with Google"),
    },
    {
      icon: <HiOutlineMail size={30} className="text-white size-5" />,
      text: "email",
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
    <div className="pt-10">
      <div className="w-full max-w-md flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-center">Create your account</h1>

        <div className="flex flex-col gap-3 mt-4">
          {buttonsList.map(({ icon, text, onClick }) => {
            return (
              <Button key={text} variant="border" size="xl" onClick={onClick}>
                {icon}
                <span className="text-white font-sans">
                  Sign up with {text}
                </span>
              </Button>
            );
          })}
        </div>
        <div className="my-4 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </div>
    </div>
  );
}
