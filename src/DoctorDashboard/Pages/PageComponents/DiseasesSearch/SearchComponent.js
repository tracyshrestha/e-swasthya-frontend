import { useState } from "react";
import { SearchBar } from './SearchBar'
import { SearchResultsList } from "./SearchResultList";



function SearchComponent({SearchField}) {
  const [results, setResults] = useState([]);
  return (
            <div className="">
              <SearchBar setResults={setResults} SearchField={SearchField}/>
              {results && results.length > 0 && <SearchResultsList results={results} setResults={setResults}/>}
            </div>
  );
}

export default SearchComponent;