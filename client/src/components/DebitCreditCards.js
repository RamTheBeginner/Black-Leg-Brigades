import React from 'react';
import chipImg from '../assets/images/chip.png';
import visaImg from '../assets/images/visa.png';
import patternImg from '../assets/images/pattern.png';
import mapImg from '../assets/images/map.png';

const Card = () => {
  return (
    <div className="flex justify-center items-center h-screen pt-16"> {/* Adjusted the top padding here */}
      <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="relative">
          <img src={mapImg} alt="Map" className="absolute top-0 left-0 w-full h-full opacity-25" />
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <img src={chipImg} alt="Chip" className="w-12" />
              <img src={visaImg} alt="Visa" className="w-12" />
            </div>
            <div className="flex justify-between">
              <p className="text-xl">5244</p>
              <p className="text-xl">2150</p>
              <p className="text-xl">8252</p>
              <p className="text-xl">6420</p>
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-xs text-gray-600">CARD HOLDER</p>
              <p className="text-xs text-gray-600">VALID TILL</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg">JOE ALISON</p>
              <p className="text-lg">10 / 25</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bar bg-gray-700 h-12"></div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <img src={patternImg} alt="Pattern" className="w-6" />
              </div>
              <p className="text-xl">824</p>
            </div>
            <p className="text-sm text-gray-700">This is a virtual card design using HTML and CSS. You can also design something like this.</p>
            <div className="flex justify-end">
              <p className="text-sm text-gray-600">CUSTOMER SIGNATURE</p>
              <img src={visaImg} alt="Visa" className="w-20 ml-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
