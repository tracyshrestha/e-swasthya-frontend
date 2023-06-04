import React, { useState } from 'react';
import ver from '../../../assets/ver.svg'


function Verified() {
  return (
    <>
      <div className='h-screen flex  flex-col justify-center items-center bg-[#FFFFF] '>
        <div className='flex justify-center items-center sm:h-[80px] sm:w-full h-[25px] w-[350px] rounded-sm  '>
          <h2 className='sm:text-[40px] text-[25px] font-bold  text-gray-700 '>Your Email is Verified!</h2>
        </div>
        <div className='flex justify-center items-center  '>
          <img src={ver} alt="" class="self-center sm:h-[400px] h-[250px] pt-2" />
        </div>
      </div>
    </>
  );

}
export default Verified;
