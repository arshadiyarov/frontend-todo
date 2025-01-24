import { TutorialEntity } from "../../entities/tutorial/model/tutorial";

export const mockTutorialTasks: TutorialEntity[] = [
  {
    id: "1",
    title: "Create your first task",
    description: "Add something to your todo list",
    href: "/tasks",
    isCompleted: true,
  },
  {
    id: "2",
    title: "Never miss a deadline",
    description: "Set up notifications",
    href: "/settings",
    isCompleted: false,
  },
  {
    id: "3",
    title: "Collaborate with others",
    description: "Invite team members",
    href: "/team",
    isCompleted: false,
  },
];
