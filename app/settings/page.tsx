"use client";

import { TopBar } from "@/components/TopBar";
import { ROUTES } from "@/constants/routes";
import { useSupabase } from "@/hooks/useSupabase";

export default function SettingsPage() {
  const { user } = useSupabase();

  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center overflow-hidden rounded-md px-8">
      <TopBar nav={ROUTES.HOME} user={user} />

      <>user setting</>
    </div>
  );
}
