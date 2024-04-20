import React from 'react';
import mastercardImg from '../assets/images/mastercard.png';

const Card = ({ cards }) => {
  return (
    <div className="space-y-16">
      {cards.map((card) => (
        <div
          key={card.id}
          className="w-96 h-56 m-auto bg-gradient-to-br from-blue-700 to-red-500 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110"
        >
          <div className="w-full px-8 absolute top-8">
            <div className="flex justify-between">
              <div>
                <p className="font-medium tracking-widest">{card.type}</p>
              </div>
              <img className="w-14 h-14" src={mastercardImg} alt="Mastercard" />
            </div>
            <div className="pt-1">
              <p className="font-medium tracking-more-wider">{card.HolderName}</p>
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
    </div>
  );
};

export default Card;
