const mongoose = require("mongoose");
const { default: Investment } = require("../../client/src/components/Investment");
const userschema = new mongoose.Schema({
    token:String,
    email:String,
    nickname:String,
    contactNumber:Number,
    walletamount:Number,
    totalinvestment:Number,
    netprofit:Number,
    account:[{type: mongoose.Schema.Types.ObjectId, ref : 'Card'}]
});
const model = new mongoose.model("user_data",userschema);
module.exports = model;