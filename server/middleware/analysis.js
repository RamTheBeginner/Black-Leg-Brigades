const express = require("express");
const userdata = require('../database/userdata');
const transaction= require('../database/transaction')
const router = express.Router();
router.post('/getdata',(req,res)=>{
  transaction.find({date: {
    $gte: req.body.startDate,
    $lte:  req.body.endDate
},category:req.body.category,token:req.body.token,})
.then(doc=>{
res.status(200).send(doc);
})
.catch((err)=>{
    res.status(500).send(err);
})

})

module.exports = router;