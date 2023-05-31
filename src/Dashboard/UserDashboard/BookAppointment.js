import React, { useState } from "react";

const BookAppointment = () => {
  const clearData = {
    patientName: "",
    aptNotes: "",
    aptDate: "",
  };

  const timeSlots = [
    { start: "8:00", end: "9:00", available: true },
    { start: "9:00", end: "10:00", available: true },
    { start: "10:00", end: "11:00", available: false },
    { start: "11:00", end: "12:00", available: true },
  ];

  const [formData, setFormData] = useState(clearData);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (formData.patientName && formData.aptDate && selectedTimeSlot) {
      const appointmentInfo = {
        patientName: formData.ownerName,
        aptNotes: formData.aptNotes,
        aptDate: formData.aptDate + " " + selectedTimeSlot,
      };
      console.log("Appointment data:", appointmentInfo);
      setFormData(clearData);
      setSelectedTimeSlot("");
    } else {
      alert("Please fill in the required fields.");
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-md pl-4 pr-4 pb-4">
          <h1 className="font-bold text-2xl pb-3 text-eswasthya-blue">
            Appointment Form
          </h1>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label
              htmlFor="patientName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Patient Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                onChange={(event) => {
                  setFormData({ ...formData, patientName: event.target.value });
                }}
                type="text"
                name="patientName"
                id="patientName"
                value={formData.patientName}
                required
                className="max-w-lg block w-full shadow-sm focus:ring-eswasthya-blue focus:border-eswasthya-blue sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label
              htmlFor="aptDate"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Appointment Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                required
                onChange={(event) => {
                  setFormData({ ...formData, aptDate: event.target.value });
                }}
                type="date"
                name="aptDate"
                id="aptDate"
                value={formData.aptDate}
                className="max-w-lg block w-full shadow-sm focus:ring-eswasthya-blue focus:border-eswasthya-blue sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label
              htmlFor="aptTime"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Available Time Slots
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (slot.available) {
                        setSelectedTimeSlot(`${slot.start} - ${slot.end}`);
                      }
                    }}
                    className={`py-2 px-4 rounded-md ${
                      selectedTimeSlot === `${slot.start} - ${slot.end}`
                        ? "bg-eswasthya-blue text-white"
                        : slot.available
                        ? "bg-white text-gray-700 border border-gray-300"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!slot.available}
                  >
                    {slot.start} - {slot.end}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label
              htmlFor="aptNotes"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Appointment Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea
                onChange={(event) => {
                  setFormData({ ...formData, aptNotes: event.target.value });
                }}
                value={formData.aptNotes}
                id="aptNotes"
                name="aptNotes"
                rows="3"
                required
                className="shadow-sm focus:ring-eswasthya-blue focus:border-eswasthya-blue mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Detailed comments about the condition"
              ></textarea>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-eswasthya-blue hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;
