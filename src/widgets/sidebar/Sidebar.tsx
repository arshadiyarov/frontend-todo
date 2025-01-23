import { useEffect, useState } from "react";
import { navLinks } from "./constants/navLinks";
import { SidebarHeader } from "./ui/SidebarHeader";
import { SidebarLinks } from "./ui/SidebarLink";
import { cn } from "../../shared/lib/utils/cn";

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(
    localStorage.getItem("sidebar_expanded") === "true"
  );

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
    localStorage.setItem("sidebar_expanded", String(!isExpanded));
  };

  useEffect(() => {
    localStorage.setItem("sidebar_expanded", "true");
    const expanded = localStorage.getItem("sidebar_expanded") === "true";

    setIsExpanded(expanded);
  }, []);

  return (
    <aside
      className={cn(
        "border-r h-dvh w-[3.75rem] transition-all shadow-sm overflow-hidden",
        {
          "w-80": isExpanded,
        }
      )}
    >
      <div className="border-b p-3">
        <SidebarHeader isExpanded={isExpanded} handleToggle={handleToggle} />
      </div>
      <div className="p-3">
        <SidebarLinks links={navLinks} isExpanded={isExpanded} />
      </div>
    </aside>
  );
};
