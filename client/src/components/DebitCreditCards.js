// DebitCreditCards.jsx
import React from 'react';

const DebitCreditCards = () => {
  // Placeholder data
  const cards = [
    { id: 1, type: 'Debit', cardNumber: '1234 5678 9012 3456' },
    { id: 2, type: 'Credit', cardNumber: '9876 5432 1098 7654' },
    // Add more cards as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cards.map(card => (
        <div key={card.id} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">{card.type} Card</h3>
          <p className="text-sm">Card Number: {card.cardNumber}</p>
        </div>
      ))}
    </div>
  );
}

export default DebitCreditCards;
