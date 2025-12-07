"use client";

import { DropdownMenu } from "./DropdownMenu";
import { HiUser, HiCog6Tooth } from "react-icons/hi2";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { PiSignOutBold } from "react-icons/pi";

export const UserMenu = () => {
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    redirect(ROUTES.WELCOME);
  };

  return (
    <DropdownMenu
      trigger={
        <Avatar className="size-9">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      }
      items={[
        { label: "Profile", icon: <HiUser size={18} /> },
        {
          label: "Settings",
          icon: <HiCog6Tooth size={18} />,
          onClick: () => redirect(ROUTES.SETTINGS),
        },
        {
          label: "Sign out",
          icon: <PiSignOutBold size={18} />,
          onClick: handleSignOut,
        },
      ]}
    />
  );
};
