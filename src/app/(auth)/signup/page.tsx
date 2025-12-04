import { SignUpDemo } from "./SignUpDemo";
import { createSupabaseServerClient } from "@/src/lib/supabase/server-client";

export default async function SignUp() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="pt-12">
      <div className="w-full max-w-md flex flex-col gap-6">
        <SignUpDemo user={user} />
      </div>
    </div>
  );
}
