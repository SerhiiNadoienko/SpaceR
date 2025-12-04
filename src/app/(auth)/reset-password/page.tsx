import { ResetPasswordForm } from "./ResetPasswordForm";

export default async function ResetPassword() {
  return (
    <div className="pt-12 flex justify-center">
      <div className="w-full max-w-[380px]">
        <ResetPasswordForm />
      </div>
    </div>
  );
}
