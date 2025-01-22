import { NavLinkType } from "../model/NavLinkType";
import { Button } from "../../../shared/ui/button/Button";
import { cn } from "../../../shared/lib/utils/cn";
import { Link, useLocation } from "react-router";

interface SidebarLinksProps {
  links: NavLinkType[];
  isExpanded: boolean;
}

export const SidebarLinks = ({ links, isExpanded }: SidebarLinksProps) => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col gap-2">
      {links.map((link) => (
        <Button
          key={link.id}
          size={isExpanded ? "default" : "icon"}
          variant={pathname === link.href ? "default" : "ghost"}
          className={cn("gap-3 transition-transform", {
            "justify-start": isExpanded,
          })}
          asChild
        >
          <Link to={link.href}>
            {link.icon}
            {isExpanded && link.label}
          </Link>
        </Button>
      ))}
    </div>
  );
};
