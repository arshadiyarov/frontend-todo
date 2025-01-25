import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../../../shared/ui/button/Button";
import { Checkbox } from "../../../shared/ui/checkbox/Checkbox";
import { Input } from "../../../shared/ui/input/Input";

export const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleToggle = () => {
    setRememberMe((prevState) => !prevState);
  };

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
      <Input
        inputSize="lg"
        label="Password"
        type="password"
        autoComplete="current-password"
        placeholder="Enter your password"
        required
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember-me"
            isChecked={rememberMe}
            toggle={handleToggle}
          />
          <label htmlFor="remember-me" className="select-none text-sm">
            Remember me
          </label>
        </div>
        <Button variant="link" className="text-sm p-0 h-auto" asChild>
          <Link to="/restore">Forgot password?</Link>
        </Button>
      </div>
      <Button size="lg">Login</Button>
    </form>
  );
};
