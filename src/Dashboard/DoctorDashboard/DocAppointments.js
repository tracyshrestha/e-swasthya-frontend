import React, { useState } from "react";
import { Link } from "react-router-dom";
import person from "../../assets/person.png";
import { BiRightArrow } from "react-icons/bi";

const DocAppointments = () => {
  // Dummy data for appointments
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "John Doe",
      image: person,
      aptNotes: "Pain in stomach",
      date: "2023-06-05",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      image: person,
      aptNotes: "Covid Symptoms",
      date: "2023-06-07",
    },
    {
      id: 3,
      patientName: "Richa Gurung",
      image: person,
      aptNotes: "Headache",
      date: "2023-06-09",
    },
  ]);


  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-3xl text-eswasthya-blue mt-8 mb-4">
        Your Appointments
      </h1>
      <div className="flex flex-wrap max-w-[50rem]">
        <span className="text-bold text-xl ml-5">Patient List:</span>
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex flex-col p-4 w-full rounded overflow-hidden shadow-lg mx-4 my-4 sm:flex-row sm:items-center gap-4"
          >
            <img
              src={appointment.image}
              alt={appointment.patientName}
              className="w-16 h-16 rounded-full p-3"
            />
            <div className="ml-4 lg:flex-grow">
              <div className="font-bold text-xl">
                {appointment.patientName}
              </div>
              <p className="text-gray-700 text-base">
                <span>Reason: </span>
                {appointment.aptNotes}
              </p>
            </div>
            <div className="text-gray-600 ml-4 text-sm">
              {appointment.date}
            </div>
            <Link to={`/patientinfo/${appointment.id}`}> {/* Link to the patient info page with the patient ID */}
              <button className="flex items-center ml-4 space-x-2 bg-eswasthya-blue hover:bg-sky-400 text-white py-2 px-4 rounded-md">
                <span>View Info</span>
                <BiRightArrow className="w-4 h-4" />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocAppointments;
