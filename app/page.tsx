import { LessonsProgressList } from "@/components/LessonsProgressList";
import { createServer } from "@/lib/supabase/server";
import { mockLessonsProgressList } from "@/mocks/lessonsProgressList.mock";

export default async function Home() {
  const supabase = await createServer();
  const { data } = await supabase.auth.getClaims();

  const userMetaData = data?.claims?.user_metadata;
  if (!userMetaData) return <>No data</>;

  console.log(data?.claims);

  return (
    <div className="flex w-full gap-5">
      {/* TODO: replace mockLessonsProgressList to the real data*/}
      <LessonsProgressList lessonsList={mockLessonsProgressList} />
      <div>another content</div>
    </div>
  );
}
