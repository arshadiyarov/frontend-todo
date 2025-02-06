import { FormEvent, useState } from "react";
import { Button } from "../../../../shared/ui/button/Button";
import { Input } from "../../../../shared/ui/input/Input";
import { Loader } from "../../../../shared/ui/Loader";
import { useTasks } from "../../../../processes/providers/task/useTasks";

interface AddTaskFormProps {
  close: () => void;
}

export const AddTaskForm = ({ close }: AddTaskFormProps) => {
  const { createTask } = useTasks();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await createTask(title);
      setTitle("");
      close();
    } catch (e) {
      console.error("Can't create task:\n", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <h3 className="text-start md:text-center text-2xl">Create New Task</h3>
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
