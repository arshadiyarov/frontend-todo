import { PropsWithChildren } from "react";
import { TimerProvider } from "../features/timer/povider/TimerProvider";
import { SidebarProvider } from "../processes/providers/sidebar/SidebarProvider";
import { TasksProvider } from "../processes/providers/task/TasksProvider";
import { Header } from "../widgets/header/Header";
import { MainWrapper } from "../widgets/main/MainWrapper";
import { Sidebar } from "../widgets/sidebar/Sidebar";

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider>
      <TasksProvider>
        <TimerProvider>
          <Header />
          <div className="flex">
            <Sidebar />
            <MainWrapper>{children}</MainWrapper>
          </div>
        </TimerProvider>
      </TasksProvider>
    </SidebarProvider>
  );
};
