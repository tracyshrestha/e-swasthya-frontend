import { BsFillPersonVcardFill } from 'react-icons/bs';
import { RiMedicineBottleFill } from 'react-icons/ri';
import { MdVaccines } from 'react-icons/md'
import Provmap6 from "./Provmap"
import { useEffect } from 'react';
import Chartspie from '../Chart/PieChart';



import {GrMap} from 'react-icons/gr'
import  {LiaStethoscopeSolid} from 'react-icons/lia'






const Prov6 = () => {
    return (
        <>
        <div className="h-fit  overflow-hidden rounded-sm border-[2px] border-[#f8f8f8] bg-white shadow-xl ">
                <div className="info flex items-center bg-eswasthyaprim text-white p-3">
                    <span className='text-2xl mr-2'><RiMedicineBottleFill /></span> General Information
                </div>

                <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1'>
                    <div class="relative m-3">
                        <div class=" overflow-scroll p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Filters</h5>
                            <div className='grid grid-cols-3 gap-4 sm:grid-cols-2'>
                                <div className='relative'>
                                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="US" selected>Drug use</option>
                                        <option value="CA">Immunization</option>
                                        <option value="FR">Diseases</option>
                                    </select>
                                </div>
                                <div className='relative'>
                                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="US" selected>Antibiotics</option>
                                        <option value="CA">Analgesics</option>
                                        <option value="FR">Antiarrhythmics</option>
                                        <option value="DE">Antidepressants</option>
                                        <option value="DE">Others</option>
                                    </select>
                                </div>
                                <div className='relative'>
                                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="US" selected>Antibiotics</option>
                                        <option value="CA">Analgesics</option>
                                        <option value="FR">Antiarrhythmics</option>
                                        <option value="DE">Antidepressants</option>
                                        <option value="DE">Others</option>
                                    </select>
                                </div>
                                <button type="button" class=" h-[40px] mt-6 w-[100px] py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200">Apply</button>
                            </div>
                        </div>
                    </div>

                    <div class="relative m-3">
                    <div className='grid grid-cols-2 gap-2 p-3'>
                                <div class="w-full max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow">

                                    <div className='grid grid-cols-1'>
                                        <div class="flex flex-col pl-5 pb-8">
                                            <h5 class="mb-1 text-lg align-left font-bold text-gray-600">District Name</h5>
                                            <h5 class="mb-1 text-2xl align-left font-bold text-gray-900">Kathmandu</h5>
                                        </div>
                                    </div>

                                </div>
                                <div class="w-full h-fit max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow">

                                    <div className='grid grid-cols-1'>
                                        <div class="flex  col-span-2 flex-col pl-5 pb-5">

                                            <h5 class="mb-1 text-xl align-left font-bold text-gray-900">Total Count</h5>
                                            <h5 class="mb-1 text-5xl align-left font-bold text-gray-900">48</h5>

                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>


                </div>
                
            </div>

            <div className="w-full bg-metal mx-auto grid lg:grid-cols-2 lg:grid-flow-col gap-2 md:grid-col-1">

                <div className="h-[60%] overflow-hidden rounded-sm border-[2px] border-[#f8f8f8] bg-white shadow-xl ">
                    <div className="info flex items-center bg-eswasthyaprim text-white p-3">
                        <span className='text-2xl mr-2'><RiMedicineBottleFill /></span> Karnali pradesh
                    </div>
                    <div className=" overflow-hidden relative">
                        <Provmap6 />
                    </div>
                </div>

                <div className="rounded-sm mt-[-12%] border-[2px] border-[#f8f8f8] bg-white shadow-xl">
                    <div className="info flex items-center bg-eswasthyaprim text-white p-3">
                        <span className='text-2xl mr-2'><BsFillPersonVcardFill /></span> Data filtering
                    </div>
                    <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Municipality List
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Count
                                        </th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Gokarneshwor Urban Municipality
                                        </th>
                                        <td class="px-6 py-4">
                                            10
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                           Kathmandu Metropolitan City
                                        </th>
                                        <td class="px-6 py-4">
                                            20
                                        </td>
                                      
                                    </tr>
                                    <tr class="bg-white dark:bg-gray-800">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                          Kageshwori Manahara Urban Municipality
                                        </th>
                                        <td class="px-6 py-4">
                                            05
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

             <div className="rounded-sm mt-6 ">
                    <div className="info  flex items-center bg-eswasthyaprim text-white p-3">
                        <span className='text-2xl mr-2'><BsFillPersonVcardFill /></span> Graphical Visualization
                    </div>
                    
                        <Chartspie />
                
                </div>

               
                </div>
            </div>

            
        </>
    )
}


export default Prov6;