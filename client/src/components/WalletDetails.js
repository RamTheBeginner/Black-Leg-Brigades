import React from 'react';

const WalletDetails = ({data}) => {
  // Placeholder data
  const walletDetails = {
    balance: 1000,
    currency: 'Rupees',
    transactions: [
      { id: 1, amount: -50, description: 'Supermarket' },
      { id: 2, amount: 200, description: 'Salary' },
      // Add more transactions as needed
    ],
  };

  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <div className="bg-white py-4 px-11 rounded-lg shadow-md">
        <p className="text-lg font-semibold mb-2">Wallet Balance: {data} {walletDetails.currency}</p>
        <div className="flex">
          {/*}
          <input
            type="number"
            className="appearance-none rounded-l-lg border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none"
            placeholder="Enter amount"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">
            Add balance
  </button>{*/}
        </div>

        <div>
        {/*}  <h3 className="text-lg font-semibold mb-2 mt-4">Recent Transactions:</h3>
          <ul>
            {walletDetails.transactions.map(transaction => (
              <li key={transaction.id}>
                {transaction.description}: {transaction.amount} {walletDetails.currency}
              </li>
            ))}
            </ul>{*/}
        </div>
      </div>
    </div>
  );
}

export default WalletDetails;
