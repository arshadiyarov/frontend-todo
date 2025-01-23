import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { ConditionalLayout } from "./ConditionalLayout.tsx";
import { MainPage } from "./app/MainPage.tsx";
import { NotFound } from "./app/NotFound.tsx";
import { TasksPage } from "./app/tasks/TasksPage.tsx";
import "./index.scss";
import { HistoryPage } from "./app/history/HistoryPage.tsx";
import { PomodoroPage } from "./app/pomodoro/PomodoroPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ConditionalLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/pomodoro" element={<PomodoroPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ConditionalLayout>
    </BrowserRouter>
  </StrictMode>
);
