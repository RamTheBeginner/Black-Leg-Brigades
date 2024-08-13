const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  token: {type: String , required: true},
  category : { type: String}, 
  amount: { type: Number, required: true }, 
  account: { type: String, required: true }, 
  date: { type: String, required: true },
  source:{type:String},
  type:{type:String}
});

const Transaction = mongoose.model('transaction', cardSchema);

module.exports = Transaction;
