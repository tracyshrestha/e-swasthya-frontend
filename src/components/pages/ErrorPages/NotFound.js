import React, { useState } from 'react';
import page_not_found from '../../../assets/page_not_found.svg'


function NotFound() {
  return (
    <>
      <div className=' h-screen flex  flex-col justify-center items-center bg-[#ffffff] '>

        <div className='flex justify-center items-center sm:h-[80px] sm:w-full h-[25px] w-[350px] rounded-sm  '>
          <h2 className='sm:text-[40px] text-[25px] font-bold pb-10 text-gray-700 '>404 Page Not Found</h2>
        </div>

        <div className='flex justify-center items-center  '>
          <img src={page_not_found} alt="" class="self-center sm:h-[400px] h-[250px] pt-2" />
        </div>

        <div>
          <p className='  sm:text-lg text-[14px] pt-[30px] '> <a className='sm:text-lg text-[18px]  text-[#041a27] hover:text-[#42ADF0] font-bold ' href='/'>Log In Again</a></p>
        </div>

      </div>
    </>
  );

}
export default NotFound;
