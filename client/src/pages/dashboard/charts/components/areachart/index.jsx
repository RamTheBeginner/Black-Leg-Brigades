import React, { useEffect, useState } from 'react'
import {
    AreaChart,
    Area,
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';
  
  const productSales1 = [
    {
      name: 'Jan',
      product1: 4000,
      product2: 2400,
    },
    {
      name: 'Feb',
      product1: 3000,
      product2: 2210,
    },
    {
      name: 'Mar',
      product1: 2000,
      product2: 2290,
    },
    {
      name: 'Apr',
      product1: 2780,
      product2: 2000,
    },
    {
      name: 'May',
      product1: 1890,
      product2: 2181,
    },
    {
      name: 'Jun',
      product1: 2390,
      product2: 2500,
    },
  ];
  
  const AreaChartComponent = (props) => {
    

    const [productSales, setproductSales] = useState(productSales1)

    useEffect(()=>{
      setproductSales(props.data);
    },[props.data])


    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={productSales}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <YAxis />
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" />
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
  };
  
  export default AreaChartComponent;