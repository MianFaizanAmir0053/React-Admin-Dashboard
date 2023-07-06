import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    Total: 100,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "February",
    Total: 2500,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "March",
    Total: 1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "March",
    Total: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "April",
    Total: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "May",
    Total: 3390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "June",
    Total: 990,
    pv: 4300,
    amt: 2100,
  },
];

function Graph() {
  return (
    <div className="flex  min-[768px]:col-span-5 col-span-8 relative shadow-md rounded-md  text-slate-500">
      <div className=" absolute left-5 top-2">Last 6 Months (Revenue)</div>
      <ResponsiveContainer
        className="max-h-[27rem] min-h-[18rem]"
        width="100%"
        height="100%"
      >
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 40,
            right: 25,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.5}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graph;
