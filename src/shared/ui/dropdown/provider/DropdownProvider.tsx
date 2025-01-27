import { PropsWithChildren, useState } from "react";
import { DropdownContext } from "./DropdownContext";

export const DropdonwProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prevState) => !prevState);
  const close = () => setIsOpen(false);

  return (
    <DropdownContext.Provider value={{ isOpen, toggle, close }}>
      {children}
    </DropdownContext.Provider>
  );
};
