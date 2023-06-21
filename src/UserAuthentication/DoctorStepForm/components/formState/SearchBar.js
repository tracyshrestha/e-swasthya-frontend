import { useState , useContext} from "react";
import { AuthContext } from "../../../../Store/UserState";







export const SearchBar = ({ setResults }) => {
    const {getStoredCookie} = useContext(AuthContext);
    const hospitalName = [
        {"name" : "Patan Hospital"},
        {"name" : "Medicity Hospital"},
        {"name" : "Bir Hospital"},
        {"name" : "HAMS Hospital"},
        {"name" : "Alka Hospital"}
    ]
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        // const results = hospitalName.filter((name) => {
        //     console.log(name)
        //      return (
        //                 value &&
        //                 name &&
        //                 name.name &&
        //                 name.name.toLowerCase().includes(value)
        //      )
        // })

        fetch(`${process.env.REACT_APP_API}api/hospital/list`,{
            method : 'GET',
            headers : new Headers({
                 'Authorization' : `Bearer ${getStoredCookie("token")}`,
            })
        })
            .then((response) => response.json())
            .then((data) => {
                let results = data.data.filter((user) => {
                    
                    return (
                        value &&
                        user &&
                        user.hospitalName &&
                        user.hospitalName.toLowerCase().includes(value)
                    );
                });
                setResults(results);
            });
    };

        
      
    


    const handleChange = (value) => {
        setInput(value.toLowerCase());
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