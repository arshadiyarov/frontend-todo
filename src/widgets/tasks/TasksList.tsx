import { TaskCard } from "../../entities/task/ui/TaskCard";
import { mockTasks } from "../../shared/temp/mockTasks";

export const TasksList = () => {
  return (
    <div className="flex flex-col gap-3">
      {mockTasks.map((task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  );
};
