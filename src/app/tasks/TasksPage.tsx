import { Filter, Plus } from "lucide-react";
import { Button } from "../../shared/ui/button/Button";
import { Cont } from "../../shared/ui/Cont";
import { Divide } from "../../shared/ui/divide/Divide";
import { PageHeader } from "../../shared/ui/PageHeader";
import { TaskCard } from "../../entities/task/ui/TaskCard";
import { TaskEntity } from "../../entities/task/model/task";

const mockTasks: TaskEntity[] = [
  {
    id: "1",
    isCompleted: false,
    title: "Login page",
    dueDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    isCompleted: false,
    title: "Register page",
    dueDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    isCompleted: false,
    title: "Reset password page",
    dueDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    isCompleted: false,
    title: "Verification page",
    dueDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    isCompleted: false,
    title: "Fixed header",
    dueDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    isCompleted: false,
    title: "Fixed sidebar",
    dueDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    isCompleted: false,
    title: "History page",
    dueDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    isCompleted: false,
    title: "Pomodoro page",
    dueDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const TasksPage = () => {
  return (
    <Cont className="py-10 space-y-10">
      <PageHeader
        title="Your Tasks"
        subTitle="View and manage all your tasks in one place."
      />
      <Divide />
      <div className="flex items-center gap-3">
        <Button>
          <Plus />
          New Task
        </Button>
        <Button variant="outline">
          <Filter />
          Filter
        </Button>
      </div>
      <div className="flex flex-col gap-3">
        {mockTasks.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>
    </Cont>
  );
};
