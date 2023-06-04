import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import camera from '../../../assets/camera.png'
import { format, differenceInYears } from 'date-fns';
import logo from '../../../assets/logo.png'

function InfoFDoc() {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0])
  const [state, setState] = useState({
    sliderValue: '40',
    gender: '',
    yourArrayProperty: [],
  })

  const inputHandle = (e) => {
    setState({
      ...state,

      [e.target.name]: e.target.value


    })
  }

  const handleArrayInputChange = (values) => {
    setState({
      ...state,
      yourArrayProperty: values,
      currentValue: ''
    });
  };

  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const formattedDate = format(selectedDate, 'yyyy-MM-dd');
    const calculatedAge = differenceInYears(new Date(), selectedDate);

    setDob(formattedDate);
    setAge(calculatedAge);
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  // const [sliderValue] = useState(40);

  const handleformat = (event) => {
    const { name, value } = event.target;
    const formattedValue = formatCitizenshipNumber(value);
    setState((prevState) => ({ ...prevState, [name]: formattedValue }));
  };

  const formatCitizenshipNumber = (value) => {
    // Remove non-numeric characters from the input
    const numericValue = value.replace(/[^0-9]/g, '');

    // Format the value with hyphens
    let formattedValue = '';
    for (let i = 0; i < numericValue.length; i++) {
      if (i === 2 || i === 4 || i === 6) {
        formattedValue += '-';
      }
      formattedValue += numericValue[i];
    }

    return formattedValue;
  };

  //does not allow going to the next step without filling of all fields
  const next = () => {
    if (formNo === 1) {
      setFormNo(formNo + 1)
    }
    else if (formNo === 2) {
      setFormNo(formNo + 1)
    } else {
      toast.error('Please fill up all input field')
    }
  }
  //going to the previous step
  const pre = () => {
    setFormNo(formNo - 1)
  }
  const finalSubmit = () => {
    if (state.citizenship && state.province && state.district && state.ward && state.city) {
      toast.success('form submit success')
    } else {
      toast.error('Please fill up all input field')
    }
  }




  return (
    <div className="w-screen h-full pb-[80px] flex flex-col justify-center items-center  bg-[#E6F4F9]">
      <ToastContainer />
      <div className='flex justify-center items-center '>
        <img src={logo} alt="" class="self-center sm:h-[80px] h-[60px] pt-2 " />
      </div>
      <div className="  sm:w-[600px] sm:h-full h-full w-[350px] items-center rounded-sm border-[2px] border-[#f8f8f8] p-9 sm:m-9 m-0 sm:mx-24 bg-white">
        <div className='flex justify-center items-center'>
          <h2 className='sm:text-[30px] text-[22px] font-bold  text-gray-700'>Fill In Your InformationD
          </h2>
        </div>
        <div className='flex justify-center items-center'>
          {
            formArray.map((v, i) => <><div className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-[#42ADF0]' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
              {v}
            </div>
              {
                i !== formArray.length - 1 && <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-[#42ADF0]' : 'bg-slate-400'}`}></div>
              }
            </>)
          }
        </div>
        {
          formNo === 1 && <div>

            <div className='flex flex-col mb-2'>
              
              <div>
                <div className="flex flex-col mt-0 sm:mt-3 mb-2">
                  <label htmlFor="name">Enter your Phone Number:</label>
                  <input required
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="number"
                    placeholder="Enter your phone number"
                    maxLength={10}
                  />
                </div>
              </div>
              <div>
              <div className="flex flex-col mt-0 sm:mt-3 mb-2">
                <label htmlFor="name">Citizenship Number:</label>
                <input
                  value={state.citizenship}
                  onChange={handleformat}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  type="text"
                  name="citizenship"
                  placeholder="Enter your citizenship number"
                  maxLength={14}
                />
              </div>
            </div>
              <div>
                <div className="flex flex-col mt-0 sm:mt-3 mb-2">
                  <label htmlFor="name">Enter your NMC Liscence Number:</label>
                  <input required
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="number"
                    placeholder="Enter your liscence number"
                    maxLength={10}
                  />
                </div>
              </div>

            </div>

            <div>
              <div className="flex flex-col mt-0 sm:mt-3 mb-2">
                <label htmlFor="name">Enter your Education</label>
                <textarea required
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your education"
                  rows='4'
                  maxLength={10}
                />
              </div>
            </div>

            <div className='mt-0 sm:mt-10 flex justify-center items-center'>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-[#42ADF0]'>Next</button>
            </div>
          </div>
        }

        {
          formNo === 2 && <div>


            <div className=' flex flex-col-2 xl: flex-col-1 mt-0 sm:mt-4 mb-4 '>
              <div className='w-2/3 '>
                <label htmlFor="name">Enter Your DOB:</label>
                <div className=' '>
                  <input
                    type="date"
                    id="dob"
                    value={dob}
                    onChange={(event) => {
                      inputHandle(event);
                      handleDateChange(event);
                    }}
                    className=" w-2/3 border border-gray-300 p-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="w-1/3">
                <label htmlFor="dob" className="text-gray-700">Your Age:</label>
                <div className='pt-1.5 '>
                  {age && <p className='text-blue-500 font-bold pl-3 '> {age}</p>}
                </div>
              </div>
            </div>

            <div className="relative">
              <label htmlfor="role" class="block mb-2 text-sm  text-gray-400 dark:text-white"> Select your specialization</label>
              <select id="" required class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option selected value="">Select</option>
                <option value="">General practitioner</option>
                <option value="">Internal medicine</option>
                <option value="">Family medicine</option>
                <option value="">Neurologist</option>
                <option value="">Pediatrician</option>
                <option value="">Pediatrics</option>
                <option value="">Psychiatrist</option>
                <option value="">Obstetrics and gynaecology</option>
                <option value=""></option>
              </select>
            </div>
            <div>
              <div className="flex flex-col mt-0 sm:mt-3 mb-2">
                <label htmlFor="name">Enter your Experience</label>
                <textarea required
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your experience"
                  rows='4'
                  maxLength={10}
                />
              </div>
            </div>
            <div className='flex flex-col mb-4 '>
              <label  >Select Your Gender:</label>

              <div className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-500 block w-full  p-2.5'>

                <div className='text-base'>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={state.gender === 'male'}
                    onChange={inputHandle}
                  />{' '}
                  Male <br />
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={state.gender === 'female'}
                    onChange={inputHandle}
                  />{' '}
                  Female <br />
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={state.gender === 'other'}
                    onChange={inputHandle}
                  />{' '}
                  Other
                </div>
              </div>


            </div>



            <div className='mt-0 sm:mt-11 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-[#42ADF0]'>Previous</button>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-[#42ADF0]'>Next</button>
            </div>
          </div>
        }

        {
          formNo === 3 && <div>

            <div>
            <label htmlFor="name">Associated Hospitals:</label>
            <div className="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5">
              
              <div className=' flex flex-col-2 xl: flex-col-1 mt-0 sm:mt-4 mb-4 '>
              
                <input className="border border-blue-500 rounded-lg text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-2/3 py-2.5"
                  type="text"
                  value={state.currentValue}
                  onChange={inputHandle}
                  name="currentValue"
                  placeholder="Enter a value"
                />
                <button className='border border-gray-500 rounded-lg my-1.5 px-6 ml-6  bg-[#e5f5ffef] ' onClick={() => handleArrayInputChange([...state.yourArrayProperty, state.currentValue])}>
                  Add
                </button>
              </div>
              

              <ul>
                {state.yourArrayProperty.map((value, index) => (
                  <li key={index}>
                    {value}
                    <button className='border border-gray-500 rounded-lg p-1 px-4 ml-6 mb-1  bg-[#e5f5ffef] ' onClick={() => handleArrayInputChange(state.yourArrayProperty.filter((_, i) => i !== index))}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
</div>

          
            <div className='flex flex-col mb-4 '> Location:
              <div className='flex flex-wrap justify-center items-center bg-white p-2 text-center w-full '>


                <div className='text-base w-1/2 '>
                  <div className=' sm:mb-4 sm:mr-4 mb-3 mr-1 border border-gray-300 rounded-lg' >
                    Province:
                    <div className='text-base   '>
                      <select className='border border-blue-500 rounded-lg pb-1 mb-2 bg-[#e5f5ff7f]' name='loaction' value={state.province} onChange={inputHandle}  >
                        <option value="">&nbsp;&nbsp;&nbsp;--------------</option>
                        <option value="">Koshi</option>
                        <option value="">Madhesh</option>
                        <option value="">Bagmati</option>
                        <option value="">Gandaki</option>
                        <option value="">Lumbini</option>
                        <option value="">Karnali</option>
                        <option value="">Sudurpashchim</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='text-base w-1/2 '>
                  <div className='sm:mb-3 sm:ml-4 mb-3 mr-0  border border-gray-300 rounded-lg' >
                    District:
                    <div className='text-base   '>
                      <select className='border border-blue-500 rounded-lg pb-1 mb-2 bg-[#e5f5ff7f]' name='loaction' value={state.district} onChange={inputHandle}  >
                        <option value="">&nbsp;&nbsp;&nbsp;------</option>
                        <option value="">Bhojpur</option>
                        <option value="">Dhankuta</option>
                        <option value=""></option>

                      </select>
                    </div>
                  </div>
                </div>
                <div className='text-base w-1/2 '>
                  <div className='sm:mt-4 sm:mr-4 mb-3 mr-0  border border-gray-300 rounded-lg' >
                  Municipality:
                    <div className='text-base   '>
                      <select className='border border-blue-500 rounded-lg pb-1 mb-2 bg-[#e5f5ff7f]' name='loaction' value={state.municipality} onChange={inputHandle}  >
                        <option value="">&nbsp;&nbsp;&nbsp;------</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='text-base w-1/2 '>
                  <div className='sm:mt-4 sm:ml-4 mb-3 mr-0  border border-gray-300 rounded-lg' >
                    Ward:
                    <div className='text-base   '>
                      <select className='border border-blue-500 rounded-lg pb-1 mb-2 bg-[#e5f5ff7f]' name='loaction' value={state.ward} onChange={inputHandle}  >
                        <option value="">&nbsp;&nbsp;&nbsp;------</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className='text-base w-1/2 '>
                  <div className='sm:mt-4 sm:ml-4 mb-3 mr-0  border border-gray-300 rounded-lg' >
                    Street Name:
                    <div className='text-base   '>
                      <select className='border border-blue-500 rounded-lg pb-1 mb-2 bg-[#e5f5ff7f]' name='loaction' value={state.streetname} onChange={inputHandle}  >
                        <option value="">&nbsp;&nbsp;&nbsp;------</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
                    </div>
                  </div>
                </div>




              </div>
            </div>
            <div className='sm:mt-0 mt-9 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-[#42ADF0]'>Previous</button>
              <button onClick={finalSubmit} className='px-3 py-2 text-lg rounded-md w-full text-white bg-[#42ADF0]'>Submit</button>
            </div>
          </div>
        }

      </div>
    </div>
  );
}

export default InfoFDoc;