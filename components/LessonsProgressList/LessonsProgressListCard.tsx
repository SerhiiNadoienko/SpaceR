import { LessonsProgressListType } from "@/mocks/lessonsProgressList.mock";
import { Card } from "../Card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { cn } from "@/lib/utils";

interface LessonsProgressListCardProps {
  lesson: LessonsProgressListType;
}

export const LessonsProgressListCard = ({
  lesson,
}: LessonsProgressListCardProps) => {
  const { name, description, lessonsCount, completedCount, status } = lesson;

  const progressValue =
    lessonsCount === 0 ? 0 : Math.round((completedCount / lessonsCount) * 100);

  return (
    <Card
      className="flex flex-row items-center justify-between  w-full border-none p-5
     transition-colors duration-300
    hover:bg-linear-to-r hover:from-purple/20 hover:to-light-green/20
    "
    >
      <div className="flex flex-col gap-3 w-full">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-stone-400 text-[14px]">{description}</p>
        <div className="flex flex-row justify-between items-center gap-5">
          <p className="text-nowrap">{progressValue}%</p>
          <Progress value={progressValue} className="color-destructive" />
        </div>
      </div>
      {/* //TODO: add button color light-green when status is completed */}
      <Button
        variant="ghost"
        className={cn(
          "border min-w-25 hover:bg-white/2",
          status === "Completed" &&
            "bg-light-green text-black hover:bg-green-100  hover:text-black"
        )}
      >
        {status}
      </Button>
    </Card>
  );
};
