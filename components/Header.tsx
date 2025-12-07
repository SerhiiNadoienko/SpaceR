"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { ROUTES } from "@/constants/routes";

import { UserMenu } from "./UserMenu";
import { useSupabase } from "@/hooks/useSupabase";

export const Header = () => {
  const pathname = usePathname();
  const { user } = useSupabase();

  const showAuthButtons = pathname === ROUTES.WELCOME;

  return (
    <header className="absolute top-0 left-0 w-full z-50 pointer-events-auto">
      <div className="mx-auto flex items-center justify-between gap-4 py-4 px-6">
        <Link href={ROUTES.HOME}>
          <div className="flex items-center cursor-pointer">
            <Image src={logo} alt="Logo" width={36} height={36} />
          </div>
        </Link>

        {showAuthButtons && (
          <div className="flex gap-4">
            <Button asChild variant="outline">
              <Link href={ROUTES.SIGN_IN}>Sign in</Link>
            </Button>
            <Button asChild>
              <Link href={ROUTES.SIGN_UP}>Sign up</Link>
            </Button>
          </div>
        )}

        {user && <UserMenu />}
      </div>
    </header>
  );
};
