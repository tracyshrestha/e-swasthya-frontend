import { useState } from "react";
import { SearchBar } from './SearchBar'
import { SearchResultsList } from "./SearchResultList";

import search from "../../../../assets/search.svg";


function SearchComponent() {
  const [results, setResults] = useState([]);

  return (
    
          <div className="relative md:w-[330px] mt-3 md:mx-0 mx-3">
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <img
                src={search}
                alt=""
                class="self-center w-5 h-5 rounded-full mx-1"
              />
            </div>
            <div className="">
              <SearchBar setResults={setResults} />
              {results && results.length > 0 && <SearchResultsList results={results} />}
            </div>
          </div>
       
  );
}

export default SearchComponent;