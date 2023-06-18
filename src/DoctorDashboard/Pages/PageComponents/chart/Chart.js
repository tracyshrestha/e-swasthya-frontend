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
      name : 'Jan',
      number : 2500
    },
    {
        name : 'Feb',
        number : 2300
    },
    {
        name : 'Mar',
        number : 3400
    },
    {
        name : 'Apr',
        number : 5600
    },
    {
        name : 'May',
        number : 2000
    },
    {
        name : 'Jun',
        number : 1000
    },
    {
        name : 'Jul',
        number : 500
    },
    {
        name : 'Aug',
        number : 220
    },
    {
        name : 'Sep',
        number : 220
    },
    {
        name : 'Nov',
        number : 2540
    },

    {
        name : 'Dec',
        number : 250
    },

]
  return (
<ResponsiveContainer  className="m-5" width="81%" height="81%">
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
      <Bar dataKey="number" barSize={20} fill="#8884d8" />
    </BarChart>
    </ResponsiveContainer>
  );
}