"use client";

import { DropdownMenu } from "./DropdownMenu";
import { HiUser, HiCog6Tooth, HiArrowRightOnRectangle } from "react-icons/hi2";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { createClient } from "@/lib/supabase/client";

export const UserMenu = () => {
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
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
        { label: "Settings", icon: <HiCog6Tooth size={18} /> },
        {
          label: "Sign out",
          icon: <HiArrowRightOnRectangle size={18} />,
          onClick: handleSignOut,
        },
      ]}
    />
  );
};
