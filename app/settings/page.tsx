import { createServer } from "@/lib/supabase/server";

export default async function SettingsPage() {
  const supabase = await createServer();
  const { data } = await supabase.auth.getClaims();

  const userMetaData = data?.claims?.user_metadata;
  if (!userMetaData) return <>No data</>;

  console.log(data?.claims);

  return <>user setting</>;
}
