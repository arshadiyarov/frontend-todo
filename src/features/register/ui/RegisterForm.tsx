import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../../../shared/ui/button/Button";
import { Checkbox } from "../../../shared/ui/checkbox/Checkbox";
import { Input } from "../../../shared/ui/input/Input";

export const RegisterForm = () => {
  const [isConfirm, setisConfirm] = useState(false);

  const handleToggle = () => {
    setisConfirm((prevState) => !prevState);
  };

  return (
    <form className="w-full flex flex-col gap-4">
      <Input
        inputSize="lg"
        label="First Name"
        type="text"
        autoComplete="given-name"
        placeholder="John"
        required
      />
      <Input
        inputSize="lg"
        label="Last Name"
        type="text"
        autoComplete="family-name"
        placeholder="Doe"
        required
      />
      <Input
        inputSize="lg"
        label="Email Address"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        required
      />
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

      <div className="flex items-center gap-2">
        <Checkbox
          id="remember-me"
          isChecked={isConfirm}
          toggle={handleToggle}
        />
        <label
          htmlFor="remember-me"
          className="select-none text-sm flex items-center gap-1"
        >
          I agree to the
          <Button variant="link" className="px-0 h-0" asChild>
            <Link to="/terms">Terms and Conditions</Link>
          </Button>
        </label>
      </div>
      <Button size="lg" disabled={!isConfirm}>
        Register
      </Button>
    </form>
  );
};
