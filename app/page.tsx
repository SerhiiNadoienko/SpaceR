import { SparklesCore } from "@/components/ui/sparkles";
import { TopBar, WelcomeHeroBlock } from "./components";
import { LearningPath } from "./components/LearningPath";

export default function Home() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center  overflow-hidden rounded-md">
      <TopBar />
      <WelcomeHeroBlock />
      <LearningPath />
      <div className="absolute inset-0 h-screen w-full z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#616161"
        />
      </div>
    </div>
  );
}
