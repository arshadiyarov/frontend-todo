import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./button/Button";

export const BackToLogin = () => {
  return (
    <Button
      variant="link"
      className="p-0 h-auto text-typo normal-case group"
      asChild
    >
      <Link to="/login">
        <ArrowLeft className="group-hover:-translate-x-1 transition-all" />
        Back to log in
      </Link>
    </Button>
  );
};
