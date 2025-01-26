import { TaskEntity } from "../../entities/task/model/task";

export const mockTasks: TaskEntity[] = [
  {
    id: "1",
    isCompleted: false,
    title: "Verification page",
    dueDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    isCompleted: false,
    title: "Strength indicator for password in register and reset pages",
    dueDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    isCompleted: false,
    title: "Модалка на всех страницах если таймер на этапе run",
    dueDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    isCompleted: false,
    title: "Fix container for main sections",
    dueDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
