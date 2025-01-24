import { UserAvatar } from "../../entities/user/ui/UserAvatar";
import { SidebarHeader } from "./SidebarHeader";

export const Header = () => {
  const firstName = "Armat";
  const lastName = "Shadiyarov";
  const email = "shadiyarovarmat@gmail.com";

  return (
    <header className="w-full flex justify-between fixed border-b bg-white z-30 pl-3 py-3 pr-10">
      <SidebarHeader />
      <button className="flex items-center gap-3">
        <UserAvatar firstName={firstName} lastName={lastName} />
        <div className="text-start flex flex-col">
          <div className="text-sm">
            {firstName} {lastName}
          </div>
          <div className="text-xs text-typo-secondary">{email}</div>
        </div>
      </button>
    </header>
  );
};
