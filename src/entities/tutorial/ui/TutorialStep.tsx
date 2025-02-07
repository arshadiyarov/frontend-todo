import { Link } from "react-router";
import { Button } from "../../../shared/ui/button/Button";
import { TutorialEntity } from "../model/tutorial";
import { BgCircle } from "../../../shared/ui/BgCircle";
import { ArrowRight, CircleCheck } from "lucide-react";
import { cn } from "../../../shared/lib/utils/cn";

export const TutorialStep = ({
  title,
  description,
  href,
  isCompleted,
}: TutorialEntity) => {
  return (
    <Button variant="ghost" className="p-3 h-12" asChild>
      <Link
        to={href}
        className="w-full flex items-center justify-between gap-3 group"
      >
        <div className="flex items-center gap-3">
          <BgCircle
            className={cn("bg-gray-100 dark:bg-gray-700", {
              "bg-green-100 dark:bg-green-800": isCompleted,
            })}
          >
            <CircleCheck
              className={cn("transition-colors text-gray-400", {
                "text-green-500 dark:text-green-500": isCompleted,
              })}
            />
          </BgCircle>
          <div className="flex flex-col items-start">
            <div className="text-sm">{title}</div>
            <div className="text-sm text-typo-secondary">{description}</div>
          </div>
        </div>
        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </Button>
  );
};
