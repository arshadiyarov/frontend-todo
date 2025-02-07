import { InputSizeType } from "./input";

export const inputSizes: Record<InputSizeType, string> = {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-sm px-3 text-xs",
  lg: "h-10 rounded-md px-4",
};

export const inputDefaultStyles = `
  w-full border dark:border-gray-700 rounded-md transition-colors whitespace-nowrap
  bg-light dark:bg-dark
  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500
  disabled:pointer-events-none disabled:opacity-50
`;
