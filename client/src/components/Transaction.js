import React, { useState } from "react";
import NavBar from "./NavBar";
import AddAccountForm from "./AddAccountForm";
import Emi from "./Emi";
import AddATransaction from "./AddATransaction"

const Transaction = () => {
  const [transactionType, setTransactionType] = useState("credit");
  const [selectedOption, setSelectedOption] = useState("");
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [deductedFrom, setDeductedFrom] = useState("");
  const [category, setCategory] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSourceChange = (e) => {
    setSource(e.target.value);
  };

  const handleDeductedFromChange = (e) => {
    setDeductedFrom(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions like submitting the transaction with the selected option and amount
  };

  return (
    <>
      <NavBar />
      <div className="bg-gradient-to-br from-blue-700 to-red-500">
      <div className="py-20 flex flex-wrap justify-center">
      <div className="max-w-md w-full lg:w-1/2 mx-auto mb-4">
        <AddATransaction />
      </div>
      <div className="max-w-md w-full lg:w-1/2 mx-auto mb-4">
        <AddAccountForm />
      </div>
      <div className="max-w-md w-full lg:w-1/2 mx-auto mb-4">
        <Emi />
      </div>
    </div>
    </div>
    </>
  );
};

export default Transaction;
