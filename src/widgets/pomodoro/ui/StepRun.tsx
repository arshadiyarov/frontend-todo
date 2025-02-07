import { Brain, Leaf } from "lucide-react";
import { RunControlButtons } from "../../../features/timer/ui/RunControlButtons";
import { Timer } from "../../../features/timer/ui/Timer";
import { useTimer } from "../../../features/timer/povider/useTimer";

export const StepRun = () => {
  const { step, currentSession, sessions } = useTimer();

  return (
    <div className="flex flex-col items-center gap-8">
      {step.count === 1 && (
        <div className="flex flex-col items-center uppercase gap-4">
          <div className="border rounded-md p-4 shadow-sm">
            <Brain size={32} className="text-typo dark:text-dark-typo" />
          </div>
          <div className="text-3xl flex items-center gap-2">
            <h2>Focus</h2>
            <span className="font-semibold">
              {currentSession} / {sessions}
            </span>
          </div>
        </div>
      )}
      {step.count === 2 && (
        <div className="flex flex-col items-center uppercase gap-4">
          <div className="border rounded-md p-4 shadow-sm">
            <Leaf size={32} className="text-typo dark:text-dark-typo" />
          </div>
          <div className="text-3xl flex items-center gap-2">
            <h2>Rest</h2>
            <span className="font-semibold">
              {currentSession} / {sessions}
            </span>
          </div>
        </div>
      )}

      <Timer />

      <RunControlButtons />
    </div>
  );
};
