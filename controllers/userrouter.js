//DEPENDENCIES
const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Recipe = require("../models/Recipe");

//ROUTER
const router = express.Router();

//ROUTES
//SIGNUP/LOGIN - RENDER FORM PAGE
router.get("/forms", (req, res) => {
  res.render("signuplogin.ejs");
});

//SIGNUP - PROCESS FORM + SEED
router.post("/signup", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(
      req.body.password,
      await bcrypt.genSalt(10)
    );
    await User.create(req.body);
    const recipes = await Recipe.find({ username: "seed" });
    const myRecipes = recipes.map((v) => ({
      name: v.name,
      img: v.img,
      img2: v.img2,
      ingredients: v.ingredients,
      instructions: v.instructions,
      link: v.link,
      notes: v.notes,
      username: req.body.username,
    }));
    // res.json(myRecipes);
    await Recipe.create(myRecipes);
    res.redirect("/user/forms");
  } catch (error) {
    res.status(400).render("error.ejs");
    console.log(error.message);
  }
});

//LOGIN - PROCESS FORM
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("Username not found. Please try again.");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("Password does not match username. Please try again.");
    }
    req.session.loggedIn = true;
    req.session.username = username;
    res.redirect("/");
  } catch (error) {
    res.status(400).render("error.ejs");
    console.log(error.message);
  }
});

//LOGOUT - DESTROY SESSION
router.get("/logout", async (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/user/forms");
  });
});

//EXPORT
module.exports = router;
