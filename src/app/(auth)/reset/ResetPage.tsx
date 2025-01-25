import { RectangleEllipsis } from "lucide-react";
import { ResetForm } from "../../../features/reset/ui/ResetForm";
import { AuthHeader } from "../../../shared/ui/AuthHeader";
import { BackToLogin } from "../../../shared/ui/BackToLogin";

export const ResetPage = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <AuthHeader
        icon={<RectangleEllipsis className="stroke-typo" />}
        title="Set new password"
        subTitle="Must be at least 8 characters."
      />

      <ResetForm />

      <BackToLogin />
    </div>
  );
};
