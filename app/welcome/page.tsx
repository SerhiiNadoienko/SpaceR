import { Particles } from "@/components/ui/particles";
import { WelcomePageDemo } from "./WelcomePageDemo";

export default async function WelcomePage() {
  return (
    <div className="h-screen flex flex-col">
      <WelcomePageDemo />
      <div className="absolute inset-0">
        <Particles quantity={200} color="#616161" />
      </div>
    </div>
  );
}
