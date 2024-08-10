import React, { useState,useEffect } from "react";
import NavBar from "./NavBar";
import AddAccountForm from "./AddAccountForm";
import Emi from "./Emi";
import axios from 'axios';
import { useAuth } from '../contexts/auth'
const Transaction = () => {
  const [transactionType, setTransactionType] = useState("credit");
  const [selectedOption, setSelectedOption] = useState("");
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [deductedFrom, setDeductedFrom] = useState("wallet");
  const [category, setCategory] = useState("");
  const [accounts,setaccount] = useState([]);

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
  const { currentUser} = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    let type = 0;
    if(transactionType === 'credit'){
      type = 1;
    }
    let fom = deductedFrom;
    if(deductedFrom != 'wallet'){
      fom =accounts[deductedFrom]._id
    }

    const sendq = async () =>{
      const response = await axios.post('http://localhost:5000/api/transcaution/addtransation', {
        type:type,
        token:currentUser.uid,
        amount:amount,
        source:source,
        deductedFrom:fom,
        category:category


    }, {
        withCredentials: true,
    });
    }
    sendq();
    // Perform actions like submitting the transaction with the selected option and amount
  };


  
  
  useEffect( () => {
   const fetchdata = async () =>{
   const response = await axios.get('http://localhost:5000/api/investment/carddata/'+currentUser.uid, {
           withCredentials: true,
       });
       
      setaccount(response.data[0].account);
     }
     fetchdata();
     
  }, [])

  
  return (
    <>
      <NavBar />
      <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                Cerbited To:
              </label>
              <select
                id="deductedFrom1"
                value={deductedFrom}
                onChange={handleDeductedFromChange}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Source</option>
                <option value="wallet">Wallet</option>
                {accounts.map((account, index) => (
                 account.type === 'debit' && (
                 <option key={index} value={index}>{account.name}</option>
                  )
                ))}

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
                <option value="">Select Source</option>
                <option value="wallet">Wallet</option>
                {accounts.map((account,index)=>(
              <option key={index} value={index}>{account.name}</option>
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
                  <option hidden value="">Select Category</option>
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
      <AddAccountForm />
      <Emi accounts ={accounts}/>
      
    </>
  );
};



export default Transaction;
