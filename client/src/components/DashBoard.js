import React from "react";
import WalletDetails from "./WalletDetails"; // Create this component to display wallet details
import DebitCreditCards from "./DebitCreditCards"; // Create this component to display debit and credit cards
import NavBar from "./NavBar";

const DashBoard = () => {
  return (
    <>
      <NavBar />
      <div
        className="bg-cover h-screen"
        style={{
          backgroundImage: "url('/Coins.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-white mb-8">
            Financial Dashboard
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Wallet Details
              </h2>
              <WalletDetails />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Debit & Credit Cards
              </h2>
              <DebitCreditCards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
