import React, { useState } from "react";
import google from "../../assets/google.png";
import medicine from "../../assets/medicine.svg";
import logo from "../../assets/logo.png";
import axios from "axios";

import Message from "../helpercomponents/Message";


let InitalState = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  repassword: '',
  role: '1',
  error: false,
  message: '',
  loading: false
}

function SignUp() {

  const [values, setValues] = useState(InitalState);

  const onChange = name => event => {
    setValues((preState) => {
      return { ...preState, [name]: event.target.value }
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setValues((prevState) => {return {...prevState,loading:true}})
    if (values.password !== values.repassword) {
      setValues((prevState) => {
        return { ...prevState, error: true, message: "Please make sure your password match." }
      })
    } 
      const toSendData = {
        email: values.email,
        firstName: values.fname,
        lastName: values.lname,
        password: values.password,
        rolesId: values.role,
      }

      //API fetching 
      try {
        setValues((prevState) => {return {...prevState,loading : true}})
        const res = await axios({
          url: `${process.env.REACT_APP_API}api/user/sign-up`,
          method: 'POST',
          data: toSendData
        })
        if(res) {
            console.log(res);
            setValues((preState) => {
               return {...preState,message:res.data.message,loading:false,error:false,fname:"",lname:"",password:"",repassword:"",email:""}
            })
        }
      }catch(error){
        console.log(error);
        if(error) {
           setValues((prevState) => {
                return {...prevState,loading:false,message:error?.response?.data?.data[0],error:true}
           })
        }
      }}
  

    return (
      <>
        <div className="w-screen h-screen grid grid-cols-1 xl:grid-cols-2  bg-[#FFFF]">
          <div className="p-4 flex flex-col justify-center items-center">
            <form onSubmit={onSubmit} className="h-auto sm:w-[600px] h-auto w-[350px] items-center rounded-sm  p-9 m-8 mt-1 mx-24 bg-white ">
              <div className="flex justify-center items-center ">
                <img src={logo} alt="" class="self-center h-[80px] pt-2 " />
              </div>
              <div className="items-center">
                <h6 className="sm:text-[18px] text-[16px] sm:mb-[-8px] font-medium text-gray-500">
                  SIGNUP
                </h6>
                <h2 className="sm:text-[35px] text-[25px]  font-medium sm:pt-1  text-gray-600">
                  Create an account
                </h2>
                <h6 className="sm:text-[17px] text-[15px]  pb-9 text-gray-400">
                  Fill out the form to get started
                </h6>
              </div>

              {values.error || values.message ? <Message message={values.message} error={values.error} /> : null}
              <div className=" pb-6">
                <div className="relative">
                  <div className='grid grid-cols-2 gap-4'>
                    <div className=' text-left  text-gray-400 '>
                      <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Enter your first name</h1>
                      <input
                        required
                        type="text"
                        id="email-address-icon"
                        class="placeholder-gray-300 h-[50px] 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                        placeholder="Firstname"
                        onChange={onChange('fname')}
                        value={values.fname}

                      ></input>
                    </div>
                    <div className=' text-left  text-gray-400 '>
                      <h1 className='sm:text-[15px] text-[12px] pb-2 relative text-gray-400'>Enter your last name</h1>
                      <input
                        required
                        type="text"
                        id="email-address-icon"
                        class=" h-[50px] placeholder-gray-300 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                        placeholder="lastname"
                        onChange={onChange('lname')}
                        value={values.lname}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" pb-6">
                <div className="relative">
                  <div className="grid grid-cols-2 pb-2">
                    <div className=" text-left  text-gray-400 ">
                      <h1 className="sm:text-[15px] text-[12px]  relative text-gray-400">
                        Enter your email
                      </h1>
                    </div>
                  </div>
                  <input
                    required
                    type="email"
                    id="email-address-icon"
                    class=" h-[50px] 0 placeholder-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5"
                    placeholder="Email"
                    onChange={onChange('email')}
                    value={values.email}
                  ></input>
                </div>
              </div>

              <div className="pb-6">
                <div className="relative">
                  <div className="grid grid-cols-2 pb-2">
                    <div className=" text-left  text-gray-400 ">
                      <h1 className="sm:text-[15px] text-[12px]  relative text-gray-400">
                        Enter your password
                      </h1>
                    </div>
                  </div>
                  <input
                    required
                    type="password"
                    id="email-address-icon"
                    class=" h-[50px] placeholder-gray-300 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                    placeholder="Password"
                    onChange={onChange('password')}
                    value={values.password}
                  ></input>
                </div>
              </div>

              <div className="relative pb-6">
                <div className="grid grid-cols-2 pb-2">
                  <div className=" text-left  text-gray-400 ">
                    <h1 className="sm:text-[15px] text-[12px]  relative text-gray-400">
                      Reenter your password
                    </h1>
                  </div>
                </div>
                <input
                  required
                  type="password"
                  id="email-address-icon"
                  class=" h-[50px] placeholder-gray-300 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                  placeholder="Reenter password"
                  onChange={onChange('repassword')}
                  value={values.repassword}
                ></input>
              </div>

              <div className="relative">
                <label htmlfor="role" class="block mb-2 text-sm  text-gray-400 dark:text-white"> Select right designation</label>
                <select id="role" required onChange={onChange('role')} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected value="1">Patient</option>
                  <option value="2">Doctor</option>
                </select>
              </div>


              <div className="flex flex-col items-center">
                <button type="submit" disabled={values.loading}  className="sm:w-[520px] w-[275px] text-center py-3 mt-5 font-bold  bg-[#42ADF0] hover:bg-[#4D6B9C] relative rounded-xl text-white hover:bold">
                  Sign Up
                </button>
              </div>
              <div className="relative flex py-5 items-center">
                <div class="flex-grow border-t border-gray-400"></div>
                <span class="flex-shrink mx-4 text-gray-400">or</span>
                <div class="flex-grow border-t border-gray-400"></div>
              </div>

              <p>
                <button className="flex items-center flex-col mb-4 sm:ml-[160px] ml-12 rounded-md hover:bg-[#E6F4F9] ">
                  <span class="inline-flex items-baseline  relative sm:p-3 p-1 rounded-md border-[2px] border-[#d4d2d2] sm:w-[220px] w-[172px] sm:text-[17px] text-[13px]">
                    <img
                      src={google}
                      alt=""
                      class="self-center w-5 h-5 rounded-full mx-1"
                    />
                    Sign up with Google
                  </span>
                </button>
              </p>

              <div className=" text-center sm:mt-[25px] mt-5 text-gray-500 ">
                <p className="sm: text-l text-[14px] text-center ">
                  Already have an account?{" "}
                  <a
                    className="sm:text-[15px] text-[15px]  text-[#42ADF0] hover:text-[#4D6B9C] "
                    href="/"
                  >
                    Log in.
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className="  w-full h-full hidden xl:block 2xl:p-[130px] 2xl:pt-[190px] p-[100px] bg-white">
            <img className=" inline auto" src={medicine} alt="/" />
            {/* <img className='inline 2xl:w-[550px] 2xl:h-[550px]  w-[400px] h-[350px]' src={laptop} alt="/" /> */}
          </div>
        </div>
      </>
    );
  }
  
  export default SignUp;
