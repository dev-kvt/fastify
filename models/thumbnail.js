
const mongoose = require('mongoose');

const thumbnailSchema = new mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, required: true },
});
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  videoName: { type: String, required: true },
  version: { type: String},
  image: { type: String , required: true },
  paid: { type: String  , default : false},
});
module.exports= mongoose.model("Thumbnail" ,thumbnailSchema)