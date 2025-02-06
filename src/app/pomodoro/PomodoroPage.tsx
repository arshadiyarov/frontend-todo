import { Cog } from "lucide-react";
import { useTimer } from "../../features/timer/povider/useTimer";
import { Button } from "../../shared/ui/button/Button";
import { Cont } from "../../shared/ui/Cont";
import { Divide } from "../../shared/ui/divide/Divide";
import { PageHeader } from "../../shared/ui/pageHeader/PageHeader";
import { StepInit } from "../../widgets/pomodoro/ui/StepInit";
import { StepRun } from "../../widgets/pomodoro/ui/StepRun";
import { TasksList } from "../../widgets/tasks/TasksList";

export const PomodoroPage = () => {
  const { step, setStep, resetTimer } = useTimer();

  return (
    <Cont className="py-10 space-y-20">
      <div className="flex items-center justify-between">
        <PageHeader
          title="Pomodoro Timer"
          subTitle="Focus on your tasks and take regular breaks."
        />
        <Button
          size="icon"
          variant="outline"
          onClick={() => {
            resetTimer();
            setStep({ label: "init", count: 1 });
          }}
        >
          <Cog />
        </Button>
      </div>

      {step.label === "init" && <StepInit />}
      {step.label === "run" && <StepRun />}

      <Divide />

      <TasksList />
    </Cont>
  );
};
