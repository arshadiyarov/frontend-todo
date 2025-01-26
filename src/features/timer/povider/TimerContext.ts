import { createContext } from "react";
import { TimerContextType } from "./TimerProvider";

export const TimerContext = createContext<TimerContextType | undefined>(
  undefined
);
