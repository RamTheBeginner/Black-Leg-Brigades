import React, { useState } from 'react';
import { useAuth } from '../contexts/auth'
import axios from 'axios';
const Emi = ({accounts}) => {
  const [emiAmount, setEmiAmount] = useState('');
  const [fromAccount, setFromAccount] = useState('');
  const [penalty, setPenalty] = useState('');
  const [totalTurns, setTotalTurns] = useState('');

  const handleEmiAmountChange = (e) => {
    setEmiAmount(e.target.value);
  };

  const handleFromAccountChange = (e) => {
    setFromAccount(e.target.value);
    
  };

  const handlePenaltyChange = (e) => {
    setPenalty(e.target.value);
  };

  const handleTotalTurnsChange = (e) => {
    setTotalTurns(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requests = async () =>{
      const response = await axios.post('http://localhost:5000/api/transcaution/addemi', {
        emiAmount: emiAmount,
        fromAccount:accounts[fromAccount]._id,
        penalty: penalty,
        totalTurns:totalTurns

    }, {
        withCredentials: true,
    });

    }

    if(accounts[fromAccount].type === 'credit'){
     if(accounts[fromAccount].balance >= emiAmount){
      requests();
     }
    }else{
      requests();
    }
    // Perform actions like submitting the EMI form
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl mb-4 font-semibold text-center">EMI</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="emiAmount" className="block text-gray-700 font-bold mb-2">
            EMI Amount:
          </label>
          <input
            type="text"
            id="emiAmount"
            value={emiAmount}
            onChange={handleEmiAmountChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter EMI amount"
          />
        </div>
        <div>
          <label htmlFor="fromAccount" className="block text-gray-700 font-bold mb-2">
            From Account:
          </label>
          <select
            id="fromAccount"
            value={fromAccount}
            onChange={handleFromAccountChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value='select from my above'>select the option</option>
            {accounts.map((account,index)=>(
              <option key={index} value={index}>{account.name}</option>
            ))}
            
          </select>
        </div>
        <div>
          <label htmlFor="penalty" className="block text-gray-700 font-bold mb-2">
            Penalty:
          </label>
          <input
            type="text"
            id="penalty"
            value={penalty}
            onChange={handlePenaltyChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter penalty"
          />
        </div>
        <div>
          <label htmlFor="totalTurns" className="block text-gray-700 font-bold mb-2">
            Total Turns:
          </label>
          <input
            type="text"
            id="totalTurns"
            value={totalTurns}
            onChange={handleTotalTurnsChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter total turns"
          />
        </div>
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
  );
};

export default Emi;
