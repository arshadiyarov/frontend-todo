import { Fingerprint } from "lucide-react";
import { RestoreForm } from "../../../features/restore/ui/RestoreForm";
import { AuthHeader } from "../../../shared/ui/AuthHeader";
import { BackToLogin } from "../../../shared/ui/BackToLogin";

export const RestorePage = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <AuthHeader
        icon={<Fingerprint className="stroke-typo" />}
        title="Forgot password?"
        subTitle="No worries, we'll send you reset instructions."
      />

      <RestoreForm />

      <BackToLogin />
    </div>
  );
};
