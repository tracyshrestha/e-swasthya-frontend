import { useEffect } from "react";
import { Dial } from "flowbite";
import {BsJournalMedical} from 'react-icons/bs'
import { Link } from "react-router-dom";


const AddDetailsWidget = ({patientsInformation}) => {



    useEffect(() => {
        const $parentEl = document.getElementById('dialParent')
        const $triggerEl = document.getElementById('dialButton');
        const $targetEl = document.getElementById('dialContent');

        // options with default values
        const options = {
            triggerType: 'click'
        };
        const dial = new Dial($parentEl, $triggerEl, $targetEl, options);
    }, [])



    return (

      
<div id="dialParent" class="fixed right-8 bottom-6 group">
    <div id="dialContent" class="flex flex-col items-center hidden mb-4 space-y-2">
        <Link to={`/AddMedicalHistory/${patientsInformation?.AppointmentId}`}>
        <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white">
             <div className="text-xl"><BsJournalMedical/></div>
            <span class="sr-only">Share</span>
        </button>
        </Link>
        <div id="tooltip-share" role="tooltip" class="absolute z-10 invisible inline-block w-max px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
             Add medical history
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>

       
    </div>
    <button type="button" id="dialButton"  data-dial-toggle="speed-dial-menu-click" data-dial-trigger="click" aria-controls="speed-dial-menu-click" aria-expanded="false" class="flex items-center justify-center text-white bg-eswasthyaprim  rounded-full w-14 h-14">
        <svg aria-hidden="true" class="w-8 h-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        <span class="sr-only">Open actions menu</span>
    </button>
</div>


    )
}

export default AddDetailsWidget;