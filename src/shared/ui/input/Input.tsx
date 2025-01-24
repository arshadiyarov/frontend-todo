import { InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils/cn";
import { InputSizeType } from "./input";
import { inputDefaultStyles, inputSizes } from "./input.config";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSizeType;
}

export const Input = ({
  inputSize = "default",
  className,
  ...props
}: InputProps) => {
  return (
    <input
      className={cn(inputDefaultStyles, inputSizes[inputSize], className)}
      {...props}
    />
  );
};
