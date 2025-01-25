import { Check, SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";
import { cn } from "../../../shared/lib/utils/cn";
import { Button } from "../../../shared/ui/button/Button";
import { Card } from "../../../shared/ui/card/Card";
import { TaskEntity } from "../model/task";

export const TaskCard = ({
  id,
  isCompleted: initIsCompleted,
  title,
}: TaskEntity) => {
  const [isCompleted, setIsCompleted] = useState(initIsCompleted);

  const handleToggle = () => {
    setIsCompleted((prevState) => !prevState);
  };

  return (
    <Card
      size="sm"
      className={cn("flex items-center justify-between transition-all", {
        "bg-neutral-50 opacity-70": isCompleted,
      })}
    >
      <div className="flex items-center gap-3">
        <Button
          id={`todo-btn-${id}`}
          size="icon"
          variant={isCompleted ? "default" : "outline"}
          className="h-6 w-6"
          onClick={handleToggle}
        >
          <Check
            className={cn("opacity-0 transition-all text-white", {
              "opacity-100": isCompleted,
            })}
          />
        </Button>
        <div
          className={cn("", {
            "line-through": isCompleted,
          })}
        >
          {title}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon">
          <SquarePen />
        </Button>
        <Button variant="destructive" size="icon">
          <Trash2 />
        </Button>
      </div>
    </Card>
  );
};
