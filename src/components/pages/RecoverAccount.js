import React from 'react';
import LoginImage from '../../assets/login.jpg'
import logo from '../../assets/logo.png'
import Message from '../helpercomponents/Message';
import { Link } from 'react-router-dom';

function RecoverAccount() {
  return (
    <>
      <div className='sm:overflow-hidden w-screen h-screen grid grid-cols-1 xl:grid-cols-2 bg-[#ffff]'>

        <div className='p-4 flex flex-col justify-center items-center  '>
       
          <form className='border-[#f8f8f8] h-auto sm:w-[600px] h-auto w-[350px] items-center rounded-sm  p-9 m-8 mt-1 mx-24 bg-white mb-5'>
          <div className='flex justify-center items-center pb-5'>
            <img src={logo} alt="" class="self-center h-[80px] pt-2 " />
          </div>
           <div className='items-center mb-5'>
             <h6 className='sm:text-[18px] text-[16px] sm:mb-[-8px] font-medium text-gray-500'>RECOVER ACCOUNT</h6>
              <h2 className='sm:text-[35px] text-[25px]  font-medium sm:pt-1  text-gray-600'>Forgot your Password</h2>
              <h6 className='sm:text-[17px] text-[15px]  pb-5 text-gray-400'>Enter your email address below and we'll get you back on track</h6>
            </div>
          {/* <Message/> */}
          <div className='grid grid-cols-2 pb-2'>
          <div className=' text-left  text-gray-400 '>
            <h1 className='sm:text-[15px] text-[12px]  relative text-gray-400'>Enter your email</h1>
          </div>
          </div>


          <div class="relative">
            <input type="text" id="email-address-icon" class=" placeholder-gray-300 0 border h-[50px] border-gray-300 text-gray-900 text-[15px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  " placeholder='Email'></input>
          </div>
          

          <div className='flex flex-col items-center'>
            <button className='sm:w-[520px] rounded-md w-[275px] text-center py-3 mt-8 font-bold  bg-[#42ADF0] hover:bg-[#4D6B9C] relative  text-white hover:bold'>
              Send reset link
            </button>
          </div>
         
          

          <div className='text-left sm:mt-[25px] mt-5 text-gray-500 '>
            <p className='sm:text-l text-left text-[14px]'><Link className='sm:text-[15px] text-[15px]  text-[#42ADF0] hover:text-[#4D6B9C] ' to="/">Back to login</Link></p>
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
export default RecoverAccount;
