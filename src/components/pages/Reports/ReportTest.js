import React, { useState } from "react";
import logo from "../../../assets/logo.png";



function ReportTest() {
  const [state, setState] = useState({

  })

  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleAddFiles = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file upload logic here
    // send the files to the server or perform any other action
    console.log('Files:', files);
  };

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
    setSelectedDate(e.target.value);
  };

  const [selectedDate, setSelectedDate] = useState('');


  return (

    <div className="w-screen h-full flex  justify-center items-center bg-[#E6F4F9]">
      <div className="p-4 flex justify-center items-center">
        <form className="h-auto sm:w-[750px]  w-[350px] items-center rounded-sm  p-8 m-8 mt-1 mx-24  bg-white ">
          <div className="flex justify-center items-center ">
            <img src={logo} alt="" class="self-center h-[80px] pt-2 " />
          </div>
          <div className="flex justify-center items-center">
            <h2 className="items-center sm:text-[35px] text-[25px]  font-medium sm:pt-1  text-gray-600">
              Test Result
            </h2>
          </div>



          <div className=" pb-1 mx-3">
            <div className="relative">
              <div className='pt-3'>

                <div className=' text-left  '>
                  <h1 className='sm:text-[15px] text-[12px] pb-2 relative'>Enter Test Name:</h1>
                  <input
                    required
                    type="text"
                    id=""
                    class="placeholder-gray-300 h-[50px] 0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                    placeholder="Firstname"

                  />
                </div>
                <div className='pt-3 text-left  '>
                  <h1 className='sm:text-[15px] text-[12px] pb-2 relative'>Test Result:</h1>
                  <textarea required
                    className="border border-gray-300 placeholder-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Test Result"
                    rows='4'
                    maxLength={10}
                  />
                </div>
                <div className='pt-3 text-left  '>
                  <h1 className='sm:text-[15px] text-[12px] pb-2 relative'>Description:</h1>
                  <textarea required
                    className="border border-gray-300 placeholder-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Description"
                    rows='4'
                    maxLength={10}
                  />
                </div>

                <div className='pt-3'>
                  <h1 className='sm:text-[15px] text-[12px] pb-2 relative'>Select Date:</h1>
                  <input  className="border border-gray-300 placeholder-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5"
                    type="date"
                    name="date"
                    value={selectedDate}
                    onChange={inputHandle}
                  />

                </div>
              

                {/* file add garna bakhi */}

                <div className='pt-3'>
                <h1 className='sm:text-[15px] text-[12px] pb-2 relative'>Upload Files::</h1>  
                <div className="border border-gray-300 placeholder-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-4">
                  <input  required type="file" multiple onChange={handleAddFiles} />
                  {/* <button onClick={handleSubmit}>Upload</button> */}
                  <ul >
                    {files.map((file, index) => (
                      <li className="" key={index}>
                        {file.name}
                        <button className='border border-gray-500 rounded-lg my-1.5 p-1 px-3 ml-6  bg-[#e5f5ffef] ' onClick={() => handleRemoveFile(index)}>Remove</button>
                      </li>
                    ))}
                  </ul>
                </div>
                </div>

                <div className='flex flex-col items-center'>
                  <button type="submit" className='sm:w-[520px] rounded-md w-[275px] text-center py-3 mt-8 font-bold  bg-[#42ADF0] hover:bg-[#4D6B9C] relative  text-white hover:bold'>
                    Submit
                  </button>
                </div>

              </div>
            </div>
          </div>

        </form>

      </div>
    </div>

  );
}

export default ReportTest;
