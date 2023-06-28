import Message from "../../../UserAuthentication/Helper/Message";
import { useState, useEffect } from "react";

import { useContext } from "react";
import { AppointmentContext } from "./GlobalState";
import { PatientContext } from "../../PatientGlobalState";

const VerifyAppointment = () => {
  const [time, setTime] = useState(120);
  const [Loading, SetLoading] = useState(true);

  const {closeGrant,value,verifyGrant,grant,grantMessage} = useContext(AppointmentContext);

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
  }, [value]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };
  const {getProperty}  = useContext(PatientContext);

  return (
    <>
      <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
        <button
          type="button"
        onClick={() => {closeGrant()}}
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
        message={ !grantMessage ? `Dear ${getProperty("firstName")?.charAt(0)?.toUpperCase() + getProperty("firstName")?.slice(1)} , We have sent an verification code to associated phonenumber +977-**********` : grantMessage}
      />
      <form>
        <div class="flex flex-col space-y-16 p-5">
          <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
            <div class="w-16 h-16 ">
              <input
                required
                class={`w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl  ${grant ? 'border-2 border-[#f24667]' : 'border border-gray-200'  } text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-eswasthyaprim`}
                type="text"
                name=""
                id="a11"
              />
            </div>
            <div class="w-16 h-16 ">
              <input
                required
                class={`w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl  ${grant ? 'border-2 border-[#f24667]' : 'border border-gray-200'  } text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-eswasthyaprim`}
                type="text"
                name=""
                id="a22"
              />
            </div>
            <div class="w-16 h-16 ">
              <input
                required
                class={`w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl  ${grant ? 'border-2 border-[#f24667]' : 'border border-gray-200'  } text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-eswasthyaprim`}
                type="text"
                name=""
                id="a33"
              />
            </div>
            <div class="w-16 h-16 ">
              <input
                required
                class={`w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl  ${grant ? 'border-2 border-[#f24667]' : 'border border-gray-200'  } text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-eswasthyaprim`}
                type="text"
                name=""
                id="a44"
              />
            </div>
          </div>

          <div class="flex flex-col space-y-5">
            <div>
              <button type="button" onClick={() => {verifyGrant()}} class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-eswasthyaprim border-none text-white text-sm shadow-sm">
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
                    SetLoading(true);
                    setTime(120);
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

const GrantModal = () => {
  return (
    <div
      id="GrantId"
      tabindex="-1"
      aria-hidden="true"
      class="backdrop-blur-sm bg-white/30 hidden flex items-center justify-center h-screen fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-2xl max-h-full">
        <div class="relative bg-white rounded-lg shadow">
           {<VerifyAppointment/>}
        </div>
      </div>
    </div>
  );
};

export default GrantModal;
