//DEPENDENCIES
const express = require("express");
const Recipe = require("../models/Recipe");
const authMiddleware = require("./authmiddleware");

//ROUTER
const router = express.Router();

//ROUTES
//INDEX ROUTE
router.get("/", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      const recipes = await Recipe.find({ username: req.session.username });
      res.render("index.ejs", { recipes });
    } else {
      const recipes = await Recipe.find({ username: "seed" });
      res.render("index.ejs", { recipes });
    }
  } catch (error) {
    res.status(400).render("error.ejs");
    console.log(error.message);
  }
});

//NEW
router.get("/new", authMiddleware, (req, res) => {
  res.render("new.ejs");
});

//DELETE
router.delete("/:id", authMiddleware, async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

//UPDATE
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    await Recipe.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  } catch (error) {
    res.status(400).render("error.ejs");
    console.log(error.message);
  }
});

//CREATE
router.post("/", async (req, res) => {
  try {
    req.body.username = req.session.username;
    const newRecipe = await Recipe.create(req.body);
    // res.json(newRecipe);
    res.redirect("/");
  } catch (error) {
    res.status(400).render("error.ejs");
    console.log(error.message);
  }
});

//EDIT
router.get("/:id/edit", authMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    const editRecipe = await Recipe.findById(id);
    res.render("edit.ejs", { editRecipe });
  } catch (error) {
    res.status(400).render("error.ejs");
    console.log(error.message);
  }
});

//SHOW ROUTE
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const recipe = await Recipe.findById(id);
    res.render("show.ejs", { recipe });
  } catch (error) {
    res.status(400).render("error.ejs");
    console.log(error.message);
  }
});

//EXPORT
module.exports = router;
