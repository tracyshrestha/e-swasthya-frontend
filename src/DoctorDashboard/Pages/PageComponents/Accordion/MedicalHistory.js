
import { Accordion } from 'flowbite';
import { useState, useEffect, useContext } from "react";
import { PatientDetailsContext } from '../../PatientsDetailsState/PatientDetailContext';
import uuid from 'react-uuid';
import axios from 'axios';
import { AuthContext } from '../../../../Store/UserState';


const MedicalHistory = () => {

    const { patientsInformation } = useContext(PatientDetailsContext)
    const { getStoredCookie } = useContext(AuthContext)
    const [History, SetHistory] = useState([]);


    useEffect(() => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}api/diagnosis/list-by-patient/${patientsInformation?.patientId}`,
            headers: {
                'Authorization': `Bearer ${getStoredCookie("token")}`,
            },
        })
            .then((res) => {
                res?.data?.data.forEach((ele) => {
                    SetHistory((prevState) => {
                        let newState = { ...ele, uniqueId: uuid() }
                        return [...prevState, newState]
                    })
                })

            })
            .catch((error) => console.log(error))

    }, [patientsInformation])



    const onView = (id) => {
        let documentView = document.getElementById(`${id}-body`);
        documentView.classList !== "hidden" ? documentView.classList.remove("hidden") : documentView.classList.add("hidden");

        History.map((Ele) => {
            if (Ele.uniqueId != id) {
                let documentCloseOther = document.getElementById(`${Ele.uniqueId}-body`);
                documentCloseOther.classList.add("hidden");
            }
        })
    }






    // useEffect(() => {
    //    let accordionItems = []
    //    if(History.length != 0){
    //             History.map((ele,key) => {
    //              accordionItems.push(
    //                 {
    //                     id: ele.uniqueId,
    //                     triggerEl: document.querySelector(`#${ele?.uniqueId}`),
    //                     targetEl: document.querySelector(`#${ele?.uniqueId}-body`),
    //                     active: key === 0 ? "true" : false
    //                 }
    //              )

    //         })
    //    }

    // if(Histo)

    //     
    //     History.map((ele,key) => {
    //          accordionItems.push(
    //             {
    //                 id: ele.uniqueId,
    //                 triggerEl: document.querySelector(`#${ele.uniqueId}`),
    //                 targetEl: document.querySelector(`#${ele.uniqueId}-body`),
    //                 active: key === 0 ? "true" : false
    //             }
    //          )
    //     })
    //     const options = {
    //         alwaysOpen: false,
    //         activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
    //         inactiveClasses: 'text-gray-500 dark:text-gray-400'
    //     }
    //     const accordion = new Accordion(accordionItems, options);


    // }, [History])

    console.log(History);





    return (
        <div className="w-full">
            
            {
              History.length !== 0 ?  History.map((ele, key) => {
                    return (
                        <>
                            <h2 id={`${ele.uniqueId}`} >
                                <button type="button" onClick={() => { onView(ele?.uniqueId) }} class="flex w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white items-center justify-between  p-5 font-medium text-left text-gray-500" aria-expanded="false" aria-controls="accordion-example-body-3">
                                    <span>{ele?.diseaseName} - {new Date(ele?.date).toLocaleDateString('pt-PT')}</span>
                                    <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id={`${ele.uniqueId}-body`} class={key === 0 ? "" : "hidden"} aria-labelledby="accordion-example-heading-4">
                                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="relative">
                                            <div class="flex items-center space-x-4">
                                                <div class="flex-shrink-0">
                                                    <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                                                </div>
                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        Dr {ele?.doctorFullName}
                                                    </p>
                                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                        {ele?.doctorSpecialization} , MD
                                                    </p>
                                                </div>
                                            </div>
                                            <p class="text-sm  mt-4 text-gray-800 truncate dark:text-gray-400">
                                                <span className='font-bold'>Hospital: </span>{ele.hospitalName}
                                            </p>
                                        </div>
                                        <div className="relative">
                                       
                                            <label htmlfor="role" class="block mb-2 text-sm  text-gray-400 dark:text-white">Prescripted drugs</label>
                                            <div className="grid grid-cols-2 gap-2">
                                            {
                                                ele?.medicineName?.split(",").map((ele, key) => {
                                                    
                                                      return (
                                                        <button
                                                        key={key}
                                                        type="button"
                                                        disabled="true"
                                                        className="px-5 py-2 text-sm rounded-md text-white bg-[#42ADF0]"
                                                    >
                                                        {ele}
                                                    </button>
                                                      )
                                                })
                                            }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative mt-2">
                                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Clinical Description</label>
                                        <textarea rows="4" disabled class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{ele?.diagnosisDescription}</textarea>
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
                        </>
                    )
                }) : <div class="pl-10 text-base mt-4 text-left font-semibold">No Medical history</div>
            }
        </div>
    )
}

export default MedicalHistory;