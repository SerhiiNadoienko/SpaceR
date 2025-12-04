import { UpdatePasswordForm } from "./UpdatePasswordForm";

export default async function UpdatePassword() {
  return (
    <div className="pt-12 flex justify-center">
      <div className="w-full max-w-[380px]">
        <UpdatePasswordForm />
      </div>
    </div>
  );
}
