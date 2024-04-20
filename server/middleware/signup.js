const express = require("express");
const userdata = require('../database/userdata');
const router = express.Router();
router.post('/user',(req,res)=>{
  
    userdata.create({
    token:req.body.token,
    email:req.body.email,
    nickname:req.body.fullName,
    contactNumber:req.body.phoneNumber,
    walletamount:0,
    totalinvestment:0,
    netprofit:0,

})
.then((doc)=>{
    
    res.status(200).json(doc)
})
.catch((error)=>{
    res.status(404).json(error);
})

})

module.exports = router;