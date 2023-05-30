import React from 'react'

import {BiCalendar} from 'react-icons/bi';

const Appointments = () => {
  return (
    <div className='p-4 rounded shadow-lg'>
    

          <div className="flex items-center">
            <div className="flex-none py-4 flex items-center">
              <BiCalendar className="text-2xl mr-2 text-eswasthya-blue" />
              <div className="font-bold text-xl text-eswasthya-blue">
                Your Appointments
              </div>
            </div>
          </div>
        
                
      <div className=" h-full p-4">
        <div class="overflow-auto rounded-lg shadow hidden md:block">
          <table class="w-full">
            <thead class="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Doctor
                </th>
                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Specialist
                </th>
                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Status
                </th>
                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Date
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr class="bg-white">
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Dr. Richa Gurung
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Cardiologist
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                    Accepted
                  </span>
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  16/10/2021
                </td>
              </tr>
              <tr class="bg-gray-50">
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Dr. Richa Gurung
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Cardiologist
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                    Pending
                  </span>
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  16/10/2021
                </td>
              </tr>
              <tr class="bg-white">
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Dr. Richa Gurung
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Cardiologist
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider bg-red-600 rounded-lg bg-opacity-50">
                    Cancelled
                  </span>
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  16/10/2021
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* for mobile responsive */}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          <div class="bg-white space-y-3 p-4 rounded-lg shadow">
            <div class="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" class="text-blue-500 font-bold hover:underline">
                  #1000
                </a>
              </div>
              <div class="text-gray-500">10/10/2021</div>
              <div>
                <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                  Delivered
                </span>
              </div>
            </div>
            <div class="text-sm text-gray-700">
              Kring New Fit office chair, mesh + PU, black
            </div>
            <div class="text-sm font-medium text-black">$200.00</div>
          </div>
          <div class="bg-white space-y-3 p-4 rounded-lg shadow">
            <div class="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" class="text-blue-500 font-bold hover:underline">
                  #1001
                </a>
              </div>
              <div class="text-gray-500">10/10/2021</div>
              <div>
                <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                  Shipped
                </span>
              </div>
            </div>
            <div class="text-sm text-gray-700">
              Kring New Fit office chair, mesh + PU, black
            </div>
            <div class="text-sm font-medium text-black">$200.00</div>
          </div>
          <div class="bg-white space-y-3 p-4 rounded-lg shadow">
            <div class="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" class="text-blue-500 font-bold hover:underline">
                  #1002
                </a>
              </div>
              <div class="text-gray-500">10/10/2021</div>
              <div>
                <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">
                  Canceled
                </span>
              </div>
            </div>
            <div class="text-sm text-gray-700">
              Kring New Fit office chair, mesh + PU, black
            </div>
            <div class="text-sm font-medium text-black">$200.00</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointments