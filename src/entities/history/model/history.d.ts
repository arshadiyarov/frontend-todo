import { Timestamps } from "../../../shared/api/model/api";

export interface HistoryEntity extends Timestamps {
  id: string;
  title: string;
  action: HistoryActionType;
}

export type HistoryActionType = "completed" | "added" | "updated" | "deleted";
