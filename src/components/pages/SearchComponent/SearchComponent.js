import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";
import search from "../../../assets/search.svg";


function SearchComponent() {
  const [results, setResults] = useState([]);

  return (
    <div className="h-full w-full flex-items-center text-grey-600 ">
      <div className="flex flex-col  md:items-end md:pr-4 pb-4 bg-white">
        <div className="flex md:flex-row flex-col">
          <div className="relative md:w-[330px] md:mt-5 mt-3 md:mx-0 mx-3">
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
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
