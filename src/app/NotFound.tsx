import { Button } from "../shared/ui/button/Button";
import { Link } from "react-router";

export const NotFound = () => {
  return (
    <main className="w-full h-dvh flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="text-9xl font-semibold flex items-center">
          <span className="animate-float">4</span>
          <span className="text-8xl">😔</span>
          <span className="animate-float-slow delay-100">4</span>
        </div>
        <p className="w-2/3 text-center">
          The page you're looking for can't be found. It's looks like you're
          trying to access a page that either has been deleted or never
          existed...
        </p>
        <Button size="lg" asChild>
          <Link to="/">Home page</Link>
        </Button>
      </div>
    </main>
  );
};
