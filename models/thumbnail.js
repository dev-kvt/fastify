
const mongoose = require('mongoose');

const thumbnailSchema = new mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, required: true },
});
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country: { type: String },
  resetPasswordToken: { type: String },
  resetPasswordExpiry: Date,
});
module.exports= mongoose.model("user" ,userSchema)