import { FormEvent, useState } from "react";
import { useTasks } from "../../../../processes/providers/task/useTasks";
import { Button } from "../../../../shared/ui/button/Button";
import { Input } from "../../../../shared/ui/input/Input";
import { Loader } from "../../../../shared/ui/Loader";

interface EditTaskFormProps {
  id: number;
  title: string;
  close: () => void;
}

export const EditTaskForm = ({
  id,
  close,
  title: initTitle,
}: EditTaskFormProps) => {
  const { updateTask } = useTasks();
  const [title, setTitle] = useState(initTitle);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await updateTask(id, title);
      close();
    } catch (e) {
      console.error("Failed to edit task:\n", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <h3 className="text-start md:text-center text-2xl">Edit Task</h3>
      <Input
        label="Title"
        placeholder="To do..."
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button disabled={isLoading} className="w-full">
        {isLoading ? <Loader /> : "Submit"}
      </Button>
    </form>
  );
};
