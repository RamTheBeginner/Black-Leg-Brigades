import React, { useState } from 'react';

const CalCard = ({ onResultChange }) => {
    const [startingAmount, setStartingAmount] = useState(10000);
    const [returnRate, setReturnRate] = useState(5);
    const [targetYears, setTargetYears] = useState(10);
    const [result, setResult] = useState(0);

    const calculateCompoundInterest = () => {
        const principal = startingAmount;
        const rate = returnRate / 100;
        const time = targetYears;
        const amount = principal * Math.pow(1 + rate, time);
        setResult(amount.toFixed(2));
        onResultChange(amount.toFixed()); // Pass the result to the parent component
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-opacity-20 bg-gradient-to-br from-blue-600 to-red-300 text-black rounded-xl shadow-md">
            <label htmlFor="startingAmount" className="block text-gray-700 font-bold mb-2">Return Calculator:</label>
            <select className='mb-3 max-w-md w-full h-12'>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
                <option value="realestate">Real Estate</option>
                <option value="stocks">Stocks</option>
            </select>
            <div className="mb-4">
                <label htmlFor="startingAmount" className="block text-gray-700 font-bold mb-2">Starting Amount (₹)</label>
                <input
                    id="startingAmount"
                    type="number"
                    className="w-full bg-gray-200 rounded-md px-4 py-2 focus:outline-none focus:bg-white"
                    value={startingAmount}
                    onChange={(e) => setStartingAmount(parseFloat(e.target.value))}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="returnRate" className="block text-gray-700 font-bold mb-2">Expected Annual Return Rate (%)</label>
                <input
                    id="returnRate"
                    type="number"
                    className="w-full bg-gray-200 rounded-md px-4 py-2 focus:outline-none focus:bg-white"
                    value={returnRate}
                    onChange={(e) => setReturnRate(parseFloat(e.target.value))}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="targetYears" className="block text-gray-700 font-bold mb-2">Target Years</label>
                <input
                    id="targetYears"
                    type="number"
                    className="w-full bg-gray-200 rounded-md px-4 py-2 focus:outline-none focus:bg-white"
                    value={targetYears}
                    onChange={(e) => setTargetYears(parseFloat(e.target.value))}
                />
            </div>
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={calculateCompoundInterest}
            >
                Calculate
            </button>
            <div className="mt-6">
                <p className="text-lg font-semibold">Result: ₹{result}</p>
            </div>
        </div>
    );
};

export default CalCard;
