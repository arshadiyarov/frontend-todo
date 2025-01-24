import { cn } from "../../../shared/lib/utils/cn";
import { getHistoryActionTitle } from "../../../shared/lib/utils/history/getHistoryActionTitle";
import { getHistoryFormattedDate } from "../../../shared/lib/utils/history/getHistoryFormattedDate";
import { getHistoryIcon } from "../../../shared/lib/utils/history/getHistoryIcon";
import { BgCircle } from "../../../shared/ui/BgCircle";
import { HistoryEntity } from "../model/history";

export const HistoryItem = ({ title, action, createdAt }: HistoryEntity) => {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <BgCircle
          className={cn("[&_svg]:size-5", {
            "bg-green-500/10": action === "completed",
            "bg-yellow-500/10": action === "updated",
            "bg-primary/10": action === "added",
            "bg-red-500/10": action === "deleted",
          })}
        >
          {getHistoryIcon(action)}
        </BgCircle>
        <div className="flex flex-col items-start">
          <div className="text-sm">{getHistoryActionTitle(action)}</div>
          <div className="text-sm text-typo-secondary">{title}</div>
        </div>
      </div>
      <div className="text-sm text-typo-secondary">
        {getHistoryFormattedDate(new Date(createdAt))}
      </div>
    </div>
  );
};
