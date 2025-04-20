import { Button } from "./ui/button";
import { cn } from "../lib/utils";

const FilterButton = ({ active, children, onClick }) => {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className={cn(
        "px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer",
        active && "bg-blue-50 text-blue-600 border-blue-200"
      )}
    >
      {children}
    </Button>
  );
};

export default FilterButton;