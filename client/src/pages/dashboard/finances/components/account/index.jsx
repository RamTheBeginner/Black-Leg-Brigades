import { change } from "@/store/reducers/DasboardSlice";
import React from "react";
import { useDispatch } from "react-redux";
import DialogBox from "../dialog";

const Account = () => {
  const dispatch = useDispatch();
  
  return (
    <div className="relative p-4 bg-[#dde7ee] min-h-dvh">
      <button
        className="absolute top-4 right-4 p-2 bg-lime-400 text-white rounded-lg shadow-md hover:bg-lime-300 transition duration-200"
        onClick={() => dispatch(change(8))}
      >
        Go Back
      </button>
      
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Manage Your Account</h1>
        <p className="text-lg text-gray-600 mb-4">
          Here you can add or update your account details. Use the form below to enter or modify information as needed.
        </p>
        
        <DialogBox />
        
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Quick Tips</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Ensure all details are accurate to avoid issues.</li>
            <li>Use the form to add or update your information.</li>
            <li>If you encounter any problems, contact support.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Account;
