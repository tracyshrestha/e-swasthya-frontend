import React, { useState } from "react";
import whitepatient from "../../assets/whitepatient.svg";
import whitedoctor from "../../assets/whitedoctor.svg";
import hospitalwhite from "../../assets/hospitalwhite.svg";
import whitevaccine from "../../assets/whitevaccine.svg";
import whitevirus from "../../assets/whitevirus.svg";
import nepal from "../../assets/nepal.png";


function AdminHome() {


    return (
        <>
            <div className="w-full h-full flex flex-col  bg-[#fff]">
                <div className=" h-2/5 ">
                    <div className="xl:mx-6  lg:mx-4 mx-0 flex flex-wrap justify-center items-center">

                        <div className=" justify-center items-center sm:w-[280px] w-[200px] h-50  bg-[#FFAFCC] text-white border-2 shadow-2xl cursor-pointer border-[#FFAFCC] boarder-opacity-60 rounded-lg p-2 sm:m-5 m-0 my-2">
                            <h1 className="text-center  text-2xl font-semi-bold ">Total Patients</h1>
                            <div className=" justify-center items-center ">
                                <div className="grid grid-cols-1 sm:grid-cols-5  ">
                                    <div className=" sm:col-span-1 ">
                                        <img
                                            src={whitepatient}
                                            alt="image"
                                            className="self-center sm:py-8 sm:pl-2 py-1 pl-16 h-[50px] sm:h-auto" />
                                    </div>
                                    <div className="justify-center items-center text-center sm:col-span-4">
                                        <h2 className="leading-relaxed text-white  text-center sm:pt-4 sm:text-6xl text-3xl">
                                            250
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" justify-center items-center sm:w-[280px] w-[200px] h-50  bg-[#CDB4DB] text-white border-2 shadow-2xl cursor-pointer border-[#CDB4DB] boarder-opacity-60 rounded-lg p-2 sm:m-5 m-0 my-2">
                            <h1 className="text-center  text-2xl font-semi-bold ">Total Doctors</h1>
                            <div className=" justify-center items-center ">
                                <div className="grid grid-cols-1 sm:grid-cols-5  ">
                                    <div className=" sm:col-span-1 ">
                                        <img
                                            src={whitedoctor}
                                            alt="image"
                                            className="self-center sm:py-8 sm:pl-2 py-1 pl-16 h-[50px] sm:h-auto" />
                                    </div>
                                    <div className="justify-center items-center text-center sm:col-span-4">
                                        <h2 className="leading-relaxed text-white  text-center sm:pt-4 sm:text-6xl text-3xl">
                                            250
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" justify-center items-center sm:w-[280px] w-[200px] h-50  bg-[#B5D6D6] text-white border-2 shadow-2xl cursor-pointer border-[#B5D6D6] boarder-opacity-60 rounded-lg p-2 sm:m-5 m-0 my-2">
                            <h1 className="text-center  text-2xl font-semi-bold ">Total Hospitals</h1>
                            <div className=" justify-center items-center ">
                                <div className="grid grid-cols-1 sm:grid-cols-5  ">
                                    <div className=" sm:col-span-1 ">
                                        <img
                                            src={hospitalwhite}
                                            alt="image"
                                            className="self-center sm:py-8 sm:pl-2 py-1 pl-16 h-[50px] sm:h-auto" />
                                    </div>
                                    <div className="justify-center items-center text-center sm:col-span-4">
                                        <h2 className="leading-relaxed text-white  text-center sm:pt-4 sm:text-6xl text-3xl">
                                            250
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" justify-center items-center sm:w-[280px] w-[200px] h-50  bg-[#8BC6D6] text-white border-2 shadow-2xl cursor-pointer border-[#8BC6D6] boarder-opacity-60 rounded-lg p-2 sm:m-5 m-0 my-2">
                            <h1 className="text-center  text-2xl font-semi-bold ">Total Vaccines</h1>
                            <div className=" justify-center items-center ">
                                <div className="grid grid-cols-1 sm:grid-cols-5  ">
                                    <div className=" sm:col-span-1 ">
                                        <img
                                            src={whitevaccine}
                                            alt="image"
                                            className="self-center sm:py-8 sm:pl-2 py-1 pl-16 h-[50px] sm:h-auto" />
                                    </div>
                                    <div className="justify-center items-center text-center sm:col-span-4">
                                        <h2 className="leading-relaxed text-white  text-center sm:pt-4 sm:text-6xl text-3xl">
                                            250
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        



                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-5  ">

                    <div className=" col-span-3 ">
                        <img
                            src={nepal}
                            alt="image"
                            className="  p-2"
                        />
                    </div>
                    <div className="justify-center items-center text-center col-span-2">

                        <div className="  w-full h-full  p-6 ">
                        <div className=" justify-center items-center sm:w-full w-[200px] h-full  bg-[#A5CDEF] text-white border-2 shadow-2xl cursor-pointer border-[#A5CDEF] boarder-opacity-60 rounded-lg p-2 sm:m-5 m-0 sm:my-2">
                            <h1 className="text-center  text-2xl font-semi-bold ">Disease Outbreaks</h1>
                            <div className=" justify-center items-center ">
                                <div className="grid grid-cols-1 sm:grid-cols-5  ">
                                    <div className=" sm:col-span-1 ">
                                        <img
                                            src={whitevirus}
                                            alt="image"
                                            className="self-center sm:py-8 sm:pl-2 py-1 pl-16 h-[50px] sm:h-auto" />
                                    </div>
                                    <div className="justify-center items-center text-center sm:col-span-4">
                                        <h2 className="leading-relaxed text-white  text-center sm:pt-4 sm:text-6xl text-3xl">
                                            250
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
               
            </div >

        </>
    );
}

export default AdminHome;
