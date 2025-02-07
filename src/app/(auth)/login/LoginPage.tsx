import { KeyRound } from "lucide-react";
import { Link } from "react-router";
import { LoginForm } from "../../../features/login/ui/LoginForm";
import { AuthHeader } from "../../../shared/ui/AuthHeader";
import { Button } from "../../../shared/ui/button/Button";

export const LoginPage = () => {
  return (
    <div className="flex flex-col items-center gap-8 bg-light dark:bg-dark">
      <AuthHeader
        icon={<KeyRound className="stroke-typo dark:stroke-dark-typo" />}
        title="Authorization"
        subTitle="Welcome back! Please log in to continue."
      />

      <LoginForm />

      <div className="flex items-center justify-center gap-1">
        Don't have an account?
        <Button variant="link" className="p-0 h-auto" asChild>
          <Link to="/register">Register</Link>
        </Button>
      </div>
    </div>
  );
};
