import { createContext } from "react";
import { StatusType, TaskEntity } from "../../../entities/task/model/task";

interface TasksContextType {
  tasks: TaskEntity[];
  isTasksLoading: boolean;
  refetch: (search?: string, status?: StatusType) => void;
  error: string | null;
  toggleCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
  createTask: (title: string) => void;
  updateTask: (id: number, title?: string, status?: StatusType) => void;
}

export const TasksContext = createContext<TasksContextType | undefined>(
  undefined
);
