import React, { useState } from 'react';

import google from '../../assets/google.png'
import LoginImage from '../../assets/login.jpg'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import Message from '../helpercomponents/Message';
import axios from 'axios';
import jwt from 'jwt-decode';
import jwtDecode from 'jwt-decode';


//Inital state for values
let InitalState = {
  email: '',
  password: '',
  error: false,
  message: '',
  loading: false
}

function LogIn() {
  const [values, setValues] = useState(InitalState);

  //When form input field changes
  const Onchange = name => event => {
    setValues((prevState) => {
      return { ...prevState, [name]: event.target.value }
    })
  }

  //On form Submit
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API}api/auth/login`,
        data: {
          email: values.email,
          password: values.password
        }
      })

      // Extract the JWT token from the response
      const token = res.data.jwt;

      // Store the token in local storage
      localStorage.setItem('token', token);

      console.log(res);
    } catch (error) {
      console.log(error);
      if (error) {
        setValues((prevState) => {
          return { ...prevState, loading: false, message: error?.response?.data?.data[0], error: true }
        })
      }
    }
  }


  return (
    <>
      <div className='w-screen h-screen grid grid-cols-1 xl:grid-cols-2 bg-[#ffff]'>

        <div className='p-4 flex flex-col justify-center items-center   '>

          <form onSubmit={onSubmit} className='border-[#f8f8f8] h-auto sm:w-[600px] w-[350px] items-center rounded-sm  p-9 m-8 mt-1 mx-24 bg-white mb-5'>
            <div className='flex justify-center items-center '>
              <img src={logo} alt="" class="self-center h-[80px] pt-2 " />
            </div>
            <div className='items-center mb-2'>
              <h6 className='sm:text-[18px] text-[16px] sm:mb-[-8px] font-medium text-gray-500'>LOGIN</h6>
              <h2 className='sm:text-[35px] text-[25px]  font-medium sm:pt-1  text-gray-600'>Welcome Back</h2>
              <h6 className='sm:text-[17px] text-[15px]  pb-9 text-gray-400'>Login to manage your account</h6>
            </div>


            {/* <Message/> */}
            {values.error || values.message ? <Message message={values.message} error={values.error} /> : null}
            <div class="pb-6">

              <div className='grid grid-cols-2 pb-2'>
                <div className=' text-left  text-gray-500 '>
                  <h1 className='sm:text-[15px] text-[12px]  relative text-gray-400'>Enter your email</h1>
                </div>
              </div>

              <div class="relative">
                <input onChange={Onchange('email')} value={values.email} required type="email" id="email-address-icon" class=" placeholder-gray-300 0 h-[50px] border border-gray-300 text-gray-900 text-[15px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  " placeholder="Email"></input>
              </div>
            </div>

            <div className='grid grid-cols-2 pb-2'>
              <div className=' text-left  text-gray-400 '>
                <h1 className='sm:text-[15px] text-[12px]  relative text-gray-400'>Enter your password</h1>
              </div>
              <div className=' text-right  text-gray-400 '>
                <a className='sm:text-[14px] text-[10px]  relative text-[#42ADF0] hover:text-[#4d82d7] ' href='/forget'>Forgot password?</a>
              </div>
            </div>

            <div class="relative">
              <input onChange={Onchange('password')} value={values.password} required type="password" id="email-address-icon" class=" placeholder-gray-300 0 border h-[50px] border-gray-300 text-gray-900 text-[15px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  " placeholder='**********'></input>
            </div>


            <div className='flex flex-col items-center'>
            <Link to="/verify">
              <button type="submit" className='sm:w-[520px] rounded-md w-[275px] text-center py-3 mt-8 font-bold  bg-[#42ADF0] hover:bg-[#4D6B9C] relative  text-white hover:bold' href='/verify'>
                Log In
              </button></Link>
            </div>
            <div class="relative flex py-5 items-center">
              <div class="flex-grow border-t border-gray-400"></div>
              <span class="flex-shrink mx-4 text-gray-400">or</span>
              <div class="flex-grow border-t border-gray-400"></div>
            </div>

            <p>
              <button className='flex items-center flex-col mb-4 sm:ml-[160px] ml-12 rounded-md hover:bg-[#E6F4F9] '>
                <span class="inline-flex items-baseline  relative p-3 rounded-md border-[2px] border-[#d4d2d2] sm:w-[200px] w-[172px] sm:text-[17px] text-[13px]">
                  <img src={google} alt="" class="self-center w-5 h-5 rounded-full mx-1" />
                  Log in with Google
                </span>
              </button>
            </p>

            <div className=' text-center sm:mt-[25px] mt-5 text-gray-500 '>
              <p className='sm:text-l text-[14px] text-center '>Don't have an account yet?  <a className='sm:text-[15px] text-[15px]  text-[#42ADF0] hover:text-[#4D6B9C] ' href='/signup'>Sign up here</a></p>

            </div>
          </form>

        </div>
        <div className='  w-full h-full hidden xl:block mt-[18%] p-[2%] bg-white'>
          <img className='inline auto' src={LoginImage} alt="/" />
          {/* <img className='inline 2xl:w-[550px] 2xl:h-[550px]  w-[400px] h-[350px]' src={laptop} alt="/" /> */}
        </div>
      </div>
    </>
  );

}
export default LogIn;
