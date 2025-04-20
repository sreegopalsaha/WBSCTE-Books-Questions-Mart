import { Search } from "lucide-react";
import { Input } from "../components/ui/Input";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
      <Input
        type="text"
        placeholder="Search for resources..."
        className="w-full pl-12 pr-4 py-6 text-lg rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
      />
    </div>
  );
};

export default SearchBar;