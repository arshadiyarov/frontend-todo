import { Pause, Play, RotateCcw } from "lucide-react";
import { Button } from "../../../shared/ui/button/Button";
import { useTimer } from "../povider/useTimer";

export const RunControlButtons = () => {
  const { isTimerActive, pauseTimer, startTimer, resetTimer } = useTimer();

  return (
    <div className="flex items-center gap-5 w-1/4">
      {isTimerActive ? (
        <Button
          size="icon"
          variant="default"
          className="w-full"
          onClick={pauseTimer}
        >
          <Pause />
        </Button>
      ) : (
        <Button
          size="icon"
          variant="default"
          className="w-full"
          onClick={startTimer}
        >
          <Play />
        </Button>
      )}
      <Button
        size="icon"
        variant="outline"
        className="w-full"
        onClick={() => {
          resetTimer();
        }}
      >
        <RotateCcw />
      </Button>
    </div>
  );
};
