import { useState } from "react";
import { DeleteTask } from "../../../features/task/ui/DeleteTask";
import { EditTask } from "../../../features/task/ui/editTask/EditTask";
import { ToggleComplete } from "../../../features/task/ui/ToggleComplete";
import { useTasks } from "../../../processes/providers/task/useTasks";
import { cn } from "../../../shared/lib/utils/cn";
import { Card } from "../../../shared/ui/card/Card";
import { TaskEntity } from "../model/task";

export const TaskCard = ({ id, isCompleted, title }: TaskEntity) => {
  const { toggleCompletion } = useTasks();
  const [completed, setCompleted] = useState(isCompleted);

  const handleToggle = async () => {
    setCompleted((prevState) => !prevState);

    try {
      await toggleCompletion(id);
    } catch (e) {
      console.error("Failed to toggle completion:\n", e);
      setCompleted((prevState) => !prevState);
    }
  };

  return (
    <Card
      size="sm"
      className={cn("flex items-center justify-between transition-all", {
        "bg-neutral-50 [&>*]:opacity-70": completed,
      })}
    >
      <div className="flex items-center gap-3">
        <ToggleComplete
          id={id}
          isCompleted={completed}
          handleToggle={handleToggle}
        />
        <div
          className={cn("", {
            "line-through": completed,
          })}
        >
          {title}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <EditTask id={id} title={title} />
        <DeleteTask id={id} />
      </div>
    </Card>
  );
};
