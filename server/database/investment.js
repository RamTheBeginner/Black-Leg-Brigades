const mongoose = require('mongoose');


const cardSchema = new mongoose.Schema({
  token: {type: String , required: true},
  stockname: { type: String, required: true }, 
  purchase: { type: Number, required: true }, 
  account:{type: Schema.Types.ObjectId, ref : 'Card'},
  Target: { type: Number, required: true }
});

const Card = mongoose.model('investment', cardSchema);

module.exports = Card;
