import { ReactNode } from "react";
import styles from "./pageHeader.module.scss";

interface PageHeaderProps {
  title: string | ReactNode;
  subTitle?: string | ReactNode;
}

export const PageHeader = ({ title, subTitle }: PageHeaderProps) => {
  return (
    <div className={styles.spaceY2}>
      {/* TODO: Get username */}
      <h1 className="font-semibold text-4xl">{title}</h1>
      {subTitle && <p className="text-xl text-typo-secondary">{subTitle}</p>}
    </div>
  );
};
