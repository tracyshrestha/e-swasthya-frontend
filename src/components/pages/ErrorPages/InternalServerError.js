import React, { useState } from 'react';
import server_down from '../../../assets/server_down.svg'


function InternalServerError() {
  return (
    <>
      <div className=' h-screen flex  flex-col justify-center items-center bg-[#ffffff] '>

        <div className='flex justify-center items-center sm:h-[80px] sm:w-full h-[25px] w-[350px] rounded-sm  '>
          <h2 className='sm:text-[40px] text-[25px] font-bold pb-10 text-gray-700 '>500 Internal Server Error</h2>
        </div>

        <div className='flex justify-center items-center  '>
          <img src={server_down} alt="" class="self-center sm:h-[400px] h-[250px] pt-2" />
        </div>
        <div>
          <p className='  sm:text-lg text-[14px] pt-[30px] '> <a className='sm:text-lg text-[18px]  text-[#041a27] hover:text-[#42ADF0] font-bold ' href='/'>Log In Again</a></p>
        </div>
      </div>
    </>
  );

}
export default InternalServerError;
