import { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "../Store/UserState";
import axios from "axios";

export const PatientContext = createContext();

const PatientContextProvider = ( props ) => {
    const [PatientInformation, SetPatientInformation] = useState([]);
    const { getStoredCookie, isAuth } = useContext(AuthContext);

    useEffect(() => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}api/patient/view-by-user-id/${isAuth().userId}`,
            headers: {
                'Authorization': `Bearer ${getStoredCookie("token")}`,
            },
           })
            .then((res) => {
                SetPatientInformation(res.data.data);
                localStorage.setItem("patientId",res?.data?.data?.patientId)
            })
            .catch((error) => console.log(error))
    }, [])

    const getProperty = (propertyName) => {
        return PatientInformation[propertyName]
    }
    const getPatientId = () => {
        return localStorage.getItem("patientId");
    }


    return (
        
        <PatientContext.Provider
            value={{userInformation:PatientInformation, getProperty,getPatientId }}
        >
            {props.children}
        </PatientContext.Provider>
    )
}

export default PatientContextProvider;