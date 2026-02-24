type LessonProgressStatusType = "To do" | "In progress" | "Completed";

export type LessonsProgressListType = {
  id: number;
  name: string;
  description: string;
  lessonsCount: number;
  completedCount: number;
  status: LessonProgressStatusType;
};

export const mockLessonsProgressList: LessonsProgressListType[] = [
  {
    id: 1,
    name: "JSX & Rendering Basics",
    description:
      "Learn the fundamentals of JSX, syntax rules, rendering elements, and using expressions in templates.",
    lessonsCount: 20,
    completedCount: 20,
    status: "Completed",
  },
  {
    id: 2,
    name: "State & Component Lifecycle",
    description:
      "Understand component state management, asynchronous updates, and React component lifecycle methods.",
    lessonsCount: 14,
    completedCount: 7,
    status: "In progress",
  },
  {
    id: 3,
    name: "Effects & Side Effects",
    description:
      "Explore useEffect, handling subscriptions, cleanup functions, and interacting with external APIs.",
    lessonsCount: 20,
    completedCount: 4,
    status: "To do",
  },
];
