import { PropsWithChildren } from "react";
import { Sidebar } from "../widgets/sidebar/Sidebar";

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">{children}</main>
    </div>
  );
};
