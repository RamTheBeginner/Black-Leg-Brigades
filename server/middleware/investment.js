const express = require("express");
const userdata = require('../database/userdata');
const router = express.Router();
router.get('/carddata',(req,res)=>{
    
   
res.status(200).send('user is added to data base successfully')
})

module.exports = router;