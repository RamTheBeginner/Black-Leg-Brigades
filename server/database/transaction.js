const mongoose = require('mongoose');


const cardSchema = new mongoose.Schema({
  token: {type: String , required: true},
  category : { type: String, required: true }, 
  amount: { type: Number, required: true }, 
  account: { type: String, required: true }, 
  date: { type: Date, required: true },
});

const Transaction = mongoose.model('transaction', cardSchema);

module.exports = Transaction;
