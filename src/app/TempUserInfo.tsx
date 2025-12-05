"use client";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation"; // Next 13+ app router
import { ROUTES } from "../constants/routes";
import { createClient } from "../lib/supabase/client";

type TempUserInfoProps = {
  user: User | null;
};

export const TempUserInfo = ({ user }: TempUserInfoProps) => {
  const router = useRouter();
  const supabase = createClient();
  const [currentUser, setCurrentUser] = useState<User | null>(user);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setCurrentUser(null);
    router.push(ROUTES.WELCOME);
  };

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!session) {
          router.push(ROUTES.WELCOME);
        } else {
          setCurrentUser(session.user);
        }
      }
    );

    return () => listener?.subscription.unsubscribe();
  }, [supabase, router]);

  return (
    <div>
      {" "}
      {currentUser ? (
        <div className="bg-gray-800 p-4 rounded-md flex flex-col gap-2 z-10">
          <h2 className="text-lg font-semibold">User Info</h2>
          <p>
            <span className="font-medium">ID:</span> {currentUser.id}
          </p>
          <p>
            <span className="font-medium">Email:</span> {currentUser.email}
          </p>

          <button
            onClick={handleSignOut}
            className="z-20 mt-2 bg-red-600 hover:bg-red-500 py-2 rounded-md font-medium transition-colors"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <>Session metadata will be show after sign in</>
      )}
    </div>
  );
};
