import React, { useState } from 'react';
import CalCard from './CalCard';
import NavBar from './NavBar';

const InvestmentCalculator = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [selectedInvestments, setSelectedInvestments] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);

  const handleNumberChange = (e) => {
    const number = parseInt(e.target.value);
    setSelectedNumber(number);
    setSelectedInvestments(Array(number).fill(''));
    setTotalMoney(0); // Reset total money when changing the number of investments
  };

  const handleInvestmentChange = (index, amount) => {
    const newInvestments = [...selectedInvestments];
    newInvestments[index] = amount;
    setSelectedInvestments(newInvestments);
    setTotalMoney(newInvestments.reduce((total, amount) => total + parseFloat(amount), 0)); // Calculate total money
  };

  return (
    <div className="mx-auto min-h-screen" style={{backgroundImage: "url('/Calculator.jpg')", backgroundSize: "cover"}}>
      <NavBar />
      <div className="w-full max-w-md mx-auto mb-4 pt-10">
        <label htmlFor="number" className="block text-yellow-500 font-bold mb-2">Select a number of Investments:</label>
        <select
          id="number"
          name="number"
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={selectedNumber}
          onChange={handleNumberChange}
        >
          {[0, 1, 2, 3, 4].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        <div className="mt-6">
          <p className="text-lg font-semibold text-yellow-500">Total Money of All Investments: ₹{totalMoney.toFixed(4)}</p>
        </div>
      </div>

      <div className="flex flex-wrap">
        {selectedInvestments.map((investment, index) => (
          <div key={index} className="w-1/2 mb-4 mt-5 ml-30">
            <label htmlFor={`investment${index}`} className="block text-gray-700 font-bold mb-2"></label>
            <CalCard onResultChange={(amount) => handleInvestmentChange(index, amount)} />
          </div>
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default InvestmentCalculator;

