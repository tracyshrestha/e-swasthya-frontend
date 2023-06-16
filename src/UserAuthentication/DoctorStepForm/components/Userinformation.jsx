import { useContext, useState } from "react";
import { format, differenceInYears } from 'date-fns';
import { FormContext } from "./formState/State";


const Userinformation = () => {
     

     const { Userinformation, setUserInformation} = useContext(FormContext)
    
    const onChangeEvent = name => event => {
        setUserInformation((preState) => {
            return { ...preState, [name]: event.target.value}
        })
        setUserInformation((prevstate) => {return {...prevstate,Age:differenceInYears(new Date(),new Date(prevstate.DOB),)}})
    }


    return (
        <div className="mt-6 pb-3">
            <div className="relative">
                <div className='grid grid-cols-2 gap-6'>
                    <div className=' text-left  text-gray-400 '>
                        <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Enter your DOB</h1>
                        <input
                            value={Userinformation.DOB}
                            onChange={onChangeEvent("DOB")}
                            type="date"
                            id="dob"
                            className="border w-full border-gray-300 p-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className=' text-left text-gray-400 '>
                        <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Your Age</h1>
                        <h1 className="sm:text-[35px] text-[30px] pb-2 relative text-gray-600">{Userinformation.Age}</h1>
                    </div>
                </div>
            </div>
            <div className="relative pb-2">
                <div className='grid grid-cols-2 gap-6'>
                    <div className=' text-left  text-gray-400 '>
                        <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Choose your blood group</h1>
                        <select value={Userinformation.bloodGroup} onChange={onChangeEvent("bloodGroup")} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>
                    <div className=' text-left text-gray-400 '>
                        <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Your Blood Group</h1>
                        <h1 className="sm:text-[35px] text-[30px] pb-2 relative text-gray-600">{Userinformation.bloodGroup}</h1>
                    </div>
                </div>
            </div>

        
            <div className="relative mt-1">
                <div className=' text-left  text-gray-400 '>
                    <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Choose your gender</h1>
                    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input checked={Userinformation.gender === "Male"} onChange={onChangeEvent("gender")} value="Male" id="horizontal-list-radio-id" type="radio"  name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="horizontal-list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input checked={Userinformation.gender === "Female"} onChange={onChangeEvent("gender")} value="Female" id="horizontal-list-radio-millitary" type="radio" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="horizontal-list-radio-millitary" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                            </div>
                        </li>
                        <li class="w-full dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input checked={Userinformation.gender === "Other"} onChange={onChangeEvent("gender")} value="Other" id="horizontal-list-radio-passport" type="radio"  name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="horizontal-list-radio-passport" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Userinformation;