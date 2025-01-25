import { Check } from "lucide-react";
import { Button } from "../button/Button";
import { cn } from "../../lib/utils/cn";

interface CheckboxProps {
  isChecked: boolean;
  toggle: () => void;
  id: string;
}

export const Checkbox = ({ id, isChecked, toggle }: CheckboxProps) => {
  return (
    <Button
      id={id}
      type="button"
      size="icon"
      variant={isChecked ? "default" : "outline"}
      onClick={toggle}
      className="h-5 w-5"
    >
      <Check
        className={cn("opacity-0 transition-all text-white", {
          "opacity-100": isChecked,
        })}
      />
    </Button>
  );
};
