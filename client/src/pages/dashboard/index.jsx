import React from 'react';
import Nav from '../nav';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, ArcElement, PointElement } from 'chart.js';

// Register all necessary components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement // Register PointElement
);

const Dashboard = () => {
  const dataLine = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Income',
        data: [4000, 4500, 3000, 3500, 5000, 6000, 7000],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Expenditure',
        data: [2000, 2500, 1500, 2000, 2500, 3000, 3500],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  const dataPie = {
    labels: ['Rent', 'Food', 'Entertainment', 'Utilities', 'Others'],
    datasets: [
      {
        data: [500, 300, 200, 150, 100],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Nav />
      <div className="p-6 space-y-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Income and Expenditure Over Time</h2>
            <div className="h-full">
              <Line data={dataLine} />
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Expenditure Breakdown</h2>
            <div className="h-full">
              <Pie data={dataPie} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
