import { Button } from "../../../shared/ui/button/Button";
import { Input } from "../../../shared/ui/input/Input";

export const RestoreForm = () => {
  return (
    <form className="w-full flex flex-col gap-4">
      <Input
        inputSize="lg"
        label="Email Address"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        required
      />

      <Button size="lg" className="normal-case">
        Send request
      </Button>
    </form>
  );
};
