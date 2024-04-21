import React from 'react';
import { useParams } from 'react-router-dom';

const CardDetailsPage = ({ data }) => {
  console.log(data);
  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Card Details</h2>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Card Type:</h2>
        <p>{data.type}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Card Name:</h2>
        <p>{data.name}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Balance:</h2>
        <p>{data.balance}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Holder Name:</h2>
        <p>{data.holderName}</p>
      </div>
      <h1 className="text-xl font-bold mt-8 mb-4">E.M.I's Under This Card</h1>
      {data.emi.map((e, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-lg font-semibold">EMI Balance:</h2>
          <p>{e.balance}</p>
          <h2 className="text-lg font-semibold">Pls Month Due:</h2>
          <p>{e.thismonthdue}</p>
          <h2 className="text-lg font-semibold">Turns Left to Clear EMI:</h2>
          <p>{e.turnsleft}</p>
        </div>
      ))}
    </div>
  );
};

export default CardDetailsPage;
