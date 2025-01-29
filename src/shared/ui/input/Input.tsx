import { InputHTMLAttributes, useEffect, useState } from "react";
import { cn } from "../../lib/utils/cn";
import { InputSizeType } from "./input";
import { inputDefaultStyles, inputSizes } from "./input.config";
import { RequiredStar } from "../RequiredStar";
import { Eye, EyeClosed } from "lucide-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSizeType;
  label?: string;
  passwordWrapperClassname?: string;
  passwordStrengthIndicator?: boolean;
}

const StrengthBar = ({ val }: { val: number }) => {
  return (
    <div className="flex w-full items-center justify-between gap-3">
      <div
        className={cn("rounded-md w-full h-2 bg-gray-200", {
          "bg-red-500": val > 0,
        })}
      />
      <div
        className={cn("rounded-md w-full h-2 bg-gray-200", {
          "bg-orange-500": val > 1,
        })}
      />
      <div
        className={cn("rounded-md w-full h-2 bg-gray-200", {
          "bg-yellow-500": val > 2,
        })}
      />
      <div
        className={cn("rounded-md w-full h-2 bg-gray-200", {
          "bg-green-500": val > 3,
        })}
      />
    </div>
  );
};

export const Input = ({
  inputSize = "default",
  passwordWrapperClassname,
  passwordStrengthIndicator = false,
  className,
  label,
  required,
  type,
  value,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [strenth, setStrength] = useState<number>(0);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const setPasswordStrength = () => {
    let strenthScore = 0;

    const hasLowercase = /[a-z]/.test(String(value));
    const hasUppercase = /[A-Z]/.test(String(value));
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(String(value));
    const hasMinLength = String(value).length >= 8;
    const hasStrongLength = String(value).length >= 12;

    if (hasMinLength) strenthScore++;
    if (hasStrongLength) strenthScore++;
    if (hasMinLength && hasUppercase && hasLowercase) strenthScore++;
    if (hasMinLength && hasSpecialChar) strenthScore++;

    setStrength(strenthScore);
  };

  useEffect(() => {
    setPasswordStrength();
  }, [value]);

  return (
    <label className="flex flex-col gap-2">
      {label && (
        <div className="text-sm font-medium select-none">
          {label}
          {required && <RequiredStar />}
        </div>
      )}

      {type === "password" ? (
        <div className="flex flex-col gap-2">
          <div className={cn("relative", passwordWrapperClassname)}>
            <input
              className={cn(
                inputDefaultStyles,
                "pr-10",
                inputSizes[inputSize],
                className
              )}
              required={required}
              type={showPassword ? "text" : "password"}
              {...props}
            />
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
          </div>
          {passwordStrengthIndicator && <StrengthBar val={strenth} />}
        </div>
      ) : (
        <input
          className={cn(inputDefaultStyles, inputSizes[inputSize], className)}
          required={required}
          value={value}
          {...props}
        />
      )}
    </label>
  );
};
