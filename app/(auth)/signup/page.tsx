import { AuthDemo } from "../AuthDemo";

export default async function SignUp() {
  return (
    <div className="pt-12">
      <div className="w-full max-w-md flex flex-col gap-6">
        <AuthDemo mode="up" />
      </div>
    </div>
  );
}
