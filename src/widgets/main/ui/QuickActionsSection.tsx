import { ListTodo } from "lucide-react";
import { Link } from "react-router";
import { AddTask } from "../../../features/task/ui/addTask/AddTask";
import { Button } from "../../../shared/ui/button/Button";
import { Card } from "../../../shared/ui/card/Card";
import { CardHeader } from "../../../shared/ui/card/ui/CardHeader";

export const QuickActionsSection = () => {
  return (
    <Card className="flex flex-col gap-5 w-full">
      <CardHeader
        title="Quick Actions"
        subTitle="Get started with these common tasks"
      />
      <div className="w-full flex flex-col gap-3">
        <AddTask variant="outline" className="justify-start" />
        <Button variant="outline" className="justify-start" asChild>
          <Link to="/tasks">
            <ListTodo />
            View all tasks
          </Link>
        </Button>
      </div>
    </Card>
  );
};
