import { HistoryActionType } from "../../../../entities/history/model/history";

export const getHistoryActionTitle = (action: HistoryActionType): string => {
  switch (action) {
    case "added":
      return "Added new task";
      break;
    case "updated":
      return "Updated task";
      break;
    case "completed":
      return "Completed task";
      break;
    case "deleted":
      return "Deleted task";
      break;
  }
};
