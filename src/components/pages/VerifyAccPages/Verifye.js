import React from 'react';
import LoginImage from '../../../assets/login.jpg'
import logo from '../../../assets/logo.png'
import Message from '../../helpercomponents/Message';
import { useState } from 'react';
import axios from 'axios';



const initialState = {
  email: '',
  error: false,
  message: '',
  loading: false
};

function Verifye() {
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      setValues((prevState) => ({ ...prevState, loading: true }));
      const res = await axios.get( `${process.env.REACT_APP_API}api/user/verification-resend-email/${values.email}`
      );
      console.log(res);
      setValues((prevState) => ({
        ...prevState,
        message: res.data.message,
        loading: false,
        error: false,
      }));
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
  


  return (
    <>
    <div className='sm:overflow-hidden  overflow-hidden w-screen h-screen grid grid-cols-1 xl:grid-cols-2 bg-[#ffff]'>

      <div className='p-4 flex flex-col justify-center items-center  '>

        <form className='border-[#f8f8f8] h-auto sm:w-[600px] w-[350px] items-center rounded-sm  p-9 m-8 mt-1 mx-24 bg-white mb-5' onSubmit={onSubmit} disabled={values.loading}>
          <div className='flex justify-center items-center pb-5'>
            <img src={logo} alt="" class="self-center h-[70px] sm:h-[80px] pt-2 " />
          </div>
          <div className='items-center'>
          {values.error || values.message ? <Message message={values.message} error={values.error} /> : null}
            <h6 className='sm:text-[18px] text-[16px] sm:mb-[-8px] font-medium text-gray-500'>ACTIVATE YOUR ACCOUNT</h6>
            <h2 className='sm:text-[35px] text-[25px]  font-medium sm:pt-1  text-gray-600'>Welcome  Back</h2>
            <h6 className='sm:text-[17px] text-[15px]  pb-5 text-gray-400'>Enter your email address below and we'll resend an email for verification.</h6>
          </div>
         
            <div className='grid grid-cols-2 pb-2'>
              <div className=' text-left  text-gray-400 '>
                <h1 className='sm:text-[15px] text-[12px]  relative text-gray-400'>Enter your email</h1>
              </div>
            </div>


            <div class="relative">
              <input required
                type="email"
                id="email-address-icon"
                className="placeholder-gray-300 0 border h-[50px] border-gray-300 text-gray-900 text-[15px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5"
                placeholder="Email"
                name="email" // Add the name attribute
                value={values.email} // Assign the value from the state
                onChange={handleChange} // Assign the handleChange function
              />

            </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-5'>
            <button className='sm:w-auto rounded-md w-auto text-center py-3 mt-8 font-bold  bg-[#42ADF0] hover:bg-[#4D6B9C] relative  text-white hover:bold'  type="submit">
              Resend verification link
            </button>

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
export default Verifye;
