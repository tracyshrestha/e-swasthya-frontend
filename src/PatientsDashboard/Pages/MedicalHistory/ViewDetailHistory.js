
import { RiMedicineBottleFill } from 'react-icons/ri'


import MedicalReport from './Accordion/MedicalReport'

import { useContext, useEffect, useState } from 'react'

import { AuthContext } from '../../../Store/UserState'
import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios'


const ViewDetailHistory = () => {

    const { getStoredCookie } = useContext(AuthContext);

    const navigate = useNavigate();

    const GoBack = () => {
        navigate(-1);
    }


    const [AppointmentInformation, setAppointmentInformation] = useState();

    const [Reports, setReports] = useState();
    const [Drug, setDrug] = useState();

    const { AppointmentId } = useParams();

    useEffect(() => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}api/diagnosis/get-diagnosis-test-prescription/${ AppointmentId }`,
            headers: {
                'Authorization': `Bearer ${getStoredCookie("token")}`,
            },
        })
            .then((res) => {
                console.log(res);
                setReports(res?.data?.data?.testResultList);
                setDrug(res?.data?.data?.prescriptionList);
                setAppointmentInformation({
                    doctorName: res?.data?.data?.doctorDetail?.firstName + res?.data?.data?.doctorDetail?.lastName,
                    doctorSpecialization: res?.data?.data?.doctorDetail?.specialization,
                    Nmcno: res?.data?.data?.doctorDetail?.nmcLicenseNo,
                    description: res?.data?.data?.description,
                    date: res?.data?.data?.date,
                    patientsInformation: res?.data?.data?.patientDetail
                })
            })
            .catch((error) => console.log(error))
    }, [])

   

    return (
        <>
            <button  onClick={GoBack} type="button" class="mb-5 bg-[#72b4f5] text-white rounded-md  border-gray-100 py-2  px-3">
                <div class="flex flex-row align-middle">
                    <svg class="w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                    </svg>
                    <p class="ml-2">Go back</p>
                </div>
            </button>


            <div className="w-full bg-metal mx-auto grid lg:grid-rows-2 lg:grid-flow-col gap-2 md:grid-col-1">
                <div className="lg:row-span-2  h-max rounded-sm border-[2px] border-[#f8f8f8] bg-white shadow-xl ">
                    <div className="info flex items-center bg-eswasthyaprim text-white p-3">
                        <span className='text-2xl mr-2'><RiMedicineBottleFill /></span> General Information
                    </div>

                    <div className=' grid md:grid-cols-1 sm:grid-cols-1  lg:grid-cols-2'>
                        <div className='p-5'>
                            <p class="text-xl p-3 font-medium text-gray-900 truncate dark:text-white">
                                Diagonsis : Allergic Rhinitis
                            </p>
                            <div class="w-3/2 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                <div className="grid md:grid-cols-2 gap-3 mb-6">

                                    <div className="relative">

                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Patient name :  {AppointmentInformation?.patientsInformation?.firstName} {AppointmentInformation?.patientsInformation?.lastName}
                                                </p>
                                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    Medical no : {AppointmentInformation?.patientsInformation?.medicalRecordNumber}
                                                </p>
                                            </div>

                                        </div>
                                        <p class="text-sm  mt-4 text-gray-800 truncate dark:text-gray-400">
                                            <span className='font-bold'>Hospital: </span>Patan hospital
                                        </p>
                                        <p class="text-sm  text-gray-800 truncate dark:text-gray-400">
                                            <span className='font-bold'>Date: </span> {AppointmentInformation?.date}
                                        </p>
                                    </div>

                                    <div className="relative">

                                        <div class="flex items-center space-x-4">
                                            <div class="flex-shrink-0">
                                                <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Dr {AppointmentInformation?.doctorName}
                                                </p>
                                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    {AppointmentInformation?.doctorSpecialization} , MD
                                                </p>
                                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    NMC no : {AppointmentInformation?.Nmcno}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative mt-2">
                                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Clinical Description</label>
                                    <textarea rows="4" disabled class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={AppointmentInformation?.description}></textarea>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <p class="text-xl p-3 font-medium text-gray-900 truncate dark:text-white">
                                    Medical Reports
                                </p>
                                <div class="p-5  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <MedicalReport Reports={Reports} setReports={setReports} />
                                </div>
                            </div>

                        </div>


                        <div className='p-5'>
                            <p class="text-xl p-3 font-medium text-gray-900 truncate dark:text-white">
                                Medication Details
                            </p>
                            <div class="w-full p-5  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <ol class="relative border-l border-gray-200 dark:border-gray-700">
                                    {
                                        Drug?.map((ele, key) => {
                                            return (
                                                <li class="mb-8 ml-4">
                                                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white"><button
                                                        type="button"
                                                        disabled="true"
                                                        className="px-5 py-2 md:px-2 md:text-xs text-sm rounded-md text-white bg-[#42ADF0]"
                                                    >
                                                        {ele.medicineName}
                                                    </button></h3>
                                                    <time class="mb-1 mr-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dosage :{ele.dosageInUnit} Mg</time>
                                                    <br />
                                                    <time class="mb-1 mr-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">Duration :{ele.durationInDays} Days</time>
                                                    <br />
                                                    <time class="mb-1 mr-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">Frequency : {ele.frequencyPerDay} Days</time>
                                                    <br />
                                                    <time class="mb-1 mr-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">Start date : {ele.startDate}</time>
                                                    <br />
                                                    <time class="mb-1 text-sm font-normal leading-none text-gray-500 "><span className='text-gray-900'>Status</span> : Active</time>
                                                    <br />
                                                    <time class="mb-1 text-sm font-normal leading-none text-gray-700 ">Note: {ele.additionalNote}</time>


                                                </li>
                                            )
                                        })
                                    }
                                </ol>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ViewDetailHistory;