import { Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import { ModalContext } from "./ModalContext";

interface ModalProviderProps extends PropsWithChildren {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const ModalProvider = ({
  children,
  isOpen: externalIsOpen,
  setIsOpen: externalSetIsOpen,
}: ModalProviderProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isOpen = externalIsOpen ?? internalIsOpen;

  const toggle = () => {
    if (externalSetIsOpen) {
      externalSetIsOpen(!isOpen);
    } else {
      setInternalIsOpen(!isOpen);
    }
  };

  const close = () => {
    if (externalSetIsOpen) {
      externalSetIsOpen(false);
    } else {
      setInternalIsOpen(false);
    }
  };

  return (
    <ModalContext.Provider value={{ isOpen, toggle, close }}>
      {children}
    </ModalContext.Provider>
  );
};
