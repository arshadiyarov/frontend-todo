import { Slot } from "@radix-ui/react-slot";
import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";
import { cn } from "../../../lib/utils/cn";
import { DropdonwProvider } from "../provider/DropdownProvider";
import { useDropdown } from "../provider/useDropdown";

const Dropdown = ({ children }: PropsWithChildren) => {
  return (
    <DropdonwProvider>
      <div className="relative">{children}</div>
    </DropdonwProvider>
  );
};

interface DropdownProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const DropdownTrigger = ({
  asChild = false,
  children,
  className,
  ...props
}: DropdownProps) => {
  const { isOpen, toggle } = useDropdown();
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      aria-haspopup="menu"
      aria-expanded={isOpen}
      onClick={toggle}
      className={cn(className)}
      {...props}
    >
      {children}
    </Comp>
  );
};

interface DropdownItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const DropdownItem = ({
  asChild,
  className,
  children,
  ...props
}: DropdownItemProps) => {
  const { close } = useDropdown();
  const Comp = asChild ? Slot : "button";

  return (
    <Comp role="menuitem" onClick={close} className={cn(className)} {...props}>
      {children}
    </Comp>
  );
};

const DropdownList = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const { isOpen, close } = useDropdown();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        ref.current &&
        !ref.current.contains(target) &&
        !target.closest("[aria-haspopup='menu']")
      ) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      role="menu"
      className={cn(
        "bg-white absolute top-12 flex flex-col gap-1 border rounded-md shadow-sm p-2 w-60",
        "opacity-0 transition-all",
        {
          "opacity-100": isOpen,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Dropdown, DropdownTrigger, DropdownList, DropdownItem };
