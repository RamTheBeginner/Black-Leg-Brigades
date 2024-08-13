import React from "react";
import SelectTransactionType from "../selecttransactiontype";

const Daily = () => {
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        <main className="flex-1 p-6 bg-[#dde7ee]">
          <h1 className="text-3xl font-semibold mb-6">Daily Transactions</h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            <div className="p-4 bg-[#dde7ee] rounded shadow">
              <h2 className="text-xl font-semibold">Balance</h2>
              <p className="mt-2 text-gray-600">$12,345.67</p>
            </div>
            <div className="p-4 bg-[#dde7ee] rounded shadow">
              <h2 className="text-xl font-semibold">Savings</h2>
              <p className="mt-2 text-gray-600">$5,678.90</p>
            </div>
          </div>
          <div className="mt-6 h-1/3 w-full bg-[#dde7ee] rounded shadow">
            <SelectTransactionType/>
          </div>
          <div className="mt-6 h-1/3 w-full bg-[#dde7ee] rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Income vs Expenditure</h2>
           
          </div>
          <div className="mt-6 h-1/3 w-full items-center bg-[#dde7ee] rounded shadow">
            <h2 className="text-2xl font-semibold mb-4 mt-8">Expenditure Breakdown</h2>
          </div>
        </main>
      </div>
    </>
  );
};

export default Daily;
