import { useState } from "react";
import { FaSearch } from "react-icons/fa";



export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="">
     
      <input className="
       border text-gray-900 text-sm border-[#42adf051] boarder-opacity-60 rounded-lg w-full pl-4 p-2.5"
       placeholder="Search specialist"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};