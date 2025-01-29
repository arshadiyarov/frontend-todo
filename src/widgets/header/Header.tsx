import { LogOut } from "lucide-react";
import { UserAvatar } from "../../entities/user/ui/UserAvatar";
import { Button } from "../../shared/ui/button/Button";
import {
  Dropdown,
  DropdownItem,
  DropdownList,
  DropdownTrigger,
} from "../../shared/ui/dropdown/ui/Dropdown";
import { SidebarHeader } from "./SidebarHeader";

export const Header = () => {
  const firstName = "Armat";
  const lastName = "Shadiyarov";
  const email = "shadiyarovarmat@gmail.com";

  return (
    <header className="w-full flex justify-between fixed border-b bg-white z-30 pl-3 py-3 pr-10">
      <SidebarHeader />
      <Dropdown>
        <DropdownTrigger asChild>
          <button className="flex items-center gap-3">
            <UserAvatar firstName={firstName} lastName={lastName} />
            <div className="text-start flex flex-col">
              <div className="text-sm">
                {firstName} {lastName}
              </div>
              <div className="text-xs text-typo-secondary">{email}</div>
            </div>
          </button>
        </DropdownTrigger>
        <DropdownList>
          <DropdownItem asChild>
            <Button variant="destructive">
              <LogOut />
              Logout
            </Button>
          </DropdownItem>
        </DropdownList>
      </Dropdown>
    </header>
  );
};
