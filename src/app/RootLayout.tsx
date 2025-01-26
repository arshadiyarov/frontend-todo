import { PropsWithChildren } from "react";
import { TimerProvider } from "../features/timer/povider/TimerProvider";
import { SidebarProvider } from "../processes/providers/sidebar/SidebarProvider";
import { Header } from "../widgets/header/Header";
import { MainWrapper } from "../widgets/main/MainWrapper";
import { Sidebar } from "../widgets/sidebar/Sidebar";

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider>
      <TimerProvider>
        <Header />
        <div className="flex relative">
          <Sidebar />
          <MainWrapper>{children}</MainWrapper>
        </div>
      </TimerProvider>
    </SidebarProvider>
  );
};
