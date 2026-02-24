// import { ActivityHeatmap } from "@/components/ActivityHeatmap";
// import { Card } from "@/components/Card";
import { LessonsProgressList } from "@/components/LessonsProgressList";
import { createServer } from "@/lib/supabase/server";
// import { mergedData } from "@/lib/utils/heatmap";
import { mockLessonsProgressList } from "@/mocks/lessonsProgressList.mock";

export default async function Home() {
  const supabase = await createServer();
  const { data } = await supabase.auth.getClaims();

  const userMetaData = data?.claims?.user_metadata;
  if (!userMetaData) return <>No data</>;

  console.log(data?.claims);

  return (
    <div className="w-full flex flex-col gap-12">
      {/* TODO: replace mockActivityData to the real data*/}
      {/* <Card className="bg-transparent p-4">
        <ActivityHeatmap data={mergedData} />
      </Card> */}
      <div className="flex w-full gap-5">
        {/* TODO: replace mockLessonsProgressList to the real data*/}
        <LessonsProgressList lessonsList={mockLessonsProgressList} />
      </div>
    </div>
  );
}
