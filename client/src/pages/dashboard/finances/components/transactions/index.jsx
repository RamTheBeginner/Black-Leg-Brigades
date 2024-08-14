import { change } from '@/store/reducers/DasboardSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

const Transactions = () => {
  const dispatch = useDispatch();
  
  return (
    <div className="relative p-4 bg-[#dde7ee] min-h-dvh">
      <button
        className="absolute top-4 right-4 p-2 bg-yellow-400 text-white rounded-lg shadow-md hover:bg-yellow-300 transition duration-200"
        onClick={() => dispatch(change(8))}
      >
        Go Back
      </button>
      
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Transactions</h1>
        <p className="text-lg text-gray-600 mb-4">
          Here you can view and manage your transactions. Use the features provided to keep track of your financial activities.
        </p>
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3 items-start">Transaction Tips</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Review your transactions regularly for accuracy.</li>
            <li>Use filters to find specific transactions quickly.</li>
            <li>If you notice any discrepancies, contact support immediately.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
