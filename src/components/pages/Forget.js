import React, { useState } from 'react';
import email from '../../assets/email.png'
import forgot from '../../assets/forgot.svg'
import logo from '../../assets/logo.png'

function Forget() {
  return (
    <>
    <div className=' h-screen flex  flex-col justify-center items-center bg-[#E6F4F9] '>

    <form className=' items-center  sm:h-[310px] sm:w-[600px] h-[505px] w-[350px]  rounded-sm border-[2px] border-[#f8f8f8] p-9 m-9 mt-4 mx-24 bg-white '>
            <div className=' flex  flex-col justify-center items-center'>
              <h2 className='sm:text-[30px] text-[18px] font-bold sm:pt-0  pb-2 sm:px-[52px] px-[0px]  text-gray-700'>Forgot Your  Password?</h2>
              <h6 className='sm:text-[15px] text-[11px]  sm:pb-5 pb-3 text-gray-400'>Enter your email below to reset it.</h6>
            </div>

            <div class=" pb-6">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <img src={email} alt="" class="self-center w-5 h-5 rounded-full mx-1" />
                </div>
                <input type="text" id="email-address-icon" class="0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  " placeholder="Enter your Email"></input>
              </div>
            </div>

            <div className='flex flex-col items-center'>
              <button className='sm:w-[520px] w-[275px] text-center py-3 mt-5 font-bold  bg-[#42ADF0] hover:bg-[#4D6B9C] relative rounded-xl text-white hover:bold'>
                Confirm Password
              </button>
            </div>
            
          </form>

      <div className='flex justify-center items-center  '>
        <img src={forgot} alt="" class="self-center sm:h-[240px] h-[100px] pt-2" />
      </div>

      

    </div>
  </>

   
  );

}
export default Forget;
