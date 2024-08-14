import { change } from '@/store/reducers/DasboardSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

const Yearly = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex min-h-screen bg-[#dde7ee]">
      <main className="flex-1 p-6 bg-[#dde7ee]">
        <div className="flex items-center justify-between mb-6 bg-[#dde7ee]">
          <h1 className="text-3xl font-semibold">Yearly Transactions</h1>
          <button
            className="p-2 bg-yellow-400 text-white rounded-lg shadow-md hover:bg-yellow-300 transition duration-200"
            onClick={() => window.history.back()} // Navigate back to the previous page
          >
            Go Back
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6 bg-[#dde7ee]">
          <div className="p-4 bg-[#dde7ee] rounded shadow">
            <h2 className="text-xl font-semibold">Transaction Overview</h2>
            <p className="mt-2 text-gray-600">Overview of yearly transactions.</p>
          </div>
        </div>

        <div className="mt-6 h-1/3 w-full bg-[#dde7ee] p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Yearly Summary</h2>
          <p className="text-gray-600">
            This section provides a summary of your yearly transactions. Use the visualization below to get detailed insights.
          </p>
          {/* Example chart or data visualization */}
          <div className="mt-4">
            {/* Add chart component or other data visualization elements here */}
            <p className="text-gray-500">[Chart or Data Visualization Placeholder]</p>
          </div>
        </div>

        
      </main>
    </div>
  );
};

export default Yearly;
