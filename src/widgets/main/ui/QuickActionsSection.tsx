import { ListTodo, Plus } from "lucide-react";
import { Button } from "../../../shared/ui/button/Button";
import { Card } from "../../../shared/ui/card/Card";
import { CardHeader } from "../../../shared/ui/card/ui/CardHeader";
import { Link } from "react-router";

export const QuickActionsSection = () => {
  return (
    <Card className="flex flex-col gap-5 w-full">
      <CardHeader
        title="Quick Actions"
        subTitle="Get started with these common tasks"
      />
      <div className="w-full flex flex-col gap-3">
        <Button variant="outline" className="justify-start">
          {/* TODO: Route to tasks page or open modal in main page */}
          <Plus />
          Create new task
        </Button>
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
