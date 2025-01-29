import { createContext } from "react";

interface SidebarContextType {
  isExpanded: boolean;
  handleToggle: () => void;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);
