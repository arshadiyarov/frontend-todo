import { AddTask } from "../../features/task/ui/addTask/AddTask";
import { FilterStatus } from "../../features/task/ui/FilterStatus";

export const TasksControlButtons = () => {
  return (
    <div className="flex items-center gap-3">
      <FilterStatus />
      <AddTask />
    </div>
  );
};
