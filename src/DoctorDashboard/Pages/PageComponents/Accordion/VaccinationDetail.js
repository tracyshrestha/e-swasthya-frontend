import { useEffect } from "react";
import { Accordion } from 'flowbite';

const VaccinationDetail = () => {

    useEffect(() => {
        const accordionItems = [
            {
                id: 'accordion-example-heading-3',
                triggerEl: document.querySelector('#accordion-example-heading-3'),
                targetEl: document.querySelector('#accordion-example-body-3'),
                active: false
            }]
        const options = {
            alwaysOpen: false,
            activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
            inactiveClasses: 'text-gray-500 dark:text-gray-400'
        }
        const accordion = new Accordion(accordionItems, options);
    }, [])

    return (
        <div className="w-fit">
            <h2 id="accordion-example-heading-3">
                <button type="button" class="flex items-center justify-between  p-5 font-medium text-left text-gray-500" aria-expanded="false" aria-controls="accordion-example-body-3">
                    <span>AstraZeneca</span>
                    <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-example-body-3" class="hidden" aria-labelledby="accordion-example-heading-3">
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                            <label htmlfor="role" class="block mb-2 text-sm  text-gray-400 dark:text-white">Date</label>
                            <input
                                disabled
                                required
                                type="text"
                                id="email-address-icon"
                                class=" h-[50px] placeholder-gray-300 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                                placeholder="Reenter password"
                                value="2000/12/12"
                            ></input>
                        </div>
                        <div className="relative">
                            <label htmlfor="role" class="block mb-2 text-sm  text-gray-400 dark:text-white">Doage</label>
                            <input
                                disabled
                                required
                                type="text"
                                id="email-address-icon"
                                class=" h-[50px] placeholder-gray-300 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                                placeholder="Reenter password"
                                value="1"
                            ></input>
                        </div>
                    </div>
                </div>
            </div>
            <h2 id="accordion-example-heading-3">
                <button type="button" class="flex items-center justify-between  p-5 font-medium text-left text-gray-500" aria-expanded="false" aria-controls="accordion-example-body-3">
                    <span>Polio</span>
                    <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-example-body-3" class="hidden" aria-labelledby="accordion-example-heading-3">
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                            <label htmlfor="role" class="block mb-2 text-sm  text-gray-400 dark:text-white">Date</label>
                            <input
                                disabled
                                required
                                type="text"
                                id="email-address-icon"
                                class=" h-[50px] placeholder-gray-300 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                                placeholder="Reenter password"
                                value="2000/12/12"
                            ></input>
                        </div>
                        <div className="relative">
                            <label htmlfor="role" class="block mb-2 text-sm  text-gray-400 dark:text-white">Doage</label>
                            <input
                                disabled
                                required
                                type="text"
                                id="email-address-icon"
                                class=" h-[50px] placeholder-gray-300 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                                placeholder="Reenter password"
                                value="1"
                            ></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VaccinationDetail;