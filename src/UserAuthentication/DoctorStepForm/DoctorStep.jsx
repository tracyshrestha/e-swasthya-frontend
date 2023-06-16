import { useState } from "react";

import LoginImage from "../../assets/login.jpg";
import logo from "../../assets/logo.png";


import LegalInformation from "./components/LegalInformation";
import ImageHandler from './components/ImageHandler'
import UserInformation from './components/Userinformation'

import { useContext } from "react";
import { FormContext } from "./components/formState/State";
import Message from "../Helper/Message"
import DoctorInformation from "./components/DoctorInformation";




function User() {

  const {formNo,formArray,next,prev,onSubmit,Userinformation} = useContext(FormContext);
  


  const Form1button = () => {
    return (
      <div className="flex flex-col items-center">
        <button
          type="button"
          className="sm:w-[520px] rounded-md w-[275px] text-center py-3 mt-8 font-bold  bg-[#42ADF0] hover:bg-[#4D6B9C] relative  text-white hover:bold"
          onClick={next}
        >
          Next
        </button>
      </div>
    )
  }

  const Form2button = () => {
    return (
      <div className='mt-1 gap-3 flex justify-center items-center'>
        <button type="button" className='px-3 py-2 text-lg rounded-md w-full text-white bg-[#42ADF0]' onClick={prev}>Previous</button>
        <button type="button" className='px-3 py-2 text-lg rounded-md w-full text-white bg-[#42ADF0]' onClick={next}>Next</button>
      </div>
    )
  }

  const Form3button = () => {
    return (
      <div className='mt-1 gap-3 flex justify-center items-center'>
        <button type="button" className='px-3 py-2 text-lg rounded-md w-full text-white bg-[#42ADF0]' onClick={prev}>Previous</button>
        <button type="submit" className='px-3 py-2 text-lg rounded-md w-full text-white bg-[#42ADF0]'>Submit</button>
      </div>
    )
  }
  

  return (
    <>
      <div className="w-screen h-max grid grid-cols-1 xl:grid-cols-2 bg-[#ffff]">
        <div className="p-4 flex flex-col justify-center items-center   ">
          <form
            onSubmit={onSubmit}
            className="border-[#f8f8f8] h-auto sm:w-[600px] h-auto w-[390px] items-center rounded-sm  p-9 m-8 mt-1 mx-24 bg-white mb-"
          >
            <div className="flex justify-center items-center ">
              <img src={logo} alt="" class="self-center lg:h-[80px] pt-2 " />
            </div>
            <div className="items-center mb-2">
              <h2 className="sm:text-[35px] text-[25px]  font-medium sm:pt-1  text-gray-600">
                Welcome Srijan,
              </h2>
              <h6 className="sm:text-[17px] text-[15px] pb-4 text-gray-400">
                you are one step closer to eswasthya platform.
              </h6>
              <div className="flex justify-start items-center ">
                {formArray.map((v, i) => (
                  <>
                    <div
                      className={`lg:w-[35px] w-[30px] my-3 text-white rounded-full ${formNo - 1 === i ||
                        formNo - 1 === i + 1 ||
                        formNo === formArray.length
                        ? "bg-[#42ADF0]"
                        : "bg-slate-400"
                        } lg:h-[35px] h-[30px] flex justify-center items-center`}
                    >
                      {v}
                    </div>
                    {i !== formArray.length - 1 && (
                      <div
                        className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length
                          ? "bg-[#42ADF0]"
                          : "bg-slate-400"
                          }`}
                      ></div>
                    )}
                  </>
                ))}
              </div>
            </div> 
           
            {Userinformation.error || Userinformation.message ? <Message message={Userinformation.message} error={Userinformation.error} /> : null}

            <div class="pb-6">

                 {formNo === 1 && <ImageHandler /> } 
                 {formNo === 2 && <UserInformation/> }
                 {formNo === 3 && <DoctorInformation /> }
                  
            </div>

            {
               formNo === 1 ? <Form1button/> :
               formNo === 2 ? <Form2button/> :
               <Form3button/>
            }

          
   </form>
        </div>
        <div className="  w-full h-full hidden xl:block mt-[18%] p-[2%] bg-white">
          <img className="inline auto" src={LoginImage} alt="/" />
          {/* <img className='inline 2xl:w-[550px] 2xl:h-[550px]  w-[400px] h-[350px]' src={laptop} alt="/" /> */}
        </div>
      </div>
    </>
  );
}
export default User;
