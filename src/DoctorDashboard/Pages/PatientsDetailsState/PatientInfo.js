import { BsFillPersonVcardFill } from 'react-icons/bs'
import { RiMedicineBottleFill } from 'react-icons/ri'
import { MdVaccines } from 'react-icons/md'
import {TbVaccine} from 'react-icons/tb'



import VaccinationDetail from '../PageComponents/Accordion/VaccinationDetail'
import MedicalHistory from '../PageComponents/Accordion/MedicalHistory'
import AddDetailsWidget from '../PageComponents/AddDetailsWidget'

import { useContext } from 'react'
import { PatientDetailsContext } from './PatientDetailContext'

const PatientInfo = () => {
     
    const {patientsInformation} = useContext(PatientDetailsContext);
    return (
        <>
         <AddDetailsWidget patientsInformation={patientsInformation}/>
        <div className="w-full h-max bg-metal mx-auto grid lg:grid-rows-1 lg:grid-flow-col gap-2 md:grid-col-1">
        <div className="lg:row-span-2 rounded-sm  border-[2px] border-[#f8f8f8] bg-white shadow-xl">
            <div className="info flex items-center bg-eswasthyaprim text-white p-3">
                <span className='text-2xl mr-2'><BsFillPersonVcardFill /></span> Patients information
            </div>

            <div className="grid grid-cols-2 pl-5 pr-5 mt-2 grid-flow-col ">
                <div className="info p-1 pb-3 row-span-2">
                    <img class="md:w-36 md:h-36  w-20 h-20 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                </div>
                <div className="info p-1">
                    <span class="block">{patientsInformation?.firstName} {patientsInformation?.lastName}</span>
                    <span class="block">{patientsInformation?.email}</span>
                </div>
                <div className="info p-1">
                    <h1 class="text-gray-500" >Gender</h1>
                    <button disabled class="rounded-md h-10 mt-1 px-5 text-lg bg-slate-200 text-eswasthya-blue">{patientsInformation?.gender}</button>
                </div>

            </div>

            <div className="grid grid-cols-2 pl-5 pr-5  pb-3">
                <div className="info p-1">
                    <span class="text-gray-500 block">Weight</span>
                    <button disabled class="rounded-md h-10 mt-1 px-5 text-lg bg-slate-200 text-eswasthya-blue">{patientsInformation?.weight} kg</button>
                </div>
                <div className="info p-1">
                    <span class="block">Height</span>
                    <button disabled class="rounded-md h-10 mt-1 px-5 text-lg bg-slate-200 text-eswasthya-blue">{patientsInformation?.height} Ft</button>
                </div>

            </div>
            <div className="grid grid-cols-2 pl-5 pr-5  pb-3">

                <div className="info p-1">
                    <h1 class="text-gray-500" >Birth date</h1>
                    <span class="text-gray-900">{patientsInformation?.dateOfBirth} ({patientsInformation?.age} years) </span>
                </div>
                <div className="info p-1">
                    <h1 class="text-gray-500" >Blood Group</h1>
                    <span class="text-gray-900">{patientsInformation?.bloodGroup}</span>
                </div>
            </div>
            <div className="grid grid-cols-2 pl-5 pr-5  pb-3">
                <div className="info p-1">
                    <span class="block">Health Id</span>
                    <button disabled class="rounded-md h-10 mt-1 px-5 text-lg bg-slate-200 text-eswasthya-blue">{patientsInformation?.medicalRecordNumber} </button>
                </div>
                <div className="info p-1">
                    <h1 class="text-gray-500" >Citizenship no</h1>
                    <span class="text-gray-900">
                        {patientsInformation?.citizenshipNo}
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-2 pl-5 pr-5  pb-3">
                <div className="info p-1">
                    <span class="block">Tele no</span>
                    <span class="text-gray-900">+977-{patientsInformation?.phoneNumber}</span>
                </div>
                <div className="info p-1">
                    <h1 class="text-gray-500" >Location</h1>
                    <span class="text-gray-900">
                        {patientsInformation?.municipalityName} <br/>
                        {patientsInformation?.districtName.toLowerCase()} ,
                        {patientsInformation?.address}
                    </span>
                </div>
            </div>
            <div className="info mt-3 flex items-center bg-eswasthyaprim text-white p-3">
                <span className='text-2xl mr-2'><BsFillPersonVcardFill /></span> Allegric Drugs
            </div>

            <div class="relative m-4 p-2">
                <div className='grid grid-cols-3 gap-3'>
                    <button
                        type="button"
                        disabled="true"
                        className="px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                    >
                        Azithromycin
                    </button>
                    <button
                        type="button"
                        disabled="true"
                        className="px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                    >
                        Doxycycline
                    </button>

                </div>
            </div>
            <div className="info mt-6 flex items-center bg-eswasthyaprim text-white p-3">
                <span className='text-2xl mr-2'><TbVaccine /></span> Immunization Report
            </div>

            <div class="relative m-4 p-2">
                 <VaccinationDetail/>
            </div>

        </div>
        <div className="lg:col-span-12 rounded-sm border-[2px] border-[#f8f8f8] bg-white shadow-xl">
            <div className="info flex items-center bg-eswasthyaprim text-white p-3">
                <span className='text-2xl mr-2'><MdVaccines /></span> Medical History
            </div>
               <MedicalHistory/>
        </div>
    </div>
    </>
    )
}

export default PatientInfo;