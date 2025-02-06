import { SearchTask } from "../../features/task/ui/SearchTask";
import { Cont } from "../../shared/ui/Cont";
import { Divide } from "../../shared/ui/divide/Divide";
import { PageHeader } from "../../shared/ui/PageHeader";
import { TasksControlButtons } from "../../widgets/tasks/TasksControlButtons";
import { TasksList } from "../../widgets/tasks/TasksList";

export const TasksPage = () => {
  return (
    <Cont className="py-10 space-y-10">
      <PageHeader
        title="Your Tasks"
        subTitle="View and manage all your tasks in one place."
      />

      <Divide />

      <div className="flex items-center justify-between">
        <SearchTask />
        <TasksControlButtons />
      </div>

      <TasksList />
    </Cont>
  );
};
