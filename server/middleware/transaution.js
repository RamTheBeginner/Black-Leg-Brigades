const express = require("express");
const userdata = require('../database/userdata');
const investmentdata = require('../database/investment');
const carddata = require('../database/cardData');
const emidata = require('../database/emi');
const transationdata = require('../database/transaction')
const router = express.Router();
const mongoose = require('mongoose')

router.post('/addtransation',(req,res)=>{

    const currentDate = new Date();

     const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // January is 0!
const year = currentDate.getFullYear();

const formattedDate = `${day}/${month}/${year}`;

console.log(formattedDate); // Output: e.g., 20/04/2024
    if(req.body.type == 1){
        transationdata.create({
            token: req.body.token,
            category : req.body.category, 
            amount: req.body.amount, 
            account: req.body.deductedFrom, 
            date:formattedDate,
           
            type:'cerdit'
        })
        .then(doc =>{
            res.status(202).send(doc);
        })
        .catch((error)=>{
            res.status(500).send(error)
        })
      console.log(req.body.deductedFrom)
        if(req.body.deductedFrom === 'wallet'){
            console.log("hello")
          userdata.updateMany({token:req.body.token},{$inc: { walletamount: req.body.amount } })
          .then(doc=>{
            console.log(doc);
          })
        }else{
            carddata.findByIdAndUpdate(req.body.deductedFrom,{$inc: { balance: req.body.amount } })
            
        }
    }else{
        transationdata.create({
            token: req.body.token,
            amount: req.body.amount, 
            account: req.body.deductedFrom, 
            date: formattedDate,
            source:req.body.source,
            type:'debit'
        })
        .then(doc =>{
            res.status(202).send(doc);
        })
        .catch((error)=>{
            res.status(500).send(error)
        })
        console.log(req.body.deductedFrom)
        if(req.body.deductedFrom === 'wallet'){
            userdata.updateMany({token:req.body.token},{$inc: { walletamount: -1*req.body.amount } })
          }else{
        
            carddata.findByIdAndUpdate(req.body.deductedFrom,{$inc: { balance: req.body.amount } })
            
        }

    }


})

router.post('/addaccount',(req,res)=>{
    carddata.create({
        token: req.body.token,
        type: req.body.type, 
        holderName: req.body.holderName, 
        issuer: req.body.issuerName, 
        name: req.body.fullname,
        balance: req.body.balance
       
    })
    .then((doc)=>{
        userdata.updateMany(
            { token: req.body.token },
            { $push: {account : doc._id } }
          )
          .then(result => {
            res.status(202).json(result)
          })
          .catch(err => {
            console.error(err);
          });
    })
})

router.post('/addemi',(req,res)=>{

   
    let monthlydue = parseInt(req.body.emiAmount/req.body.totalTurns);
  
    const currentTimestamp = Date.now();
    const currentDate = new Date(currentTimestamp);
    const currentMonth = currentDate.getMonth();
    let id = req.body.fromAccount
    emidata.create({
        balance: req.body.emiAmount, 
        turnsleft: req.body.totalTurns, 
        penality: req.body.penalty, 
        thismonthdue: monthlydue,
        monthid:currentMonth
    })
    .then((doc)=>{
       
        carddata.findByIdAndUpdate(
            id,
            { $push: {emi: doc._id } }
          )
          .then(result => {
        
            res.status(202).json(result)
          })
          .catch(err => {
            console.error(err);
          });
    })

    
  
})

module.exports = router;