import { createServer } from "@/lib/supabase/server";
import { TempUserInfo } from "./TempUserInfo";

export default async function Home() {
  const supabase = await createServer();
  const { data } = await supabase.auth.getClaims();

  const userMetaData = data?.claims?.user_metadata;
  if (!userMetaData) return <>No data</>;

  console.log(data?.claims);

  return <TempUserInfo userMetaData={userMetaData} />;
}
