const express = require("express");
const userdata = require('../database/userdata');
const transactiondata = require('../database/transaction');
const carddata = require('../database/cardData');
const emi = require('../database/emi')
const router = express.Router();
router.get('/userData/:token',(req,res)=>{
    console.log(req.params)
    
    userdata.find({token:req.params.token})
    .populate({ path: 'account', populate: { path: 'emi' } })
    
    .then((doc)=>{
        console.log(doc)
        res.status(202).json(doc);
    })
    .catch((err)=>{
        res.status(500).json(err);
    })
})




module.exports = router;