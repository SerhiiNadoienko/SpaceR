import { AuthDemo } from "../AuthDemo";

export default async function SignIn() {
  return (
    <div className="pt-12">
      <div className="w-full max-w-md flex flex-col gap-6">
        <AuthDemo mode="in" />
      </div>
    </div>
  );
}
