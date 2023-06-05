import React, { useState, useEffect } from 'react';
import ver from '../../../assets/ver.svg'
import axios from 'axios';
import Message from '../../helpercomponents/Message';


const Verified = () => {
  const initialState = {
    loading: true,
    error: false,
    message: '',
  };

  const [values, setValues] = useState(initialState);

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        await axios.get(`${process.env.REACT_APP_API}api/user/verify-account`);
        setValues({ ...values, loading: false, error: false });
        console.log('Account verified successfully.');
      } catch (error) {
        console.log(error);
        setValues((prevState) => ({
          ...prevState,
          message: error?.response?.data?.data[0],
          loading: false,
          error: true,
        }));
      }
    };

    verifyAccount();
  }, []); // The empty dependency array ensures the effect is only run once on component mount


  return (
    <>
      <div className='h-screen flex  flex-col justify-center items-center bg-[#FFFFF] '>
        <div className='flex justify-center items-center sm:h-[80px] sm:w-full h-[25px] w-[350px] rounded-sm  '>
            <h2 className='sm:text-[40px] text-[25px] font-bold  text-gray-700 '>Your Email is Verified!</h2>
        </div>{values.error || values.message ? <Message message={values.message} error={values.error} /> : null}
        <div className='flex justify-center items-center  '>
          <img src={ver} alt="" class="self-center sm:h-[400px] h-[250px] pt-2" />
        </div>
        <div className=' text-center sm:mt-[25px] mt-5 text-gray-500 '>
          <p className='absolute bottom-[70px] right-[60px]  sm:text-lg text-[14px]  '>Now,  <a className='sm:text-lg text-[15px]  text-[#42ADF0] hover:text-[#4D6B9C] font-bold ' href='/'>Log In</a></p>

        </div>
      </div>
    </>
  );

}
export default Verified;
