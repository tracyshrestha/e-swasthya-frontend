import { Modal } from "flowbite"
import { useContext } from "react";
import { RiMedicineBottleFill } from "react-icons/ri";
import { HistoryContext } from "../HistoryState/HistoryState";

const AddHistoryModal = ({ patientsInformation }) => {

    const { onClose, Drug, Report, Diagnosis } = useContext(HistoryContext)

    return (
        <div id="historyModal" tabindex="-1" aria-hidden="true" class=" backdrop-blur-sm bg-gray/30 flex hidden items-center justify-center h-screen fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex justify-between p-4 info flex items-center bg-eswasthyaprim text-white p-3">
                        <h3 class="flex text-xl font-bold text-white-900">
                            <span>Confirmation to add medical history</span>
                        </h3>

                        <button onClick={onClose} type="button" class="bg-transparent text-white-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div class="p-6 space-y-6">


                        <div className='p-5 h-[500px] overflow-scroll '>

                            <div class="pl-5 pr-5 pb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                <div className="grid sm:grid-col-1 md:grid-cols-2 gap-3 mt-4">
                                    <div className='detail mb-6'>
                                        <p class="text-sm  mt-4 text-gray-800 truncate dark:text-gray-400">
                                            <span className='font-bold'>Patient Name: </span>{patientsInformation?.firstName} {patientsInformation?.lastName}
                                        </p>
                                        <p class="text-sm  text-gray-800 truncate dark:text-gray-400">
                                            <span className='font-bold'>Age:</span> {patientsInformation?.age}
                                            <span className='font-bold ml-5'>Sex:</span> {patientsInformation?.gender}
                                        </p>
                                        <p class="text-sm  text-gray-800 truncate dark:text-gray-400">
                                            <span className='font-bold'>Location:</span> {patientsInformation?.address}
                                            <br />{patientsInformation?.municipalityName}
                                        </p>
                                    </div>
                                    <div className='detail mb-5'>
                                        <p class="text-sm  mt-4 text-gray-800 truncate dark:text-gray-400">
                                            <span className='font-bold'>Hospital: </span>{patientsInformation?.AppointmentDetails.hospitalName}
                                        </p>
                                        <p class="text-sm  text-gray-800 truncate dark:text-gray-400">
                                            <span className='font-bold'>Date: </span> 2022/12/02
                                        </p>
                                        <p class="text-sm  text-gray-800 truncate dark:text-gray-400">
                                            <span className='font-bold'>Appointment id :</span> #EWAS0{patientsInformation?.AppointmentDetails?.appointmentId}
                                        </p>
                                    </div>

                                    <div className="relative pb-6">
                                        <div className="grid grid-cols-2 pb-2">
                                            <div className=" text-left  text-gray-400 ">
                                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Diagonsis</label>
                                                {Diagnosis?.diagonsis}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative text-gray-400 pb-6">
                                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Disease type</label>
                                        {Diagnosis?.diseaseType}
                                    </div>
                                </div>
                                <div className="relative mt-2 mb-2">
                                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Clinical Description</label>
                                    {Diagnosis?.diagonsisNote}
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className='pt-5 pb-5 '>
                                        <p class="text-xl pb-6 font-medium text-gray-900 truncate dark:text-white">
                                            Pescribed Medication
                                        </p>

                                        <ol class="relative border-l border-gray-200 dark:border-gray-700">

                                            {

                                                Drug.length != 0 ? Drug?.map((ele) => {
                                                    return (
                                                        <li key={ele.id} class="mb-8 ml-4">
                                                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white"><button
                                                                type="button"
                                                                disabled="true"
                                                                className="px-5 py-2 md:px-2 md:text-xs text-sm rounded-md text-white bg-[#42ADF0]"
                                                            >
                                                                {ele.DrugName}
                                                            </button></h3>
                                                            <time class="mb-1 mr-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dosage : {ele.Dosage} Mg</time>
                                                            <br />
                                                            <time class="mb-1 text-sm font-normal leading-none text-gray-800 ">Duration :  {ele.Duration} days</time>
                                                            <br />
                                                            <time class="mb-1 text-sm font-normal leading-none text-gray-800 ">Frequency : {ele.Frequency}</time>

                                                        </li>
                                                    )
                                                }) : <h1 class="mb-1 text-sm font-normal  text-gray-800 ">No drugs prescribed</h1>
                                            }

                                        </ol>
                                    </div>
                                    <div className='pt-5 pb-5 '>
                                        <p class="text-xl pb-6 font-medium text-gray-900 truncate dark:text-white">
                                            Medical Reports
                                        </p>
                                        <ol class="relative border-l border-gray-200 dark:border-gray-700">
                                            {
                                              Report.length != 0 ? Report.map((ele) => {
                                                    return (
                                                        <li key={ele.id} class="mb-8 ml-4">
                                                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white"><button
                                                                type="button"
                                                                disabled="true"
                                                                className="px-5 py-2 md:px-2 md:text-xs text-sm rounded-md text-white bg-[#42ADF0]"
                                                            >
                                                                {ele?.ReportTitle}
                                                            </button></h3>
                                                            <time class="mb-1 mr-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Type: {ele?.ReportType}</time>
                                                            <br />
                                                            <a href={`${ele.setPreviewImage}`} target="_blank" className="mb-1 text-sm font-normal leading-none text-blue-800">View report</a>
                                                        </li>
                                                    )
                                                }) : <h1 class="mb-1 text-sm font-normal  text-gray-800 ">No report data</h1>
                                            } 
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button type="button" class="text-white bg-[#42ADF0]  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add history</button>
                        <button type="button" onClick={onClose} class="text-gray-500 bg-white focus:outline-none  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddHistoryModal;