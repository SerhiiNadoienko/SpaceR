import { Spotlight } from "@/src/components/ui/spotlight-new";
import { TopBar } from "../components";
import { ROUTES } from "@/src/constants/routes";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center  overflow-hidden rounded-md px-8">
      <TopBar nav={ROUTES.WELCOME} />
      <Spotlight />
      {children}
    </div>
  );
}
