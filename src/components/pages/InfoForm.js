import React, { useState } from 'react';

const districtOptions = {
  Koshi: ['Bhojpur', 'Dhankuta','Ilam','Jhapa','Khotang','Morang','Okhaldhunga','','','','','','','','','',''],
  Madhesh: ['', '','','','','','','','','','','','','','','','','','',''], 
  Bagmati: ['', '','','','','','','','','','','','','','','','','','',''], 
  Gandaki: ['', '','','','','','','','','','','','','','','','','','',''], 
  Lumbini: ['', '','','','','','','','','','','','','','','','','','',''], 
  Karnali: ['', '','','','','','','','','','','','','','','','','','',''], 
  Sudurpashchim: ['', '','','','','','','','','','','','','','','','','','',''], 

  Sudurpashchim: ['', '','','','','','','','','','','','','','','','','','',''], 
};

const cityOptions = {
  Bhojpur: ['City 1', 'City 2', 'City 3'], // Replace with actual cities
  Dhankuta: ['City A', 'City B', 'City C'], // Replace with actual cities
  // Define options for other districts
};

const wardOptions = {
  'City 1': ['Ward 1', 'Ward 2', 'Ward 3'], // Replace with actual wards
  'City 2': ['Ward X', 'Ward Y', 'Ward Z'], // Replace with actual wards
  // Define options for other cities
};

const InfoForm = () => {
  const [state, setState] = useState({
    province: '',
    district: '',
    ward: '',
    city: ''
  });

  const inputHandle = (e) => {
    const { name, value } = e.target;

    if (name === 'province') {
      setState((prevState) => ({
        ...prevState,
        province: value,
        district: '',
        city: '',
        ward: ''
      }));
    } else if (name === 'district') {
      setState((prevState) => ({
        ...prevState,
        district: value,
        city: '',
        ward: ''
      }));
    } else if (name === 'city') {
      setState((prevState) => ({
        ...prevState,
        city: value,
        ward: ''
      }));
    } else if (name === 'ward') {
      setState((prevState) => ({
        ...prevState,
        ward: value
      }));
    }
  };

  return (
    <div className='flex flex-col mb-4'>
      <label>Select Your Gender:</label>
      <div className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-500 block w-full p-2.5'>
        <div className='text-base'>
          <input type="radio" name='gender' value="male" checked={state.gender === 'male'} onChange={inputHandle} /> Male <br />
          <input type="radio" name='gender' value="female" checked={state.gender === 'female'} onChange={inputHandle} /> Female <br />
          <input type="radio" name='gender' value="other" checked={state.gender === 'other'} onChange={inputHandle} /> Other
        </div>
      </div>

      <div className='flex flex-wrap -mx-2'>

        
        <div className='text-base w-1/2 px-2 mb-4'>
          <div className='border border-gray-300 rounded-lg'>
            Province:
            <div className='text-base'>
              <select className='border border-blue-500 rounded-lg p-1 mb-2 bg-[#e5f5ff7f]' name='province' value={state.province} onChange={inputHandle}>
                <option value=''>--------------</option>
                {Object.keys(districtOptions).map((province) => (
                  <option key={province} value={province}>{province}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className='text-base w-1/2 px-2 mb-4'>
          <div className='border border-gray-300 rounded-lg'>
            District:
            <div className='text-base'>
              <select className='border border-blue-500 rounded-lg p-1 mb-2 bg-[#e5f5ff7f]' name='district' value={state.district} onChange={inputHandle}>
                <option value=''>------</option>
                {state.province && districtOptions[state.province] && districtOptions[state.province].map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className='text-base w-1/2 px-2 mb-4'>
          <div className='border border-gray-300 rounded-lg'>
            City:
            <div className='text-base'>
              <select className='border border-blue-500 rounded-lg p-1 mb-2 bg-[#e5f5ff7f]' name='city' value={state.city} onChange={inputHandle}>
                <option value=''>------</option>
                {state.district && cityOptions[state.district] && cityOptions[state.district].map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className='text-base w-1/2 px-2 mb-4'>
          <div className='border border-gray-300 rounded-lg'>
            Ward:
            <div className='text-base'>
              <select className='border border-blue-500 rounded-lg p-1 mb-2 bg-[#e5f5ff7f]' name='ward' value={state.ward} onChange={inputHandle}>
                <option value=''>------</option>
                {state.city && wardOptions[state.city] && wardOptions[state.city].map((ward) => (
                  <option key={ward} value={ward}>{ward}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoForm;
