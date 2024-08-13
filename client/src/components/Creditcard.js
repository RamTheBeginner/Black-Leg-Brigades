import React, { useState } from 'react';
import CardDetails from './CardDetailsPage'; // Import the component to display card details
import mastercardImg from '../assets/images/mastercard.png';

const Card = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState(null); // State to hold selected card data

  // Function to handle card click and set selected card data
  const handleCardClick = (card) => {
    setSelectedCard(card); // Set selected card data
    console.log(card);
  };

  return (
    <div className="space-y-16">
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => handleCardClick(card)} // Attach click event to set selected card
          className="w-96 h-56 m-auto bg-gradient-to-br from-blue-700 to-red-500 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110 cursor-pointer" // Add cursor-pointer for mouse cursor
        >
          <div className="w-full px-8 absolute top-8">
            <div className="flex justify-between">
              <div>
                <p className="font-medium tracking-widest">Credit</p>
              </div>
              <img className="w-14 h-14" src={mastercardImg} alt="Mastercard" />
            </div>
            <div className="pt-1">
              <p className="font-medium tracking-more-wider">{card.holderName}</p>
            </div>
            <div className="pt-6 pr-6">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium tracking-wider text-xl">{card.issuer}</p>
                </div>
                <div>
                  <p className="font-light text-xs">Expiry</p>
                  <p className="font-medium tracking-wider text-sm">03/25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Render CardDetails component with selected card data if available */}
      {selectedCard && <CardDetails data={selectedCard} />}
    </div>
  );
};

export default Card;
