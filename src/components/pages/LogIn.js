import React, { useState } from 'react';
import laptop from '../../assets/laptop.png'
import google from '../../assets/google.png'

function LogIn() {
  return (
    <>
      <div className='fixed inset-0  backdrop-blur-sm flex justify-center items-center'>

        <div className='w-screen h-screen   grid grid-cols-1 md:grid-cols-2  shadow-lg  shadow-gray-200   '>

          <div className='p-4 flex flex-col  justify-around bg-[#E6F4F9]  '>

            <form className='h-[600px] rounded-sm border-[2px] border-[#f8f8f8] p-9 m-9 mt-7 mx-24 bg-white'>

              <h2 className='text-5xl font-bold pt-5 pl-7 pb-9'>Login</h2>
              <div>
                <p></p>

              </div>
              <div className='flex flex-col mb-4'>
                <h6 className='py-1 text-[18px]'>
                  Username</h6>
                <input className='border relative p-2 rounded-md border-[2px] border-[#d4d2d2]' placeholder="" type="text" />
              </div>

              <div className='flex flex-col'>
                <h6 className='py-1 text-[18px]'>Password
                </h6>
                <input className='border relative p-2 rounded-md border-[2px] border-[#d4d2d2]' placeholder="" type="text" />
              </div>



              <div className='flex flex-col items-center'>
                <button className='w-[120px] text-center py-3 mt-8 font-bold  bg-[#42ADF0] hover:bg-[#4D6B9C] relative rounded-xl text-white hover:bold'>
                  Sign In
                </button>
              </div>
              <div class="relative flex py-5 items-center">
                <div class="flex-grow border-t border-gray-400"></div>
                <span class="flex-shrink mx-4 text-gray-400">or</span>
                <div class="flex-grow border-t border-gray-400"></div>
              </div>

              <p>
                <button className='flex items-center items-center  flex-col mb-4 ml-[150px] rounded-md hover:bg-[#E6F4F9] '>
                  <span class="inline-flex items-baseline  relative p-3 rounded-md border-[2px] border-[#d4d2d2] w-[200px]">
                    <img src={google} alt="" class="self-center w-5 h-5 rounded-full mx-1" />
                    Log in with Google 
                  </span>
                  </button>
              </p>

              <div className=' text-center mt-8 text-[#42ADF0]'>
                <p className='text-lg text-center mt-8'>Don't have an account? Sign up <a className='text-xl font-bold relative  hover:text-[#4D6B9C] underline hover:decoration-solid   hover:uppercase' href="LogInUser">here.</a></p>

              </div>


            </form>

          </div>
          <div className=' flex w-full h-[540px] hidden md:block p-[130px] '>
            <img className='inline w-[600px] h-[600px]' src={laptop} alt="/" />
          </div>
        </div>
      </div>

    </>
  );

}
export default LogIn;
