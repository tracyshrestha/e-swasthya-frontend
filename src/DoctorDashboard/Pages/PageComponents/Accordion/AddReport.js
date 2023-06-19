import { useContext } from "react";
import React from "react";
import { HistoryContext } from "../HistoryState/HistoryState";

const AddReport = () => {
    const { RemoveReport, Report, OnDrugChange } = useContext(HistoryContext);



    const show = (id) => {
        let a = document.getElementById(`body-${id}`);
        if (a.classList.value.length) {
            a.classList.remove("hidden")
        } else {
            a.classList.add("hidden")
        }
    }

    return (
        <div className=" w-full">
            {
                Report.map((element) => {
                    return (
                        <div key={element.id}>
                            <h2 id={`${element.id}`} >
                                <button type="button" onClick={() => { show(element.id) }} class="flex w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white items-center justify-between  p-5 font-medium text-left text-gray-500" aria-expanded="false" aria-controls="accordion-example-body-3">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                        {element.ReportTitle} - {element.ReportType}
                                    </h3>
                                    <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id={`body-${element.id}`} class="hidden" aria-labelledby="accordion-example-heading-4">
                                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="relative pb-6">

                                            <div className=" mb-2 text-left  text-gray-400 ">
                                                <h1 className="sm:text-[15px] text-[12px]  relative text-gray-400">
                                                    Report name
                                                </h1>
                                            </div>

                                            <input
                                                required
                                                type="text"
                                                // onChange = {OnDrugChange(element.id)}
                                                // name="DrugName"
                                                // value={element.DrugName}
                                                class=" h-[50px] placeholder-gray-300 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                                                placeholder="Brain MRI"
                                            ></input>
                                        </div>
                                        <div className="relative pb-6">

                                            <div className=" text-left  text-gray-400 ">
                                                <h1 className=" mb-2 sm:text-[15px] text-[12px]  relative text-gray-400">
                                                    Report type
                                                </h1>
                                            </div>
                                            <select onChange={OnDrugChange(element.id)}
                                                name="DrugType"
                                                value={element.DrugType} id="provinces" class="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option value="X-ray" defaultChecked>X-ray</option>
                                                <option value="CT-Scan">CT-scan</option>
                                                <option value="Blood Report">Blood Report</option>
                                                <option value="ECG">ECG</option>
                                                <option value="MRI">MRI</option>
                                            </select>
                                        </div>
                                    </div>


                                    <div className="relative   grid grid-cols-1">
                                        <label for="message" class="block mb-2 sm:text-[15px] text-[12px]  relative text-gray-400">Description</label>
                                        <textarea onChange={OnDrugChange(element.id)}
                                            name="Description"
                                            value={element.Description} rows="3" class=" mb-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>

                                        <div class="flex items-center justify-center w-full">
                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input id="dropzone-file" type="file" class="hidden" />
                                            </label>
                                        </div>

                                        <div class="float-right m-6 space-x-3 md:mt-6">
                                            <a href="#" onClick={() => { RemoveReport(element.id) }} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#f24667] rounded-lg  focus:ring-4 focus:outline-none ">Remove</a>
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

export default AddReport;