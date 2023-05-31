import React, { useState } from "react";
import doc1 from "../../assets/doc1.svg";
import pin from "../../assets/pin.svg";
import search from "../../assets/search.svg";
import { Link } from "react-router-dom";

function DoctorPg() {
  return (
    <div id="docpg" className="h-full w-full flex-items-center text-grey-600  ">
      <div className="flex flex-col  md:items-end md:pr-4 pb-4 bg-white">
        <div className="flex md:flex-row flex-col">
          <div class="relative md:w-[330px] md:mt-5 mt-3 md:mx-0 mx-3">
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <img
                src={search}
                alt=""
                class="self-center w-5 h-5 rounded-full mx-1"
              />
            </div>
            <input
              type="text"
              id="email-address-icon"
              class=" border text-gray-900 text-sm border-[#42adf051] boarder-opacity-60 rounded-lg w-full pl-4 p-2.5"
              placeholder="Search specialist"
              maxLength={14}
            />
          </div>

          <div class="relative md:w-[330px] md:mt-5 mt-3 mx-3">
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <img
                src={pin}
                alt=""
                class="self-center w-5 h-5 rounded-full mx-1"
              />
            </div>
            <input
              type="text"
              id="email-address-icon"
              class="border text-gray-900 text-sm border-[#42adf051] boarder-opacity-60 rounded-lg w-full pl-4 p-2.5"
              placeholder="Search location"
              maxLength={14}
            />
          </div>

          <button className="relative md:w-[110px]  py-2 md:mt-5 mt-3 md:mx-0 mx-3 h-full md:mb-0 mb-4 font-bold bg-[#42ADF0] hover:bg-[#4D6B9C]  rounded-xl text-white hover:bold">
            Search
          </button>
        </div>
      </div>

      <div className="">
        <div className="text-center text-2xl md:text-4xl pt-3 text-[#154768] font-bold">
          Doctors
        </div>

        <div className="xl:mx-6 mx-auto lg:mx-4 flex flex-wrap justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center sm:w-[470px] w-[290px] h-50 p-5 m-5 bg-white border-2 shadow-2xl cursor-pointer border-[#42adf051] boarder-opacity-60 rounded-lg  transistion duration-300 ease-in">
            <div className="flex justify-center ">
              <img
                src={doc1}
                alt="image"
                className=" sm:w-full w-[100px] p-2"
              />
            </div>

            <div className=" text-center">
              <h1 className="text-2xl font-semi-bold mb-3">
                {" "}
                Dr. Rita Shrestha
              </h1>
              <h2 className="leading-relaxed mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
              </h2>

             <Link to="/addappointment">
             <button className=" w-[180px] h-full text-center py-2 px-1  bg-[#42ADF0] hover:bg-[#4D6B9C] relative rounded-lg text-white font-bold">
                Book an appointment
              </button>
             </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center sm:w-[470px] w-[290px] h-50 p-5 m-5 bg-white border-2 shadow-2xl cursor-pointer border-[#42adf051] boarder-opacity-60 rounded-lg  transistion duration-300 ease-in">
            <div className="flex justify-center ">
              <img
                src={doc1}
                alt="image"
                className=" sm:w-full w-[100px] p-2"
              />
            </div>

            <div className=" text-center">
              <h1 className="text-2xl font-semi-bold mb-3">
                {" "}
                Dr. Rita Shrestha
              </h1>
              <h2 className="leading-relaxed mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
              </h2>

              <button className=" w-[180px] h-full text-center py-2 px-1  bg-[#42ADF0] hover:bg-[#4D6B9C] relative rounded-lg text-white font-bold">
                Book an appointment
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center sm:w-[470px] w-[290px] h-50 p-5 m-5 bg-white border-2 shadow-2xl cursor-pointer border-[#42adf051] boarder-opacity-60 rounded-lg  transistion duration-300 ease-in">
            <div className="flex justify-center ">
              <img
                src={doc1}
                alt="image"
                className=" sm:w-full w-[100px] p-2"
              />
            </div>

            <div className=" text-center">
              <h1 className="text-2xl font-semi-bold mb-3">
                {" "}
                Dr. Rita Shrestha
              </h1>
              <h2 className="leading-relaxed mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
              </h2>

              <button className=" w-[180px] h-full text-center py-2 px-1  bg-[#42ADF0] hover:bg-[#4D6B9C] relative rounded-lg text-white font-bold">
                Book an appointment
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center sm:w-[470px] w-[290px] h-50 p-5 m-5 bg-white border-2 shadow-2xl cursor-pointer border-[#42adf051] boarder-opacity-60 rounded-lg  transistion duration-300 ease-in">
            <div className="flex justify-center ">
              <img
                src={doc1}
                alt="image"
                className=" sm:w-full w-[100px] p-2"
              />
            </div>

            <div className=" text-center">
              <h1 className="text-2xl font-semi-bold mb-3">
                {" "}
                Dr. Rita Shrestha
              </h1>
              <h2 className="leading-relaxed mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
              </h2>

              <button className=" w-[180px] h-full text-center py-2 px-1  bg-[#42ADF0] hover:bg-[#4D6B9C] relative rounded-lg text-white font-bold">
                Book an appointment
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center sm:w-[470px] w-[290px] h-50 p-5 m-5 bg-white border-2 shadow-2xl cursor-pointer border-[#42adf051] boarder-opacity-60 rounded-lg  transistion duration-300 ease-in">
            <div className="flex justify-center ">
              <img
                src={doc1}
                alt="image"
                className=" sm:w-full w-[100px] p-2"
              />
            </div>

            <div className=" text-center">
              <h1 className="text-2xl font-semi-bold mb-3">
                {" "}
                Dr. Rita Shrestha
              </h1>
              <h2 className="leading-relaxed mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
              </h2>

              <button className=" w-[180px] h-full text-center py-2 px-1  bg-[#42ADF0] hover:bg-[#4D6B9C] relative rounded-lg text-white font-bold">
                Book an appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DoctorPg;