import { FolderOpen, RotateCw } from "lucide-react";
import { TaskCard } from "../../entities/task/ui/TaskCard";
import { useTasks } from "../../processes/providers/task/useTasks";
import { Button } from "../../shared/ui/button/Button";
import { Loader } from "../../shared/ui/Loader";

export const TasksList = () => {
  const { tasks, isTasksLoading, error, refetch } = useTasks();

  if (isTasksLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loader size="lg" />
      </div>
    );
  }

  if (error !== null) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <div className="text-3xl font-medium text-red-500">{error}</div>
        <Button variant="outline" onClick={() => refetch()} className="group">
          <RotateCw className="group-hover:animate-spin" />
          Try Again
        </Button>
      </div>
    );
  }

  if (!tasks.length) {
    return (
      <div className="flex items-center justify-center gap-1 text-3xl">
        <FolderOpen size={48} />
        No tasks found
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  );
};
