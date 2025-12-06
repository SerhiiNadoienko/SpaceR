import { Particles } from "@/components/ui/particles";
import { TopBar } from "@/components/TopBar";
import { ROUTES } from "@/constants/routes";
import { WelcomePageDemo } from "./WelcomePageDemo";
import { createServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function WelcomePage() {
  const supabase = await createServer();

  const { data } = await supabase.auth.getClaims();

  if (data?.claims) {
    redirect("/");
  }
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center  overflow-hidden rounded-md px-8">
      <TopBar nav={ROUTES.WELCOME} showAuth={true} />
      <WelcomePageDemo />
      <div className="absolute inset-0 h-screen w-full z-0">
        <Particles quantity={200} color="#616161" />
      </div>
    </div>
  );
}
