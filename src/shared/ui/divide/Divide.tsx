import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils/cn";
import { DivideVariantsType } from "./divide";
import { divideCardDefaultStyles, divideVariants } from "./divide.config";

interface DivideProps extends HTMLAttributes<HTMLDivElement> {
  variant?: DivideVariantsType;
}

export const Divide = ({
  variant = "horizontal",
  className,
  ...props
}: DivideProps) => {
  return (
    <div
      className={cn(
        divideCardDefaultStyles,
        divideVariants[variant],
        className
      )}
      {...props}
    />
  );
};
