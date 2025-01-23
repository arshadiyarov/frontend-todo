import { Link } from "react-router";
import { Button } from "../../../shared/ui/button/Button";
import { ChevronsLeft } from "lucide-react";
import { cn } from "../../../shared/lib/utils/cn";

interface SidebarHeaderProps {
  isExpanded: boolean;
  handleToggle: () => void;
}

export const SidebarHeader = ({
  isExpanded,
  handleToggle,
}: SidebarHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      {isExpanded && (
        <Link to="/" className="text-xl uppercase">
          Armat
        </Link>
      )}
      <Button size="icon" variant="ghost" onClick={handleToggle}>
        <ChevronsLeft
          className={cn("transition-transform rotate-180", {
            "rotate-0": isExpanded,
          })}
        />
      </Button>
    </div>
  );
};
