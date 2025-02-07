import { PropsWithChildren } from "react";
import { AuthRight } from "../../widgets/auth/ui/AuthRight";
import { ThemeProvider } from "../../processes/providers/theme/ThemeProvider";

export const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <div className="flex items-center">
        <main className="w-full md:w-4/5 lg:w-3/4 xl:w-1/2 px-0 md:px-8 lg:px-16 ">
          {children}
        </main>
        <AuthRight />
      </div>
    </ThemeProvider>
  );
};
