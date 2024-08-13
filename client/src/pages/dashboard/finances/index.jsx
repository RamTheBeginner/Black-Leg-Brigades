import { change } from "@/store/reducers/DasboardSlice";
import React from "react";
import { useDispatch } from "react-redux";

const Manage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex min-h-screen bg-[#dde7ee]">
        <main className="flex-1 p-6 bg-[#dde7ee]">
          <h1 className="text-3xl font-semibold mb-6">Financial Dashboard</h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 bg-[#dde7ee] rounded shadow">
              <h2 className="text-xl font-semibold">Savings</h2>
              <p className="mt-2 text-gray-600">$5,678.90</p>
            </div>
          </div>

          <div className="mt-6 h-1/3 w-full">
            <h2 className="text-2xl font-semibold mb-4">
              Income vs Expenditure
            </h2>
          </div>

          <div className="mt-6 h-1/3 w-full items-center">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam quo dignissimos illum et numquam quod est cupiditate
              dolorum similique magnam.
            </p>
            <div className="flex flex-col md:flex-row mt-6 gap-4 items-center justify-center">
              <div className="flex flex-col items-center text-center">
                <span className="mb-2">Go to the Accounts section</span>
                <button
                  className="p-2 bg-green-500 rounded-lg w-40"
                  onClick={() => dispatch(change(10))}
                >
                  Account
                </button>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="mb-2">Go to Transactions section</span>
                <button
                  className="p-2 bg-pink-400 rounded-lg w-40"
                  onClick={() => dispatch(change(11))}
                >
                  Transactions
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Manage;
