import { Accordion } from "flowbite";
import { useEffect } from "react";

const AccordionComponent = () => {
    useEffect(() => {
        const accordionItems = [
            {
                id: "accordion-example-heading-1",
                triggerEl: document.getElementById("accordion-example-heading-1"),
                targetEl: document.getElementById("accordion-example-body-1"),
                active: true,
            },
        ];
        const options = {
            alwaysOpen: true,
            activeClasses:
                "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
            inactiveClasses: "text-gray-500 dark:text-gray-400",
        };
        const accordion = new Accordion(accordionItems, options);
    }, []);


    return (
        <div>
            <h2 id="accordion-example-heading-1">
                <button
                    type="button"
                    class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-expanded="true"
                    aria-controls="accordion-example-body-1"
                >
                    <span>Patan Hospital</span>
                    <svg
                        data-accordion-icon
                        class="w-6 h-6  shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
            </h2>
            <div
                id="accordion-example-body-1"
                class="hidden"
                aria-labelledby="accordion-example-heading-1"
            >
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <div className="relative">
                        <div className="grid grid-cols-3">
                            <div className=" text-left text-gray-400 ">
                                <h1 className="sm:text-[15px] text-[12px] pb-2 relative text-gray-400">
                                    Choose hospital
                                </h1>
                                <select
                                    id="provinces"
                                    class="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value="Patan">Patan Hospital</option>
                                    <option value="Bir Hospital">Bir Hospital</option>
                                </select>
                            </div>
                            <div className="col-span-2 text-gray-400">
                                <h1 className="sm:text-[15px] text-[12px] pb-2 relative text-gray-400">
                                    Choose your Availability
                                </h1>
                                <div className="flex gap-2">
                                    <select
                                        id="provinces"
                                        class="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                    >
                                        <option value="Sun">Sun</option>
                                        <option value="Mon">Mon</option>
                                        <option value="Mon">Tue</option>
                                        <option value="Mon">Wed</option>
                                        <option value="Mon">Fri</option>
                                        <option value="Mon">Sat</option>
                                    </select>
                                    <input
                                        type="time"
                                        id="appt"
                                        name="appt"
                                        min="09:00"
                                        max="18:00"
                                        required
                                    ></input>
                                    <button
                                        type="button"
                                        className="px-5 py-2 text-lg rounded-md text-white bg-[#42ADF0]"
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="time mt-2">
                            <div className="col">
                                <h1 className="sm:text-[15px] text-[12px] pb-2 relative text-gray-400">
                                    Sunday
                                </h1>
                                <div className="grid grid-cols-4 gap-2">
                                    <button
                                        type="button"
                                        disabled="true"
                                        className="px-5 py-2 text-xs rounded-md text-white bg-[#42ADF0]"
                                    >
                                        05:50 PM
                                    </button>
                                    <button
                                        type="button"
                                        disabled="true"
                                        className="px-5 py-2 text-xs rounded-md text-white bg-[#42ADF0]"
                                    >
                                        05:50 PM
                                    </button>
                                    <button
                                        type="button"
                                        disabled="true"
                                        className="px-5 py-2 text-xs rounded-md text-white bg-[#42ADF0]"
                                    >
                                        05:50 PM
                                    </button>
                                </div>
                            </div>
                            <div className="col mt-2">
                                <h1 className="sm:text-[15px] text-[12px] pb-2 relative text-gray-400">
                                    Monday
                                </h1>
                                <div className="grid grid-cols-4 gap-2">
                                    <button
                                        type="button"
                                        disabled="true"
                                        className="px-5 py-2 text-xs rounded-md text-white bg-[#42ADF0]"
                                    >
                                        05:50 PM
                                    </button>
                                    <button
                                        type="button"
                                        disabled="true"
                                        className="px-5 py-2 text-xs rounded-md text-white bg-[#42ADF0]"
                                    >
                                        05:50 PM
                                    </button>
                                    <button
                                        type="button"
                                        disabled="true"
                                        className="px-5 py-2 text-xs rounded-md text-white bg-[#42ADF0]"
                                    >
                                        05:50 PM
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 id="accordion-color-heading-2">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
                    <span>Bir Hospital</span>
                    <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-color-body-2" class="hidden" aria-labelledby="accordion-color-heading-2">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                    <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                </div>
            </div>
        </div>
    );
};

export default AccordionComponent;
