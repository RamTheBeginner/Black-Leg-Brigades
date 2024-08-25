import { request, response } from "express";
import Account from "../models/AccountModel.js";
import Transaction from "../models/Transaction.js";
import User from "../models/UserModel.js";

export const Add_account = async (request, response) => {
  try {
    let { bankName, accountNumber, creditLimit, date, type, userData } =
      request.body;
    console.log(request.body);
    let month = date.substring(0, 2);
    let year = date.substring(3, 5);
    let balance = 0;

    if (type == "Credit") {
      balance = creditLimit;
      console.log("i am here");
    } else {
      creditLimit = 0;
    }
    let newAccount = await Account.create({
      bankName,
      accountNumber,
      creditLimit,
      month,
      year,
      balance,
      type: type,
    });

    //console.log(newAccount)

    let user1 = await User.findByIdAndUpdate(userData, {
      $push: { Accounts: newAccount._id },
    })
      .populate("Accounts")
      .populate({
        path: "Transactions",
        populate: {
          path: "Account",
        },
      });
    let user = await User.findById(userData).populate("Accounts");

    //console.log(user);
    if (user)
      return response.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          profileSetup: user.profileSetup,
          firstName: user.firstName,
          lastName: user.lastName,
          image: user.image,
          Accounts: user.Accounts,
          Transactions: user.Transactions,
        },
      });
    else {
      response.status(401);
    }
  } catch (err) {
    console.log({ err });
    return response.status(500).send("Internal server Error");
  }
};

export const edit_account = async (request,response) =>{

  try {
    let { bankName, accountNumber, creditLimit, date, type, userData,account_id } = request.body;
    let month = date.substring(0, 2);
    let year = date.substring(3, 5);
 
    let newAccount = await Account.findByIdAndUpdate(account_id,{
      bankName,
      accountNumber,
      creditLimit,
      month,
      year,
      type: type,
    });

    //console.log(newAccount)

    let user = await User.findById(userData)
      .populate("Accounts")
      .populate({
        path: "Transactions",
        populate: {
          path: "Account",
        },
      });

    //console.log(user);
    if (user)
      return response.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          profileSetup: user.profileSetup,
          firstName: user.firstName,
          lastName: user.lastName,
          image: user.image,
          Accounts: user.Accounts,
          Transactions: user.Transactions,
        },
      });
    else {
      response.status(401);
    }
  } catch (err) {
    console.log({ err });
    return response.status(500).send("Internal server Error");
  }



}

export const Delete_Account = async (request,response) => {

  try {
    let { bankName, accountNumber, creditLimit, date, type, userData,account_id } = request.body;
    let month = date.substring(0, 2);
    let year = date.substring(3, 5);
 
    let newAccount = await Account.findByIdAndDelete(account_id);

    //console.log(newAccount)
    let user1 = await Transaction.deleteMany({Account:account_id});

    //console.log(user1);

    let user = await User.findById(userData)
      .populate("Accounts")
      .populate({
        path: "Transactions",
        populate: {
          path: "Account",
        },
      });


      

    //console.log(user);
    if (user)
      return response.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          profileSetup: user.profileSetup,
          firstName: user.firstName,
          lastName: user.lastName,
          image: user.image,
          Accounts: user.Accounts,
          Transactions: user.Transactions,
        },
      });
    else {
      response.status(401);
    }
  } catch (err) {
    console.log({ err });
    return response.status(500).send("Internal server Error");
  }


}


export const Add_transaction = async (request, response) => {
  try {
    let { Amount, Type, Category, userData } = request.body;
    let Amount1 = Amount;

    if (Type !== "Credit") {
      Amount1 = -Amount;
    }
    let today = new Date();
    let formattedDate =
      String(today.getDate()).padStart(2, "0") +
      "/" +
      String(today.getMonth() + 1).padStart(2, "0") +
      "/" +
      today.getFullYear();
    let newtransaction = await Transaction.create({
      Amount,
      Type,
      Category,
      Account: request.body.Account,
      Date: formattedDate,
    });

    let udpateaccount = await Account.findByIdAndUpdate(
      request.body.Account,
      { $inc: { balance: Amount1 } },
      { new: true }
    );

    let user = await User.findByIdAndUpdate(
      userData,
      { $push: { Transactions: newtransaction._id } },
      { new: true }
    )
      .populate("Accounts")
      .populate({
        path: "Transactions",
        populate: {
          path: "Account",
        },
      });

    if (user)
      return response.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          profileSetup: user.profileSetup,
          firstName: user.firstName,
          lastName: user.lastName,
          image: user.image,
          Accounts: user.Accounts,
          Transactions: user.Transactions,
        },
      });
    else {
      response.status(401);
    }
  } catch (err) {
    console.log({ err });
    return response.status(500).send("Internal server Error");
  }
};
