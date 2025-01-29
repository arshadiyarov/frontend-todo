import { LoaderCircle } from "lucide-react";
import { cn } from "../lib/utils/cn";

type LoaderSizeType = "default" | "lg" | "sm";

interface LoaderProps {
  className?: string;
  size?: LoaderSizeType;
}

const loaderSizes: Record<LoaderSizeType, string> = {
  default: "size-10",
  lg: "size-14",
  sm: "size-6",
};

export const Loader = ({ className, size = "default" }: LoaderProps) => {
  return (
    <LoaderCircle
      className={cn("animate-spin text-typo", loaderSizes[size], className)}
    />
  );
};
