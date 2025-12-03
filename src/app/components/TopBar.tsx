import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { ROUTES } from "@/src/constants/routes";

interface TopBarProps {
  auth?: boolean;
  nav: string;
}

export const TopBar = ({ auth, nav }: TopBarProps) => {
  return (
    <div className="w-full flex items-center justify-between gap-4 py-4 z-10">
      <Link href={nav}>
        <div className="flex items-center cursor-pointer">
          <Image src={logo} alt="Logo" width={36} height={36} />
        </div>
      </Link>

      {auth && (
        <div className="flex gap-4">
          <Button asChild variant="outline">
            <Link href={ROUTES.SIGN_IN}>Sign in</Link>
          </Button>

          <Button asChild>
            <Link href={ROUTES.SIGN_UP}>Sign up</Link>
          </Button>
        </div>
      )}
    </div>
  );
};
