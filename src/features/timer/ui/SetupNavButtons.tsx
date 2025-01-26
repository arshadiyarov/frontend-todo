import { Button } from "../../../shared/ui/button/Button";
import { useTimer } from "../povider/useTimer";

export const SetupNavButtons = () => {
  const { step, setStep } = useTimer();

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        disabled={step.count === 1}
        onClick={() =>
          setStep((prevState) => ({ ...prevState, count: prevState.count - 1 }))
        }
      >
        Back
      </Button>
      {step.count === 3 ? (
        <Button onClick={() => setStep({ label: "run", count: 1 })}>
          Continue
        </Button>
      ) : (
        <Button
          disabled={step.count === 3}
          onClick={() =>
            setStep((prevState) => ({
              ...prevState,
              count: prevState.count + 1,
            }))
          }
        >
          Next
        </Button>
      )}
    </div>
  );
};
