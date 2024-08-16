import { change } from "@/store/reducers/DasboardSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DialogBox from "../dialog";
import { transactionChange } from "@/store/reducers/AccountSlice";

const Account = () => {
  const dispatch = useDispatch();

  const [type, setType] = useState(1)
  
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
        
        <div className="flex items-center justify-around bg-[#dde7ee] shadow-md p-4 rounded-md">
        <DialogBox color={'#32cd90'} name={'Add a Account'} type={1}   sub ={'create Account'} des ={'Give Data for your account here. Click save create youre done.'} />
        <DialogBox color={'#c2d827'} name={'Edit a Account'} type={2}  sub ={'save changes'} des={ 'Make changes to your account here. Click save when youre done.'} />
        <DialogBox color={'#cc3b33'} name={'Delete a Account'} type={3}  sub={'delete Account'} des={ "Select your account here. Click delete when your'e done."} />
        </div>
        
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
