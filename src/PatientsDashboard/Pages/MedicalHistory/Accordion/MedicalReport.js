import { useEffect } from "react";
import { Accordion } from 'flowbite';
import uuid from "react-uuid";

const MedicalReport = ({ Reports}) => {

    const onView = (id) => {
        let documentView = document.getElementById(`${id}-body`);
        documentView.classList.length === 1 ? documentView.classList.remove("hidden") : documentView.classList.add("hidden");
    }

  

    return (
        <div className="w-full">

            {
               Reports?.length !== 0 ? ( Reports?.map((ele, key) => {
                    return (
                        <>
                            <h2 key={key} id={`${ele?.id}`} >
                                <button  onClick={() => onView(ele?.id)} type="button" class="flex w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white items-center justify-between  p-5 font-medium text-left text-gray-500" aria-expanded="false" aria-controls="accordion-example-body-3">
                                    <span>{ele?.testName} - {ele.testType}</span>
                                    <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id={`${ele?.id}-body`} class="hidden" aria-labelledby="accordion-example-heading-4">
                                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="relative">
                                            <div class="flex items-center space-x-4 mb-2">
                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        Date : {ele.testDate}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative mt-2">
                                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Report Description</label>
                                        <textarea rows="4" disabled class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={ele?.description}></textarea>
                                        <a href={ele.imagePath} target="_blank"> <button
                                            type="button"

                                            className="mt-5 px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                                        >
                                            View Report
                                        </button></a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })) : <div class="text-base text-center font-semibold">No Medical record</div>
            }
        </div>

    )
}

export default MedicalReport;