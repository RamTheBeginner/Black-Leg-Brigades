const express = require("express");
const userdata = require('../database/userdata');
require('../database/investment');
const router = express.Router();
router.get('/carddata',(req,res)=>{
    console.log('hello guys')
userdata.find({token:req.query.token})
.populate('account')
.then(doc =>{
    console.log(doc);
   
    res.status(200).json(doc);
})
.catch((error)=>{
    res.status(400).send('error it is not there bady');
})

})

module.exports = router;