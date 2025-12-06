import { User } from "@supabase/supabase-js";
type TempUserInfoProps = {
  user: User;
};

export const TempUserInfo = ({ user }: TempUserInfoProps) => {
  return (
    <div>
      <div className="bg-gray-800 p-4 rounded-md flex flex-col gap-2 z-10">
        <h2 className="text-lg font-semibold">User Info</h2>
        <p>
          <span className="font-medium">ID:</span> {user.id}
        </p>
        <p>
          <span className="font-medium">Email:</span> {user.email}
        </p>
      </div>
    </div>
  );
};
