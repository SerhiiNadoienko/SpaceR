import { LessonsProgressListType } from "@/mocks/lessonsProgressList.mock";
import { LessonsProgressListCard } from "./LessonsProgressListCard";

interface LessonsProgressListProps {
  lessonsList: LessonsProgressListType[];
}

export const LessonsProgressList = ({
  lessonsList,
}: LessonsProgressListProps) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {lessonsList.map((lesson) => (
        <LessonsProgressListCard key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
};
