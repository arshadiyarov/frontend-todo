import { useSidebar } from "../../processes/providers/sidebar/useSidebar";
import { cn } from "../../shared/lib/utils/cn";
import { SidebarLinks } from "./ui/SidebarLink";

export const Sidebar = () => {
  const { isExpanded } = useSidebar();

  return (
    <aside
      className={cn(
        "border-r dark:border-gray-700 h-screen transition-all shadow-sm fixed bg-light dark:bg-dark z-20 mt-16 p-3 pt-10",
        {
          "w-80": isExpanded,
          "w-[3.75rem]": !isExpanded,
        }
      )}
    >
      <SidebarLinks />
    </aside>
  );
};
