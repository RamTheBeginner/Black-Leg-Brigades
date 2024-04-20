import React, { useState } from 'react';

const AddAccountForm = () => {
  const [type, setType] = useState('');
  const [holderName, setHolderName] = useState('');
  const [issuerName, setIssuerName] = useState('');
  const [balance, setBalance] = useState('');

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleHolderNameChange = (e) => {
    setHolderName(e.target.value);
  };

  const handleIssuerNameChange = (e) => {
    setIssuerName(e.target.value);
  };

  const handleBalanceChange = (e) => {
    setBalance(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions like submitting the account details
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl mb-4 font-semibold text-center">Add Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="type"
            className="block text-gray-700 font-bold mb-2"
          >
            Type:
          </label>
          <select
            id="type"
            value={type}
            onChange={handleTypeChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Type</option>
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="holderName"
            className="block text-gray-700 font-bold mb-2"
          >
            Holder Name:
          </label>
          <input
            type="text"
            id="holderName"
            value={holderName}
            onChange={handleHolderNameChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter holder name"
          />
        </div>
        <div>
          <label
            htmlFor="issuerName"
            className="block text-gray-700 font-bold mb-2"
          >
            Issuer Name:
          </label>
          <input
            type="text"
            id="issuerName"
            value={issuerName}
            onChange={handleIssuerNameChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter issuer name"
          />
        </div>
        <div>
          <label
            htmlFor="balance"
            className="block text-gray-700 font-bold mb-2"
          >
            Balance:
          </label>
          <input
            type="text"
            id="balance"
            value={balance}
            onChange={handleBalanceChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter balance"
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

export default AddAccountForm;
