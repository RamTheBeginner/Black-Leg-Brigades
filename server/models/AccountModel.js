import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
  accountNumber:{
    type:Number,
  },
  type:{
    type:String,
    enum:["Credit","Debit"],
    default:"Debit"
  },
  bankName:{
    type:String
  },
  month: {
    type: String,
    required: true,
    enum: [
      '01', '02', '03', '04', '05', '06', 
      '07', '08', '09', '10', '11', '12'
    ], // restricts the value to valid month numbers
  },
  year: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return /^[0-9]{2}$/.test(value); // ensures that year is exactly two digits
      },
      message: props => `${props.value} is not a valid year format!`
    }
  },
  balance:{
    type: Number
  },
  perviousmonthpayment:{
    type: Number
  },
  creditLimit:{
    type: Number
  }
});

const  Account= mongoose.model("Accounts", AccountSchema);
export default Account;
