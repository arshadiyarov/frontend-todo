import { ChevronsLeft } from "lucide-react";
import { Link } from "react-router";
import { useSidebar } from "../../../processes/providers/sidebar/useSidebar";
import { cn } from "../../../shared/lib/utils/cn";
import { Button } from "../../../shared/ui/button/Button";

export const SidebarHeader = () => {
  const { isExpanded, handleToggle } = useSidebar();

  return (
    <div
      className={cn("flex items-center justify-between pr-6", {
        "w-80": isExpanded,
        "w-[3.75rem]": !isExpanded,
      })}
    >
      {isExpanded && (
        <Link to="/" className="text-xl font-bold uppercase">
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
