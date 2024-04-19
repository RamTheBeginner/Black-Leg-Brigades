// WalletDetails.jsx
import React from 'react';

const WalletDetails = () => {
  // Placeholder data
  const walletDetails = {
    balance: 1000,
    currency: 'USD',
    transactions: [
      { id: 1, amount: -50, description: 'Supermarket' },
      { id: 2, amount: 200, description: 'Salary' },
      // Add more transactions as needed
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <p className="text-lg font-semibold mb-2">Wallet Balance: {walletDetails.balance} {walletDetails.currency}</p>
      <div>
        <h3 className="text-lg font-semibold mb-2">Recent Transactions:</h3>
        <ul>
          {walletDetails.transactions.map(transaction => (
            <li key={transaction.id}>
              {transaction.description}: {transaction.amount} {walletDetails.currency}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WalletDetails;
