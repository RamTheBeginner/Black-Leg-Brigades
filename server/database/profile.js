const mongoose = require('mongoose');


const profileSchema = new mongoose.Schema({
  token:{type:String,required:true},
  image: { type: String, required: true }, 
  gender: { type: String, required: true }, 
  bio: { type: String, required: true }
});

const Profile = mongoose.model('profile', profileSchema);

module.exports = Profile;
