import React, { useState } from 'react';
import { BiCalendar } from 'react-icons/bi';

const Appointments = () => {
  const [appointments] = useState([
    {
      doctor: 'Dr. Richa Gurung',
      specialist: 'Cardiologist',
      date: '16/10/2021',
      time: '8-9',
    },
    {
      doctor: 'Dr. Richa Gurung',
      specialist: 'Cardiologist',
      date: '16/10/2021',
      time: '8-9',
    },
    {
      doctor: 'Dr. Richa Gurung',
      specialist: 'Cardiologist',
      status: 'Cancelled',
      date: '16/10/2021',
      time: '8-9',
    },
  ]);

  return (
    <div className="p-4 rounded shadow-lg">
      <div className="flex items-center">
        <div className="flex-none py-4 flex items-center">
          <BiCalendar className="text-2xl mr-2 text-eswasthya-blue" />
          <div className="font-bold text-xl text-eswasthya-blue">
            Your Appointments
          </div>
        </div>
      </div>

      <div className="h-full p-4">
        {/* Desktop View */}
        <div className="overflow-auto rounded-lg shadow hidden md:block">
          <table className="w-full text-eswasthya-blue">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Doctor
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Specialist
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Date
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Time Slot
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {appointments.map((appointment, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {appointment.doctor}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {appointment.specialist}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {appointment.date}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {appointment.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {appointments.map((appointment, index) => (
            <div
              key={index}
              className="bg-white space-y-3 p-4 rounded-lg shadow"
            >
              <div className="flex items-center space-x-2 text-sm">
                <div className="text-eswasthya-blue ">{appointment.date}</div>
                <div className="text-eswasthya-blue">
              <span className="font-bold">Time:</span>
                  {appointment.time} </div>
              </div>
              <div className="text-sm text-gray-700">
                {appointment.doctor}
              </div>
              <div className="text-sm font-medium text-black">
                {appointment.specialist}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
