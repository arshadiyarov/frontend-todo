import { HTMLAttributes } from "react";
import { cn } from "../lib/utils/cn";

export const BgCircle = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("rounded-full p-2 transition-color", className)}
      {...props}
    />
  );
};
