import React, { useState } from "react";
import NavBar from "./NavBar";

const Analysis = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [chartType, setChartType] = useState("");
  const [category, setCategory] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleChartTypeChange = (e) => {
    setChartType(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions like fetching data or rendering chart based on selected options
  };

  return (
    <>
      <NavBar />
      <div className="pt-6" style={{ 
        backgroundImage: "url('/Analysis.jpg')", 
        backgroundSize: "cover", 
        minHeight: "100vh", 
        backgroundAttachment: "fixed"
      }}>
        <div className="p-8 max-w-lg mx-auto bg-white rounded shadow-lg bg-opacity-80 ">
          <h2 className="text-2xl font-semibold mb-4">Analysis</h2>
          <form onSubmit={handleSubmit} className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 px-4 mb-4">
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-700"
              >
                Start Date:
              </label>
              <input
                type="date"
                id="startDate"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </div>
            <div className="w-full sm:w-1/2 px-4 mb-4">
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-gray-700"
              >
                End Date:
              </label>
              <input
                type="date"
                id="endDate"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={endDate}
                onChange={handleEndDateChange}
                min={startDate}
              />
            </div>
            <div className="w-full sm:w-1/2 px-4 mb-4">
              <label
                htmlFor="chartType"
                className="block text-sm font-medium text-gray-700"
              >
                Chart Type:
              </label>
              <select
                id="chartType"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={chartType}
                onChange={handleChartTypeChange}
              >
                <option value="">Select Chart Type</option>
                <option value="line">Line Chart</option>
                <option value="bar">Bar Chart</option>
                <option value="pie">Pie Chart</option>
              </select>
            </div>
            <div className="w-full sm:w-1/2 px-4 mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category:
              </label>
              <select
                id="category"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={category}
                onChange={handleCategoryChange}
              >
                <option value="">Select Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>
            </div>
            <div className="w-full px-4 mb-4">
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                Submit
              </button>
            </div>
          </form>
          {/* Render chart or analysis results here */}
        </div>
      </div>
    </>
  );
};

export default Analysis;
