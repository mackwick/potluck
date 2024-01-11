//DEPENDENCIES
const mongoose = require("./connection");

//DEFINE MODEL
const { Schema, model } = mongoose;

//Schema
const recipeSchema = new Schema({
  name: { type: String, required: true },
  img: String,
  ingredients: [String],
  instructions: [String],
  link: String,
  notes: String,
});

//Create Model
const Recipe = model("Recipe", recipeSchema);

//Expore Model
module.exports = Recipe;
