import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiRightArrow } from "react-icons/bi";

import user1 from "../../assets/11.jpg";
import { FaUser } from "react-icons/fa";
import DocHome from "../../assets/DocHome.png";

const PatientInfo = () => {
  const { id } = useParams(); // Extract the patient ID from the URL

  // Fetch the patient's information based on the ID
  // You can make an API call or retrieve data from a state management solution
  // For simplicity, let's assume we have a patientData object with sample data
  const patientData = {
    1: {
      healthid: 1234,
      name: "John Doe",
      email: "john@example.com",
      age: 35,
      gender: "Male",
      height: "170 cm",
      weight: "75 kg",
      bloodType: "B+",
    },
    2: {
      name: "Jane Smith",
      email: "jane@example.com",
      age: 28,
      gender: "Female",
      height: "170 cm",
      weight: "75 kg",
      bloodType: "B+",
    },
    3: {
      name: "Richa Gurung",
      email: "richa@example.com",
      age: 23,
      gender: "Female",
      height: "170 cm",
      weight: "75 kg",
      bloodType: "B+",
    },
  };

  const patientInfo = patientData[id];


  return (
    <div>
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
                <img src={user1} className="w-3/4 rounded-full" alt="" />
              </div>
              
              <div class="ml-8 mr-4 mb-4 text-xl">
                <div class="mt-7">
                <h1 class="text-gray-500">Health ID:</h1>
                <button className="flex items-center space-x-2 bg-eswasthya-blue text-white py-2 px-4 rounded-md">
                  <span>{patientInfo.healthid}</span>
                </button>
                </div>
                <div class="mt-7">
                  <h1 class="text-gray-500">Name</h1>
                  <span class="block">{patientInfo.name}</span>
                </div>
                <div class="mt-7">
                  <h1 class="text-gray-500">Email</h1>
                  <span class="block">{patientInfo.email}</span>
                </div>

                <div class="mt-7">
                  <h1 class="text-gray-500">Age</h1>
                  <span class="block">{patientInfo.age}</span>
                </div>
                <div class="mt-7">
                  <h1 class="text-gray-500">Height (in cm)</h1>
                  <span class="block">{patientInfo.height}</span>
                </div>
                <div class="mt-7">
                  <h1 class="text-gray-500">Weight (in kg)</h1>
                  <span class="block">{patientInfo.weight}</span>
                </div>
                <div class="mt-7">
                  <h1 class="text-gray-500">Blood</h1>
                  <span class="block">{patientInfo.bloodType}</span>
                </div>
                <div class="mt-7">
                  <h1 class="text-gray-500">Gender</h1>
                  <button className="flex items-center space-x-2 bg-eswasthya-blue text-white py-2 px-4 rounded-md">
                    <span>{patientInfo.gender}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-[22rem]">
            <div className="font-bold text-2xl mb-2 text-center text-eswasthya-blue">
              View Medical History
            </div>
            <p className="text-gray-700 text-base text-center">
              Look at patient {patientInfo.name}'s medical history, vaccinations, and allergy lists.
            </p>
            <div className="flex justify-center mt-4">
              <Link to="/medicalhistory">
                <button className="flex items-center space-x-2 bg-eswasthya-blue hover:bg-sky-400 text-white py-2 px-4 rounded-md">
                  <span>Go to Medical History</span>
                  <BiRightArrow className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-[22rem]">
            <div className="font-bold text-2xl mb-2 text-center text-eswasthya-blue">
              View {patientInfo.name}'s reports
            </div>
            <p className="text-gray-700 text-base text-center">
              View your patient's available reports.
            </p>
            <div className="flex justify-center mt-4">
              <Link to="/ureports">
                <button className="flex items-center space-x-2 bg-eswasthya-blue hover:bg-sky-400 text-white py-2 px-4 rounded-md">
                  <span>Go to Reports</span>
                  <BiRightArrow className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-[22rem]">
            <div className="font-bold text-2xl mb-2 text-center text-eswasthya-blue">
              Add your Diagnosis
            </div>
            <p className="text-gray-700 text-base text-center">
              Finished treating this patient? Add the diagnosis.
            </p>
            <div className="flex justify-center mt-4">
              <Link to="/dform">
                <button className="flex items-center space-x-2 bg-eswasthya-blue hover:bg-sky-400 text-white py-2 px-4 rounded-md">
                  <span>Add Diagnosis</span>
                  <BiRightArrow className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
