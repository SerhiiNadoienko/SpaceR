type LessonProgressStatusType = "To do" | "In progress" | "Completed";

export type LessonsProgressListType = {
  id: number;
  name: string;
  lessonsCount: number;
  completedCount: number;
  status: LessonProgressStatusType;
};

export const mockLessonsProgressList: LessonsProgressListType[] = [
  {
    id: 1,
    name: "JSX",
    lessonsCount: 20,
    completedCount: 20,
    status: "Completed",
  },
  {
    id: 2,
    name: "State",
    lessonsCount: 14,
    completedCount: 7,
    status: "In progress",
  },
  {
    id: 3,
    name: "Effect",
    lessonsCount: 20,
    completedCount: 4,
    status: "To do",
  },
];
