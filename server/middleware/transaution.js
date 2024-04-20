const express = require("express");
const userdata = require('../database/userdata');
const investmentdata = require('../database/investment');
const carddata = require('../database/cardData');
const emidata = require('../database/emi');
const router = express.Router();
router.post('/addaccount',(req,res)=>{
    carddata.create({
        token: req.body.token,
        type: req.body.type, 
        holderName: req.body.holderName, 
        issuer: req.body.issuerName, 
        name: req.body.fullname,
        balance: req.body.balance
       
    })
    .then((doc)=>{
        userdata.updateMany(
            { token: req.body.token },
            { $push: {account : doc._id } }
          )
          .then(result => {
            res.status(202).json(result)
          })
          .catch(err => {
            console.error(err);
          });
    })

    

})

module.exports = router;