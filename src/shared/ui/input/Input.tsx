import { InputHTMLAttributes, useState } from "react";
import { cn } from "../../lib/utils/cn";
import { InputSizeType } from "./input";
import { inputDefaultStyles, inputSizes } from "./input.config";
import { RequiredStar } from "../RequiredStar";
import { Eye, EyeClosed } from "lucide-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSizeType;
  label?: string;
  passwordWrapperClassname?: string;
}

export const Input = ({
  inputSize = "default",
  passwordWrapperClassname,
  className,
  label,
  required,
  type,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <label className="flex flex-col gap-2">
      {label && (
        <div className="text-sm font-medium select-none">
          {label}
          {required && <RequiredStar />}
        </div>
      )}

      {type === "password" ? (
        <div className={cn("relative", passwordWrapperClassname)}>
          <input
            className={cn(
              inputDefaultStyles,
              inputSizes[inputSize],
              {
                "pr-10": type === "password",
              },
              className
            )}
            required={required}
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            {...props}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={toggleShowPassword}
              className={cn(
                "absolute top-1/2 right-0 -translate-y-1/2 group p-2.5 transition-all",
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-typo",
                "rounded-r-md"
              )}
            >
              {showPassword ? <EyeClosed size={16} /> : <Eye size={16} />}
            </button>
          )}
        </div>
      ) : (
        <input
          className={cn(inputDefaultStyles, inputSizes[inputSize], className)}
          required={required}
          {...props}
        />
      )}
    </label>
  );
};
