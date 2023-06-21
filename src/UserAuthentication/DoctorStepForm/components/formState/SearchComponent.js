import { useState } from "react";
import { SearchBar } from './SearchBar'
import { SearchResultsList } from "./SearchResultList";

import search from "../../../../assets/search.svg";


function SearchComponent() {
  const [results, setResults] = useState([]);

  return (
    
          <div className="relative md:w-[330px] mt-3 md:mx-0 mx-3">
          <div class="relative w-full">
          
            <button class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#43adf0] rounded-r-lg border border-[#43adf0] focus:outline-none">
                <svg aria-hidden="true" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
            <div className="">
              <SearchBar setResults={setResults} />
              {results && results.length > 0 && <SearchResultsList results={results} />}
            </div>
          </div>
       
  );
}

export default SearchComponent;