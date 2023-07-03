import { useContext } from "react";
import React from "react";
import { HistoryContext } from "../HistoryState/HistoryState";
import SearchComponent from "./MedicineSearch/SearchComponent";


const PescribeDrug = () => {
    const { Drug, RemoveItem,OnDrugChange,DrugOptions} = useContext(HistoryContext);


    const show = (id) => {
        let a = document.getElementById(`body-${id}`);
        if (a.classList.value.length) {
            a.classList.remove("hidden")
        } else {
            a.classList.add("hidden")
        }
    }

  


    // useEffect(() => {
    //     Drug.map((element) => {
    //         let newObject = {
    //             id: element.id,
    //             triggerEl: document.getElementById(`${element.id}`),
    //             targetEl: document.getElementById(`body-${element.id}`),
    //             active: false
    //         }
    //         const isObjectUnique = !AccordionValue.some(
    //             (object) => object.id === element.id
    //         );
    //         if (isObjectUnique) {
    //             HandleAccordion((prevObjects) => [...prevObjects, newObject]);
    //         }
    //     })
    //     console.log(AccordionValue);
    //     accordion = new Accordion(AccordionValue, options);
    // }, [AddnewDrug,RemoveItem])


    return (
        <div className=" w-full">
            {
                Drug.map((element) => {
                    return (
                        <div key={element.id}>
                            <h2 id={`${element.id}`} >
                                <button type="button" onClick={() => { show(element.id) }} class="flex w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white items-center justify-between  p-5 font-medium text-left text-gray-500" aria-expanded="false" aria-controls="accordion-example-body-3">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                        <span
                                            type="button"
                                            disabled="true"
                                            className="px-5 py-2 md:px-2 md:text-xs text-sm rounded-md text-white bg-[#42ADF0]"
                                        >
                                            {element.DrugName}

                                        </span>
                                    </h3>
                                    <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id={`body-${element.id}`} class="hidden" aria-labelledby="accordion-example-heading-4">
                                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="relative pb-6">

                                            <div className=" text-left  text-gray-400 ">
                                                <h1 className=" mb-2 sm:text-[15px] text-[12px]  relative text-gray-400">
                                                    Drug type
                                                </h1>
                                            </div>
                                            <select onChange={OnDrugChange(element.id)}
                                                name="DrugType"
                                                value={element.DrugType} defaultValue={DrugOptions[0]} id="provinces" class="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                 {
                                                     DrugOptions.map((ele,key) => {
                                                          return (
                                                            <option value={ele} defaultChecked={key===0}>{ele}</option>   
                                                          )
                                                     })
                                                 }
                    
                                            </select>
                                        </div>
                                        <div className="relative pb-6">

                                            <div className=" mb-2 text-left  text-gray-400 ">
                                                <h1 className="sm:text-[15px] text-[12px]  relative text-gray-400">
                                                    Drug name
                                                </h1>
                                            </div>
                                            <SearchComponent id={element.id}/>

                                            
                                            
                                            {/* <input
                                                required
                                                type="text"
                                                onChange={OnDrugChange(element.id)}
                                                name="DrugName"
                                                value={element.DrugName}
                                                class=" h-[50px] placeholder-gray-300 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                                                placeholder="Azthromycin"
                                            ></input> */}
                                        </div>

                                        <div className="relative pb-6">

                                            <div className=" text-left  text-gray-400 ">
                                                <h1 className=" mb-2 sm:text-[15px] text-[12px]  relative text-gray-400">
                                                    Frequency per day
                                                </h1>
                                            </div>
                                            <select onChange={OnDrugChange(element.id)}
                                                name="Frequency"
                                                value={element.Frequency} id="provinces" class="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option value="Once daily" defaultChecked>Once daily</option>
                                                <option value="Twice daily">Twice daily</option>
                                                <option value="Thrice daily">Thrice daily</option>
                                            </select>
                                        </div>
                                        <div className="relative pb-6">

                                            <div className=" mb-2 text-left  text-gray-400 ">
                                                <h1 className="sm:text-[15px] text-[12px]  relative text-gray-400">
                                                    Total duration
                                                </h1>
                                            </div>

                                            <input
                                                required
                                                type="number"
                                                min={1}
                                                max={100}
                                                onChange={OnDrugChange(element.id)}
                                                name="Duration"
                                                value={element.Duration}
                                                id="email-address-icon"
                                                class=" h-[50px] placeholder-gray-300 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                                                placeholder="15days"
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
                                                onChange={OnDrugChange(element.id)}
                                                name="Dosage"
                                                value={element.Dosage}

                                                id="email-address-icon"
                                                class=" h-[50px] placeholder-gray-300 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                                                placeholder="500 Mg"
                                            ></input>
                                        </div>

                                        <div className="relative mt-2">
                                            <label for="message" class="block mb-2 sm:text-[15px] text-[12px]  relative text-gray-400">Description</label>
                                            <textarea onChange={OnDrugChange(element.id)}
                                                name="Description"
                                                value={element.Description} rows="3" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                                        </div>
                                        <div class="float-right flex m-6 space-x-3 md:mt-6">
                                            <a href="#" onClick={() => { RemoveItem(element.id) }} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#f24667] rounded-lg  focus:ring-4 focus:outline-none ">Remove</a>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    )
                })
            }


        </div>

    )
}

export default PescribeDrug;