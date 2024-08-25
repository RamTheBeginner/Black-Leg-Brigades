import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const monthToNumber = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

const sortDataByMonth = (data) => {
  return data.sort((a, b) => monthToNumber[a.name] - monthToNumber[b.name]);
};

const salesData1 = [
  {
    name: "Jan",
    revenue: 4000,
    profit: 2400,
  },
  {
    name: "Feb",
    revenue: 3000,
    profit: 1398,
  },
  {
    name: "Mar",
    revenue: 9800,
    profit: 2000,
  },
  {
    name: "Apr",
    revenue: 3908,
    profit: 2780,
  },
  {
    name: "May",
    revenue: 4800,
    profit: 1890,
  },
  {
    name: "Jun",
    revenue: 3800,
    profit: 2390,
  },
];

const AreaChartComponent = (props) => {
  const [salesData, setSalesData] = useState(sortDataByMonth(salesData1));

  useEffect(() => {
    if (props.data) {
      const sortedData = sortDataByMonth(props.data);
      setSalesData(sortedData);
    }
  }, [props.data]);

  return (
    <div style={{ width: "100%", height: "400px" }}>
      {salesData && salesData.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={salesData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area
              type="monotone"
              dataKey="Credit"
              stroke="#2563eb"
              fill="#3b82f6"
              stackId="1"
            />
            <Area
              type="monotone"
              dataKey="Debit"
              stroke="#7c3aed"
              fill="#8b5cf6"
              stackId="1"
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: "1.5rem",
            color: "#888",
          }}
        >
          NO DATA
        </div>
      )}
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-[#aed0e8] flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Credit:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Debit:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
  return null; // Ensure null is returned when tooltip is not active
};

export default AreaChartComponent;
