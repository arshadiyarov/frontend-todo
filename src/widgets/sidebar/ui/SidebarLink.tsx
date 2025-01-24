import { Link, useLocation } from "react-router";
import { cn } from "../../../shared/lib/utils/cn";
import { Button } from "../../../shared/ui/button/Button";
import { useSidebar } from "../../../processes/providers/sidebar/useSidebar";
import { navLinks } from "../constants/navLinks";

export const SidebarLinks = () => {
  const { isExpanded } = useSidebar();
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col gap-2">
      {navLinks.map((link) => (
        <div className="relative group">
          <Button
            key={link.id}
            size={isExpanded ? "default" : "icon"}
            variant={pathname === link.href ? "default" : "ghost"}
            className={cn("gap-3 w-full", {
              "justify-start": isExpanded,
            })}
            asChild
          >
            <Link to={link.href}>
              {link.icon}
              {isExpanded && link.label}
            </Link>
          </Button>
          {!isExpanded && (
            <div
              className={cn(
                "absolute z-20 top-1/2 -translate-y-1/2 left-11 scale-0 opacity-0",
                "group-hover:scale-100 group-hover:opacity-100 transition-all delay-300"
              )}
            >
              <div className="relative bg-neutral-400 py-1 px-2 rounded-md text-sm text-white">
                {link.label}
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-400 rotate-45" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
