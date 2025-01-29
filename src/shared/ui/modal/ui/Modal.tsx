import { Slot } from "@radix-ui/react-slot";
import { X } from "lucide-react";
import {
  ButtonHTMLAttributes,
  Dispatch,
  HTMLAttributes,
  PropsWithChildren,
  SetStateAction,
  useEffect,
} from "react";
import { cn } from "../../../lib/utils/cn";
import { Button } from "../../button/Button";
import { Card } from "../../card/Card";
import { ModalProvider } from "../provider/ModalProvider";
import { useModal } from "../provider/useModal";

interface ModalProps extends PropsWithChildren {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {
  return (
    <ModalProvider isOpen={isOpen} setIsOpen={setIsOpen}>
      {children}
    </ModalProvider>
  );
};

interface ModalTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const ModalTrigger = ({
  asChild = false,
  children,
  className,
  ...props
}: ModalTriggerProps) => {
  const { isOpen, toggle } = useModal();
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      type="button"
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      className={cn(className)}
      onClick={toggle}
      {...props}
    >
      {children}
    </Comp>
  );
};

const ModalContentWrapper = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const { isOpen, close } = useModal();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={cn(
        "fixed left-0 top-1/2 -translate-y-1/2 z-30 w-full h-screen flex items-center justify-center bg-black/30",
        {
          hidden: !isOpen,
        },
        className
      )}
      {...props}
      onClick={close}
    >
      {children}
    </div>
  );
};

const ModalContent = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const { close } = useModal();

  return (
    <Card
      role="dialog"
      className={cn("relative", className)}
      onClick={(e) => e.stopPropagation()}
      {...props}
    >
      {children}
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-2 top-2"
        onClick={close}
      >
        <X />
      </Button>
    </Card>
  );
};

export { Modal, ModalContent, ModalContentWrapper, ModalTrigger };
