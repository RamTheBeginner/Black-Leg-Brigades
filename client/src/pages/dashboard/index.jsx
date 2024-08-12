import React from "react";
import Nav from "../nav";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
} from "chart.js";
import { NavLink } from "react-router-dom";

// Register all necessary components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement
);

const Dashboard = () => {
  const dataLine = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Income",
        data: [4000, 4500, 3000, 3500, 5000, 6000, 7000],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Expenditure",
        data: [2000, 2500, 1500, 2000, 2500, 3000, 3500],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  const dataPie = {
    labels: ["Rent", "Food", "Entertainment", "Utilities", "Others"],
    datasets: [
      {
        data: [500, 300, 200, 150, 100],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    aspectRatio: 2, // Adjust this value to control the width/height ratio
  };

  return (
    <>
      <Nav />
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-[#396b89] text-white shadow-lg flex flex-col justify-between">
          <div className="h-full p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
              <nav>
                <ul className="space-y-4 flex flex-col justify-between h-full">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 rounded hover:bg-zinc-800"
                    >
                      Savings
                    </a>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard"
                      className="block py-2 px-4 rounded hover:bg-zinc-800"
                    >
                      Overall Transactions
                    </NavLink>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 rounded hover:bg-zinc-800"
                    >
                      Credit Transactions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 rounded hover:bg-zinc-800"
                    >
                      Debit Transactions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 rounded hover:bg-zinc-800"
                    >
                      Daily Transactions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 rounded hover:bg-zinc-800"
                    >
                      Monthly Transactions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 rounded hover:bg-zinc-800"
                    >
                      Yearly Transactions
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-6 bg-[#dde7ee]">
          <h1 className="text-3xl font-semibold mb-6">Financial Dashboard</h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Example of cards or data sections */}
            <div className="p-4 bg-[#dde7ee] rounded shadow">
              <h2 className="text-xl font-semibold">Balance</h2>
              <p className="mt-2 text-gray-600">$12,345.67</p>
            </div>
            <div className="p-4 bg-[#dde7ee] rounded shadow">
              <h2 className="text-xl font-semibold">Monthly Expenses</h2>
              <p className="mt-2 text-gray-600">$2,345.67</p>
            </div>
            <div className="p-4 bg-[#dde7ee] rounded shadow">
              <h2 className="text-xl font-semibold">Savings</h2>
              <p className="mt-2 text-gray-600">$5,678.90</p>
            </div>
          </div>

          {/* Line Chart */}
          <div className="mt-6 h-1/3 w-full">
            <h2 className="text-2xl font-semibold mb-4">
              Income vs Expenditure
            </h2>
            <Line data={dataLine} options={chartOptions} />
          </div>

          {/* Pie Chart */}
          <div className="mt-6 h-1/3 w-full items-center">
            <h2 className="text-2xl font-semibold mb-4 mt-8">
              Expenditure Breakdown
            </h2>
            <Pie data={dataPie} options={chartOptions} className="mb-0"/>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
