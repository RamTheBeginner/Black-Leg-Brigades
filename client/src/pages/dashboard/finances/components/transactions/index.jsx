import { change } from "@/store/reducers/DasboardSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ComboboxPopover } from "../comboBox";
import { Button } from "@/components/ui/button";
import { ADD_TRANSATION } from "@/utils/constants";
import { apiClient } from "@/lib/api-client";
import { userChange } from "@/store/reducers/UserSlice";
import { toast } from "sonner";

const Transactions = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const transaction = useSelector((state) => state.transaction.value);
  const user = useSelector((state) => state.user.value);

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async () => {
    if (!amount || !transactionType || !category || !transaction) {
      toast.error("All the fields are required");
    } else {
      if (
        transactionType === "Credit" ||
        amount <= user.Accounts[transaction].balance
      ) {
        const formData = new FormData();

        formData.append("Account", user.Accounts[transaction]._id);
        formData.append("Type", transactionType);
        formData.append("Amount", amount);
        formData.append("Category", category);
        formData.append("userData", user.id);
        setLoading(true);
        const response = await apiClient.post(ADD_TRANSATION, formData);

        if (response.status === 200 && response.data) {
          dispatch(userChange(response.data.user));
        }
        setLoading(false);
      }
    }
  };

  return (
    <div className="relative p-4 bg-[#dde7ee] min-h-dvh">
      <button
        className="absolute top-4 right-4 p-2 bg-yellow-400 text-white rounded-lg shadow-md hover:bg-yellow-300 transition duration-200"
        onClick={() => dispatch(change(8))}
      >
        Go Back
      </button>

      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Transactions</h1>
        <p className="text-lg text-gray-600 mb-4">
          Here you can view and manage your transactions. Use the features
          provided to keep track of your financial activities.
        </p>

        {/* Form Fields Side by Side */}
        <div className="flex justify-center space-x-4 mb-8">
          {/* Account Selection Dropdown */}
          <div className="mt-2">
            <ComboboxPopover />
          </div>

          {/* Amount Input */}
          <div>
            <label className="block text-gray-700 mb-2">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => {
                if (e.target.value < 0) {
                  e.target.value = null;
                }
                setAmount(e.target.value);
              }}
              className="p-2 rounded-lg shadow-md w-52"
              placeholder="Enter amount"
            />
          </div>

          {/* Transaction Type Dropdown */}
          <div>
            <label className="block text-gray-700 mb-2">Transaction Type</label>
            <select
              value={transactionType}
              onChange={handleTransactionTypeChange}
              className="p-2 rounded-lg shadow-md w-52"
            >
              <option value="">Select Type</option>
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </select>
          </div>

          {/* Category Input */}
          <div>
            <label className="block text-gray-700 mb-2">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 rounded-lg shadow-md w-52"
              placeholder="Enter category"
            />
          </div>
          <div>
            <Button className="mt-8" disabled={loading} onClick={handleSubmit}>
              submit
            </Button>
          </div>
        </div>

        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3 items-start">
            Transaction Tips
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Review your transactions regularly for accuracy.</li>
            <li>Use filters to find specific transactions quickly.</li>
            <li>
              If you notice any discrepancies, contact support immediately.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
