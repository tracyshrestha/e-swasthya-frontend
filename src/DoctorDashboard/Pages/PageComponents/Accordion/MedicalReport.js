import { useEffect } from "react";
import { Accordion } from 'flowbite';

const MedicalReport = () => {

    useEffect(() => {
        const accordionItems = [
            {
                id: 'accordion-example-heading-4',
                triggerEl: document.querySelector('#accordion-example-heading-4'),
                targetEl: document.querySelector('#accordion-example-body-4'),
                active: true
            },
            {
                id: 'accordion-example-heading-5',
                triggerEl: document.querySelector('#accordion-example-heading-5'),
                targetEl: document.querySelector('#accordion-example-body-5'),
                active: true
            },
        ]
        const options = {
            alwaysOpen: false,
            activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
            inactiveClasses: 'text-gray-500 dark:text-gray-400'
        }
        const accordion = new Accordion(accordionItems, options);
    }, [])

    return (
        <div className="w-full">
            <h2 id="accordion-example-heading-4" >
                <button type="button" class="flex w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white items-center justify-between  p-5 font-medium text-left text-gray-500" aria-expanded="false" aria-controls="accordion-example-body-3">
                    <span>Brain - MRI</span>
                    <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-example-body-4" class="hidden" aria-labelledby="accordion-example-heading-4">
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                            <div class="flex items-center space-x-4 mb-2">
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                         Date : 2022/02/1
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Report Description</label>
                        <textarea rows="4"  disabled class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Components of the pathology report include location of the operative procedure (e.g. brain, frontal lobe), tumor type (e.g. glioblastoma), tumor grading (grade IV), and specific markers tested by immunohistochemistry (e.g. GFAP expression). Molecular genetic testing has been increasing applied to brain tumors, and includes alterations in specific genes (EGFR, IDH1, MGMT).</textarea>
                       <a href="https://asset.cloudinary.com/dwo9yx1r8/7bd4b05d361b58778285cbcd5a9942a9" target="_blank"> <button
                                    type="button"
                                    
                                    className="mt-5 px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                                >
                                    View Report
                         </button></a>
                    </div>
                </div>
            </div>
            <h2 id="accordion-example-heading-5" >
                <button type="button" class="flex w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white items-center justify-between  p-5 font-medium text-left text-gray-500" aria-expanded="false" aria-controls="accordion-example-body-5">
                    <span>Blood Report</span>
                    <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-example-body-5" class="hidden" aria-labelledby="accordion-example-heading-5">
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                            <div class="flex items-center space-x-4 mb-2">
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                         Date : 2022/02/1
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Report Description</label>
                        <textarea rows="4"  disabled class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Components of the pathology report include location of the operative procedure (e.g. brain, frontal lobe), tumor type (e.g. glioblastoma), tumor grading (grade IV), and specific markers tested by immunohistochemistry (e.g. GFAP expression). Molecular genetic testing has been increasing applied to brain tumors, and includes alterations in specific genes (EGFR, IDH1, MGMT).</textarea>
                       <a href="https://asset.cloudinary.com/dwo9yx1r8/7bd4b05d361b58778285cbcd5a9942a9" target="_blank"> <button
                                    type="button"
                                    
                                    className="mt-5 px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                                >
                                    View Report
                         </button></a>
                    </div>
                </div>
            </div>
           </div>
   
    )
}

export default MedicalReport;