"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { User } from "@supabase/supabase-js";
import { ROUTES } from "@/src/constants/routes";
import { motion } from "motion/react";
import { Button } from "@/src/components/ui/button";
import { getSupabaseBrowserClient } from "@/src/lib/supabase/browser-client";
import { useEffect, useState } from "react";
import { EmailPasswordForm } from "../../components/EmailPasswordForm";
import Link from "next/link";

type SignUpDemoProps = {
  user: User | null;
};

export const SignUpDemo = ({ user }: SignUpDemoProps) => {
  const supabase = getSupabaseBrowserClient();
  const [currentUser, setCurrentUser] = useState<User | null>(user);
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleOAuthSignIn = async (provider: "google" | "github") => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}${ROUTES.SIGN_UP}`,
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
      icon: <HiOutlineMail size={30} className="text-white size-5" />,
      text: "email",
      onClick: () => setShowEmailForm(true),
    },
    {
      icon: <FaGithub size={30} className="text-white size-5" />,
      text: "GitHub",
      onClick: () => handleOAuthSignIn("github"),
    },
  ];

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setCurrentUser(null);
  };

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setCurrentUser(session?.user ?? null);
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [supabase]);

  return (
    <>
      {showEmailForm ? (
        <EmailPasswordForm
          mode="signup"
          onBack={() => setShowEmailForm(false)}
        />
      ) : (
        <>
          <h1 className="text-4xl font-bold text-center">
            Create your account
          </h1>
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
          />{" "}
          <div className="flex gap-2 justify-center">
            <span className="font-sans text-gray-500">
              Already have an account?
            </span>
            <Link href={ROUTES.SIGN_IN}>Sign in</Link>
          </div>
          {currentUser ? (
            <div className="bg-gray-800 p-4 rounded-md flex flex-col gap-2">
              <h2 className="text-lg font-semibold">User Info</h2>
              <p>
                <span className="font-medium">ID:</span> {currentUser.id}
              </p>
              <p>
                <span className="font-medium">Email:</span> {currentUser.email}
              </p>
              <p>
                <span className="font-medium">Created At:</span>{" "}
                {currentUser.created_at
                  ? new Date(currentUser.created_at).toLocaleString()
                  : "N/A"}
              </p>
              <button
                onClick={handleSignOut}
                className="mt-2 bg-red-600 hover:bg-red-500 py-2 rounded-md font-medium transition-colors"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>Session metadata will be show after sign in</>
          )}
        </>
      )}
    </>
  );
};
