import React, { useState } from "react";
import NavBar from "./NavBar";
import { useAuth } from '../contexts/auth';
import axios from 'axios';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar,Line,Pie } from 'react-chartjs-2';
const Analysis = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [chartType, setChartType] = useState("");
  const [category, setCategory] = useState("");
  const [transaction,settransaction] = useState([]);
  const [chartData, setChartData] = useState(null);
  const [prizes,setprizes]= useState(null);
  const { currentUser} = useAuth();
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
  const render = () =>{
    const dates = transaction.map(item => item.date);
    const amounts = transaction.map(item => item.totalAmount);
   setChartData(dates);
   setprizes(amounts);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('here')
    let res = async () =>{
      const response = await axios.post('http://localhost:5000/api/analysis/getdata', {
                startDate: startDate,
                endDate:endDate,
                token: currentUser.uid,
                category:category
            }, {
                withCredentials: true,
            });
            settransaction(response.data)
            const aggregatedTransactions = {};
            response.data.forEach(transaction => {
              const { date, amount } = transaction;
              if (aggregatedTransactions[date]) {
                aggregatedTransactions[date] += amount;
              } else {
                aggregatedTransactions[date] = amount;
              }
            });
            
            // Convert aggregated data into array format
            const resultArray = Object.keys(aggregatedTransactions).map(date => ({
              date,
              totalAmount: aggregatedTransactions[date]
            }));
            
          
            settransaction(resultArray)
            console.log(resultArray)
            render();
    }
    res();
    
    
    // Perform actions like fetching data or rendering chart based on selected options
  };
console.log(chartData)
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
                  <option hidden value="">Select Category</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="shopping">Shopping</option>
                  <option value="food">Food</option>
                  <option value="others">Others</option>
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

          <div>
      
      {chartData && (
        <div>
          <h2>Chart</h2>
          {
          ( chartType === 'bar' &&(
          <Bar
          data={{
            labels: chartData,
            datasets: [
              {
                label: "Count",
                data: prizes,
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Source",
              },
            },
          }}
        />))
      }
{
        ( chartType=== 'line' && (
      <Line
       data={{
        labels: chartData,
        datasets: [
          {
            label: "Count",
            data: prizes,
            backgroundColor: [
              "rgba(43, 63, 229, 0.8)",
              "rgba(250, 192, 19, 0.8)",
              "rgba(253, 135, 135, 0.8)",
            ],
            borderRadius: 5,
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            text: "Revenue Source",
          },
        },
      }}
      
      
      
      
      />

      
      

        ))
      }
     {
        ( chartType === 'pie' && ((
          <Pie 
           data={{
            labels: chartData,
            datasets: [
              {
                label: "Count",
                data: prizes,
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Source",
              },
            },
          }}
          
          />
        )))
      }
        </div>
      )}
    </div>
          {/* Render chart or analysis results here */}
        </div>
      </div>
    </>
  );
};

export default Analysis;
