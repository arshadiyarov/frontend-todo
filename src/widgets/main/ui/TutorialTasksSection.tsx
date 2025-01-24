import { Fragment } from "react/jsx-runtime";
import { mockTutorialTasks } from "../../../shared/temp/mockTutorialTasks";
import { TutorialStep } from "../../../entities/tutorial/ui/TutorialStep";
import { Divide } from "../../../shared/ui/divide/Divide";
import { Card } from "../../../shared/ui/card/Card";
import { CardHeader } from "../../../shared/ui/card/ui/CardHeader";

export const TutorialTasksSection = () => {
  return (
    <Card className="flex flex-col gap-5 w-full">
      <CardHeader
        title="Getting Started"
        subTitle="Complete these steps to get the most out of the app"
      />

      <div className="flex flex-col gap-2">
        {mockTutorialTasks.map((task, index) => (
          <Fragment key={task.id}>
            <TutorialStep {...task} />
            {mockTutorialTasks.length !== index + 1 && <Divide />}
          </Fragment>
        ))}
      </div>
    </Card>
  );
};
