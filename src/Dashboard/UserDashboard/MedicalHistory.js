import React from "react";

import { FaFileMedical } from "react-icons/fa";
import { MdOutlineVaccines } from "react-icons/md";
import { FaUserMd} from "react-icons/fa";

const MedicalHistory = () => {
  return (
    <div className="grid grid-cols-1 md:grid-rows-2 h-full gap-4">
      {/* row 1 */}
      <div className="row-span-1">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-3">
          {/* First column */}
          <div className="p-4">
            <div class=" rounded shadow-lg ">
              <div class="px-6 py-4">
                <div class=" -translate-y-7 left-0 right-0">
                  <div className="flex items-center">
                    <div className=" py-4 bg-slate-200 flex items-center">
                      <FaFileMedical className="text-2xl mr-2 text-eswasthya-blue" />
                      <div className="font-bold text-xl text-eswasthya-blue">
                        Patient Medical History
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ml-8 mr-4 mb-4 ">
                  <div>
                    <h1 class="text-gray-500">Drug Allergies</h1>
                    <span class="block">Paracetamol</span>
                  </div>
                  <div class="mt-7">
                    <h1 class="text-gray-500">Diseases that the patient had</h1>
                    <span class="block">Covid-19 Year: 2022</span>
                    <span class="block">Pneumonia Year: 2023</span>
                  </div>
                  <div class="mt-7">
                    <h1 class="text-gray-500">Recent Weight</h1>
                    <span class="block"> 77kg</span>
                  </div>
                  <div class="mt-7">
                    <h1 class="text-gray-500">Recent Blood Pressure</h1>
                    <span class="block"> 90/180</span>
                  </div>
                  <div className="mt-7">
                    <h1 class="text-gray-500">Operations Done</h1>
                    <span class="block">None</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Second column */}
          <div className="p-4">
            <div class=" rounded shadow-lg ">
              <div class="px-6 py-4">
                <div className="-translate-y-7 left-0 right-0">
                  <div className="flex items-center">
                    <div className="flex-none py-4 bg-slate-200 flex items-center">
                      <MdOutlineVaccines className="text-2xl mr-2 text-eswasthya-blue" />
                      <div className="font-bold text-xl text-eswasthya-blue">
                        Vaccinations
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ml-8 mr-4 mb-4 ">
                  <div>
                    <h1 class="text-gray-500">Drug Allergies</h1>
                    <span class="block">Paracetamol</span>
                  </div>
                  <div class="mt-7">
                    <h1 class="text-gray-500">Diseases that the patient had</h1>
                    <span class="block">Covid-19 Year: 2022</span>
                    <span class="block">Pneumonia Year: 2023</span>
                  </div>
                  <div class="mt-7">
                    <h1 class="text-gray-500">Recent Weight</h1>
                    <span class="block"> 77kg</span>
                  </div>
                  <div class="mt-7">
                    <h1 class="text-gray-500">Recent Blood Pressure</h1>
                    <span class="block"> 90/180</span>
                  </div>
                  <div className="mt-7">
                    <h1 class="text-gray-500">Operations Done</h1>
                    <span class="block">None</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* row 2 */}
      <div className="row-span-1 h-full p-4 rounded shadow-lg">
        <div className="-translate-y-7 left-0 right-0">
          <div className="flex items-center">
            <div className="flex-none py-4 bg-slate-200 flex items-center">
              <FaUserMd className="text-2xl mr-2 text-eswasthya-blue" />
              <div className="font-bold text-xl text-eswasthya-blue">
                Doctors Visited
              </div>
            </div>
          </div>
        </div>
        <div class="overflow-auto rounded-lg shadow hidden md:block">
          <table class="w-full">
            <thead class="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Doctor
                </th>
                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Reason
                </th>
                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                 Prescribed Medicine 
                </th>
                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Date
                </th>
                <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Doctor's Note
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr class="bg-white">
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Dr. Sweta Gurung
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Covid Symptoms
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                    Flexon
                  </span>
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  16/10/2021
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  The patient had just fever so i Prescribed Flexon.
                </td>
              </tr>
              <tr class="bg-white">
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Dr. Sweta Gurung
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Covid Symptoms
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                    Flexon
                  </span>
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  16/10/2021
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  The patient had just fever so i Prescribed Flexon.
                </td>
              </tr>
              <tr class="bg-white">
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Dr. Sweta Gurung
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Covid Symptoms
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                    Flexon
                  </span>
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  16/10/2021
                </td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  The patient had just fever so i Prescribed Flexon.
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
              <span class=" text-xs font-medium uppercase tracking-wide rounded-lg bg-opacity-50">
                  Dr. Sweta Gurung
                </span>
              </div>
              <div class="text-gray-500">10/10/2021</div>
            </div>
            <div class="text-sm text-gray-700">
              <h1 className="font-medium text-black">Prescribed Medicine:</h1>
              <span>Flexon</span> 
            </div>
            <div class="text-sm text-gray-700">
              <h1 className="font-medium text-black">Reason:</h1>
              <span>Covid Symptoms</span> 
            </div>
            <div class="text-sm text-gray-700">
              <h1 className="font-medium text-black">Note:</h1>
            <span> The patient had just fever so i prescribed Flexon.</span>
            </div>
          </div>
          <div class="bg-white space-y-3 p-4 rounded-lg shadow">
            <div class="flex items-center space-x-2 text-sm">
              <div>
              <span class=" text-xs font-medium uppercase tracking-wide rounded-lg bg-opacity-50">
                  Dr. Sweta Gurung
                </span>
              </div>
              <div class="text-gray-500">10/10/2021</div>
            </div>
            <div class="text-sm text-gray-700">
              <h1 className="font-medium text-black">Prescribed Medicine:</h1>
              <span>Flexon</span> 
            </div>
            <div class="text-sm text-gray-700">
              <h1 className="font-medium text-black">Reason:</h1>
              <span>Covid Symptoms</span> 
            </div>
            <div class="text-sm text-gray-700">
              <h1 className="font-medium text-black">Note:</h1>
            <span> The patient had just fever so i prescribed Flexon.</span>
            </div>
          </div>
          <div class="bg-white space-y-3 p-4 rounded-lg shadow">
            <div class="flex items-center space-x-2 text-sm">
              <div>
              <span class=" text-xs font-medium uppercase tracking-wide rounded-lg bg-opacity-50">
                  Dr. Sweta Gurung
                </span>
              </div>
              <div class="text-gray-500">10/10/2021</div>
            </div>
            <div class="text-sm text-gray-700">
              <h1 className="font-medium text-black">Prescribed Medicine:</h1>
              <span>Flexon</span> 
            </div>
            <div class="text-sm text-gray-700">
              <h1 className="font-medium text-black">Reason:</h1>
              <span>Covid Symptoms</span> 
            </div>
            <div class="text-sm text-gray-700">
              <h1 className="font-medium text-black">Note:</h1>
            <span> The patient had just fever so i prescribed Flexon.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;
