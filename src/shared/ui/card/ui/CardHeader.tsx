interface CardHeaderProps {
  title: string;
  subTitle?: string;
}

export const CardHeader = ({ title, subTitle }: CardHeaderProps) => {
  return (
    <div>
      <h2 className="text-2xl font-medium">{title}</h2>
      {subTitle && (
        <div className="text-sm text-typo-secondary">{subTitle}</div>
      )}
    </div>
  );
};
