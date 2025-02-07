import { LogOut, Moon, Sun, SunMoon } from "lucide-react";
import { UserAvatar } from "../../../entities/user/ui/UserAvatar";
import { useTheme } from "../../../processes/providers/theme/useTheme";
import { Button } from "../../../shared/ui/button/Button";
import {
  Dropdown,
  DropdownItem,
  DropdownList,
  DropdownTrigger,
} from "../../../shared/ui/dropdown/ui/Dropdown";

export const UserDropdown = () => {
  const { theme, changeTheme } = useTheme();
  const firstName = "Armat";
  const lastName = "Shadiyarov";
  const email = "shadiyarovarmat@gmail.com";

  return (
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
      <DropdownList className="gap-2">
        <div className="flex items-center justify-between gap-3">
          <DropdownItem asChild>
            <Button
              variant={theme === "light" ? "outline" : "ghost"}
              onClick={() => changeTheme("light")}
              className="w-full"
            >
              <Sun />
            </Button>
          </DropdownItem>
          <DropdownItem asChild>
            <Button
              variant={theme === "dark" ? "outline" : "ghost"}
              onClick={() => changeTheme("dark")}
              className="w-full"
            >
              <Moon />
            </Button>
          </DropdownItem>
          <DropdownItem asChild>
            <Button
              variant={theme === "system" ? "outline" : "ghost"}
              onClick={() => changeTheme("system")}
              className="w-full"
            >
              <SunMoon />
            </Button>
          </DropdownItem>
        </div>
        <DropdownItem asChild>
          <Button variant="destructive">
            <LogOut />
            Logout
          </Button>
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  );
};
