import React from "react";
import WalletDetails from "./WalletDetails";
import DebitCreditCards from "./DebitCreditCards";
import Creditcard from "./Creditcard"
import NavBar from "./NavBar";
import { useAuth } from '../contexts/auth'
const DashBoard = () => {
  // Placeholder data for cards
  const allCards = [
    { id: 1, type: 'Debit', HolderName: 'Bellamkonda SaiVishal', issuer: 'SBI', cardName: 'vishal-sbi', cardBalance: '1234' },
    { id: 2, type: 'Credit', HolderName: 'Bellamkonda SaiVishal', issuer: 'HDFC', cardName: 'vishal-hdfc', cardBalance: '6789' },
    { id: 3, type: 'Debit', HolderName: 'Bellamkonda SaiVishal', issuer: 'SBI', cardName: 'vishal-sbi', cardBalance: '1234' },
    { id: 4, type: 'Credit', HolderName: 'Bellamkonda SaiVishal', issuer: 'HDFC', cardName: 'vishal-hdfc', cardBalance: '6789' },
    // Add more cards as needed
  ];

  // Filter debit cards
  const debitCards = allCards.filter((card) => card.type === "Debit");

  // Filter credit cards
  const creditCards = allCards.filter((card) => card.type === "Credit");

  return (
    <>
      <NavBar />
      <div
        className="bg-cover min-h-screen flex flex-col items-center"
        style={{
          backgroundImage: "url('/Coins.jpg')",
          backgroundSize: "cover",
          
        }}
      >
        <div className="container mx-auto p-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-8">
            Financial Dashboard
          </h1>
          <div className="mb-4 max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Wallet Details
            </h2>
            <WalletDetails />
          </div>
          <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            <div className="lg:order-1">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Debit Cards
              </h2>
              <DebitCreditCards cards={debitCards} />
            </div>
            <div className="lg:order-2">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Credit Cards
              </h2>
              <Creditcard cards={creditCards} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;