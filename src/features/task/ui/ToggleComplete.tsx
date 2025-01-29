import { Check } from "lucide-react";
import { cn } from "../../../shared/lib/utils/cn";
import { Button } from "../../../shared/ui/button/Button";

interface ToggleCompleteProps {
  id: number;
  handleToggle: () => void;
  isCompleted: boolean;
}

export const ToggleComplete = ({
  id,
  handleToggle,
  isCompleted,
}: ToggleCompleteProps) => {
  return (
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
  );
};
