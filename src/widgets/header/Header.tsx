import { SidebarHeader } from "./ui/SidebarHeader";
import { UserDropdown } from "./ui/UserDropdown";

export const Header = () => {
  return (
    <header className="w-full flex justify-between fixed border-b dark:border-gray-700 bg-light dark:bg-dark z-30 pl-3 py-3 pr-10">
      <SidebarHeader />
      <UserDropdown />
    </header>
  );
};
