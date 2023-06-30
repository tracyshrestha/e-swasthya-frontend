import { BsFillPersonVcardFill } from 'react-icons/bs';
import { RiMedicineBottleFill } from 'react-icons/ri';
import { MdVaccines } from 'react-icons/md'
import Provmap6 from "./Provmap"
import { useEffect } from 'react';
import Chartspie from '../Chart/PieChart';





const Prov6 = () => {

    const onHoverr = (id) => {
        console.log(id);
        let a = document.getElementById(id);
        a.classList.remove("hidden");
    }



    return (
        <div className="w-full h-screen grid lg:grid-cols-2 md:grid-col-1 sm:grid-cols-2">

            <div className=" lg:w-[600px] h-fit overflow-hidden rounded-sm border-[2px] border-[#f8f8f8] bg-white shadow-xl ">
                <div className="info  bg-eswasthyaprim text-white p-3 text-lg">
                    Karnali Pradesh
                </div>
                
                <div className="relative grid grid-cols-1 pl-7 h-[400px]">
                    <Provmap6 />
                    
                </div>
                
                <div className=" mt-6 rounded-sm border-[2px] border-[#f8f8f8] bg-white shadow-xl ">
                    <div className="info flex  bg-eswasthyaprim text-white p-3 text-lg">
                        Municipality Datalist
                    </div>
                    <div className="relative">
                        <div class="relative">
                            <table class="w-full text-sm  text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Municipality Name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                             Data count
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                          Shankharapur Urban Municipality
                                        </th>
                                        <td class="px-9 py-4">
                                            01
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Tarkeshwor Urban Municipality
                                        </th>
                                        <td class="px-9 py-4">
                                            02
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                          Shankharapur Urban Municipality
                                        </th>
                                        <td class="px-9 py-4">
                                            03
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                         
                        </div>

                    </div>
                </div>
            </div>
            

            <div className="w-full rounded-sm border-[2px] border-[#f8f8f8] bg-white shadow-xl">
                <div className="info flex items-center bg-eswasthyaprim text-white p-3 text-lg">
                    General Information
                </div>


                <div class="relative m-3">
                    <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Filters</h5>
                        <div className='grid grid-cols-3 gap-4 sm-grid-cols-2'>
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
                            <button type="button" class=" h-[40px] mt-2 w-[100px] py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200">Apply</button>
                        </div>
                        <hr className='mt-5' />
                        <div className='relative'>
                            <div class="text-sm mt-5 text-gray-900 dark:text-gray-400">
                                District name :
                            </div>
                            <div class="text-sm mt-2 text-gray-900 dark:text-gray-400">
                                Total Count :
                            </div>
                        </div>
                    </div>
                    
                </div>




                
            </div>
        </div>
    )
}


export default Prov6;