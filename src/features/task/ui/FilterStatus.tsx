import { Check, Filter } from "lucide-react";
import { useState } from "react";
import { StatusType } from "../../../entities/task/model/task";
import { useTasks } from "../../../processes/providers/task/useTasks";
import { statuses } from "../../../shared/temp/mockStatuses";
import { Button } from "../../../shared/ui/button/Button";
import {
  Dropdown,
  DropdownItem,
  DropdownList,
  DropdownTrigger,
} from "../../../shared/ui/dropdown/ui/Dropdown";

export const FilterStatus = () => {
  const { refetch } = useTasks();
  const [activeStatus, setActiveStatus] = useState<StatusType | null>(null);
  const [open, setOpen] = useState(false);

  const handleClick = (val: StatusType) => {
    setActiveStatus(val);
    refetch(undefined, val);
    setOpen(false);
  };

  const handleReset = () => {
    setActiveStatus(null);
    refetch(undefined, undefined);
    setOpen(false);
  };

  return (
    <Dropdown isOpen={open} setIsOpen={setOpen}>
      <DropdownTrigger asChild>
        <Button variant="outline" className="flex items-center gap-3">
          <Filter />
          {activeStatus === null
            ? "Status"
            : statuses.find((status) => status.id === activeStatus)?.label}
        </Button>
      </DropdownTrigger>
      <DropdownList className="z-30">
        {statuses.map((status) => (
          <DropdownItem key={status.id} asChild>
            <Button
              variant={status.id === activeStatus ? "default" : "outline"}
              onClick={() => handleClick(status.id)}
              className="justify-between"
            >
              {status.label}
              {status.id === activeStatus && <Check />}
            </Button>
          </DropdownItem>
        ))}
        {activeStatus !== null && (
          <DropdownItem asChild>
            <Button variant="destructive" onClick={handleReset}>
              Reset
            </Button>
          </DropdownItem>
        )}
      </DropdownList>
    </Dropdown>
  );
};
