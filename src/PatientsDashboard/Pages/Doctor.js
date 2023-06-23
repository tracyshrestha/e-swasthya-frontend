import { useEffect, useContext, useState } from "react";

import pin from "../DashboardAssests/pin.svg";
import search from "../DashboardAssests/search.svg";
import { Link } from "react-router-dom";
import axios from 'axios'
import { AuthContext } from "../../Store/UserState";
import { setDate } from "date-fns";


const Doctor = () => {
    const { getStoredCookie } = useContext(AuthContext);
    const [DoctorData, SetData] = useState([])
    useEffect(() => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}api/doctor/view-all`,
            headers: {
                'Authorization': `Bearer ${getStoredCookie("token")}`,
            },
        })
            .then((res) => {
                SetData(res.data.data)
            })
            .catch((error) => console.log(error))
    }, [])


    return (
        <div id="docpg" className="h-screen w-full flex-items-center text-grey-600  ">
            <div className="flex flex-col   md:pr-4 pb-4 bg-white">
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

                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                    {
                        DoctorData.map((ele) => {
                            return (
                                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                                    <div class="flex flex-col items-center pb-10 mt-5">
                                        <img class="w-20 h-20 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                                        <h5 class="mb-1 mt-3 text-xl font-medium text-gray-900 dark:text-white">Dr.{ele.firstName} {ele.lastName}</h5>
                                        <span class="text-sm text-gray-500">{ele.specialization}</span>
                                        <span class="text-xs text-gray-500">{ele.education}</span>
                                        <div class="flex mt-4 space-x-3 md:mt-6">
                                            <Link  to={{pathname:`../doctors/${ele.doctorId}`}} replace="/" >
                                                <span class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  rounded-lg bg-eswasthyaprim">View More</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Doctor;