import { UserRound } from "lucide-react";
import { Link } from "react-router";
import { RegisterForm } from "../../../features/register/ui/RegisterForm";
import { AuthHeader } from "../../../shared/ui/AuthHeader";
import { Button } from "../../../shared/ui/button/Button";

export const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <AuthHeader
        icon={<UserRound className="stroke-typo" />}
        title="Registration"
        subTitle="Join us today! Create an account to get started."
      />

      <RegisterForm />

      <div className="flex items-center justify-center gap-1">
        Already have an account?
        <Button variant="link" className="p-0 h-auto" asChild>
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
};
