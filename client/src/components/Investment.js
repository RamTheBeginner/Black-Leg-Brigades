import React, { useState } from 'react';
import NavBar from "./NavBar";

const Investment = () => {
  const [buyStocks, setBuyStocks] = useState([]);
  const [sellStocks, setSellStocks] = useState([]);
  const [buyStockName, setBuyStockName] = useState('');
  const [buyStockPrice, setBuyStockPrice] = useState('');
  const [buyNumberOfStocks, setBuyNumberOfStocks] = useState('');
  const [buyBankAccountName, setBuyBankAccountName] = useState('');
  const [sellStockName, setSellStockName] = useState('');
  const [sellTotalStocks, setSellTotalStocks] = useState(20); // Set initial total stocks to 20
  const [sellNumberOfStocks, setSellNumberOfStocks] = useState('');
  const [sellStockPrice, setSellStockPrice] = useState('');
  const [sellBankAccountName, setSellBankAccountName] = useState('');
  const [totalNetProfit, setTotalNetProfit] = useState(0);

  const handleAddBuyStock = () => {
    const newStock = { name: buyStockName, price: parseFloat(buyStockPrice), numberOfStocks: parseInt(buyNumberOfStocks), bankAccount: buyBankAccountName };
    setBuyStocks([...buyStocks, newStock]);
    setBuyStockName('');
    setBuyStockPrice('');
    setBuyNumberOfStocks('');
    setBuyBankAccountName('');
  };

  const handleAddSellStock = () => {
    const newStock = { 
      name: sellStockName, 
      totalStocks: parseInt(sellTotalStocks), 
      numberOfStocks: parseInt(sellNumberOfStocks), 
      sellPrice: parseFloat(sellStockPrice), 
      bankAccount: sellBankAccountName 
    };
    setSellStocks([...sellStocks, newStock]);
    setSellStockName('');
    setSellNumberOfStocks('');
    setSellStockPrice('');
    setSellBankAccountName('');
  };

  const calculateTotalInvested = () => {
    // Logic to calculate total invested amount
  };

  const calculateTotalReturns = () => {
    // Logic to calculate total returns
  };

  const calculateNetProfit = () => {
    // Logic to calculate net profit
  };

  return (
    <>
      <NavBar />
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Stock Investment</h2>
        <div className="mb-4 bg-slate-300 p-4 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Investment Summary</h3>
          <div className="flex justify-between">
            <div>
              <p>Total Amount Invested: {calculateTotalInvested()}</p>
              <p>Total Returns: {calculateTotalReturns()}</p>
              <p>Net Profit: {calculateNetProfit()}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4 bg-slate-300 p-4 rounded-md flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Buy Section</h3>
              <div className="flex mb-2">
                <input
                  type="text"
                  placeholder="Stock Name"
                  className="p-3 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  value={buyStockName}
                  onChange={(e) => setBuyStockName(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Stock Price"
                  className="p-3 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  value={buyStockPrice}
                  onChange={(e) => setBuyStockPrice(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Number Of Stocks"
                  className="p-3 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  value={buyNumberOfStocks}
                  onChange={(e) => setBuyNumberOfStocks(e.target.value)}
                />
              </div>
              <div className="flex mb-2 items-center">
                <input
                  type="text"
                  placeholder="Bank Account Name"
                  className="p-3 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  value={buyBankAccountName}
                  onChange={(e) => setBuyBankAccountName(e.target.value)}
                />
                <button
                  onClick={handleAddBuyStock}
                  className="bg-green-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-600 transition duration-300"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-slate-300 p-4 rounded-md flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Sell Section</h3>
              <div className="flex mb-2">
                <select
                  value={sellStockName}
                  onChange={(e) => setSellStockName(e.target.value)}
                  className="p-3 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select Stock</option>
                  {/* Add options dynamically here */}
                </select>
                <p className="p-3 mr-2 border border-gray-300 rounded-md">{sellTotalStocks}</p>
                <input
                  type="number"
                  placeholder="Number Of Stocks to Sell"
                  className="p-3 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  value={sellNumberOfStocks}
                  onChange={(e) => setSellNumberOfStocks(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Sell Price"
                  className="p-3 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  value={sellStockPrice}
                  onChange={(e) => setSellStockPrice(e.target.value)}
                />
              </div>
              <div className="flex mb-2 items-center">
                <input
                  type="text"
                  placeholder="Bank Account Name"
                  className="p-3 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  value={sellBankAccountName}
                  onChange={(e) => setSellBankAccountName(e.target.value)}
                />
                <button
                  onClick={handleAddSellStock}
                  className="bg-red-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-red-600 transition duration-300"
                >
                  Sell
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Add your calculation and display logic for total net profit here */}
      </div>
    </>
  );
};

export default Investment;
