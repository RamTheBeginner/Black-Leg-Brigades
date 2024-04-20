import React from 'react';
import { useParams } from 'react-router-dom';

const CardDetailsPage = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h2>Card Details Page</h2>
      <p>Card ID: {id}</p>
      {/* Display card details here */}
    </div>
  );
};

export default CardDetailsPage;
