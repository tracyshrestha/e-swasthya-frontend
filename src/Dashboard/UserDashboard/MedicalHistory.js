import React, { useState } from "react";
import { FaFileMedical } from "react-icons/fa";
import { MdOutlineVaccines } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";

const MedicalHistory = () => {
  const [medicalHistory, setMedicalHistory] = useState([
    {
      category: "Drug Allergies",
      items: ["Paracetamol"],
    },
    {
      category: "Diseases that the patient had",
      items: ["Covid-19 Year: 2022", "Pneumonia Year: 2023"],
    },
    {
      category: "Recent Weight",
      items: ["77kg"],
    },
    {
      category: "Recent Blood Pressure",
      items: ["90/180"],
    },
    {
      category: "Operations Done",
      items: ["None"],
    },
  ]);

  const [vaccinations, setVaccinations] = useState([
    {
      type: "Pfizer",
      category: "Covid-19",
      items: ["Vaccinated on: 09-10-2023"],
    },
    {
      type: "Polio",
      category: "Polio",
      items: ["Year:2023"],
    },
    {
      type: "Typhoid",
      category: "Typhoid Fever",
      items: ["Year:2022"],
    },
  ]);

  const [doctorsVisited, setDoctorsVisited] = useState([
    {
      doctor: "Dr. Sweta Gurung",
      reason: "Covid Symptoms",
      medicine: ["Flexon"],
      date: "16/10/2021",
      note: "The patient had just fever, so I prescribed Flexon.",
    },
    {
      doctor: "Dr. Sweta Gurung",
      reason: "Covid Symptoms",
      medicine: ["Flexon"],
      date: "16/10/2021",
      note: "The patient had just fever, so I prescribed Flexon.",
    },
    {
      doctor: "Dr. Sweta Gurung",
      reason: "Covid Symptoms",
      medicine: ["Flexon"],
      date: "16/10/2021",
      note: "The patient had just fever, so I prescribed Flexon.",
    },
  ]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-4">
        {/* First column */}
        <div className="p-4">
          <div className="rounded shadow-lg bg-white h-full">
            <div className="px-6 py-4">
              <div className="-translate-y-7 left-0 right-0">
                <div className="flex items-center">
                  <div className="py-4 bg-slate-200 flex items-center">
                    <FaFileMedical className="text-2xl mr-2 text-eswasthya-blue" />
                    <div className="font-bold text-xl text-eswasthya-blue">
                      Patient Medical History
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-8 mr-4 mb-4 h-full overflow-y-auto">
                {medicalHistory.map((category) => (
                  <div className="mt-5" key={category.category}>
                    <h1 className="text-gray-500">{category.category}</h1>
                    {category.items.map((item) => (
                      <span key={item} className="block">
                        {item}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Second column */}
        <div className="p-4">
          <div className="rounded shadow-lg bg-white h-full">
            <div className="px-6 py-4">
              <div className="-translate-y-7 left-0 right-0">
                <div className="flex items-center">
                  <div className="py-4 bg-slate-200 flex items-center">
                    <MdOutlineVaccines className="text-2xl mr-2 text-eswasthya-blue" />
                    <div className="font-bold text-xl text-eswasthya-blue">
                      Vaccinations
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-8 mr-4 mb-4 h-full overflow-y-auto">
                {vaccinations.map((vaccination) => (
                  <div className="mt-5" key={vaccination.category}>
                    <h1 className="text-gray-500">{vaccination.category}</h1>
                    {vaccination.items.map((item) => (
                      <span key={item} className="block">
                        {item}
                      </span>
                    ))}
                    <span className="block">Type: {vaccination.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* row 2 */}
      <div className="h-full p-4">
      <div className="rounded shadow-lg bg-white">
  <div className="px-6 py-4">
    <div className="-translate-y-7 left-0 right-0">
      <div className="flex items-center">
        <div className="py-4 bg-slate-200 flex items-center">
          <FaUserMd className="text-2xl mr-2 text-eswasthya-blue" />
          <div className="font-bold text-xl text-eswasthya-blue">
            Doctors Visited
          </div>
        </div>
      </div>
    </div>
        {/* Desktop View */}
        <div className="overflow-auto rounded-lg shadow hidden md:block">
          <table className="w-full text-eswasthya-blue">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Doctor
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Reason
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Prescribed Medicine
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Date
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Note
            </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {doctorsVisited.map((appointment, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {appointment.doctor}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {appointment.reason}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {appointment.medicine.join(", ")}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {appointment.date}
                  </td>
                 
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {appointment.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {doctorsVisited.map((appointment, index) => (
            <div
              key={index}
              className="bg-white space-y-3 p-4 rounded-lg shadow"
            >
              <div className="flex items-center space-x-2 text-sm">
                <div className="text-eswasthya-blue ">
                   <span className="font-bold text-eswasthya-blue">Date:</span> 
                   {appointment.date}</div>
              </div>
              <div className="text-sm text-gray-700">
                {appointment.doctor}
              </div>
              <div className="text-sm ">
              <span className="font-bold text-eswasthya-blue">Reason:</span> 
               {appointment.reason}
              </div>
              <div className="text-sm text-gray-700">
              <span className="font-bold text-eswasthya-blue">Prescribed Medicine:</span>{" "}
              {appointment.medicine.join(", ")}
            </div>
              <div className="text-sm">
              <span className="font-bold text-eswasthya-blue">Dr Note: </span> 
                {appointment.note}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default MedicalHistory;
