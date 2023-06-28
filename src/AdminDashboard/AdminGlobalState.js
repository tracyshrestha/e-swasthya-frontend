import { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "../Store/UserState";
import axios from "axios";

export const DoctorContext = createContext();

const DoctorContextProvider = ( props ) => {
    const [DoctorInformation, SetDoctorInformation] = useState([]);
    const {getStoredCookie, isAuth} = useContext(AuthContext);

    useEffect(() => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}api/doctor/view-by-user-id/${isAuth().userId}`,
            headers: {
                'Authorization': `Bearer ${getStoredCookie("token")}`,
            },
           })
            .then((res) => {
        
                SetDoctorInformation(res?.data?.data);
                {console.log(DoctorInformation)}
                localStorage.setItem("doctorId",res?.data?.data?.doctorId)
            })
            .catch((error) => console.log(error))
    }, [])
     

    const getDoctorId = () => {
        return localStorage.getItem("doctorId");
    }

    const getProperty = (propertyName) => {
        return DoctorInformation[propertyName];
    }

    return (
        <DoctorContext.Provider
            value={{DoctorInformation,getProperty ,getDoctorId}}
        >
            {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider;