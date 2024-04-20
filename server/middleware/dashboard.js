const express = require("express");
const userdata = require('../database/userdata');
const transactiondata = require('../database/transaction');
const carddata = require('../database/cardData');
const { default: mongoose } = require("mongoose");
const router = express.Router();
router.get('/addatransaction',(req,res)=>{
    const date = new Date();
    transactiondata.create({
        token: req.body.token,
        category : req.body.category,
        amount: req.body.amount,
        account: req.body.account,
        date: date
    })
})

router.post('/carddata' , (req,res) => {
    carddata.create({
        token: req.body.token,
        type: req.body.type, 
        holderName: req.body.holdername, 
        issuer: req.body.issuer, 
        name: req.body.name,
        balance: req.body.balance,
    })
})

router.get('/carddata' , (req,res) => {
    carddata.find({token: req.body.token})
    .populate("emi")
    .then(docs => {
        
    })

    
})

module.exports = router;