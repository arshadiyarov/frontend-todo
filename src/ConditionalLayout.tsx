import { PropsWithChildren } from "react";
import { useLocation } from "react-router";
import { RootLayout } from "./app/RootLayout";

export const ConditionalLayout = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  const noLayoutRoutes = ["/login", "/register"];

  if (noLayoutRoutes.includes(pathname)) {
    return <>{children}</>;
  }

  return <RootLayout>{children}</RootLayout>;
};
