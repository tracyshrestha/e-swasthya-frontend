import React, { useState } from "react";
import logo from "../../../assets/logo.png";



function Diagnosis() {
  const [state, setState] = useState({
  
  })

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
    setSelectedDate(e.target.value);
  };
  
  const [selectedDate, setSelectedDate] = useState('');


  return (

    <div className="w-screen h-full flex  justify-center items-center bg-[#E6F4F9]">
      <div className="p-4 flex justify-center items-center">
        <form className="h-auto sm:w-[750px]  w-[350px] items-center rounded-sm  p-8 m-8 mt-1 mx-24  bg-white ">
          <div className="flex justify-center items-center ">
            <img src={logo} alt="" class="self-center h-[80px] pt-2 " />
          </div>
          <div className="flex justify-center items-center">
            <h2 className="items-center sm:text-[35px] text-[25px]  font-medium sm:pt-1  text-gray-600">
            Upload Report
            </h2>
          </div>



          <div className=" pb-1 mx-3">
            <div className="relative">
              <div className=''>
                <div className='flex flex-col mb-2'>

                  

                </div>

                <input
  type="date"
  name="date"
  value={selectedDate}
  onChange={inputHandle}
/>


                <div className="relative">
                  <label htmlfor="role" class="block mb-2 text-sm  text-gray-400 dark:text-white"> Select Report Type</label>
                  <select id="" required class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected value="">Select</option>
                    <option value="">General practitioner</option>
                    <option value="">Internal medicine</option>
                    <option value="">Family medicine</option>
                    <option value="">Neurologist</option>
                    <option value="">Pediatrician</option>
                    <option value="">Pediatrics</option>
                    <option value="">Psychiatrist</option>
                    <option value="">Obstetrics and gynaecology</option>
                    <option value=""></option>
                  </select>
                </div>

                <div>
                  <div className="flex flex-col mt-0 sm:mt-3 mb-2">
                    <label htmlFor="name">Citizenship Number:</label>
                    <input required
                     
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                      name="citizenship"
                      placeholder="Enter your citizenship number"
                      maxLength={14}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col mt-0 sm:mt-3 mb-2">
                    <label htmlFor="name">Enter your Phone Number:</label>
                    <input required
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="number"
                      placeholder="Enter your phone number"
                      maxLength={10}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col mt-0 sm:mt-3 mb-2">
                    <label htmlFor="name">Enter your NMC Liscence Number:</label>
                    <input required
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="number"
                      placeholder="Enter your liscence number"
                      maxLength={10}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col mt-0 sm:mt-3 mb-2">
                    <label htmlFor="name">Enter your Experience</label>
                    <textarea required
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter your experience"
                      rows='4'
                      maxLength={10}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col mt-0 sm:mt-3 mb-2">
                    <label htmlFor="name">Enter your Education</label>
                    <textarea required
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter your education"
                      rows='4'
                      maxLength={10}
                    />
                  </div>
                </div>
                <div className='flex flex-col mb-4 '>
                  <label  >Select Your Gender:</label>

                  <div className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-500 block w-full  p-2.5'>

                    <div className='text-base'>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                    
                      />{' '}
                      Male <br />
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                     
                      />{' '}
                      Female <br />
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                     
                      />{' '}
                      Other
                    </div>
                  </div>
                </div>

                <div className='flex flex-col mb-4 '> Location:
                  <div className='flex flex-wrap justify-center items-center bg-white p-2 text-center w-full '>


                    <div className='text-base w-1/2 '>
                      <div className=' sm:mb-4 sm:mr-4 mb-3 mr-1 border border-gray-300 rounded-lg' >
                        Province:
                        <div className='text-base   '>
                          <select required className='border border-blue-500 rounded-lg pb-1 mb-2 bg-[#e5f5ff7f]' name='loaction'  >
                            <option value="">&nbsp;&nbsp;&nbsp;--------------</option>
                            <option value="">Koshi</option>
                            <option value="">Madhesh</option>
                            <option value="">Bagmati</option>
                            <option value="">Gandaki</option>
                            <option value="">Lumbini</option>
                            <option value="">Karnali</option>
                            <option value="">Sudurpashchim</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className='text-base w-1/2 '>
                      <div className='sm:mb-3 sm:ml-4 mb-3 mr-0  border border-gray-300 rounded-lg' >
                        District:
                        <div className='text-base   '>
                          <select required className='border border-blue-500 rounded-lg pb-1 mb-2 bg-[#e5f5ff7f]' name='loaction' >
                            <option value="">&nbsp;&nbsp;&nbsp;------</option>
                            <option value="">Bhojpur</option>
                            <option value="">Dhankuta</option>
                            <option value=""></option>

                          </select>
                        </div>
                      </div>
                    </div>
                    <div className='text-base w-1/2 '>
                      <div className='sm:mt-4 sm:mr-4 mb-3 mr-0  border border-gray-300 rounded-lg' >
                        Ward:
                        <div className='text-base   '>
                          <select required className='border border-blue-500 rounded-lg pb-1 mb-2 bg-[#e5f5ff7f]' name='loaction'  >
                            <option value="">&nbsp;&nbsp;&nbsp;------</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className='text-base w-1/2 '>
                      <div className='sm:mt-4 sm:ml-4 mb-3 mr-0  border border-gray-300 rounded-lg' >
                        City:
                        <div className='text-base   '>
                          <select required className='border border-blue-500 rounded-lg pb-1 mb-2 bg-[#e5f5ff7f]' name='loaction'   >
                            <option value="">&nbsp;&nbsp;&nbsp;------</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <button type="submit" className="sm:w-[520px] w-[275px] text-center py-3 mt-5 font-bold  bg-[#42ADF0] hover:bg-[#4D6B9C] relative rounded-xl text-white hover:bold">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </form>

      </div>
    </div>

  );
}

export default Diagnosis;
