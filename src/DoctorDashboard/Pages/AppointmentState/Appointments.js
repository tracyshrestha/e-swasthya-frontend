import { useContext, useEffect, useState } from "react";
import { DoctorContext } from "../../DoctorGlobalState";
import { AuthContext } from "../../../Store/UserState";
import axios from "axios";
import ConfirmModal from "./ConfirmModal";
import { AppointmentContext } from "./AppointmentState";


const Appointments = () => {

    const { getProperty,getDoctorId } = useContext(DoctorContext);
    const { getStoredCookie } = useContext(AuthContext);
    const [patientData, setPatientData] = useState([]);
    const {Reject,AcceptApiCall} = useContext(AppointmentContext);

    function convertTo12HourFormat(time24) {
        var hour = parseInt(time24.split(':')[0]);
        var minute = time24.split(':')[1];
      
        var ampm = (hour >= 12) ? 'PM' : 'AM';
        hour = (hour % 12) || 12;
      
        var time12 = hour + ':' + minute + ' ' + ampm;
        return time12;
      }
   


    useEffect(() => {
        setPatientData([]);
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}api/appointment/view-by-doctor?doctorId=${getDoctorId()}&status=VERIFIED`,
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
    }, [])

    





    return (
        <>
        <ConfirmModal/>
        <section class="h-screen bg-white dark:bg-gray-900">


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
                <div class="py-2 px-4 mx-auto max-w-screen-xl text-left">
                    <h1 class="mb-4 text-2xl  font-bold tracking-tight leading-none text-gray-600 md:text-2xl lg:text-2xl dark:text-white">Appointments Request</h1>
                </div>
                <div class="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">

                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search-users" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
                    </div>
                </div>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Time
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Hospital
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientData.length === 0 ? <div class="text-base mt-4 text-center font-semibold">No patient data</div> : (
                            patientData?.map((ele) => {
                                return (
                                    
                                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Jese image" />
                                            <div class="pl-3">
                                                <div class="text-base font-semibold">{ele.patientName}</div>
                                                <div class="font-normal text-gray-500">{ele.age} years, {ele.gender}</div>
                                            </div>
                                        </th>
                                        <td class="px-6 py-4">
                                            {ele.appointmentDate}
                                        </td>
                                        <td class="px-6 py-4">
                                            <button
                                                type="button"
                                                disabled="true"
                                                className="px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                                            >
                                                {ele.appointmentTime}
                                            </button>
                                        </td>
                                        <td class="px-6 py-4">
                                            {ele.hospitalName}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                type="button"
                                                className="mr-2 px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                                                onClick={() => AcceptApiCall(ele.appointmentId,getProperty("doctorId"),ele.patientId,ele.patientName)}
                                            >
                                                Approve
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => Reject(ele.appointmentId,getProperty("doctorId"),ele.patientId,ele.patientName)}
                                                className="px-5 py-2 text-sm rounded-md text-white bg-[#f24667]"
                                            >
                                                Reject
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </section>
  </>

    )
}

export default Appointments;