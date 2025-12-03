import { TopBar, WelcomeHeroBlock } from "./components";
import { Particles } from "@/src/components/ui/particles";
import { GetStartedBlock } from "./components/GetStartedBlock";
import { IntroTitleBlock } from "./components/IntroTitleBlock";
import { ROUTES } from "@/src/constants/routes";

export default function Home() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center  overflow-hidden rounded-md px-8">
      <TopBar nav={ROUTES.HOME} auth={true} />
      <WelcomeHeroBlock />
      <IntroTitleBlock />
      <GetStartedBlock />
      <div className="absolute inset-0 h-screen w-full z-0">
        <Particles quantity={200} color="#616161" />
      </div>
    </div>
  );
}
