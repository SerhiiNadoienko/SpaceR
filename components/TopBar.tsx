import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { ROUTES } from "@/constants/routes";
import { createServer } from "@/lib/supabase/server";
import { UserMenu } from "./UserMenu";

interface TopBarProps {
  showAuth?: boolean;
  nav: string;
}

export const TopBar = async ({ showAuth, nav }: TopBarProps) => {
  const supabase = await createServer();

  const { data } = await supabase.auth.getClaims();

  return (
    <div className="w-full flex items-center justify-between gap-4 py-4 z-10">
      <Link href={nav}>
        <div className="flex items-center cursor-pointer">
          <Image src={logo} alt="Logo" width={36} height={36} />
        </div>
      </Link>

      {showAuth && (
        <div className="flex gap-4">
          <Button asChild variant="outline">
            <Link href={ROUTES.SIGN_IN}>Sign in</Link>
          </Button>

          <Button asChild>
            <Link href={ROUTES.SIGN_UP}>Sign up</Link>
          </Button>
        </div>
      )}

      {data && <UserMenu />}
    </div>
  );
};
