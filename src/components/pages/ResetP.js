import React, { useState } from 'react';
import resetpw from '../../assets/resetpw.svg'
import lock from '../../assets/lock.png'


function ResetP() {
  return (
    <>


      <div className='w-screen h-screen grid grid-cols-1 xl:grid-cols-2 justify-center items-center   bg-[#E6F4F9]'>

      

          <form className=' items-center  sm:h-[360px] sm:w-[600px] h-[505px] w-[350px]  rounded-sm border-[2px] border-[#f8f8f8] p-9 m-9 mt-4 mx-24 bg-white '>
            <div className=' flex  flex-col justify-center items-center'>
              <h2 className='sm:text-[30px] text-[18px] font-bold sm:pt-1  pb-9 sm:px-[52px] px-[0px]  text-gray-700'>Reset Password</h2>

            </div>

            <div class=" pb-6">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <img src={lock} alt="" class="self-center w-5 h-5 rounded-full mx-1" />
                </div>
                <input type="text" id="email-address-icon" class="0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  " placeholder="Enter your password"></input>
              </div>
            </div>

            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src={lock} alt="" class="self-center w-5 h-5 rounded-full mx-1" />
              </div>
              <input type="text" id="email-address-icon" class="0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  " placeholder="Re-enter your password"></input>
            </div>



            <div className='flex flex-col items-center'>
              <button className='sm:w-[520px] w-[275px] text-center py-3 mt-5 font-bold  bg-[#42ADF0] hover:bg-[#4D6B9C] relative rounded-xl text-white hover:bold'>
                Confirm Password
              </button>
            </div>




          </form>

          <div className='  w-full h-full hidden xl:block 2xl:p-[130px] 2xl:pt-[190px] p-[100px] bg-white'>
          <img className=' inline auto' src={resetpw} alt="/" />
          {/* <img className='inline 2xl:w-[550px] 2xl:h-[550px]  w-[400px] h-[350px]' src={laptop} alt="/" /> */}
        </div>
      </div>


      
     




    </>
  );

}
export default ResetP;
