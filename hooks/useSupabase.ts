import { User } from "@supabase/supabase-js";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ROUTES } from "@/constants/routes";

export function useSupabase() {
  const supabase = createClient();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace(ROUTES.WELCOME);
        return;
      }

      const { data: userData, error } = await supabase.auth.getUser();

      if (error || !userData.user) {
        router.replace(ROUTES.WELCOME);
        return;
      }

      setUser(userData.user);
      setLoading(false);
    };

    checkUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!session) router.replace(ROUTES.WELCOME);
      }
    );

    return () => listener.subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user, loading };
}
