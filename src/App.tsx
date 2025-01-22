import { useState } from "react";
import "./App.css";
import { cn } from "./utils/cn";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center gap-3 h-screen w-full">
      <h1
        className={cn("text-5xl font-bold text-black", {
          "text-red-500": counter > 0,
          "text-blue-500": counter < 0,
        })}
      >
        {counter}
      </h1>
      <div className="flex gap-1">
        <button
          onClick={() => setCounter((prev) => prev - 1)}
          className="size-6 bg-gray-200 hover:bg-gray-300 transition-all"
        >
          -
        </button>
        <button
          onClick={() => setCounter((prev) => prev + 1)}
          className="size-6 bg-gray-200 hover:bg-gray-300 transition-all"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
