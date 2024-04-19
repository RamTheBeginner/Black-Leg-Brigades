const mongoose = require('mongoose');


const cardSchema = new mongoose.Schema({
  token: {type: String , required: true},
  stockname: { type: String, required: true }, 
  purchase: { type: Number, required: true }, 
  Target: { type: Number, required: true }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
