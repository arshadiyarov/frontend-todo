import { PropsWithChildren } from "react";
import { cn } from "../lib/utils/cn";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export const Cont = ({ children, className }: ContainerProps) => {
  return <div className={cn("container mx-auto", className)}>{children}</div>;
};
