import { Timestamps } from "../../../shared/api/model/api";

export interface TaskEntity extends Timestamps {
  id: number;
  title: string;
  isCompleted: boolean;
  status: StatusType;
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
  status?: StatusType;
}

// Delete task
export interface DeleteTaskReq {
  id: number;
}

export type StatusType = "notStarted" | "inProgress" | "completed";
