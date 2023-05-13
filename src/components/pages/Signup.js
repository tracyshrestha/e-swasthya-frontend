import React, { useState } from 'react';
import laptop from '../../assets/laptop.png'
import google from '../../assets/google.png'
import emailp from '../../assets/emailp.png'
import personp from '../../assets/personp.png'
import callp from '../../assets/callp.png'
import lockp from '../../assets/lockp.png'
import logop from '../../assets/logop.png'

function SignUp() {
  return (
    <>
      <div className='fixed inset-0  h-screen backdrop-blur-sm flex  flex-col justify-center items-center bg-[#f0e6f9] '>
     
        <div className='flex justify-center items-center '>
        <img src={logop} alt="" class="self-center h-[61px]" />
          </div>
        {/* <form className='h-[550px] w-[600px] items-center rounded-sm border-[2px] border-[#f8f8f8] p-9 m-9 mt-4 mx-24 bg-white'>
          <div className='items-center'>
            <h2 className='text-[30px] font-bold pt-1 pb-1 px-[129px]  text-gray-700'>Create an account</h2>
            <h6 className='text-l px-[150px] pb-9 text-gray-400'>Enter your credintials below.</h6>
          </div>

          <div class=" pb-6">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src={personp} alt="" class="self-center w-5 h-5 rounded-full mx-1" />
            </div>
            <input type="text" id="email-address-icon" class="0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name"></input>
          </div>
          </div>

          <div class=" pb-6">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src={emailp} alt="" class="self-center w-5 h-5 rounded-full mx-1" />
            </div>
            <input type="text" id="email-address-icon" class="0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  " placeholder="Enter your email"></input>
          </div>
          </div>

          <div class=" pb-6">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src={callp} alt="" class="self-center w-5 h-5 rounded-full mx-1" />
            </div>
            <input type="text" id="email-address-icon" class="0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your phone number"></input>
          </div>
          </div>

          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src={lockp} alt="" class="self-center w-5 h-5 rounded-full mx-1" />
            </div>
            <input type="text" id="email-address-icon" class="0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your password"></input>
          </div>

          <div className='flex flex-col items-center'>
            <button className='w-[520px] text-center py-3 mt-8 font-bold  bg-[#a368da] hover:bg-[#a368daa9] relative rounded-xl text-white hover:bold'>
              Sign Up
            </button>
          </div>
      

          <div className=' text-center mt-[25px] text-gray-500 '>
            <p className='text-l text-center '>Already have an account?  <a className='text-lg font-bold relative text-[#a368da] hover:text-[#a368daa9] underline hover:decoration-solid   hover:uppercase' href="LogInUser">Log in.</a></p>

          </div>
        </form> */}
        
      </div>
    </>
  );

}
export default SignUp;
