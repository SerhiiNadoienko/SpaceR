import { ROUTES } from "@/constants/routes";
import { TempUserInfo } from "./TempUserInfo";
import { redirect } from "next/navigation";
import { createServer } from "../lib/supabase/server";
import { TopBar } from "@/components/TopBar";

export default async function Home() {
  const supabase = await createServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: session } = await supabase.auth.getSession();

  if (session === null) {
    redirect(ROUTES.WELCOME);
  }

  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center  overflow-hidden rounded-md px-8">
      <TopBar nav={ROUTES.HOME} />
      <TempUserInfo user={user} />
    </div>
  );
}
