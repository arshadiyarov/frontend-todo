import { Timestamps } from "../../../shared/api/model/api";

export interface TaskEntity extends Timestamps {
  id: string;
  isCompleted: boolean;
  title: string;
  dueDate: Date;
}
