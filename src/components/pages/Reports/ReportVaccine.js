import React, { useState } from "react";
import logo from "../../../assets/logo.png";



function ReportVaccine() {
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

    <div className="w-screen h-screen flex  justify-center items-center bg-[#E6F4F9]">
      <div className="p-4 flex justify-center items-center">
        <form className="h-auto sm:w-[750px]  w-[350px] items-center rounded-sm  p-8 m-8 mt-1 mx-24  bg-white ">
          <div className="flex justify-center items-center ">
            <img src={logo} alt="" class="self-center h-[80px] pt-2 " />
          </div>
          <div className="flex justify-center items-center">
            <h2 className="items-center sm:text-[35px] text-[25px]  font-medium sm:pt-1  text-gray-600">
              Vaccine Report
            </h2>
          </div>



          <div className=" pb-1 mx-3">
            <div className="relative">
              <div className='pt-3'>

                <div className=' text-left  '>
                  <h1 className='sm:text-[15px] text-[12px] pb-2 relative'>Enter Vaccine Name:</h1>
                  <input
                    required
                    type="text"
                    id="email-address-icon"
                    class="placeholder-gray-300 h-[50px] 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                    placeholder="Firstname"

                  />
                </div>
                <div className='pt-3 text-left  '>
                  <h1 className='sm:text-[15px] text-[12px] pb-2 relative'>Enter Dosage:</h1>
                  <input
                    required
                    type="number"
                    id="email-address-icon"
                    class="placeholder-gray-300 h-[50px] 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                    placeholder="Firstname"

                  />
                </div>
                <div className='pt-3'>
                <h1 className='sm:text-[15px] text-[12px] pb-2 relative'>Select Date:</h1>
                  <input
                    type="date"
                    name="date"
                    value={selectedDate}
                    onChange={inputHandle}
                  />

                </div>

                <div className='flex flex-col items-center'>
            <button type="submit" className='sm:w-[520px] rounded-md w-[275px] text-center py-3 mt-8 font-bold  bg-[#42ADF0] hover:bg-[#4D6B9C] relative  text-white hover:bold'>
              Submit
            </button>
          </div>

              </div>
            </div>
          </div>

        </form>

      </div>
    </div>

  );
}

export default ReportVaccine;
