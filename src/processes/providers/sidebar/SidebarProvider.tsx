import { PropsWithChildren, useEffect, useState } from "react";
import { SidebarContext } from "./SidebarContext";

export const SidebarProvider = ({ children }: PropsWithChildren) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(
    localStorage.getItem("SIDEBAR_EXPANDED") === "true"
  );

  const handleToggle = () => {
    setIsExpanded((prevState) => {
      const newState = !prevState;
      localStorage.setItem("SIDEBAR_EXPANDED", String(newState));
      return newState;
    });
  };

  useEffect(() => {
    const expanded = localStorage.getItem("SIDEBAR_EXPANDED") === "true";
    setIsExpanded(expanded);
  }, []);

  return (
    <SidebarContext.Provider value={{ isExpanded, handleToggle }}>
      {children}
    </SidebarContext.Provider>
  );
};
