import { TopBar, WelcomeHeroBlock } from "./components";
import { Particles } from "@/components/ui/particles";
import { GetStartedBlock } from "./components/GetStartedBlock";

export default function Home() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center  overflow-hidden rounded-md px-8">
      <TopBar />
      <WelcomeHeroBlock />

      <div className="flex flex-col-reverse items-start gap-6">
        <h1 className="z-1  text-2xl text-center max-w-[800px] mx-auto mt-7">
          A platform to master React from your first JSX to building real-world
          apps, starting completely from scratch.
        </h1>
      </div>

      <GetStartedBlock />
      <div className="absolute inset-0 h-screen w-full z-0">
        <Particles quantity={200} color="#616161" />
      </div>
    </div>
  );
}
