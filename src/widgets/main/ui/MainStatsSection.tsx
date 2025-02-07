import { CircleCheck, Star, Trophy } from "lucide-react";
import { Card } from "../../../shared/ui/card/Card";
import { cn } from "../../../shared/lib/utils/cn";
import { InfoCard } from "../../../entities/info/ui/InfoCard";
import { useEffect, useState } from "react";

export const MainStatsSection = () => {
  const [barWidth, setBarWidth] = useState(0); // TODO: Get tasks from api, and change bar width calculation logic

  useEffect(() => {
    setTimeout(() => {
      setBarWidth(80);
    }, 300);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-between gap-5">
      <Card className="w-full flex flex-col justify-between gap-2 hover:scale-[102%] transition-all">
        <div className="flex items-center justify-between text-sm font-medium">
          <h3>Tasks Completed</h3>
          <CircleCheck size={16} className="text-typo-secondary" />
        </div>
        <div className="space-y-3">
          <div className="text-2xl font-semibold">12/15</div>
          <div className="flex relative">
            <div
              // TODO: Refactor
              style={{ width: `${barWidth}%` }}
              className={cn(
                "relative z-10 bg-primary h-4 rounded-l-xl transition-all"
              )}
            />
            <div
              className={cn(
                "absolute bg-neutral-100 h-4 rounded-xl w-full transition-all"
              )}
            />
          </div>
        </div>
        <div className="text-xs text-typo-secondary">
          {/* TODO: Refactor */}
          {barWidth}% completion rate this week
        </div>
      </Card>

      <InfoCard
        title="Current Streak"
        body="5 days"
        footer="Keep it up! You're doing great"
        icon={<Trophy size={16} className="text-typo-secondary" />}
      />

      <InfoCard
        title="Priority Tasks"
        body="3 tasks"
        footer="Due within the next 24 hours"
        icon={<Star size={16} className="text-typo-secondary" />}
      />
    </div>
  );
};
