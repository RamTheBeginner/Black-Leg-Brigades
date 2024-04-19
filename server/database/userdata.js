const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
    token:String,
    email:String,
    nickname:String,
    contactNumber:Number,
    walletamount:Number
});
const model = new mongoose.model("user_data",userschema);
module.exports = model;