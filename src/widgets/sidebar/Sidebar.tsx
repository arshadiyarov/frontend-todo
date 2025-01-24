import { useEffect, useState } from "react";
import { navLinks } from "./constants/navLinks";
import { SidebarHeader } from "./ui/SidebarHeader";
import { SidebarLinks } from "./ui/SidebarLink";
import { cn } from "../../shared/lib/utils/cn";

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(
    localStorage.getItem("SIDEBAR_EXPANDED") === "true"
  );

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
    localStorage.setItem("SIDEBAR_EXPANDED", String(!isExpanded));
  };

  useEffect(() => {
    const expanded = localStorage.getItem("SIDEBAR_EXPANDED") === "true";
    localStorage.setItem("SIDEBAR_EXPANDED", String(expanded));

    setIsExpanded(expanded);
  }, []);

  return (
    <aside
      className={cn(
        "border-r h-screen overflow-hidden transition-all shadow-sm",
        {
          "w-80": isExpanded,
          " w-[3.75rem]": !isExpanded,
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
