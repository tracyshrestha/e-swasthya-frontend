import React, { useState } from 'react';

import LoginImage from '../../../assets/login.jpg'
import logo from '../../../assets/logo.png'


function Verify() {
  return (
    <>
      <div className='sm:overflow-hidden  overflow-hidden w-screen h-screen grid grid-cols-1 xl:grid-cols-2 bg-[#ffff]'>

        <div className='p-4 flex flex-col justify-center items-center  '>

          <form className='border-[#f8f8f8] h-auto sm:w-[600px] h-auto w-[350px] items-center rounded-sm  p-9 m-8 mt-1 mx-24 bg-white mb-5'>
            <div className='flex justify-center items-center pb-5'>
              <img src={logo} alt="" class="self-center h-[70px] sm:h-[80px] pt-2 " />
            </div>
            <div className='items-center'>
              <h6 className='sm:text-[18px] text-[16px] sm:mb-[-8px] font-medium text-gray-500'>ACTIVATE YOUR ACCOUNT</h6>
              <h2 className='sm:text-[35px] text-[25px]  font-medium sm:pt-1  text-gray-600'>Welcome Srijankc@gmail.com,</h2>
              <h6 className='sm:text-[17px] text-[15px]  pb-5 text-gray-400'>We have send an email for verification.Please check your inbox.</h6>
            </div>


            <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-5'>
              <button className='sm:w-auto rounded-md w-auto text-center py-3 mt-8 font-bold  bg-[#42ADF0] hover:bg-[#4D6B9C] relative  text-white hover:bold'>
                Resend verification link
              </button>
              <button className='sm:w-auto rounded-md w-auto text-center py-3 mt-8 font-bold  bg-[#42ADF0] hover:bg-[#4D6B9C] relative  text-white hover:bold'>
                Log out
              </button>
            </div>
          </form>

        </div>
        <div className='  w-full h-full hidden xl:block mt-[15%] p-[2%] bg-white'>
          <img className='inline auto' src={LoginImage} alt="/" />
          {/* <img className='inline 2xl:w-[550px] 2xl:h-[550px]  w-[400px] h-[350px]' src={laptop} alt="/" /> */}
        </div>
      </div>
    </>
  );

}
export default Verify;
