import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../Store/UserState";

export const PatientDetailsContext = createContext();

const PatientDetailsContextProvider = (props) => {
    const { AppointmentId } = useParams();
    const [patientsInformation, setPatientsInformation] = useState();
    const { getStoredCookie } = useContext(AuthContext)

    useEffect(() => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}api/appointment/view/${AppointmentId}`,
            headers: {
                'Authorization': `Bearer ${getStoredCookie("token")}`,
            },
        })
            .then((ress) => {
                axios({
                    method: "GET",
                    url: `${process.env.REACT_APP_API}api/patient/view/${ress?.data?.data?.patientId}`,
                    headers: {
                        'Authorization': `Bearer ${getStoredCookie("token")}`,
                    },
                })
                .then((res) => {
                    setPatientsInformation(res?.data?.data);
                    let AppointmentDetails = ress?.data?.data;
                    setPatientsInformation((prevState) => {
                         return {...prevState ,AppointmentId,AppointmentDetails}
                    })
                 })
                .catch((error) => console.log(error))
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <PatientDetailsContext.Provider
            value={{patientsInformation}}
        >
            {props.children}
        </PatientDetailsContext.Provider>
    )
}

export default PatientDetailsContextProvider;