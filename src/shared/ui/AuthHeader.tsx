import { ReactNode } from "react";

interface AuthHeaderProps {
  icon: ReactNode;
  title: string;
  subTitle?: string | ReactNode;
}

export const AuthHeader = ({ icon, title, subTitle }: AuthHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="border dark:border-gray-700 w-fit rounded-lg p-3 flex items-center justify-center shadow-sm animate-float-slow">
        {icon}
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-semibold">{title}</h1>
        {subTitle && (
          <p className="text-typo-secondary text-lg font-medium">{subTitle}</p>
        )}
      </div>
    </div>
  );
};
