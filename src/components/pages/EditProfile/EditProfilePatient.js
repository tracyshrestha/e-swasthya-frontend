import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import camera from '../../../assets/camera.png'
import { format, differenceInYears } from 'date-fns';


function EditProfilePatient() {

  const [state, setState] = useState({
    sliderValue: '40',
    gender: '',
  })

  const inputHandle = (e) => {
    setState({
      ...state,

      [e.target.name]: e.target.value


    })
  }


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

  return (

    <div className="w-screen h-full flex  justify-center items-center bg-[#E6F4F9]">
      <div className="p-4 flex justify-center items-center">
        <form className="h-full sm:w-[750px]  w-[350px] items-center rounded-sm  p-8 m-8 mt-1 mx-24  bg-white ">
          <div className="flex justify-center items-center ">
            <img src={logo} alt="" class="self-center h-[80px] pt-2 " />
          </div>
          <div className="flex justify-center items-center">
            <h2 className="items-center sm:text-[35px] text-[25px]  font-medium sm:pt-1  text-gray-600">
              Edit Your Patient Information
            </h2>
          </div>



          <div className=" pb-1 mx-3">
            <div className="relative">
              <div className=''>
                <div className='flex flex-col mb-2'>

                  <div className='flex justify-center items-center'>
                    {previewImage ? (
                      <img src={previewImage} alt="Selected Image" class="self-center h-[160px] p-5 border border-gray-300  rounded-lg" />
                    ) : (
                      <img src={camera} alt="Placeholder Image" class="self-center h-[160px] p-5 border border-gray-300  rounded-lg" />
                    )}

                  </div>


                  <label htmlFor="batch" className='mt-0 sm:mt-10'>Upload Photo</label>
                  <input
                    id="uploadInput" required
                    value={state.selectedFile}
                    onChange={(event) => {
                      inputHandle(event);
                      handleFileChange(event);
                    }}
                    multiple={false}
                    accept="image/*"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="file"
                    name="selectedFile"
                  />

                </div>

                <div className=' flex flex-col-2 xl: flex-col-1 mt-0 sm:mt-4 mb-4 '>
                  <div className='w-2/3 '>
                    <label htmlFor="name">Enter Your DOB:</label>
                    <div className=' '>
                      <input
                        type="date"
                        id="dob" required
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
               
                <div>
                  <div className="flex flex-col mt-0 sm:mt-3 mb-2">
                    <label htmlFor="name">Citizenship Number:</label>
                    <input required
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
                    <label htmlFor="name">Enter your Blood Type:</label>
                    <input required
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                      placeholder="Enter your phone number"
                      maxLength={3}
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

                
            <div className="flex flex-col mb-2  ">
              <label htmlFor="batch">Select Your Weight:</label>
              <div className="border border-gray-300 rounded-lg p-2.5">

                <input name='sliderValue' id='dept'
                  type="range"
                  min="0"
                  max="200"
                  value={state.sliderValue}
                  onChange={inputHandle}
                  className="w-full appearance-none h-3 rounded-full overflow-hidden bg-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                />
                <div className="flex justify-between">
                  <span>0</span>
                  <span>100</span>
                </div>
                <p className="text-center">{state.sliderValue}</p>
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
                          <input required
                            className='border border-blue-500 rounded-lg pb-1 mb-2 bg-[#e5f5ff7f]'
                            type="text"
                            placeholder="Enter your  Street Name"
                            maxLength={10}
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className='sm:mt-0 mt-9 gap-3 flex justify-center items-center'>
                  <button className='px-3 py-2 text-lg rounded-md w-full text-white bg-[#42ADF0]'>Submit</button>
                </div>
              </div>
            </div>
          </div>

        </form>

      </div>
    </div>

  );
}

export default EditProfilePatient;
