import { useState } from "react";
import { DeleteTask } from "../../../features/task/ui/DeleteTask";
import { EditTask } from "../../../features/task/ui/editTask/EditTask";
import { ToggleComplete } from "../../../features/task/ui/ToggleComplete";
import { useTasks } from "../../../processes/providers/task/useTasks";
import { cn } from "../../../shared/lib/utils/cn";
import { Card } from "../../../shared/ui/card/Card";
import { StatusType, TaskEntity } from "../model/task";
import {
  Dropdown,
  DropdownItem,
  DropdownList,
  DropdownTrigger,
} from "../../../shared/ui/dropdown/ui/Dropdown";
import { Button } from "../../../shared/ui/button/Button";
import { statuses } from "../../../shared/temp/mockStatuses";

export const TaskCard = ({ id, isCompleted, title, status }: TaskEntity) => {
  const { toggleCompletion, updateTask } = useTasks();
  const [completed, setCompleted] = useState(isCompleted);
  const [activeStatus, setActiveStatus] = useState<StatusType | null>(status);
  const [open, setOpen] = useState(false);

  const handleClick = (val: StatusType) => {
    setActiveStatus(val);
    updateTask(id, undefined, val);
    setOpen(false);
  };

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
        <Dropdown isOpen={open} setIsOpen={setOpen}>
          <DropdownTrigger asChild>
            <Button variant="outline" className="flex items-center gap-3">
              {statuses.find((status) => status.id === activeStatus)?.label}
            </Button>
          </DropdownTrigger>
          <DropdownList className="z-20">
            {statuses.map((status) => (
              <DropdownItem key={status.id} asChild>
                <Button
                  variant={status.id === activeStatus ? "default" : "outline"}
                  onClick={() => handleClick(status.id)}
                >
                  {status.label}
                </Button>
              </DropdownItem>
            ))}
          </DropdownList>
        </Dropdown>
        <EditTask id={id} title={title} />
        <DeleteTask id={id} />
      </div>
    </Card>
  );
};
