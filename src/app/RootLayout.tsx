import { PropsWithChildren } from "react";
import { SidebarProvider } from "../processes/providers/sidebar/SidebarProvider";
import { Sidebar } from "../widgets/sidebar/Sidebar";
import { MainWrapper } from "../widgets/main/MainWrapper";
import { Header } from "../widgets/header/Header";

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider>
      <Header />
      <div className="flex relative">
        <Sidebar />
        <MainWrapper>{children}</MainWrapper>
      </div>
    </SidebarProvider>
  );
};
