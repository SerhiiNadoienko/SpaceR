import { Card } from "@/components/Card";
import { UserMetadata } from "@supabase/supabase-js";
type TempUserInfoProps = {
  userMetaData: UserMetadata;
};

export const TempUserInfo = ({ userMetaData }: TempUserInfoProps) => {
  return (
    <Card>
      <h2 className="text-lg font-semibold">User Info</h2>
      <p>
        <span className="font-medium">name:</span> {userMetaData.name}
      </p>
      <p>
        <span className="font-medium">Email:</span> {userMetaData.email}
      </p>
    </Card>
  );
};
