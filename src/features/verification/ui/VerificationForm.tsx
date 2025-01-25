import { Button } from "../../../shared/ui/button/Button";

export const VerificationForm = () => {
  return (
    <form className="w-full flex flex-col gap-4">
      <Button size="lg" className="normal-case">
        Continue
      </Button>
      <div className="flex items-center justify-center gap-1">
        Didn't receive the email?
        <Button variant="link" type="button" className="normal-case px-0 h-0">
          Click to resend
        </Button>
      </div>
    </form>
  );
};
