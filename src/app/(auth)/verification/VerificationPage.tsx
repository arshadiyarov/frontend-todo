import { MailOpen } from "lucide-react";
import { VerificationForm } from "../../../features/verification/ui/VerificationForm";
import { AuthHeader } from "../../../shared/ui/AuthHeader";
import { BackToLogin } from "../../../shared/ui/BackToLogin";

export const VerificationPage = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <AuthHeader
        icon={<MailOpen className="stroke-typo dark:stroke-dark-typo" />}
        title="Forgot password?"
        subTitle={
          <>
            We sent a code to{" "}
            <span className="text-typo">shadiyarovarmat@gmail.com</span>
          </>
        }
      />

      <VerificationForm />

      <BackToLogin />
    </div>
  );
};
