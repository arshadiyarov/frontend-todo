import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { ConditionalLayout } from "./ConditionalLayout.tsx";
import { LoginPage } from "./app/(auth)/login/LoginPage.tsx";
import { RegisterPage } from "./app/(auth)/register/RegisterPage.tsx";
import { ResetPage } from "./app/(auth)/reset/ResetPage.tsx";
import { RestorePage } from "./app/(auth)/restore/RestorePage.tsx";
import { VerificationPage } from "./app/(auth)/verification/VerificationPage.tsx";
import { MainPage } from "./app/MainPage.tsx";
import { NotFound } from "./app/NotFound.tsx";
import { HistoryPage } from "./app/history/HistoryPage.tsx";
import { PomodoroPage } from "./app/pomodoro/PomodoroPage.tsx";
import { TasksPage } from "./app/tasks/TasksPage.tsx";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ConditionalLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/pomodoro" element={<PomodoroPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verification" element={<VerificationPage />} />
          <Route path="/restore" element={<RestorePage />} />
          <Route path="/reset" element={<ResetPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ConditionalLayout>
    </BrowserRouter>
  </StrictMode>
);
