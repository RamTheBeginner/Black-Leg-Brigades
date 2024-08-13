const express = require("express");
const userdata = require('../database/userdata');
require('../database/investment');
require('../database/cardData');
require('../database/emi');
const router = express.Router();
router.get('/carddata/:token',(req,res)=>{
  
userdata.find({token:req.params.token})
.populate('account')
.then(doc =>{
  
   
    res.status(200).json(doc);
})
.catch((error)=>{
    res.status(400).send('error it is not there bady');
})

})

module.exports = router;