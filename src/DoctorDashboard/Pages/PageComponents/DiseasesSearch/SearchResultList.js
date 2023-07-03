import { useContext } from "react";
import { HistoryContext } from "../HistoryState/HistoryState";


export const SearchResultsList = ({ results , setResults}) => {
  const {SetDiseaseType} = useContext(HistoryContext)
  return (
    <ul class="py-2 text-sm  max-h-28  overflow-scroll text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button-2">
      {results.map((result, id) => {
        return (
          <li>
            <span  class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
              <div   class="inline-flex items-center">
                  <div onClick={() => {SetDiseaseType(result);setResults('')}}> {result} </div>
              </div>
            </span>
          </li>
        )
      })}
    </ul>
  );
};