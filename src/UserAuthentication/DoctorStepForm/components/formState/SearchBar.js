import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { json } from "react-router-dom";



export const SearchBar = ({ setResults }) => {
    const hospitalName = [
        {"name" : "Patan Hospital"},
        {"name" : "Medicity Hospital"},
        {"name" : "Bir Hospital"}
    ]
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        const results = hospitalName.filter((name) => {
             return (
                        value &&
                        name &&
                        name.name &&
                        name.name.toLowerCase().includes(value)
             )
        })
        setResults(results);


        
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((response) => response.json())
        //     .then((json) => {
        //         = json.filter((user) => {
        //             return (
        //                 value &&
        //                 user &&
        //                 user.name &&
        //                 user.name.toLowerCase().includes(value)
        //             );
        //         });
        //         setResults(results);
        //     });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className="">
            <input
                type="text"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                id="email-address-icon"
                class="placeholder-gray-300 h-[50px] 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                placeholder="Search hospital"
            />
        </div>
    );
};