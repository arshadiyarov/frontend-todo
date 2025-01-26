import { Filter, Plus } from "lucide-react";
import { Button } from "../../shared/ui/button/Button";
import { Cont } from "../../shared/ui/Cont";
import { Divide } from "../../shared/ui/divide/Divide";
import { PageHeader } from "../../shared/ui/PageHeader";
import { TasksList } from "../../widgets/tasks/TasksList";

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

      <TasksList />
    </Cont>
  );
};
