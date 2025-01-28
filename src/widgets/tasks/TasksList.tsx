import { useEffect, useState } from "react";
import { TaskCard } from "../../entities/task/ui/TaskCard";
import { TaskEntity } from "../../entities/task/model/task";
import { taskService } from "../../entities/task/api/task.service";

export const TasksList = () => {
  const [tasks, setTasks] = useState<TaskEntity[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const getTasks = async () => {
      try {
        const res = await taskService.getAll();

        if (res.status === 200 || res.status === 201) setTasks(res.data);
      } catch (e) {
        console.error("Failed to fetch all tasks:\n", e);
      } finally {
        setIsLoading(false);
      }
    };

    getTasks();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        tasks.map((task) => <TaskCard key={task.id} {...task} />)
      )}
    </div>
  );
};
