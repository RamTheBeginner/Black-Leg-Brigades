import React, { useState } from "react";
import NavBar from "./NavBar";

const Transaction = () => {
  const [transactionType, setTransactionType] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [deductedFrom, setDeductedFrom] = useState("");
  const [category, setCategory] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSourceChange = (e) => {
    setSource(e.target.value);
  };

  const handleDeductedFromChange = (e) => {
    setDeductedFrom(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions like submitting the transaction with the selected option and amount
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-4 font-semibold text-center">Transaction</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="transactionType"
              className="block text-gray-700 font-bold mb-2"
            >
              Transaction Type:
            </label>
            <select
              id="transactionType"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled hidden>Select Type</option> {/* This option is hidden */}
              <option value="debit">Debit</option>
              <option value="credit">Credit</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="amount"
              className="block text-gray-700 font-bold mb-2"
            >
              Amount:
            </label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter amount"
            />
          </div>
          {transactionType === "credit" && (
            <div>
              <label
                htmlFor="source"
                className="block text-gray-700 font-bold mb-2"
              >
                Source:
              </label>
              <input
                type="text"
                id="source"
                value={source}
                onChange={handleSourceChange}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter source"
              />
            </div>
          )}
          {transactionType === "debit" && (
            <div>
              <label
                htmlFor="deductedFrom"
                className="block text-gray-700 font-bold mb-2"
              >
                Deducted From:
              </label>
              <select
                id="deductedFrom"
                value={deductedFrom}
                onChange={handleDeductedFromChange}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Source</option>
                <option value="wallet">Wallet</option>
                <option value="cards">Cards</option>
              </select>
              <label
                htmlFor="category"
                className="block text-gray-700 font-bold mt-3 mb-2"
              >
                Category:
              </label>
              <select
                id="category"
                value={category}
                onChange={handleCategoryChange}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="entertainment">Entertainment</option>
                <option value="food">Food</option>
                <option value="shopping">Shopping</option>
                <option value="others">Others</option>
              </select>
            </div>
          )}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Transaction;
