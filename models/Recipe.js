//DEPENDENCIES
const mongoose = require("./connection");

//DEFINE MODEL
const { Schema, model } = mongoose;

//Schema
const recipeSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String, required: false },
  img2: { type: String, required: false },
  ingredients: { type: String, required: false },
  instructions: { type: String, required: false },
  link: { type: String, required: false },
  notes: { type: String, required: false },
});

//Create Model
const Recipe = model("Recipe", recipeSchema);

//Expore Model
module.exports = Recipe;
