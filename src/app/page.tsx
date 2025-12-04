import { TopBar, WelcomeHeroBlock } from "./components";
import { Particles } from "@/src/components/ui/particles";
import { GetStartedBlock } from "./components/GetStartedBlock";
import { IntroTitleBlock } from "./components/IntroTitleBlock";
import { ROUTES } from "@/src/constants/routes";
import { createSupabaseServerClient } from "../lib/supabase/server-client";
import { TempUserInfo } from "./TempUserInfo";

export default async function Home() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center  overflow-hidden rounded-md px-8">
      <TopBar nav={ROUTES.HOME} auth={true} />
      <WelcomeHeroBlock />
      <IntroTitleBlock />
      <GetStartedBlock />
      <div className="absolute inset-0 h-screen w-full z-0">
        <Particles quantity={200} color="#616161" />
      </div>
      <TempUserInfo user={user} />
    </div>
  );
}
