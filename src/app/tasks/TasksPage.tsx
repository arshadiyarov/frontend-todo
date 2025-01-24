import { Filter, Plus } from "lucide-react";
import { TaskCard } from "../../entities/task/ui/TaskCard";
import { Button } from "../../shared/ui/button/Button";
import { Cont } from "../../shared/ui/Cont";
import { Divide } from "../../shared/ui/divide/Divide";
import { PageHeader } from "../../shared/ui/PageHeader";
import { mockTasks } from "../../shared/temp/mockTasks";

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
