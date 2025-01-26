import { SetupNavButtons } from "../../../features/timer/ui/SetupNavButtons";
import { SetTimer } from "../../../features/timer/ui/SetTimer";
import { Button } from "../../../shared/ui/button/Button";
import { useTimer } from "../../../features/timer/povider/useTimer";

export const StepInit = () => {
  const {
    focusTime,
    setFocusTime,
    restTime,
    setRestTime,
    step,
    sessions,
    setSessions,
  } = useTimer();

  return (
    <div className="flex flex-col items-center gap-10">
      {step.count === 1 && (
        <>
          <h2 className="text-3xl font-medium">Set focus time</h2>
          <SetTimer time={focusTime} setTime={setFocusTime} />
        </>
      )}
      {step.count === 2 && (
        <>
          <h2 className="text-3xl font-medium">Set rest time</h2>
          <SetTimer time={restTime} setTime={setRestTime} />
        </>
      )}
      {step.count === 3 && (
        <>
          <h2 className="text-3xl font-medium">Set amount of sessions</h2>
          <div className="flex items-center gap-4">
            {[1, 2, 3, 4, 5, 6].map((count) => (
              <Button
                key={count}
                variant={sessions === count ? "default" : "outline"}
                size="icon"
                onClick={() => setSessions(count)}
                className="rounded-full text-xl px-6 py-6"
              >
                {count}
              </Button>
            ))}
          </div>
        </>
      )}
      <SetupNavButtons />
    </div>
  );
};
