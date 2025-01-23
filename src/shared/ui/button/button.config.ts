import { ButtonSizeType, ButtonVariantsType } from "./button";

export const buttonVariants: Record<ButtonVariantsType, string> = {
  default:
    "bg-blue-600 text-neutral-50 shadow hover:bg-blue-600/90 active:bg-blue-600/80",
  outline:
    "border bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-800",
  secondary:
    "bg-cyan-500 text-neutral-800 shadow-sm hover:bg-cyan-500/80 active:bg-cyan-500/70",
  ghost:
    "hover:bg-neutral-100 active:bg-neutral-200 hover:text-neutral-800 focus-visible:ring-neutral-00",
  link: "text-blue-600 underline-offset-4 hover:underline",
};

export const buttonSizes: Record<ButtonSizeType, string> = {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-md px-3 text-xs",
  lg: "h-10 rounded-md px-8",
  icon: "h-9 w-9",
};

export const buttonDefaultStyles = `
  inline-flex items-center justify-center gap-2 capitalize
  rounded-md transition-colors whitespace-nowrap 
  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 
  disabled:pointer-events-none disabled:opacity-50 
  [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 [&_svg]:stroke-current
`;
