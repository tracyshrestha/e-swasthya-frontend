import { useEffect, useState } from "react";
import { Accordion } from 'flowbite';

const PescribeDrug = () => {

    let InitialValue = {
        id: '',
        triggerEl: '',
        targetEl: '',
        active: false
    }
    const [Drug, setDrug] = useState('');
    const [AccordionValue, HandleAccordion] = useState([InitialValue]);



    useEffect(() => {
        const accordionItems = [
            {
                id: 'accordion-example-heading-45',
                triggerEl: document.querySelector('#accordion-example-heading-45'),
                targetEl: document.querySelector('#accordion-example-body-45'),
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
            <h2 id="accordion-example-heading-45" >
                <button type="button" class="flex w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white items-center justify-between  p-5 font-medium text-left text-gray-500" aria-expanded="false" aria-controls="accordion-example-body-3">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white"><button
                        type="button"
                        disabled="true"
                        className="px-5 py-2 md:px-2 md:text-xs text-sm rounded-md text-white bg-[#42ADF0]"
                    >
                        Clindyamicin
                    </button></h3>
                    <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-example-body-45" class="hidden" aria-labelledby="accordion-example-heading-4">
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="relative pb-6">

                            <div className=" mb-2 text-left  text-gray-400 ">
                                <h1 className="sm:text-[15px] text-[12px]  relative text-gray-400">
                                    Drug name
                                </h1>
                            </div>

                            <input
                                required
                                type="text"
                                id="email-address-icon"
                                class=" h-[50px] placeholder-gray-300 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                                placeholder="Azthromycin"
                            ></input>
                        </div>
                        <div className="relative pb-6">

                            <div className=" mb-2 text-left  text-gray-400 ">
                                <h1 className="sm:text-[15px] text-[12px]  relative text-gray-400">
                                    Dosage
                                </h1>
                            </div>

                            <input
                                required
                                type="number"
                                min={100}
                                step={100}
                                max={1000}
                                id="email-address-icon"
                                class=" h-[50px] placeholder-gray-300 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                                placeholder="500 Mg"
                            ></input>
                        </div>
                        <div className="relative pb-6">

                            <div className=" text-left  text-gray-400 ">
                                <h1 className=" mb-2 sm:text-[15px] text-[12px]  relative text-gray-400">
                                    Drug type
                                </h1>
                            </div>
                            <select id="provinces" class="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="Antibotics">Antibotics</option>
                                <option value="Retinoids">Retinoids</option>
                            </select>
                        </div>
                        <div className="relative mt-2">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea rows="3" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default PescribeDrug;