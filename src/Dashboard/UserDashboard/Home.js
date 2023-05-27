import React from "react";

import { FaUser } from "react-icons/fa";
import { FaFileMedical } from "react-icons/fa";
import { MdOutlineVaccines } from "react-icons/md";
import { BiRightArrow } from "react-icons/bi";
import {HiPencilAlt} from "react-icons/hi";

import user1 from "../../assets/11.jpg";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-full ">
      <div className="col-span-1 shadow-lg">
        {/* column 1 */}
        <div class=" px-6 py-4">
          <div class=" -translate-y-7 left-0 right-0">
            <div className="flex items-center">
              <div className=" py-4 bg-slate-200 flex items-center">
                <FaUser className="text-2xl mr-2 text-eswasthya-blue" />
                <div className="font-bold text-xl text-eswasthya-blue">
                  Patient Information
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1">
            <div className="col-span-1 flex flex-col items-center">
              <img
                src={user1}
                className="w-3/4 rounded-full"
                alt=""
              />
              <button className="flex items-center justify-center mt-2 bg-eswasthya-blue hover:bg-sky-400 text-white py-2 px-4 rounded-md">
                <span className="mr-1">Edit</span>
                <HiPencilAlt className="w-4 h-4" />
              </button>
            </div>
            <div class="ml-8 mr-4 mb-4 text-xl">
              <div class="mt-7">
                <h1 class="text-gray-500">Name</h1>
                <span class="block">John Smith</span>
              </div>
              <div class="mt-7">
                <h1 class="text-gray-500">Email</h1>
                <span class="block">john@example.com</span>
              </div>

              <div class="mt-7">
                <h1 class="text-gray-500">Birth Date</h1>
                <span class="block">9 Feb 2000</span>
              </div>
              <div class="mt-7">
                <h1 class="text-gray-500">Height (in cm)</h1>
                <span class="block">170 cm</span>
              </div>
              <div class="mt-7">
                <h1 class="text-gray-500">Weight (in kg)</h1>
                <span class="block">75 kg</span>
              </div>
              <div class="mt-7">
                <h1 class="text-gray-500">Gender</h1>
                <button className="flex items-center space-x-2 bg-eswasthya-blue text-white py-2 px-4 rounded-md">
                  <span>Male</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <div>
          {/* column 2 row 1 */}
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
              <div className="mt-7">
                <h1 class="text-gray-500">Operations Done</h1>
                <span class="block">None</span>
              </div>
                <div class="mt-7">
                  <button className="flex items-center space-x-2 bg-eswasthya-blue hover:bg-sky-400 text-white py-2 px-4 rounded-md">
                    <span>See More</span>
                    <BiRightArrow className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* column 2 row 2 */}
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
              <div class="ml-8 mr-4 mb-4">
                <span class="block">John Smith</span>
                <span class="block pl-[0.2rem]"> john@example.com</span>

                <div class="mt-7">
                  <h1>Birth Date</h1>
                  <span class="block">John Smith</span>
                </div>
                <div class="mt-7">
                  <h1>Height</h1>
                  <span class="block">John Smith</span>
                </div>
                <div class="mt-7">
                  <h1>Weight</h1>
                  <span class="block">John Smith</span>
                </div>
                <div class="mt-7">
                  <button className="flex items-center space-x-2 bg-eswasthya-blue hover:bg-sky-400 text-white py-2 px-4 rounded-md">
                    <span>See More</span>
                    <BiRightArrow className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
