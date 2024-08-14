import { request, response } from "express";
import Account from "../models/AccountModel.js";
import User from "../models/UserModel.js";

export const Add_account = async(request,response) => {

    try{
        let {bankName,accountNumber,creditLimit,date,type,userData} = request.body;
        console.log(request.body)
        let month = date.substring(0,2);
        let year = date.substring(3,5);
        let balance = 0;
        
        if(type == 'Credit'){
            balance = creditLimit;
            console.log("i am here")


        }else{
            creditLimit = 0;

        }
        let newAccount = await Account.create({
            bankName,accountNumber,creditLimit,month,year,balance,type:type

        })

        //console.log(newAccount)

        let user1 = await User.findByIdAndUpdate(userData,{$push: { Accounts: newAccount._id }}).populate('Accounts');
        let user = await User.findById(userData).populate('Accounts')

        //console.log(user);
        if(user)
        return response.status(200).json({
            user: {
              id: user.id,
              email: user.email,
              profileSetup: user.profileSetup,
              firstName: user.firstName,
              lastName: user.lastName,
              image: user.image,
              Accounts:user.Accounts
            },
          });
        else{
            response.status(401);
        }


    }
    catch(err){
        console.log({ err });
    return response.status(500).send("Internal server Error");

    }
}