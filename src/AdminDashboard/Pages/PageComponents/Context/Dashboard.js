import { createContext , useEffect ,useContext , useState} from "react";
import { AuthContext } from "../../../../Store/UserState";
import axios from "axios";

export const DashBoardContext = createContext();

const DashBoardContextProvider = (props) => {
    const {getStoredCookie} = useContext(AuthContext)
    // const [] = useState();


    const [Total,setTotal] = useState({
           totalDoctors : 0,
           totalPatients : 0
    });

    useEffect(() => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}api/dashboard/admin/get-patient-doctor-count`,
            headers: {
                'Authorization': `Bearer ${getStoredCookie("token")}`,
            },
           }).then((res) => {
                if(res.data.data) setTotal(res.data.data)
           }).catch((error) => console.log(error))
    },[])
   

    return (
         <DashBoardContext.Provider value={{Total}}>
             {props.children}
        </DashBoardContext.Provider>
    )
}

export default DashBoardContextProvider;