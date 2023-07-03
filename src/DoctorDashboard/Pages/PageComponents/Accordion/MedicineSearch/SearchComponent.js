import { useState } from "react";
import { SearchBar } from './SearchBar'
import { SearchResultsList } from "./SearchResultList";



function SearchComponent({id}) {
  const [results, setResults] = useState([]);
  const [value,setValue] = useState("");
  return (
            <div className="">
              <SearchBar setResults={setResults} id={id} value={value} setValue={setValue}/>
              {results && results.length > 0 && <SearchResultsList value={value} setValue={setValue} results={results} setResults={setResults} id={id}/>}
            </div>
  );
}

export default SearchComponent;