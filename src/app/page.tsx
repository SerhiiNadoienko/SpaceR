import { TopBar } from "./components";
import { ROUTES } from "@/src/constants/routes";
import { createSupabaseServerClient } from "../lib/supabase/server-client";
import { TempUserInfo } from "./TempUserInfo";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: session } = await supabase.auth.getSession();
  console.log(user, session);

  if (session === null) {
    redirect(ROUTES.WELCOME);
  }

  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center  overflow-hidden rounded-md px-8">
      <TopBar nav={ROUTES.HOME} auth={false} />
      <TempUserInfo user={user} />
    </div>
  );
}
