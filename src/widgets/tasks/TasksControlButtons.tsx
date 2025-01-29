import { Filter } from "lucide-react";
import { AddTask } from "../../features/task/ui/addTask/AddTask";
import { Button } from "../../shared/ui/button/Button";

export const TasksControlButtons = () => {
  return (
    <div className="flex items-center gap-3">
      <AddTask />
      <Button variant="outline">
        <Filter />
        Filter
      </Button>
    </div>
  );
};
