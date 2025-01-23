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
    isCompleted: true,
    title: "Make template for tasks page",
    dueDate: "",
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "2",
    isCompleted: true,
    title: "Make template for main page",
    dueDate: "",
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "3",
    isCompleted: false,
    title: "Write api using Go",
    dueDate: "",
    createdAt: "",
    updatedAt: "",
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
          Filters
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
