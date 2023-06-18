import { BsFillPersonVcardFill } from 'react-icons/bs'
import { RiMedicineBottleFill } from 'react-icons/ri'
import { MdVaccines } from 'react-icons/md'
import AddDetailsWidget from './PageComponents/AddDetailsWidget'
import MedicalHistory from './PageComponents/Accordion/MedicalHistory'
import MedicalReport from './PageComponents/Accordion/MedicalReport'

const ViewMedical = () => {
    return (
        <div className='h-max'>
            <AddDetailsWidget />
            <div className="w-full  bg-metal grid lg:grid-rows-2 ">
                <div className=" rounded-sm border-[2px] border-[#f8f8f8] bg-white shadow-xl ">

                    <div className="info flex items-center bg-eswasthyaprim text-white p-3">
                        <span className='text-2xl mr-2'><RiMedicineBottleFill /></span> General Information
                    </div>

                    <div className=' grid md:grid-cols-1 sm:grid-cols-1  lg:grid-cols-2'>
                        <div className='p-5'>
                            <p class="text-xl p-3 font-medium text-gray-900 truncate dark:text-white">
                                Diagonsis : Allergic Rhinitis
                            </p>
                            <div class="w-3/2 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                <div className="grid md:grid-cols-2 gap-3">

                                    <div className="relative">

                                        <div class="flex items-center space-x-4">
                                            <div class="flex-shrink-0">
                                                <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Dr Neil Sims
                                                </p>
                                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    Anesthesia , MD
                                                </p>
                                            </div>

                                        </div>
                                        <p class="text-sm  mt-4 text-gray-800 truncate dark:text-gray-400">
                                            <span className='font-bold'>Hospital: </span>Patan hospital
                                        </p>
                                        <p class="text-sm  text-gray-800 truncate dark:text-gray-400">
                                            <span className='font-bold'>Date: </span> 2022/12/02
                                        </p>
                                    </div>
                                    <div className="relative mt-5">
                                        <label htmlfor="role" class="block mb-2 text-sm  text-gray-400 dark:text-white">Prescripted drugs</label>
                                        <div className="grid  place-content-center  md:grid-cols-1 lg:grid-cols-2 grid-cols-1 gap-3">
                                        <button
                                            type="button"
                                            disabled="true"
                                            className="px-5 py-2 font-bold  md:px-2 md:text-xs text-sm rounded-md text-white bg-[#42ADF0]"
                                        >
                                            Azithromycin
                                        </button>
                                            <button
                                            type="button"
                                            disabled="true"
                                            className="px-5 py-2 font-bold md:px-2 md:text-xs text-sm rounded-md text-white bg-[#42ADF0]"
                                        >
                                            Clindyamicin
                                        </button>
                                        <button
                                            type="button"
                                            disabled="true"
                                            className="px-5 py-2 font-bold md:px-2 md:text-xs text-sm rounded-md text-white bg-[#42ADF0]"
                                        >
                                            Doxyclyine
                                        </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative mt-2">
                                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Clinical Description</label>
                                    <textarea rows="4" disabled class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Allergic rhinitis is inflammation of the inside of the nose caused by an allergen, such as pollen, dust, mould, or flakes of skin from certain animals</textarea>
                                </div>
                            </div>

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
                        <div className='pl-5 pb-5'>
                            <p class="text-xl p-3 font-medium text-gray-900 truncate dark:text-white">
                                Medical Reports
                            </p>
                            <div class="p-5  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <MedicalReport/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewMedical;