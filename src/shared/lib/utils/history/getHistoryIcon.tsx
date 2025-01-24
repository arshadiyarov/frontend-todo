import {
  CircleCheckBig,
  CircleMinus,
  CirclePlus,
  RefreshCw,
} from "lucide-react";
import { ReactNode } from "react";
import { HistoryActionType } from "../../../../entities/history/model/history";

export const getHistoryIcon = (action: HistoryActionType): ReactNode => {
  switch (action) {
    case "added":
      return <CirclePlus className="text-primary" />;
      break;
    case "updated":
      return <RefreshCw className="text-yellow-500" />;
      break;
    case "completed":
      return <CircleCheckBig className="text-green-500" />;
      break;
    case "deleted":
      return <CircleMinus className="text-red-500" />;
      break;
  }
};
