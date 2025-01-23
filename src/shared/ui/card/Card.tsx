import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils/cn";

export const Card = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "rounded-xl border bg-white text-neutral-800 shadow-sm py-5 px-6",
        className
      )}
      {...props}
    />
  );
};
