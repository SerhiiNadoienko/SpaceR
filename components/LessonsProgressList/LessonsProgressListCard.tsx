import { LessonsProgressListType } from "@/mocks/lessonsProgressList.mock";
import { Card } from "../Card";
import { Button } from "../ui/button";

interface LessonsProgressListCardProps {
  lesson: LessonsProgressListType;
}

export const LessonsProgressListCard = ({
  lesson,
}: LessonsProgressListCardProps) => {
  const { name, lessonsCount, completedCount, status } = lesson;
  return (
    <Card className="flex flex-row items-center justify-between  w-full border-transparent">
      <div>
        <h1 className="text-xl font-bold">{name}</h1>
        <div className="flex flex-row justify-between gap-5">
          <p>{`${lessonsCount} / ${completedCount}`}</p>
          <div>progress bar</div>
        </div>
      </div>
      <Button variant="border" className="border-transparent min-w-25">
        {status}
      </Button>
    </Card>
  );
};
