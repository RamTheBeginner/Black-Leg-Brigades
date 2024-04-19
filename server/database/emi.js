const mongoose = require('mongoose');


const cardSchema = new mongoose.Schema({
  balance: { type: Number, required: true }, 
  turnsleft: { type: Number, required: true }, 
  penality: { type: Number, required: true }, 

});

const Emi = mongoose.model('emi', cardSchema);

module.exports = Emi;