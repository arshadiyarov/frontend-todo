import { PropsWithChildren } from "react";
import { useSidebar } from "../../processes/providers/sidebar/useSidebar";
import { cn } from "../../shared/lib/utils/cn";

export const MainWrapper = ({ children }: PropsWithChildren) => {
  const { isExpanded } = useSidebar();

  return (
    <main
      className={cn("flex-grow transition-all mt-16", {
        "ml-80": isExpanded,
        "ml-[3.75rem]": !isExpanded,
      })}
    >
      {children}
    </main>
  );
};
