import { ButtonSizeType, ButtonVariantsType } from "./button";

export const buttonVariants: Record<ButtonVariantsType, string> = {
  default:
    "bg-primary text-typo-foreground shadow hover:bg-primary/90 active:bg-primary/80",
  outline: "border bg-white shadow-sm hover:bg-neutral-100 hover:text-typo",
  secondary:
    "bg-secondary text-typo shadow-sm hover:bg-secondary/90 active:bg-secondary/80",
  ghost:
    "hover:bg-neutral-100 active:bg-neutral-200 hover:text-typo focus-visible:ring-typo",
  link: "text-primary underline-offset-4 hover:underline",
  destructive:
    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 active:bg-destructive/80",
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
