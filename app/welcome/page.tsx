import { Particles } from "@/components/ui/particles";
import { WelcomePageDemo } from "./WelcomePageDemo";

export default async function WelcomePage() {
  return (
    <div className="h-[calc(100vh-80px)] flex flex-col">
      <WelcomePageDemo />
      <div className="absolute inset-0 overflow-hidden">
        <Particles quantity={200} color="#616161" />
      </div>
    </div>
  );
}
