import { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "../Store/UserState";
import axios from "axios";

export const DoctorContext = createContext();

const DoctorContextProvider = ( props ) => {
    const [DoctorInformation, SetDoctorInformation] = useState([]);
    const [PatientsData,setPatientData] = useState([]);
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
            .then((res) => {
                axios({
                    method: "GET",
                    url: `${process.env.REACT_APP_API}api/appointment/view-by-doctor?doctorId=${getDoctorId()}&status=ACCEPTED`,
                    headers: {
                        'Authorization': `Bearer ${getStoredCookie("token")}`,
                    },
                })
                    .then((res) => {
                        res?.data?.data.map((ele) => {
                            axios({
                                method: "GET",
                                url: `${process.env.REACT_APP_API}api/patient/view/${ele.patientId}`,
                                headers: {
                                    'Authorization': `Bearer ${getStoredCookie("token")}`
                                }
                            }).then((resData) => {
                                
                                setPatientData((prevState) => {
                                    return [
                                        ...prevState,
                                        {
                                            appointmentTime: convertTo12HourFormat(ele?.appointmentTime),
                                            appointmentDate: ele.appointmentDate,
                                            appointmentId: ele.appointmentId,
                                            hospitalName: ele.hospitalName,
                                            status : ele.status,
                                            patientId: ele.patientId,
                                            patientName: ele.patientName,
                                            isDiagnosisFilled : ele.isDiagnosisFilled,
                                            imagePath: resData?.data?.data?.imagePath,
                                            gender: resData?.data?.data?.gender,
                                            age: resData?.data?.data?.age
                                        }
                                    ]
        
                                })
                            }).catch((error) => console.log(error))
                        })
                    })
                    .catch((error) => console.log(error))
            })
            .catch((error) => console.log(error))
    }, [])

    function convertTo12HourFormat(time24) {
        var hour = parseInt(time24.split(':')[0]);
        var minute = time24.split(':')[1];
      
        var ampm = (hour >= 12) ? 'PM' : 'AM';
        hour = (hour % 12) || 12;
      
        var time12 = hour + ':' + minute + ' ' + ampm;
        return time12;
      }

   

    const getDoctorId = () => {
        return localStorage.getItem("doctorId");
    }

    const getProperty = (propertyName) => {
        return DoctorInformation[propertyName];
    }

    return (
        <DoctorContext.Provider
            value={{DoctorInformation,getProperty,getDoctorId,PatientsData}}
        >
            {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider;