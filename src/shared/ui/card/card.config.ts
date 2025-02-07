import { CardSizeType } from "./card";

export const cardSizes: Record<CardSizeType, string> = {
  default: "py-5 px-6",
  sm: "py-4 px-5",
  lg: "py-6 px-7",
};

export const cardDefaultStyles =
  "rounded-xl border dark:border-gray-700 bg-light dark:bg-dark text-typo dark:text-dark-typo shadow-sm";
