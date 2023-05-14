import React, { useState } from 'react';
import laptop from '../../assets/laptop.png'
import logout from '../../assets/logout.png'
import email from '../../assets/email.png'
import lock from '../../assets/lock.png'
import logo from '../../assets/logo.png'

function Verify() {
  return (
    <>
      <div className=' h-screen flex  flex-col justify-center items-center bg-[#E6F4F9] '>
     
        <form className='sm:h-[230px] sm:w-[600px] h-[200px] w-[300px] items-center rounded-sm border-[2px] border-[#3065a1] p-9 m-9 mt-4 mx-24 bg-white '>
          <div className='items-center'>
            <h2 className='sm:text-[30px] text-[18px] font-bold sm:pt-1  pb-9 sm:px-[52px] px-[0px]  text-gray-700'>Please Verify Your Email First</h2>
           
          </div>

          <p className=' grid grid-cols-2'>
            <button className='flex items-center  flex-col  sm:ml-[0px]  rounded-md '>
              <span class="inline-flex items-baseline  relative sm:p-3 p-[7px] sm:pl-7 rounded-md border-[2px] hover:bg-[#E6F4F9] border-[#d2d3d4] sm:w-[200px] w-[122px] sm:text-[17px] text-[13px]">
                <img src={email} alt="" class="self-center w-5 h-5 rounded-full mx-1" />
                Resend Email
              </span>

            </button>
            <button className='flex items-center  flex-col  sm:ml-[0px] ml-6 rounded-md '>
              <span class="inline-flex items-baseline  relative  sm:p-3 p-[7px] rounded-md border-[2px] hover:bg-[#E6F4F9] sm:pl-12 pl-2  border-[#d4d2d2] sm:w-[200px] w-[100px] sm:text-[17px] text-[13px]">
                <img src={logout} alt="" class="self-center w-5 h-5 rounded-full mx-1" />
                Log out
              </span>
            </button>
          </p>

       
        </form>

        {/* <div className='flex justify-center items-center '>
        <img src={laptop} alt="" class="self-center h-[80px] pt-2" />
          </div>
         */}
      </div>
    </>
  );

}
export default Verify;
