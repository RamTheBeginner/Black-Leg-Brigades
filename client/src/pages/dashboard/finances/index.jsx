import { change } from "@/store/reducers/DasboardSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Manage = () => {
    const dispatch = useDispatch();
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
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
            <button onClick={() => dispatch(change(10))}>Account</button>
            <button onClick={() => dispatch(change(11))}>Transactions</button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Manage;
