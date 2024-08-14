import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { vary } from "@/store/reducers/ChartSlice";

const Charts = () => {
  const num = useSelector((state) => state.chart.value);
  const dispatch = useDispatch();

  // Define a common button style
  const buttonStyle = "py-2 px-4 rounded-lg text-white font-semibold transition-transform transform hover:scale-105";

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-[#dde7ee] rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Select Chart Type</h2>
      <div className="flex space-x-4">
        <button
          className={`${buttonStyle} ${num === 1 ? "bg-blue-500" : "bg-blue-300"}`}
          onClick={() => dispatch(vary(1))}
        >
          Bar Chart
        </button>
        <button
          className={`${buttonStyle} ${num === 2 ? "bg-green-500" : "bg-green-300"}`}
          onClick={() => dispatch(vary(2))}
        >
          Area Chart
        </button>
        <button
          className={`${buttonStyle} ${num === 3 ? "bg-red-500" : "bg-red-300"}`}
          onClick={() => dispatch(vary(3))}
        >
          Line Chart
        </button>
      </div>
    </div>
  );
};

export default Charts;
