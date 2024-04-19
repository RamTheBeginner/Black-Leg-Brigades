const express = require("express");
const userdata = require('../database/userdata');
const router = express.Router();
router.get('/user',(req,res)=>{
    console.log(req.body);
})

module.exports = router;