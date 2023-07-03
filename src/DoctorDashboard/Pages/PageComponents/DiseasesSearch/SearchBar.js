import { useState , useContext} from "react";
import { HistoryContext } from "../HistoryState/HistoryState";



export const SearchBar = ({ setResults , SearchField }) => {
    const [input, setInput] = useState("");
    const {DiseaseType,SetDiseaseType} = useContext(HistoryContext)

    const fetchData = (value) => {
                let results = SearchField.filter((ele) => {
                    return (
                        value &&
                        ele &&
                        ele.toLowerCase().includes(value)
                    )
                });
            setResults(results);
    };

    const handleChange = (value) => {
        setInput(value.toLowerCase());
        SetDiseaseType(value)
        fetchData(value);
    };

    return (
        <div className="">
            <input
                type="text"
                name="diagonsis"
                value = {DiseaseType}
                onChange={(e) => {handleChange(e.target.value)}}
                id="email-address-icon"
                class=" h-[50px] placeholder-gray-300 0 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-3 p-2.5"
                placeholder="Search hospital"
            />
        </div>
    );
};