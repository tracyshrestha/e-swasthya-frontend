
import { MdAddCircle } from 'react-icons/md'
import SearchComponent from './formState/SearchComponent';
import { useContext } from 'react';
import { FormContext } from './formState/State';
import { Accordion } from 'flowbite';
import AccordionComponent from './Accordion';

const DoctorInformation = () => {
    const { setUserInformation, Userinformation ,RemoveHospital} = useContext(FormContext);


    const onChange = name => event => {
        setUserInformation((preState) => {
            return { ...preState, [name]: event.target.value }
        })
    }

    return (
        <div className="mt-6 pb-3">
            <div className="relative">
                <div className='grid grid-cols-2 gap-6 '>
                    <div className=' text-left  text-gray-400 '>
                        <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Enter your NMC number</h1>
                        <input
                            type="number"
                            value={Userinformation.NMCno}
                            onChange={onChange('NMCno')}
                            name='NMCno'
                            maxLength={5}
                            min={1}
                            max={10000}
                            id="email-address-icon"
                            class="placeholder-gray-300 h-[50px] 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                            placeholder="01262"
                        ></input>
                    </div>
                    <div className=' text-left text-gray-400 '>
                        <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Choose your Speciality</h1>
                        <select value={Userinformation.speciality} name='speciality' onChange={onChange('speciality')} class="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="Psychiatrists">Psychiatrists</option>
                            <option value="Radiologists">Radiologists</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="relative mt-4">
                <div className='grid grid-cols-2 gap-6 '>
                    <div className=' text-left  text-gray-400 '>
                        <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Experience</h1>
                        <input
                            type="number"
                            min={1}
                            max={30}
                            value={Userinformation.experience} name='experience' onChange={onChange('experience')}
                            id="email-address-icon"
                            class="placeholder-gray-300 h-[50px] 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                            placeholder="01262"
                        ></input>
                             
                    </div>
                    <div className=' text-left text-gray-400 '>
                        <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Qualification</h1>
                        <select value={Userinformation.qualification} name='qualification' onChange={onChange('qualification')} id="provinces" class="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="MBBS">MBBS</option>
                            <option value="MD">MD</option>
                            <option value="DM">DM</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="relative mt-4">
                <div className='grid grid-cols-1 gap-6 '>
                    <div className='text-left  text-gray-400 '>
                        <h1 className='sm:text-[15px] mt-1 text-[12px] relative text-gray-400'>Add hospital</h1>
                        <div className='flex items-center'><SearchComponent /></div>
                    </div>
                   
                    <hr />
                    <div className="grid md:grid-cols-3 gap-2">
                        {
                            Userinformation?.hospitalName?.map((ele) => {
                                return (
                                    <div id="alert-1" class="flex p-4 mb-4 text-white bg-[#42ADF0] rounded-lg " role="alert">
                                        <div class="ml-3 text-sm font-medium ">
                                             {ele.name}
                                        </div>
                                        <button onClick={() => {RemoveHospital(ele.id)}} type="button" class="ml-auto -mx-1.5 -my-1.5 text-white-500 rounded-lg focus:ring-2  p-1.5  inline-flex h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close">
                                            <span class="sr-only">Close</span>
                                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DoctorInformation;