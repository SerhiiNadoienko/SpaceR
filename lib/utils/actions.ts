import { redirect } from "next/navigation";
import { createClient } from "../supabase/client";

type ProviderType = "google" | "github" | "discord";

const signInWith = (provider: ProviderType) => async () => {
  const supabase = createClient();
  const authCallback = `${window.location.origin}/auth/callback`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: authCallback,
    },
  });

  if (error) {
    console.error(error);
    return;
  }

  if (data?.url) {
    redirect(data.url);
  } else {
    console.error("OAuth returned no URL to redirect to");
  }
};

const signInWithGoogle = signInWith("google");
const signInWithGithub = signInWith("github");
const signInWithDiscord = signInWith("discord");

export { signInWithGoogle, signInWithGithub, signInWithDiscord };
