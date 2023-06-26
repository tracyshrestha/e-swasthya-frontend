import {useState ,useEffect} from "react";
import Datepicker from 'flowbite-datepicker/Datepicker';
import { useContext } from "react";
import { AppointmentContext } from "./GlobalState";



const AppointmentComponent = ({hospitalList}) => {
   
    const {onSubmit,onAppointmentChange} = useContext(AppointmentContext);

    useEffect(() => {
        const datepickerEl = document.getElementById('datepickerId');
        new Datepicker(datepickerEl, {
            autoHide: true,
            todayBtn: false,
            clearBtn: false,
            maxDate: new Date("2024-01-01"),
            minDate: new Date(),
            theme: {
                background: "bg-gray-700",
                todayBtn: "",
                clearBtn: "",
                icons: "",
                text: "",
                disabledText: "bg-red-500",
                input: "",
                inputIcon: "",
                selected: "",
            },
            icons: {
                // () => ReactElement | JSX.Element
                prev: () => <span>Previous</span>,
                next: () => <span>Next</span>,
            },
            datepickerClassNames: "top-12",
            defaultDate: new Date(),
            language: "en",
        });
    }, [])

    

    return (

    <form onSubmit={(e) => {onSubmit(e)}}>
        <div className="mt-2 pb-3">
            <div className="relative p-4">
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-6 '>

                    <div className=' text-left text-gray-400 overflow-hidden'>
                        <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Choose your Hospital</h1>
                        <select id="HospitalName" required onChange={onAppointmentChange("HospitalId")} class="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {
                                 hospitalList?.map((ele,id) => {
                                     return(
                                        <option value={ele?.id} Hospitalname={ele?.id}>{ele?.name}</option>
                                     )
                                 })
                            }
                        </select>
                    </div>
                    <div className=' text-left  text-gray-400 '>
                        <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Choose appropriate date</h1>
                        <div class="relative max-w-sm">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input required datepicker id="datepickerId" type="text" class=" h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                        </div>
                    </div>
                    <div className=' text-left text-gray-400 '>
                        <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Choose appropriate time</h1>
                        <input
                            type="time"
                            id="appt"
                            name="appt"
                            min="09:00"
                            max="18:00"
                            required
                            onChange={onAppointmentChange("appointmentTime")}
                        ></input>
                    </div>
                </div>
                <div className="relative mt-6">
                    <div className='grid grid-cols-1 gap-6 '>


                        <div className=' text-left  text-gray-400 '>
                            <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Reason for visit</h1>
                            <div class="relative max-w-sm">
                                <textarea  required  onChange={onAppointmentChange("reasonForVisit")} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your symptoms"></textarea>
                            </div>
                            <button
                                type="submit"
                                
                                className="mt-6 px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                            >
                                Book an Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}

export default AppointmentComponent;