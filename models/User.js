//DEPENDENCIES
const mongoose = require("./connection");

//DEFINE MODEL
const { Schema, model } = mongoose;

//Schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: false },
});

//Create Model
const User = model("User", userSchema);

//Expore Model
module.exports = User;
