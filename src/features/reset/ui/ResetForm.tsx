import { Button } from "../../../shared/ui/button/Button";
import { Input } from "../../../shared/ui/input/Input";

export const ResetForm = () => {
  return (
    <form className="w-full flex flex-col gap-4">
      <Input
        inputSize="lg"
        label="Password"
        type="password"
        autoComplete="new-password"
        placeholder="Enter a strong password"
        required
      />
      <Input
        inputSize="lg"
        label="Confirm Password"
        type="password"
        autoComplete="new-password"
        placeholder="Re-enter your password"
        required
      />

      <Button size="lg" className="normal-case">
        Reset password
      </Button>
    </form>
  );
};
