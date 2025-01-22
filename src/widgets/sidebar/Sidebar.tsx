import { useState } from "react";
import { navLinks } from "./constants/navLinks";
import { SidebarHeader } from "./ui/SidebarHeader";
import { SidebarLinks } from "./ui/SidebarLink";
import { cn } from "../../shared/lib/utils/cn";

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => [setIsExpanded((prevStat) => !prevStat)];

  return (
    <aside
      className={cn("border-r h-dvh w-16 transition-all", {
        "w-80": isExpanded,
      })}
    >
      <SidebarHeader isExpanded={isExpanded} handleToggle={handleToggle} />
      <div className="p-3">
        <SidebarLinks links={navLinks} isExpanded={isExpanded} />
      </div>
    </aside>
  );
};
