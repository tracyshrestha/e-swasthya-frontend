import  { useState } from 'react';
import lost from '../assets/lost.svg'


function NotFound() {
  return (
    <>
      <div className=' h-screen flex  flex-col justify-center items-center bg-[#ffffff] '>

        <div className='flex justify-center items-center sm:h-[80px] sm:w-full h-[25px] w-[350px] rounded-sm  '>
          <h2 className='sm:text-[40px] text-[25px] font-bold pb-10 text-gray-700 '>404 Page Not Found</h2>
        </div>

        <div className='flex justify-center items-center  '>
          <img src={lost} alt="" class="self-center sm:h-[400px] h-[250px] pt-2" />
        </div>

      </div>
    </>
  );

}
export default NotFound;
