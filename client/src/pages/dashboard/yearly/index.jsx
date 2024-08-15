import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AreaChartComponent from "../charts/components/areachart";
import BarChartComponent from "../charts/components/barchart";
import LineChartComponent from "../charts/components/linechart";
import Charts from "../charts";
import { ComboboxPopover } from "../finances/components/comboBox";

const Yearly = () => {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.chart.value);

  const renderContent = () => {
    switch (num) {
      case 2:
        return <AreaChartComponent />;
      case 1:
        console.log("It's 1");
        return <BarChartComponent />;
      case 3:
        console.log("It's 3");
        return <LineChartComponent />;
      default:
        return <LineChartComponent />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#dde7ee]">
      <main className="flex-1 p-6 bg-[#dde7ee]">
        <div className="flex items-center justify-between mb-6 bg-[#dde7ee]">
          <h1 className="text-3xl font-semibold">Yearly Transactions</h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6 bg-[#dde7ee]">
          <div className="p-4 bg-[#dde7ee] rounded shadow">
            <h2 className="text-xl font-semibold">Transaction Overview</h2>
            <p className="mt-2 text-gray-600">
              Overview of yearly transactions.
            </p>
          </div>
        </div>

        <div className="mt-6 h-auto w-full bg-[#dde7ee] p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Yearly Summary</h2>
          <p className="text-gray-600">
            This section provides a summary of your yearly transactions. Use the
            visualization below to get detailed insights.
          </p>
          <div className="flex items-center">
            <ComboboxPopover />

            <select
              className="ml-4 p-2 border rounded-md mt-7"
              defaultValue="defaultCategory"
            >
              <option value="defaultCategory" disabled>
                Select Category
              </option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Utilities">Utilities</option>
            </select>

            <select
              className="ml-4 p-2 border rounded-md mt-7"
            >
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>

          <div className="mt-4">
            <Charts />
          </div>

          <div className="mt-4">{renderContent()}</div>
        </div>
      </main>
    </div>
  );
};

export default Yearly;
