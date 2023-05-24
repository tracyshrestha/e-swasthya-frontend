import React, { useState } from 'react';
import laptop from '../../assets/laptop.png'
import google from '../../assets/google.png'
import email from '../../assets/email.png'
import lock from '../../assets/lock.png'
import logo from '../../assets/logo.png'

function LogIn() {

  

  return (
    <>
      <div className=' h-screen flex  flex-col justify-center items-center bg-[#E6F4F9] '>
     
        <div className='flex justify-center items-center '>
        <img src={logo} alt="" class="self-center h-[80px] pt-2" />
          </div>
        <form className='sm:h-[550px] sm:w-[600px] h-[505px] w-[350px] items-center rounded-sm border-[2px] border-[#f8f8f8] p-9 m-9 mt-4 mx-24 bg-white '>
          <div className='items-center'>
            <h2 className='sm:text-[30px] text-[22px] font-bold sm:pt-1  pb-1 sm:px-[155px] px-[60px]  text-gray-700'>Welcome Back</h2>
            <h6 className='sm:text-[15px] text-[11px] sm:px-[100px] px-4 sm:pb-9 pb-5 text-gray-400'>Enter your credintials to access your account.</h6>
          </div>

          <div class=" pb-6">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src={email} alt="" class="self-center w-5 h-5 rounded-full mx-1" />
            </div>
            <input type="text" id="email-address-icon" class="0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  " placeholder="Enter your email"></input>
          </div>
          </div>

          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src={lock} alt="" class="self-center w-5 h-5 rounded-full mx-1" />
            </div>
            <input type="text" id="email-address-icon" class="0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  " placeholder="Enter your password"></input>
          </div>

          <div className=' text-right  text-gray-500 '>
            <a className='sm:text-[14px] text-[10px]  relative text-[#42ADF0] hover:text-[#4d82d7] hover:font-bold underline ' href="Verify">Forgot password?</a>

          </div>

          <div className='flex flex-col items-center'>
            <button className='sm:w-[520px] w-[275px] text-center py-3 mt-5 font-bold  bg-[#42ADF0] hover:bg-[#4D6B9C] relative rounded-xl text-white hover:bold'>
              Sign In
            </button>
          </div>
          
          <div class="relative flex py-5 items-center">
            <div class="flex-grow border-t border-gray-400"></div>
            <span class="flex-shrink mx-4 text-gray-400">or</span>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>

          <div className='' >
            <button className='flex items-center  flex-col mb-4 sm:ml-[160px] ml-12 rounded-md hover:bg-[#E6F4F9] ' href="Verify">
              <span class="inline-flex items-baseline  relative p-3 rounded-md border-[2px] border-[#d4d2d2] sm:w-[200px] w-[172px] sm:text-[17px] text-[13px]">
                <img src={google} alt="" class="self-center w-5 h-5 rounded-full mx-1" />
                Log in with Google
              </span>
            </button>
          </div>

          <div className=' text-center sm:mt-[25px] mt-5 text-gray-500 '>
            <p className='sm: text-l text-[14px] text-center '>Don't have an account?  <a className='sm:text-lg text-[16px] font-bold relative text-[#42ADF0] hover:text-[#4D6B9C] underline hover:decoration-solid   hover:uppercase' href="SignUp">Sign up.</a></p>

          </div>
        </form>
        
      </div>
    </>
  );

}
export default LogIn;
