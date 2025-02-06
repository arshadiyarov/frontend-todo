import { StatusType } from "../../entities/task/model/task";

export interface LocalStatus {
  id: StatusType;
  label: string;
}

export const statuses: LocalStatus[] = [
  {
    id: "notStarted",
    label: "Not Started",
  },
  {
    id: "inProgress",
    label: "In Progress",
  },
  {
    id: "completed",
    label: "Completed",
  },
];
