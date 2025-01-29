import { Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import { ModalContext } from "./ModalContext";

interface ModalProviderProps extends PropsWithChildren {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const ModalProvider = ({
  children,
  isOpen: externalIsOpen,
  setIsOpen: setExternalIsOpen,
}: ModalProviderProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isOpen = externalIsOpen ?? internalIsOpen;

  const toggle = () => {
    if (setExternalIsOpen) {
      setExternalIsOpen(!isOpen);
    } else {
      setInternalIsOpen(!isOpen);
    }
  };

  const close = () => {
    if (setExternalIsOpen) {
      setExternalIsOpen(false);
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
