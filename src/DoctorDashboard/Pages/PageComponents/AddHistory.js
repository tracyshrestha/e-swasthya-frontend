import { BsFillPersonVcardFill } from 'react-icons/bs'
import { RiMedicineBottleFill } from 'react-icons/ri'
import { MdVaccines } from 'react-icons/md'
import { useContext } from 'react'
import MedicalReport from './Accordion/MedicalReport'
import PescribeDrug from './Accordion/PescribeDrug'
import { HistoryContext } from './HistoryState/HistoryState'
import AddReport from './Accordion/AddReport'


const AddHistory = () => {
    const {AddnewDrug,AddnewReport} = useContext(HistoryContext);
    return (
        <>
            <div className="w-full  bg-metal mx-auto grid lg:grid-rows-2 lg:grid-flow-col gap-2 md:grid-col-1">
                <div className="lg:row-span-2  h-max rounded-sm border-[2px] border-[#f8f8f8] bg-white shadow-xl ">

                    <div className="info flex items-center bg-eswasthyaprim text-white p-3">
                        <span className='text-2xl mr-2'><RiMedicineBottleFill /></span> Fill in Medical record
                    </div>

                    <div className=' grid md:grid-cols-1 sm:grid-cols-1  lg:grid-cols-2'>


                        <div className='p-5'>

                            <div class="w-3/2 pl-5 pr-5 pb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                <div className="grid sm:grid-col-1 md:grid-cols-2 gap-3 mt-4">
                                    <div className='detail'>
                                        <p class="text-sm  mt-4 text-gray-800 truncate dark:text-gray-400">
                                            <span className='font-bold'>Patient Name: </span>Srijan kc
                                        </p>
                                        <p class="text-sm  text-gray-800 truncate dark:text-gray-400">
                                            <span className='font-bold'>Age:</span> 23
                                            <span className='font-bold ml-5'>Sex:</span> Male
                                        </p>
                                        <p class="text-sm  text-gray-800 truncate dark:text-gray-400">
                                            <span className='font-bold'>Location:</span> Manbhawan,lalitpur
                                        </p>
                                    </div>
                                    <div className='detail mb-5'>
                                        <p class="text-sm  mt-4 text-gray-800 truncate dark:text-gray-400">
                                            <span className='font-bold'>Hospital: </span>Patan hospital
                                        </p>
                                        <p class="text-sm  text-gray-800 truncate dark:text-gray-400">
                                            <span className='font-bold'>Date: </span> 2022/12/02
                                        </p>
                                        <p class="text-sm  text-gray-800 truncate dark:text-gray-400">
                                            <span className='font-bold'>Appointment id :</span> #EWAS2019
                                        </p>
                                    </div>

                                    <div className="relative pb-6">
                                        <div className="grid grid-cols-2 pb-2">
                                            <div className=" text-left  text-gray-400 ">
                                                <h1 className="sm:text-[15px] text-[12px]  relative text-gray-400">
                                                    Diagnosis
                                                </h1>
                                            </div>
                                        </div>
                                        <input
                                            required
                                            type="text"
                                            id="email-address-icon"
                                            class=" h-[50px] placeholder-gray-300 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                                            placeholder="diabetes mellitus"
                                        ></input>
                                    </div>
                                    <div className="relative pb-6">
                                        <div className="grid grid-cols-2 pb-2">
                                            <div className=" text-left  text-gray-400 ">
                                                <h1 className="sm:text-[15px] text-[12px]  relative text-gray-400">
                                                    Select Disease
                                                </h1>
                                            </div>
                                        </div>
                                        <select id="provinces" class="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="Diabetes">Diabetes</option>
                                            <option value="Brain Tumor">Brain Tumor</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="relative mt-2">
                                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Clinical Description</label>
                                    <textarea rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                                </div>
                            </div>
                            <div className='mt-5 pb-5'>

                                <div class="p-5  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                    <p class="text-xl p-3 flex font-medium text-gray-900 truncate dark:text-white">
                                        Medication Details <button onClick={AddnewReport} type="button" class="ml-2 flex items-center justify-center text-white bg-[#42ADF0]  rounded-full w-6 h-6">
                                            <svg aria-hidden="true" class="w-8 h-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                            <span class="sr-only">Open actions menu</span>
                                        </button>
                                    </p>
                                    <AddReport/>
                                </div>
                            </div>

                        </div>


                        <div className='p-5'>

                            <div class="w-full p-5  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <p class="text-xl p-3 mb-5 flex font-medium text-gray-900 truncate dark:text-white">
                                    Prescribe Drugs  <button onClick={AddnewDrug} type="button" class="ml-2 flex items-center justify-center text-white bg-[#42ADF0]  rounded-full w-6 h-6">
                                        <svg aria-hidden="true" class="w-8 h-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                        <span class="sr-only">Open actions menu</span>
                                    </button>
                                </p>
                                <PescribeDrug />
                            </div>
                            <div className='p-5'>
                                <p class="text-xl p-3 font-medium text-gray-900 truncate dark:text-white">
                                    Medication Details
                                </p>
                                <div class="w-full p-5  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <ol class="relative border-l border-gray-200 dark:border-gray-700">
                                        <li class="mb-8 ml-4">
                                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white"><button
                                                type="button"
                                                disabled="true"
                                                className="px-5 py-2 md:px-2 md:text-xs text-sm rounded-md text-white bg-[#42ADF0]"
                                            >
                                                Clindyamicin
                                            </button></h3>
                                            <time class="mb-1 mr-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dosage : 500 Mg</time>
                                            <br />
                                            <time class="mb-1 text-sm font-normal leading-none text-gray-800 ">Status : Active</time>
                                            <br />
                                            <time class="mb-1 text-sm font-normal leading-none text-gray-800 ">Frequency : 2 times a day</time>

                                        </li>
                                        <li class="ml-4">
                                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white"><button
                                                type="button"
                                                disabled="true"
                                                className="px-5 py-2 md:px-2 md:text-xs text-sm rounded-md text-white bg-[#42ADF0]"
                                            >
                                                Azithromycin
                                            </button></h3>
                                            <time class="mb-1 mr-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dosage : 500 Mg</time>
                                            <br />
                                            <time class="mb-1 text-sm font-normal leading-none text-gray-800 ">Status : Active</time>
                                            <br />
                                            <time class="mb-1 text-sm font-normal leading-none text-gray-800 ">Frequency : 2 times a day</time>

                                        </li>
                                    </ol>

                                </div>


                            </div>
                            <div class="float-right flex m-6 space-x-3 md:mt-6">
                                <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#42ADF0] rounded-lg  focus:ring-4 focus:outline-none ">Add record</a>
                                <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Cancel</a>
                            </div>

                        </div>


                    </div>

                </div>
            </div>

        </>
    )
}

export default AddHistory;