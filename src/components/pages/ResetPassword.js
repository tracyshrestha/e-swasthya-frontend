import React,{useState} from "react";
import LoginImage from "../../assets/login.jpg";
import logo from "../../assets/logo.png";
import Message from "../helpercomponents/Message";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState(""); // JWT token

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (newPassword !== confirmPassword) {
    //   alert("Passwords do not match!");
    //   return;
    // }
    //  // Make API request to reset password
    //  fetch("/api/reset-password", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`, // Include JWT token in the headers
    //   },
    //   body: JSON.stringify({ email: userEmail, newPassword }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     // Handle success response or redirect to a new page
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
  return (
    <>
      <div className="sm:overflow-hidden w-screen h-screen grid grid-cols-1 xl:grid-cols-2 bg-[#ffff]">
        <div className="p-4 flex flex-col justify-center items-center  ">
          <form className="border-[#f8f8f8] sm:w-[600px] h-auto w-[350px] items-center rounded-sm  p-9 m-8 mt-1 mx-24 bg-white mb-5">
            <div className="flex justify-center items-center pb-5">
              <img src={logo} alt="" class="self-center h-[80px] pt-2 " />
            </div>
            <div className="items-center mb-5">
              <h6 className="sm:text-[18px] text-[16px] sm:mb-[-8px] font-medium text-gray-500">
                RESET PASSWORD
              </h6>
              <h2 className="sm:text-[35px] text-[25px]  font-medium sm:pt-1  text-gray-600">
                kcsrijan33@gmail.com,
              </h2>
              <h6 className="sm:text-[17px] text-[15px]  pb-5 text-gray-400">
                Enter your new password and manage your account.
              </h6>
            </div>
            {/* <Message /> */}
            <div class="pb-6">
              <div className="grid grid-cols-1 pb-2">
                <div className=" text-left  text-gray-500 ">
                  <h1 className="sm:text-[15px] text-[12px]  relative text-gray-400">
                    Enter your new password
                  </h1>
                </div>
              </div>

              <div class="relative">
                <input
                  type="password"
                  id="email-address-icon"
                  class=" placeholder-gray-300 0 h-[50px] border border-gray-300 text-gray-900 text-[15px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                  placeholder="Password"
                  required
                ></input>
              </div>
            </div>
            <div class="pb-6">
              <div className="grid grid-cols-1 pb-2">
                <div className=" text-left  text-gray-500 ">
                  <h1 className="sm:text-[15px] text-[12px]  relative text-gray-400">
                    Reenter your password
                  </h1>
                </div>
              </div>
              <div class="relative">
                <input
                  type="password"
                  id="email-address-icon"
                  class=" placeholder-gray-300 0 h-[50px] border border-gray-300 text-gray-900 text-[15px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  "
                  placeholder="Reenter password"
                  required
                ></input>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <button onSubmit={handleSubmit} className="sm:w-[520px] rounded-md w-[275px] text-center py-3 mt-8 font-bold  bg-[#42ADF0] hover:bg-[#4D6B9C] relative  text-white hover:bold">
                Submit
              </button>
            </div>
            <div className="text-left sm:mt-[25px] mt-5 text-gray-500 ">
              <p className="sm:text-l text-[14px]">
                Remembered your password?{" "}
                <a
                  href="/"
                  className="sm:text-[15px] text-[15px]  text-[#42ADF0] hover:text-[#4D6B9C] "
                >
                  Login here
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="  w-full h-full hidden xl:block mt-[15%] p-[2%] bg-white">
          <img className="inline auto" src={LoginImage} alt="/" />
          {/* <img className='inline 2xl:w-[550px] 2xl:h-[550px]  w-[400px] h-[350px]' src={laptop} alt="/" /> */}
        </div>
      </div>
    </>
  );
}
export default ResetPassword;
