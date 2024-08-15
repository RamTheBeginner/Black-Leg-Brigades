import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
  },
  token: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
  },
  profileSetup:{
    type:Boolean,
    default: false
  },
  firstName:{
    type:String,
  },
  lastName:{
    type:String
  },
  image:{
    type:String
  },
  Accounts:{
        type: [Schema.Types.ObjectId],
        ref: 'Accounts'
  },
  Transactions:{
    type: [Schema.Types.ObjectId],
        ref: 'Transation'

  }
});

const User = mongoose.model("Users", userSchema);
export default User;
