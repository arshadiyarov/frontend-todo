import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils/cn";
import { DivideVariantsType } from "./divide";
import { divideVariants } from "./divide.config";

interface DivideProps extends HTMLAttributes<HTMLDivElement> {
  variant?: DivideVariantsType;
}

export const Divide = ({
  variant = "horizontal",
  className,
  ...props
}: DivideProps) => {
  return (
    <div className={cn("", divideVariants[variant], className)} {...props} />
  );
};
