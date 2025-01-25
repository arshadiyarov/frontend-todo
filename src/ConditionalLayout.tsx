import { PropsWithChildren } from "react";
import { useLocation } from "react-router";
import { AuthLayout } from "./app/(auth)/AuthLayout";
import { RootLayout } from "./app/RootLayout";

export const ConditionalLayout = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  const authLayoutRoutes = [
    "/login",
    "/register",
    "/reset",
    "/restore",
    "/verification",
  ];
  const mainLayoutRoutes = ["/", "/tasks", "/history", "/pomodoro"];

  if (mainLayoutRoutes.includes(pathname)) {
    return <RootLayout>{children}</RootLayout>;
  }

  if (authLayoutRoutes.includes(pathname)) {
    return <AuthLayout>{children}</AuthLayout>;
  }

  return <>{children}</>;
};
