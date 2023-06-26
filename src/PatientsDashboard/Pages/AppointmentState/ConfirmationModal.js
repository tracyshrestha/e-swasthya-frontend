import Message from "../../../UserAuthentication/Helper/Message";
import { useState, useEffect } from "react";

import { useContext } from "react";
import { AppointmentContext } from "./GlobalState";
import { PatientContext } from "../../PatientGlobalState";
import { useParams } from "react-router-dom";

const AppointmentConfirmation = () => {
const { AppointmentData,closeAppointment,Onconfirm} = useContext(AppointmentContext);

const formatAMPM = (time24) => {
  var hour = parseInt(time24?.split(':')[0]);
  var minute = time24?.split(':')[1];
  var ampm = (hour >= 12) ? 'PM' : 'AM';
  hour = (hour % 12) || 12;
  var time12 = hour + ':' + minute + ' ' + ampm;
  return time12;
}

  return (
    <>
      <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
        <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
          Appointment Confirmation
        </h3>
        <button
          onClick={() => {closeAppointment()}}
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div class=" grid grid-cols-2 flex p-5 flex-col items-start gap-2 pb-10 ">
        <h5 class="mb-1 text-sm font-medium text-gray-500">
          Hospital Name : {AppointmentData?.HospitalName}
        </h5>
        <h5 class="mb-1 text-sm font-medium text-gray-500">
          Date: {AppointmentData?.appointmentDate}
        </h5>
        <h5 class="mb-1 text-sm font-medium text-gray-500">
          Time : {formatAMPM(AppointmentData?.appointmentTime)}
        </h5>
        <h5 class="mb-1 text-sm font-medium text-gray-500">
          Reason for visit : {AppointmentData?.reasonForVisit}
        </h5>
      </div>

      <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
        <button
          type="button"
          onClick={() => {Onconfirm()}}
          class="text-white bg-eswasthyaprim  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Confirm
        </button>
        <button
          type="button"
          onClick={() => {closeAppointment()}}
          class="text-gray-500 bg-white  focus:outline-none  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
        >
          Decline
        </button>
      </div>
    </>
  );
};

const VerifyAppointment = () => {
  const [time, setTime] = useState(30);
  const [Loading, SetLoading] = useState(true);
  const {closeAppointment,getAppointmentId,resendOtp,VerifyCode,error,otpMessage} = useContext(AppointmentContext);

  useEffect(() => {
    if (time <= 0) {
      SetLoading(false);
      return;
    }
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };
  const {getProperty}  = useContext(PatientContext);
  const {id} = useParams();

  return (
    <>
      <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
        <button
          type="button"
          onClick={() => {closeAppointment()}}
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <Message
        error={false}
        message={ !otpMessage ? `Dear ${getProperty("firstName")?.charAt(0)?.toUpperCase() + getProperty("firstName")?.slice(1)} , We have sent an verification code to associated phonenumber +977-**********` : otpMessage}
      />
      <form>
        <div class="flex flex-col space-y-16 p-5">
          <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
            <div class="w-16 h-16 ">
              <input
                class={`w-full  h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl ${error ? 'border-2 border-[#f24667]' : 'border border-gray-200'  } text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-eswasthyaprim`}
                type="text"
                name=""
                id="a1"
              />
            </div>
            <div class="w-16 h-16 ">
              <input
                class={`w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl  ${error ? 'border-2 border-[#f24667]' : 'border border-gray-200'  } text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-eswasthyaprim`}
                type="text"
                name=""
                id="a2"
              />
            </div>
            <div class="w-16 h-16 ">
              <input
                class={`w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl  ${error ? 'border-2 border-[#f24667]' : 'border border-gray-200'  } text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-eswasthyaprim`}
                type="text"
                name=""
                id="a3"
              />
            </div>
            <div class="w-16 h-16 ">
              <input
                class={`w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl  ${error ? 'border-2 border-[#f24667]' : 'border border-gray-200'  } text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-eswasthyaprim`}
                type="text"
                name=""
                id="a4"
              />
            </div>
          </div>

          <div class="flex flex-col space-y-5">
            <div>
              <button type="button" onClick={() => {VerifyCode()}} class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-eswasthyaprim border-none text-white text-sm shadow-sm">
                Verify Appointment
              </button>
            </div>

            <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
              <p className="mr-1">Didn't recieve code? </p>{" "}
              {Loading ? (
                formatTime(time)
              ) : (
                <a
                  onClick={() => {
                    resendOtp(getAppointmentId(),id,getProperty('patientId'))
                    SetLoading(true);
                    setTime(30);
                  }}
                  class="flex flex-row items-center text-blue-600"
                >
                  Resend
                </a>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

const ConfirmationModal = () => {
  const {confirm} = useContext(AppointmentContext);
  return (
    <div
      id="modalEl"
      tabindex="-1"
      aria-hidden="true"
      class="backdrop-blur-sm bg-white/30 hidden flex items-center justify-center h-screen fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-2xl max-h-full">
        <div class="relative bg-white rounded-lg shadow">
           {!confirm ? <AppointmentConfirmation/> : <VerifyAppointment/>}
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
