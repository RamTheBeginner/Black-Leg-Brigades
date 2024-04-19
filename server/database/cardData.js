const mongoose = require('mongoose');


const cardSchema = new mongoose.Schema({
  token: {type: String , required: true},
  type: { type: String, required: true }, 
  holderName: { type: String, required: true }, 
  issuer: { type: String, required: true }, 
  name: { type: String, required: true },
  balance: { type: Number, required: true },
  emi: [{type: Schema.Types.ObjectId, ref : 'emi'}]
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
