import React from "react";
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
  const Data = [
    {
      name : '2018',
      number : 4
    },
    {
        name : '2019',
        number : 8
    },
    {
        name : '2020',
        number : 10
    },

    {
        name : '2021',
        number : 11
    },
    {
        name : '2022',
        number : 5
    },
    {
        name : '2023',
        number : 2
    },

   

]
  return (
<ResponsiveContainer  className="m-5" width="82%" height="82%">
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
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      <Bar dataKey="number" barSize={20} fill="#A5CDEF" />
    </BarChart>
    </ResponsiveContainer>
  );
}