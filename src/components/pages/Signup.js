import React, { useState } from 'react';
import laptop from '../../assets/laptop.png'
import google from '../../assets/google.png'
import email from '../../assets/email.png'
import person from '../../assets/person.png'
import medicine from '../../assets/medicine.svg'
import lock from '../../assets/lock.png'
import logo from '../../assets/logo.png'

function SignUp() {
  return (
    <>


      <div className='w-screen h-screen grid grid-cols-1 xl:grid-cols-2  bg-[#E6F4F9]'>

        <div className='p-4 flex flex-col justify-center items-center   '>
          <div className='flex justify-center items-center '>
            <img src={logo} alt="" class="self-center h-[80px] pt-2 mt-" />
          </div>
          <form className='sm:h-[620px] sm:w-[600px] h-[535px] w-[350px] items-center rounded-sm border-[2px] border-[#f8f8f8] p-9 m-9 mt-4 mx-24 bg-white '>
            <div className='items-center'>
              <h2 className='sm:text-[30px] text-[22px] font-bold sm:pt-1  pb-1 sm:px-[105px] px-[40px]  text-gray-700'>Create An Account</h2>
              <h6 className='sm:text-[15px] text-[11px] sm:px-[115px] px-8 sm:pb-9 pb-5 text-gray-400'>Enter your credintials to create an account.</h6>
            </div>

            <div class=" pb-6">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <img src={person} alt="" class="self-center w-5 h-5 rounded-full mx-1" />
                </div>
                <input type="text" id="email-address-icon" class="0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  " placeholder="Enter your full name"></input>
              </div>
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



            <div className='flex flex-col items-center'>
              <button className='sm:w-[520px] w-[275px] text-center py-3 mt-5 font-bold  bg-[#42ADF0] hover:bg-[#4D6B9C] relative rounded-xl text-white hover:bold'>
                Sign Up
              </button>
            </div>
            <div class="relative flex py-5 items-center">
              <div class="flex-grow border-t border-gray-400"></div>
              <span class="flex-shrink mx-4 text-gray-400">or</span>
              <div class="flex-grow border-t border-gray-400"></div>
            </div>

            <p>
              <button className='flex items-center flex-col mb-4 sm:ml-[160px] ml-12 rounded-md hover:bg-[#E6F4F9] '>
                <span class="inline-flex items-baseline  relative sm:p-3 p-1 rounded-md border-[2px] border-[#d4d2d2] sm:w-[220px] w-[172px] sm:text-[17px] text-[13px]">
                  <img src={google} alt="" class="self-center w-5 h-5 rounded-full mx-1" />
                  Sign up with Google
                </span>
              </button>
            </p>

            <div className=' text-center sm:mt-[25px] mt-5 text-gray-500 '>
              <p className='sm: text-l text-[14px] text-center '>Already have an account?  <a className='sm:text-lg text-[16px] font-bold relative text-[#42ADF0] hover:text-[#4D6B9C] underline hover:decoration-solid   hover:uppercase' href="/">Log in.</a></p>

            </div>
          </form>

        </div>
        <div className='  w-full h-full hidden xl:block 2xl:p-[130px] 2xl:pt-[190px] p-[100px] bg-white'>
          <img className=' inline auto' src={medicine} alt="/" />
          {/* <img className='inline 2xl:w-[550px] 2xl:h-[550px]  w-[400px] h-[350px]' src={laptop} alt="/" /> */}
        </div>
      </div>


    </>
  );

}
export default SignUp;
