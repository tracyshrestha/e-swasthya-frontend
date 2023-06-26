import { BsFillPersonVcardFill } from 'react-icons/bs'

import { MdVaccines } from 'react-icons/md'


import { useEffect ,useContext , useState} from 'react';
import { AuthContext } from '../../Store/UserState';
import { useParams } from 'react-router-dom';
import axios from 'axios';


import ConfirmationModal from './AppointmentState/ConfirmationModal';
import AppointmentHandler from './AppointmentState/Main';


const DoctorInfo = () => {
    const [DoctorInfo,SetDoctorInfo] = useState([]);
    const {id} = useParams();

    const { getStoredCookie } = useContext(AuthContext);

     useEffect(() => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}api/doctor/view/${id}`,
            headers: {
                'Authorization': `Bearer ${getStoredCookie("token")}`,
            },
        })
            .then((res) => {
                SetDoctorInfo(res.data.data);
            })
            .catch((error) => console.log(error))
    }, [])
      
   

   


    return (
        <>
       
        <div className='h-screen'>
             
            <div className=" w-full h-max bg-metal mx-auto grid lg:grid-rows-2 lg:grid-flow-col gap-2 md:grid-col-1">
                <div className="lg:row-span-2  rounded-sm  border-[2px] border-[#f8f8f8] bg-white shadow-xl">
                    <div className="info flex items-center bg-eswasthyaprim text-white p-3">
                        <span className='text-2xl mr-2'><BsFillPersonVcardFill /></span> General information
                    </div>

                    <div className="grid grid-cols-2 pl-5 pr-5 mt-2 grid-flow-col ">
                        <div className="info p-1 pb-3 row-span-2">
                            <img class="md:w-32 md:h-32  w-20 h-20 rounded-full shadow-lg" src="https://demo.midas.com.np/uploads/dr_atit_poudel-removebg-preview.png" alt="Bonnie image" />
                        </div>
                        <div className="info p-1">
                            <span class="block">Dr.{DoctorInfo.firstName} {DoctorInfo.lastName}</span>
                            <span class="block">{DoctorInfo.email}</span>
                        </div>
                        <div className="info p-1">
                            <h1 class="text-gray-500" >Gender</h1>
                            <button disabled class="rounded-md h-10 mt-1 px-5 text-lg bg-slate-200 text-eswasthya-blue">{DoctorInfo.gender}</button>
                        </div>

                    </div>

                    <div className="grid grid-cols-2 pl-5 pr-5  pb-3">
                        <div className="info p-1">
                            <span class="text-gray-500 block">Qualification</span>
                            <button disabled class="rounded-md h-10 mt-1 px-5 text-lg bg-slate-200 text-eswasthya-blue">{DoctorInfo.education}</button>
                        </div>
                        <div className="info p-1">
                            <span class="block">Speciality</span>
                            <button disabled class="rounded-md h-10 mt-1 px-5 text-lg bg-slate-200 text-eswasthya-blue">{DoctorInfo.specialization}</button>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 pl-5 pr-5  pb-3">

                        <div className="info p-1">
                            <h1 class="text-gray-500" >Experience</h1>
                            <span class="text-gray-900">{DoctorInfo.experience}</span>
                        </div>
                        <div className="info p-1">
                            <h1 class="text-gray-500" >NMC no </h1>
                            <span class="text-gray-900">{DoctorInfo.nmcLicenseNo}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 pl-5 pr-5  pb-3">
                        <div className="info p-1">
                            <span class="block">Tele no</span>
                            <span class="text-gray-900">+977-{DoctorInfo.phoneNumber}</span>
                        </div>
                        <div className="info p-1">
                            <h1 class="text-gray-500" >Location</h1>
                            <span class="text-gray-900">Manbhawan,lalitpur</span>
                        </div>
                    </div>
                    <div className="info mt-3 flex items-center bg-eswasthyaprim text-white p-3">
                        <span className='text-2xl mr-2'><BsFillPersonVcardFill /></span> Associated Hospital
                    </div>

                    <div class="relative m-2 p-2">
                        <div className='grid grid-cols-2 gap-2'>

                            {
                                 DoctorInfo?.associatedhospitalList?.map((ele) => {
                                     return (
                                        <button
                                        key={ele?.id}
        
                                        type="button"
                                        disabled="true"
                                        className="px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                                    >
                                        {ele?.name}
                                    </button>
                                     )
                                 })
                            }
                        </div>
                    </div>

                </div>
                <div className="rounded-sm border-[2px] border-[#f8f8f8] bg-white shadow-xl">
                    <div className="info flex items-center bg-eswasthyaprim text-white p-3">
                        <span className='text-2xl mr-2'><MdVaccines /></span>Book an Appointment
                    </div>
                    <AppointmentHandler hospitalList={DoctorInfo?.associatedhospitalList}/>
                </div>
                {/* <div className="lg:col-span-12 rounded-sm border-[2px] border-[#f8f8f8] bg-white shadow-xl ">
                
                <div className="info flex items-center bg-eswasthyaprim text-white p-3">
                    <span className='text-2xl mr-2'><RiMedicineBottleFill /></span> Appointments
                </div>
                <div className="grid grid-cols-1 pl-7 pr-5 overflow-scroll">
                    <table className="mt-4">
                        <thead>
                            <tr className='text-left'>
                                <th>Patients Name</th>
                                <th>Date</th>
                                <th>Hospital</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <td className='py-3'>
                                    <div class="flex items-center space-x-4">
                                        <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="" />
                                        <div class="font-medium dark:text-white">
                                            <div>Jese Leos</div>
                                            <div class="text-sm text-gray-500 dark:text-gray-400">Male, 65 years</div>
                                        </div>
                                    </div>
                                </td>
                                <td>2023/02/22</td>
                                <td><button
                                    type="button"
                                    disabled="true"
                                    className="px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                                >
                                    Bir Hospital
                                </button></td>
                                <td><button
                                    type="button"
                                    disabled="true"
                                    className="px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                                >
                                    View more
                                </button></td>
                            </tr>
                            
                            <tr>
                                <td className='py-3'>
                                    <div class="flex items-center space-x-4">
                                        <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="" />
                                        <div class="font-medium dark:text-white">
                                            <div>Jese Leos</div>
                                            <div class="text-sm text-gray-500 dark:text-gray-400">Female, 15 years</div>
                                        </div>
                                    </div>
                                </td>
                                <td>2023/02/22</td>
                                <td><button
                                    type="button"
                                    disabled="true"
                                    className="px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                                >
                                    Bir Hospital
                                </button></td>
                                <td><button
                                    type="button"
                                    disabled="true"
                                    className="px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                                >
                                    View more
                                </button></td>
                            </tr>
                            <tr>
                                <td className='py-3'>
                                    <div class="flex items-center space-x-4">
                                        <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="" />
                                        <div class="font-medium dark:text-white">
                                            <div>Jese Leos</div>
                                            <div class="text-sm text-gray-500 dark:text-gray-400">Female, 15 years</div>
                                        </div>
                                    </div>
                                </td>
                                <td>2023/02/22</td>
                                <td><button
                                    type="button"
                                    disabled="true"
                                    className="px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                                >
                                    Bir Hospital
                                </button></td>
                                <td><button
                                    type="button"
                                    disabled="true"
                                    className="px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                                >
                                    View more
                                </button></td>
                            </tr>
                        </tbody>
                        <div className='flex mt-5'>
                                 <svg data-accordion-icon class="w-12 h-12 text-eswasthyaprim " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </div>
                    </table>
                </div> */}
                {/* </div> */}

            </div>
        </div>
    </>
    )
}

export default DoctorInfo;