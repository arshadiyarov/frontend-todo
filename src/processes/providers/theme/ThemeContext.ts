import { createContext } from "react";

export type ThemeType = "light" | "dark" | "system";

interface ThemeContextType {
  theme: ThemeType;
  changeTheme: (val: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
