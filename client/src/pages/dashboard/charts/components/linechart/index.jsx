import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

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
    name: 'Jan',
    Credit: 4000,
    Debit: 2400,
  },
  {
    name: 'Feb',
    Credit: 3000,
    Debit: 1398,
  },
  {
    name: 'Mar',
    Credit: 9800,
    Debit: 2000,
  },
  {
    name: 'Apr',
    Credit: 3908,
    Debit: 2780,
  },
  {
    name: 'May',
    Credit: 4800,
    Debit: 1890,
  },
  {
    name: 'Jun',
    Credit: 3800,
    Debit: 2390,
  },
];

const LineChartComponent = (props) => {
  const [salesData, setSalesData] = useState(sortDataByMonth(salesData1));

  useEffect(() => {
    if (props.data) {
      const sortedData = sortDataByMonth(props.data);
      setSalesData(sortedData);
    }
  }, [props.data]);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      {salesData && salesData.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={salesData}
            margin={{
              right: 30,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line type="monotone" dataKey="Credit" stroke="#2563eb" />
            <Line type="monotone" dataKey="Debit" stroke="#8b5cf6" />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            fontSize: '1.5rem',
            color: '#888',
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
  return null;
};

export default LineChartComponent;
