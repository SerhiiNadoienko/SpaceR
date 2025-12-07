import { UserMetadata } from "@supabase/supabase-js";
type TempUserInfoProps = {
  userMetaData: UserMetadata;
};

export const TempUserInfo = ({ userMetaData }: TempUserInfoProps) => {
  return (
    <div>
      <div className="bg-gray-800 p-4 rounded-md flex flex-col gap-2 z-10">
        <h2 className="text-lg font-semibold">User Info</h2>
        <p>
          <span className="font-medium">name:</span> {userMetaData.name}
        </p>
        <p>
          <span className="font-medium">Email:</span> {userMetaData.email}
        </p>
      </div>
    </div>
  );
};
