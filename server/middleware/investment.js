const express = require("express");
const userdata = require('../database/userdata');
require('../database/investment');
require('../database/cardData');
require('../database/emi');
const router = express.Router();
router.get('/carddata',(req,res)=>{
    
userdata.find({token:req.query.token})
.populate('account')
.then(doc =>{
    res.status(200).json(doc);
})
.catch((error)=>{
    res.status(404).json(error);
})

})

module.exports = router;