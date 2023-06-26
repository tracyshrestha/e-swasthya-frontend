import axios from "axios";
import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { useParams , useNavigate} from "react-router-dom";
import { PatientContext } from "../../PatientGlobalState";
import { AuthContext } from "../../../Store/UserState";

export const AppointmentContext = createContext();

const AppointmentContextProvider = (props) => {
    const [AppointmentData, setAppointment] = useState();
    const [modalState, setState] = useState();
    const [grantState, setGrant] = useState();
    const [confirm, setConfirm] = useState(false);

    const [error,setError] = useState(false);
    const [otpMessage,SetotpMessage] = useState('');

    let { id } = useParams();

    const [value, timeValue] = useState(false);

    const { getProperty } = useContext(PatientContext);
    const { getStoredCookie } = useContext(AuthContext);

    const navigate = useNavigate();


    useEffect(() => {
        setState(document.getElementById("modalEl"));
        setGrant(document.getElementById("GrantId"));
    }, [])

    const onAppointmentChange = name => event => {
        setAppointment((prevState) => {
            return { ...prevState, [name]: event?.target?.value }
        })
    }

    const formatAMPM = (time24) => {
        
            var hour = parseInt(time24.split(':')[0]);
            var minute = time24.split(':')[1];
          
            var ampm = (hour >= 12) ? 'PM' : 'AM';
            hour = (hour % 12) || 12;
          
            var time12 = hour + ':' + minute + ' ' + ampm;
            return time12;
         
    }
     

    const onSubmit = (event) => {
        event.preventDefault();
        const datepickerEl = document.getElementById('datepickerId');
        const hospitalName = document.getElementById('HospitalName');

        const HospitalNameSelected = hospitalName?.options[hospitalName?.selectedIndex]?.text;


        setAppointment((prevState) => {
            return { ...prevState, appointmentDate: datepickerEl?.value, HospitalName: HospitalNameSelected }
        })
        modalState.classList.remove("hidden");
    }

    const Onconfirm = () => {

        axios({
            method: "POST",
            data: {
                reasonForVisit: AppointmentData.reasonForVisit,
                appointmentDate: new Date(AppointmentData.appointmentDate),
                appointmentTime: AppointmentData.appointmentTime,
                hospitalId: AppointmentData.HospitalId,
                patientDetailId: getProperty('patientId'),
                doctorDetailId: id
            },
            url: `${process.env.REACT_APP_API}api/appointment/save`,
            headers: {
                'Authorization': `Bearer ${getStoredCookie("token")}`,
            },
        }).then((res) => {
            console.log(res);
            saveAppointmentId(res.data.data);
            setConfirm(true);
        }).catch((error) => console.log(error))
    }


    const closeAppointment = () => {
        modalState.classList.add("hidden");
        setAppointment();
        setConfirm(false);
    }

    const GrantAcess = () => {
        grantState.classList.remove("hidden");
        timeValue(true)
    }
    const closeGrant = () => {
        grantState.classList.add("hidden");
        timeValue(false)
    }

    const VerifyCode = () => {

        let a1 = document.getElementById("a1").value;
        let a2 = document.getElementById("a2").value;
        let a3 = document.getElementById("a3").value;
        let a4 = document.getElementById("a4").value;

        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}api/appointment/verify-appointment-otp?appointmentId=${getAppointmentId()}&otp=${a1}${a2}${a3}${a4}`,
            headers: {
                'Authorization': `Bearer ${getStoredCookie("token")}`,
            },
        }).then((res) => {
            SetotpMessage(res.data.message);
            setTimeout(() => {
                navigate('/Appointments')
            },3000)
        }).catch((error) => {
             console.log(error);
             setError(true);
        })

    }

    const resendOtp = (id,doctorId,patientId) => {
        console.log(id,doctorId,patientId);
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_API}api/appointment/resend-otp`,
            headers: {
                'Authorization': `Bearer ${getStoredCookie("token")}`,
            },
            data : {
                appointmentId : id,
                doctorId : doctorId,
                patientId : patientId
            }
        }).then((res) => {
            console.log(res);
            SetotpMessage(res.data.message);
        }).catch((error) => {
             console.log(error);
             setError(true);
        })
    }  

    const saveAppointmentId = (value) => {
        if (window !== 'undefined') {
            localStorage.setItem('AppointmentId', JSON.stringify(value))
        }
    }

    const getAppointmentId = () => {
        if (window !== 'undefined') {
            return localStorage.getItem('AppointmentId')
        }
    }



    return (
        <AppointmentContext.Provider
            value={{
                onAppointmentChange, VerifyCode, onSubmit, value,
                getAppointmentId,
                AppointmentData,resendOtp,otpMessage,error,closeAppointment, Onconfirm, confirm, GrantAcess, closeGrant
            }}
        >
            {props.children}
        </AppointmentContext.Provider>
    )
}

export default AppointmentContextProvider;