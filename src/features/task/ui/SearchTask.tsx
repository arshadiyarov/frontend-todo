import { Search, X } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useTasks } from "../../../processes/providers/task/useTasks";
import { cn } from "../../../shared/lib/utils/cn";
import { Input } from "../../../shared/ui/input/Input";

export const SearchTask = () => {
  const { refetch } = useTasks();
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearch = useDebouncedCallback((value) => {
    refetch(value);
  }, 300);

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    debouncedSearch(searchValue);
  }, [searchValue]);

  return (
    <div className="relative">
      <Search
        size={20}
        className="stroke-typo-secondary absolute top-1/2 left-3 -translate-y-1/2"
      />
      <Input
        placeholder="Search..."
        value={searchValue}
        onChange={handleValueChange}
        className="pl-10 pr-9"
      />
      <button
        type="button"
        className={cn(
          "absolute top-1/2 right-0 -translate-y-1/2 group p-2.5 opacity-0 transition-all",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500",
          "rounded-r-md pointer-events-none",
          {
            "opacity-100 pointer-events-auto": searchValue.length > 0,
          }
        )}
        onClick={() => setSearchValue("")}
      >
        <X
          size={14}
          className={cn(
            "stroke-typo-secondary transition-all",
            "group-hover:stroke-red-500 group-hover:scale-125",
            "group-focus-within:stroke-red-500 group-focus-within:scale-125"
          )}
        />
      </button>
    </div>
  );
};
