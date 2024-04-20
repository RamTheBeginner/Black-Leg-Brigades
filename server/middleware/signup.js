const express = require("express");
const userdata = require('../database/userdata');
const router = express.Router();
router.post('/user',(req,res)=>{
    console.log(req.body);
    userdata.create({
    
    email:req.body.email,
    nickname:req.body.fullName,
    contactNumber:req.body.phoneNumber,
    walletamount:0,
    totalinvestment:0,
    netprofit:0,

})
res.status(200).send('user is added to data base successfully')
})

module.exports = router;