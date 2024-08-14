import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TransactionSchema = new mongoose.Schema({
 
  Amount:{
    type:Number
  },
  Type:{
    type:String,
    enum:["Credit","Debit"],
    default:"Debit"
  },
  Category:{
    type:String
  },
  Account:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Accounts',
    required:true
  },
  Date:{
    type:String
  }
});

const Transaction = mongoose.model("Transation", TransactionSchema);
export default Transaction;
