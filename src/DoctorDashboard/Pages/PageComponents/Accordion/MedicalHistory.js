import { useEffect } from "react";
import { Accordion } from 'flowbite';

const MedicalHistory = () => {

    useEffect(() => {
        const accordionItems = [
            {
                id: 'accordion-example-heading-4',
                triggerEl: document.querySelector('#accordion-example-heading-4'),
                targetEl: document.querySelector('#accordion-example-body-4'),
                active: true
            },
            {
                id: 'accordion-example-heading-6',
                triggerEl: document.querySelector('#accordion-example-heading-6'),
                targetEl: document.querySelector('#accordion-example-body-6'),
                active: false
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
                    <span>Allergic Rhinitis - 2020/12/05</span>
                    <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-example-body-4" class="hidden" aria-labelledby="accordion-example-heading-4">
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-3">
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
                                        ENT Surgeon , DM
                                    </p>
                                </div>
                            </div>
                            <p class="text-sm  mt-4 text-gray-800 truncate dark:text-gray-400">
                                            <span className='font-bold'>Hospital: </span>Patan hospital
                            </p>
                        </div>
                        <div className="relative">
                            <label htmlfor="role" class="block mb-2 text-sm  text-gray-400 dark:text-white">Prescripted drugs</label>
                            <div className="grid grid-cols-2 gap-2">
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
                                    Paracetamol
                                </button>
                                <button
                                    type="button"
                                    disabled="true"
                                    className="px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                                >
                                    Clindyamicin
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Clinical Description</label>
                        <textarea rows="4"  disabled class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Allergic rhinitis is inflammation of the inside of the nose caused by an allergen, such as pollen, dust, mould, or flakes of skin from certain animals</textarea>
                        <button
                                    type="button"
                                    disabled="true"
                                    className="mt-5 px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                                >
                                    View More
                         </button>
                    </div>
                </div>
            </div>
            <h2 id="accordion-example-heading-6" >
                <button type="button" class="flex w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white items-center justify-between  p-5 font-medium text-left text-gray-500" aria-expanded="false" aria-controls="accordion-example-body-3">
                    <span>Acne Vulgaris - 2020/12/05</span>
                    <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-example-body-6" class="hidden" aria-labelledby="accordion-example-heading-6">
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-3">
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
                                        Dermatologist , MD 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <label htmlfor="role" class="block mb-2 text-sm  text-gray-400 dark:text-white">Prescripted drugs</label>
                            <div className="grid grid-cols-2 gap-2">
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
                                    Paracetamol
                                </button>
                                <button
                                    type="button"
                                    className="px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                                >
                                    Clindyamicin
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Clinical Description</label>
                        <textarea rows="4"  disabled class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Allergic rhinitis is inflammation of the inside of the nose caused by an allergen, such as pollen, dust, mould, or flakes of skin from certain animals</textarea>
                        <button
                                    type="button"
                                    className="mt-5 px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                                >
                                    View More
                         </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedicalHistory;