import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiRightArrow } from "react-icons/bi";
import { HiPencilAlt } from "react-icons/hi";
import DocHome from "../../assets/DocHome.png";
import user1 from "../../assets/11.jpg";

const DoctorHome = () => {
  const [name] = useState("John Doe");
  const [isEditing, setIsEditing] = useState(false);
  const [doctorInfo, setDoctorInfo] = useState({
    birthDate: "9 Feb 2000",
    height: "170 cm",
    weight: "75 kg",
    bloodType: "B+",
    gender: "Male",
    specialty: "Cardiology",
    hospital: "ABC Hospital",
  });

  const handleChange = (e) => {
    setDoctorInfo({ ...doctorInfo, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Perform save operation or API call to update the data
  };

  return (
    <>
      <h1 className="text-4xl font-bold item-center text-[#242D32]">
        Welcome Doctor {name}
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 mt-2 gap-3">
        <div className="col-span-1 shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-center text-3xl text-eswasthya-blue mb-4 ">
              Your Information
            </div>

            <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1">
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src={user1}
                  className="w-50 h-40 rounded-full xl:block"
                  alt=""
                />
                <button
                  className="flex items-center justify-center mt-2 bg-eswasthya-blue hover:bg-sky-400 text-white py-2 px-4 rounded-md"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <span className="mr-1">Edit</span>
                  <HiPencilAlt className="w-4 h-4" />
                </button>
              </div>
              <div className="ml-8 mr-4 mb-4 text-xl">
                <div className="mt-7">
                  <h1 className="text-gray-500">Name</h1>
                  <span className="block">Dr. {name}</span>
                </div>
                <div className="mt-7">
                  <h1 className="text-gray-500">Email</h1>
                  <span className="block">john@example.com</span>
                </div>

                <div className="mt-7">
                  <h1 className="text-gray-500">Birth Date</h1>
                  {!isEditing ? (
                    <span className="block">{doctorInfo.birthDate}</span>
                  ) : (
                    <input
                      type="text"
                      name="birthDate"
                      value={doctorInfo.birthDate}
                      onChange={handleChange}
                      className="block w-full border rounded px-3 py-2 mt-1"
                    />
                  )}
                </div>
                <div className="mt-7">
                  <h1 className="text-gray-500">Height (in cm)</h1>
                  {!isEditing ? (
                    <span className="block">{doctorInfo.height}</span>
                  ) : (
                    <input
                      type="text"
                      name="height"
                      value={doctorInfo.height}
                      onChange={handleChange}
                      className="block w-full border rounded px-3 py-2 mt-1"
                    />
                  )}
                </div>
                <div className="mt-7">
                  <h1 className="text-gray-500">Weight (in kg)</h1>
                  {!isEditing ? (
                    <span className="block">{doctorInfo.weight}</span>
                  ) : (
                    <input
                      type="text"
                      name="weight"
                      value={doctorInfo.weight}
                      onChange={handleChange}
                      className="block w-full border rounded px-3 py-2 mt-1"
                    />
                  )}
                </div>
                <div className="mt-7">
                  <h1 className="text-gray-500">Blood</h1>
                  {!isEditing ? (
                    <span className="block">{doctorInfo.bloodType}</span>
                  ) : (
                    <input
                      type="text"
                      name="bloodType"
                      value={doctorInfo.bloodType}
                      onChange={handleChange}
                      className="block w-full border rounded px-3 py-2 mt-1"
                    />
                  )}
                </div>
                <div className="mt-7">
                  <h1 className="text-gray-500">Gender</h1>
                  {!isEditing ? (
                    <span className="block">{doctorInfo.gender}</span>
                  ) : (
                    <input
                      type="text"
                      name="gender"
                      value={doctorInfo.gender}
                      onChange={handleChange}
                      className="block w-full border rounded px-3 py-2 mt-1"
                    />
                  )}
                </div>
                <div className="mt-7">
                  <h1 className="text-gray-500">Speciality</h1>
                  <button className="flex items-center space-x-2 bg-eswasthya-blue text-white py-2 px-4 rounded-md">
                    <span>{doctorInfo.specialty}</span>
                  </button>
                </div>
                <div className="mt-7">
                  <h1 className="text-gray-500">Affiliated Hospitals</h1>
                  {!isEditing ? (
                    <span className="block">{doctorInfo.hospital}</span>
                  ) : (
                    <input
                      type="text"
                      name="hospital"
                      value={doctorInfo.hospital}
                      onChange={handleChange}
                      className="block w-full border rounded px-3 py-2 mt-1"
                    />
                  )}
                </div>
              </div>
            </div>
            {isEditing && (
              <div className="flex justify-center mt-4">
                <button
                  className="flex items-center space-x-2 bg-eswasthya-blue hover:bg-sky-400 text-white py-2 px-4 rounded-md"
                  onClick={handleSave}
                >
                  <span>Save</span>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="font-bold text-2xl mb-2 text-center text-eswasthya-blue">
              Your Appointments
            </div>
            <p className="text-gray-700 text-base text-center">
              View and manage your appointments.
            </p>
            <div className="flex justify-center mt-4">
              <Link to="/docappointments">
                <button className="flex items-center space-x-2 bg-eswasthya-blue hover:bg-sky-400 text-white py-2 px-4 rounded-md">
                  <span>Go to Appointments</span>
                  <BiRightArrow className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="inline-auto hidden xl:block w-full"
              src={DocHome}
              alt="/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorHome;
