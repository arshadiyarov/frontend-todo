import { Trash2 } from "lucide-react";
import { useTasks } from "../../../processes/providers/task/useTasks";
import { Button } from "../../../shared/ui/button/Button";

interface DeleteTaskProps {
  id: number;
}

export const DeleteTask = ({ id }: DeleteTaskProps) => {
  const { deleteTask } = useTasks();

  return (
    <Button variant="destructive" size="icon" onClick={() => deleteTask(id)}>
      <Trash2 />
    </Button>
  );
};
