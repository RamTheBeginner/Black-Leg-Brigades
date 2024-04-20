import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import AddAccountForm from "./AddAccountForm";
import Emi from "./Emi";
import axios from "axios";
import { useAuth } from "../contexts/auth";

const Transaction = () => {
  const [transactionType, setTransactionType] = useState("credit");
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [deductedFrom, setDeductedFrom] = useState("wallet");
  const [category, setCategory] = useState("");
  const [accounts, setAccounts] = useState([]);
  const { currentUser } = useAuth();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const type = transactionType === "credit" ? 1 : 0;
    let from = deductedFrom;
    if (deductedFrom !== "wallet") {
      from = accounts[deductedFrom]._id;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/transcaution/addtransation",
        {
          type,
          token: currentUser.uid,
          amount,
          source,
          deductedFrom: from,
          category,
        },
        { withCredentials: true }
      );
    } catch (error) {
      console.error("Error submitting transaction:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/investment/carddata/${currentUser.uid}`,
          { withCredentials: true }
        );
        setAccounts(response.data[0].account);
      } catch (error) {
        console.error("Error fetching account data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url('/Chart.jpg')",
        backgroundSize: "cover",
        minHeight: "100vh",
        backgroundAttachment: "fixed"
      }}
    >
      <NavBar />
      <div className="flex justify-center">
        <div className="flex">
          <div className="mx-2 my-4 w-96">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-2xl mb-4 font-semibold text-center">
                Transaction
              </h2>
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
                    <option value="credit">Credit</option>
                    <option value="debit">Debit</option>
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

                    <label
                      htmlFor="deductedFrom1"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Credited To:
                    </label>
                    <select
                      id="deductedFrom1"
                      value={deductedFrom}
                      onChange={handleDeductedFromChange}
                      className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="">Cards</option>
                      <option value="wallet">Wallet</option>
                      {accounts.map(
                        (account, index) =>
                          account.type === "debit" && (
                            <option key={index} value={index}>
                              {account.name}
                            </option>
                          )
                      )}
                    </select>
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
                      <option value="">Wallet</option>
                      <option value="wallet">Card</option>
                      {accounts.map((account, index) => (
                        <option key={index} value={index}>
                          {account.name}
                        </option>
                      ))}
                    </select>
                    <label
                      htmlFor="category"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Category:
                    </label>
                    <select
                      id="category"
                      value={category}
                      onChange={handleCategoryChange}
                      className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option hidden value="">
                        Select Category
                      </option>
                      <option value="entertainment">Entertainment</option>
                      <option value="shopping">Shopping</option>
                      <option value="food">Food</option>
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
          </div>
          <div className="mx-2 my-4 w-96">
            <div className="bg-white rounded-lg shadow-md p-4">
              <AddAccountForm />
            </div>
          </div>
          <div className="mx-2 my-4 w-96">
            <div className="bg-white rounded-lg shadow-md p-4">
              <Emi accounts={accounts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
