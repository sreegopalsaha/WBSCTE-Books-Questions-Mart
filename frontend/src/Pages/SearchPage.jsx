import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterButton from "../components/FilterButton";
import SearchResults from "../components/SearchResults";
import BookImg from "../assets/book.webp"

const SearchPage = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] ">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-4 pb-32 text-center">
        <div className="mx-auto w-20 h-20 flex items-center justify-center mb-2">
         <img 
                 src={BookImg || "/placeholder.svg"} 
                 alt="Book Image" 
                 width={65} 
                 height={865} 
                 className='rotate-[-20deg] md:absolute '
               />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-16 leading-tight">
          Start typing to explore 📚
        </h1>
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <FilterButton
            active={activeFilter === "ebooks"}
            onClick={() => setActiveFilter("ebooks")}
          >
            E-books
          </FilterButton>
          <FilterButton
            active={activeFilter === "pyqs"}
            onClick={() => setActiveFilter("pyqs")}
          >
            PYQ's
          </FilterButton>
          <FilterButton
            active={activeFilter === "suggestions"}
            onClick={() => setActiveFilter("suggestions")}
          >
            Suggestions
          </FilterButton>
        </div>
        {/* Search Bar */}
        <SearchBar />
        {/* Results Section */}
        <div className="mt-12">
          <SearchResults />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;