import { AxiosError } from "axios";
import { PropsWithChildren, useEffect, useState } from "react";
import { taskService } from "../../../entities/task/api/task.service";
import { TaskEntity } from "../../../entities/task/model/task";
import { TasksContext } from "./TasksContext";

export const TasksProvider = ({ children }: PropsWithChildren) => {
  const [tasks, setTasks] = useState<TaskEntity[]>([]);
  const [isTasksLoading, setIsTasksLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getTasks = async () => {
    setIsTasksLoading(true);
    setError(null);

    try {
      const res = await taskService.getAll();
      setTasks(res.data);
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.message);
      } else {
        setError("Failed to fetch tasks.");
        console.error("Failed to fetch all tasks:\n", e);
      }
    } finally {
      setIsTasksLoading(false);
    }
  };

  const createTask = async (title: string) => {
    try {
      const res = await taskService.create({ title });

      setTasks((prevState) => [...prevState, res.data]);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.error("Failed to create task:\n", e.message);
      } else {
        console.error("Failed to create task:\n", e);
      }
    }
  };

  const updateTask = async (id: number, title: string) => {
    try {
      const res = await taskService.update({ id, title });

      setTasks((prevState) => {
        const index = prevState.findIndex((task) => task.id === id);
        if (index === -1) return prevState;

        const updatedTasks = [...prevState];
        updatedTasks[index] = res.data;

        return updatedTasks;
      });
    } catch (e) {
      if (e instanceof AxiosError) {
        console.error("Failed to create task:\n", e.message);
      } else {
        console.error("Failed to create task:\n", e);
      }
    }
  };

  const handleToggleCompletion = async (id: number) => {
    const foundTask = tasks.find((task) => task.id === id);

    try {
      const res = await taskService.update({
        id,
        isCompleted: !foundTask?.isCompleted,
      });

      setTasks((prevState) => {
        const index = prevState.findIndex((task) => task.id === id);
        if (index === -1) return prevState;

        const updatedTasks = [...prevState];
        updatedTasks[index] = res.data;

        return updatedTasks;
      });
    } catch (e) {
      if (e instanceof AxiosError) {
        console.error("Failed to toggle completion:\n", e.message);
      } else {
        console.error("Failed to toggle completion:\n", e);
      }
    }
  };

  const handleDelete = async (id: number) => {
    const prevTasks = tasks;
    setTasks((prevState) => prevState.filter((task) => task.id !== id));

    try {
      await taskService.delete({ id });
    } catch (e) {
      setTasks(prevTasks);

      if (e instanceof AxiosError) {
        console.error("Failed to deelete task:\n", e.message);
      } else {
        console.error("Failed to delete task:\n", e);
      }
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        isTasksLoading,
        refetch: getTasks,
        error,
        createTask,
        updateTask,
        toggleCompletion: handleToggleCompletion,
        deleteTask: handleDelete,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
