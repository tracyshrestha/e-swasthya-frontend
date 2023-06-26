import { BsFillPersonVcardFill } from 'react-icons/bs'
import { RiMedicineBottleFill } from 'react-icons/ri'
import { MdVaccines } from 'react-icons/md'
import { FaWeight } from 'react-icons/fa'

import { AuthContext } from '../../../Store/UserState'
import { useContext,useState ,useEffect} from 'react'
import { PatientContext } from '../../PatientGlobalState'
import axios from 'axios';


const PatientsInfo = () => {
     const {userInformation,getProperty} = useContext(PatientContext)
     
     return (
       
        <div className="w-full h-max bg-metal mx-auto grid lg:grid-rows-2 lg:grid-flow-col gap-2 md:grid-col-1">
            <div className="lg:row-span-2 rounded-sm  border-[2px] border-[#f8f8f8] bg-white shadow-xl">
                <div className="info flex items-center bg-eswasthyaprim text-white p-3">
                    <span className='text-2xl mr-2'><BsFillPersonVcardFill /></span> General information
                </div>

                <div className="grid grid-cols-2 pl-5 pr-5 mt-2 grid-flow-col ">
                    <div className="info p-1 pb-3 row-span-2">
                        <img class="lg:w-40 lg:h-40 w-15 h-15 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                    </div>
                    <div className="info p-1">
                        <span class="block">{userInformation.firstName} {userInformation.lastName}</span>
                        <span class="block">{userInformation.email}</span>
                    </div>
                    <div className="info p-1">
                        <h1 class="text-gray-500" >Birth Date</h1>
                        <span class="text-gray-900">{userInformation.dateOfBirth} ({userInformation.age + " years"})</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 pl-5 pr-5  pb-3">
                    <div className="info p-1">
                        <span class="text-gray-500 block">Health ID</span>
                        <button class="rounded-md h-10 mt-1 px-5 text-lg bg-slate-200 text-eswasthya-blue">{userInformation.medicalRecordNumber}</button>
                    </div>
                    <div className="info p-1">
                        <h1 class="text-gray-500" >Gender</h1>
                        <button class="rounded-md h-10 mt-1 px-5 text-lg bg-slate-200 text-eswasthya-blue">{userInformation.gender}</button>
                    </div>
                </div>
                <div className="grid grid-cols-2 pl-5 pr-5  pb-3">
                    <div className="info p-1">
                        <span class="block">Blood group</span>
                        <button class="rounded-md h-10 mt-1 px-5 text-lg bg-slate-200 text-eswasthya-blue">{userInformation.bloodGroup}</button>
                    </div>
                    <div className="info p-1">
                        <h1 class="text-gray-500" >Weight</h1>
                        <span class="text-gray-900">{userInformation.weight} kg</span>
                    </div>
                </div>
                <div className="grid grid-cols-2  pl-5 pr-5  pb-3">
                    <div className="info p-1">
                        <span class="block">Tele no</span>
                        <span class="text-gray-900">+977-{userInformation.phoneNumber}</span>
                    </div>
                    <div className="info p-1">
                        <h1 class="text-gray-500" >Height</h1>
                        <span class="text-gray-900">{userInformation.height} Ft</span>
                    </div>
                </div>
                <div className="info mt-3 flex items-center bg-eswasthyaprim text-white p-3">
                    <span className='text-2xl mr-2'><BsFillPersonVcardFill /></span> Allergies
                </div>

                <div class="relative">
                    <table class="w-full text-sm text-left text-gray-500 ">
                        <thead class="text-sm text-gray-400 ">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Drug Allergies
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                           
                           
             
                            <tr class="bg-white">
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <div class="flex">
                                        Clindamycin <div className="h-4 w-4 ml-4 rounded-full bg-[#dd5a09]"></div>
                                    </div>

                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <div class="flex">
                                        Clindamycin <div className="h-4 w-4 ml-4 rounded-full bg-[#dd5a09]"></div>
                                    </div>

                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <div class="flex">
                                        Clindamycin <div className="h-4 w-4 ml-4 rounded-full bg-[#dd5a09]"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="bg-white">
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <div class="flex">
                                        Clindamycin <div className="h-4 w-4 ml-4 rounded-full bg-[#dd5a09]"></div>
                                    </div>

                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <div class="flex">
                                        Clindamycin <div className="h-4 w-4 ml-4 rounded-full bg-[#dd5a09]"></div>
                                    </div>

                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <div class="flex">
                                        Clindamycin <div className="h-4 w-4 ml-4 rounded-full bg-[#dd5a09]"></div>
                                    </div>
                                </td>
                            </tr>
                
                        </tbody>
                    </table>
                    <hr/>
                    <div className='flex justify-center gap-5 py-4'>
                            <span className="h-4 w-4 rounded-full  bg-[#dd5a09]"/>Severe
                            <span className="h-4 w-4 rounded-full bg-[#eaab1e]"/>Moderate
                            <span className="h-4 w-4  rounded-full bg-[#f6ddbf]"/>Mild
                    </div>
                </div>

            </div>
            <div className="lg:col-span-12 rounded-sm border-[2px] border-[#f8f8f8] bg-white shadow-xl ">
                <div className="info flex items-center bg-eswasthyaprim text-white p-3">
                    <span className='text-2xl mr-2'><RiMedicineBottleFill /></span> Medication information
                </div>
                <div className="grid grid-cols-1 pl-7 pr-5 overflow-scroll">
                    <table className="mt-4">
                        <thead>
                            <tr className='text-left'>
                                <th>Generic Name</th>
                                <th >Type</th>
                                <th>Strength</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='py-3'>Azithromycin</td>
                                <td>Antibiotics</td>
                                <td>500 Mg</td>
                                <td className='text-xs'>2023/02/22 - 2023/02/22</td>
                                <td><button type="button" class=" py-2 text-sm w-[90px] font-medium text-center text-white bg-blue-400 rounded-lg  focus:outline-none">Active</button></td>
                            </tr>
                            <tr>
                                <td className='py-3'>Isotretinoin</td>
                                <td>Retinoids</td>
                                <td>10 Mg</td>
                                <td className='text-xs'>2023/02/22 - 2023/02/22</td>
                                <td><button type="button" class="py-2 text-sm w-[90px] font-medium text-center text-blue-300 border-2 border-blue-300 bg-white rounded-lg  focus:outline-none">Completed</button></td>
                            </tr>
                            <tr>
                                <td className='py-3'>Amoxicillin</td>
                                <td>Antibiotics</td>
                                <td>20 Mg</td>
                                <td className='text-xs'>2023/02/22 - 2023/02/22</td>
                                <td><button type="button" class="py-2 text-sm w-[90px] font-medium text-center text-blue-300 border-2 border-blue-300 bg-white rounded-lg  focus:outline-none">Completed</button></td>
                            </tr>
                            <tr>
                                <td className='py-3'>Clindamycin</td>
                                <td>Antibiotics</td>
                                <td>50 Mg</td>
                                <td className='text-xs'>2023/02/22 - 2023/02/22</td>
                                <td><button type="button" class="py-2 text-sm w-[90px] font-medium text-center text-blue-300 border-2 border-blue-300 bg-white rounded-lg  focus:outline-none">Completed</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="lg:col-span-12 rounded-sm border-[2px] border-[#f8f8f8] bg-white shadow-xl">
                <div className="info flex items-center bg-eswasthyaprim text-white p-3">
                    <span className='text-2xl mr-2'><MdVaccines /></span>Diagnoses
                </div>
                <table class="w-full text-sm text-left text-gray-500 ">
                        <thead class="text-sm text-gray-400 border-t">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-lg">
                                    Chronic Diagnoses
                                </th>
                                <th scope="col" class="px-6 py-3 text-lg">
                                    Acute Diagnoses
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white ">
                                <td class="px-6 py-2 font-medium text-gray-900">
                                     Diabetes
                                </td>
                                <td class="px-6 py-2 font-medium text-gray-900">
                                      Broken bone
                                </td> 
                            </tr>
                            <tr class="bg-white">
                                <td class="px-6 py-2  font-medium text-gray-900">
                                     Hypertension
                                </td>
                                <td class="px-6 py-2 font-medium text-gray-900">
                                      Bronchitis
                                </td> 
                            </tr>
                            <tr class="bg-white">
                                <td class="px-6 py-2 font-medium text-gray-900">
                                     Reumathoid arthritis
                                </td>
                                <td class="px-6 py-2 font-medium text-gray-900">
                                      Respiratory infection
                                </td> 
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    )
}

export default PatientsInfo;