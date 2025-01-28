import { Timestamps } from "../../../shared/api/model/api";

export interface TaskEntity extends Timestamps {
  id: number;
  title: string;
  isCompleted: boolean;
  // dueDate: Date;
}

// Create task
export interface CreateTaskReq {
  title: string;
}

// Update task
export interface UpdateTaskReq {
  id: number;
  title?: string;
  isCompleted?: boolean;
}

// Delete task
export interface DeleteTaskReq {
  id: number;
}
