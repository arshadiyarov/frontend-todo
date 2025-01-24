import { ReactNode } from "react";
import { getColoredValue } from "../../../shared/lib/utils/getColoredValue";
import { Card } from "../../../shared/ui/card/Card";

interface InfoCardProps {
  title: string;
  body: string;
  footer: string;
  icon: ReactNode;
  value?: number | null;
}

export const InfoCard = ({
  title,
  icon,
  body,
  footer,
  value,
}: InfoCardProps) => {
  return (
    <Card className="w-full flex flex-col justify-between gap-2 hover:scale-[102%] transition-all">
      <div className="flex items-center justify-between text-sm font-medium">
        <h3>{title}</h3>
        {icon}
      </div>
      <div className="text-2xl font-semibold">{body}</div>
      <div className="text-xs text-typo-secondary flex items-center gap-1">
        {!!value && getColoredValue(value)}
        <div>{footer}</div>
      </div>
    </Card>
  );
};
