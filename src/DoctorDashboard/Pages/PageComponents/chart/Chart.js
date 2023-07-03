import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { AuthContext } from "../../../../Store/UserState";



const CustomTooltip = ({ active, payload, label }) => {

  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-[#71b5f5] p-2 active:outline-none hover:border-white focus:outline-none" style={{ border: '1px solid white' }}>
        <p className="label" style={{ color: 'white' }}>{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};




export default function Chart() {

  const {getStoredCookie} = useContext(AuthContext)

  const [Data, setData] = useState();

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}api/dashboard/doctor/get-appointment-count?doctorDetailId=${localStorage.getItem("doctorId")}`,
      headers: {
        'Authorization': `Bearer ${getStoredCookie("token")}`,
      }
    })
    .then((res) => {setData(res?.data?.data)})
    .catch((error) => console.log(error))

    console.log(Data)
  },[])
    
  
  return (
    <ResponsiveContainer className="m-5" width="81%" height="81%">
      <BarChart
        width={800}
        height={400}
        data={Data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="appointmentCount" barSize={20} fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}