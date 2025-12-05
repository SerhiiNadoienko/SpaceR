import { Spotlight } from "@/components/ui/spotlight-new";
import { TopBar } from "@/components/TopBar";
import { ROUTES } from "@/constants/routes";

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
