import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils/cn";
import {
  buttonDefaultStyles,
  buttonSizes,
  buttonVariants,
} from "./button.config";
import { ButtonSizeType, ButtonVariantsType } from "./button";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantsType;
  size?: ButtonSizeType;
  asChild?: boolean;
}

export const Button = ({
  variant = "default",
  size = "default",
  asChild = false,
  children,
  className,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        buttonDefaultStyles,
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
