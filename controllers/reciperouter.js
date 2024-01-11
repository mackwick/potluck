//DEPENDENCIES
const express = require("express");
const Recipe = require("../models/Recipe");

//ROUTER
const router = express.Router();

//ROUTES
//SEED
router.get("/seed", async (req, res) => {
  try {
    await Recipe.deleteMany({});
    const recipes = await Recipe.create([
      {
        name: "Miso maple stirfry",
        ingredients: [
          "2 packs tofu, cut into cubes, and airfried with soy sauce",
          "quinoa or rice as base",
          "Scoop of white miso",
          "sloosh tahini",
          "maple syrup",
          "sloosh sriracha",
          "grated ginger",
          "grated garlic",
          "dash powered ginger",
          "dash powdered garlic",
          "dash salt",
          "2 red peppers, chopped bite size",
          "10 little or 2 big eggplants, same - after sweating 20 min w/ kosher salt",
        ],
        instructions: [
          "add everything but the tofu, quinoa, peppers, and eggplant to a bowl; heat in the microwave; and mix with a fork",
          "toss with peppers and eggplant",
          "stir fry ~20 minutes, adding tofu halfway through",
          "add more maple, soy, and sriracha to taste",
          "serve over base",
        ],
      },
      {
        name: "Easy Kitchari (Instant Pot Friendly!)",
        img: "https://minimalistbaker.com/wp-content/uploads/2021/02/EASY-Kitchari-Instant-Pot-Friendly-Comforting-Ayurvedic-inspired-and-just-1-pot-3-ingredients-required.-minimalistbaker-kitchari-instantpot-4.jpg",
        link: "https://minimalistbaker.com/easy-kitchari-instant-pot-friendly/",
        notes:
          "This recipe is a 10/10, but cook for 12 minutes instead of 4 and definitely don't forget the lime, cilantro, and ghee. We love this with steamed kale and carrots.",
      },
    ]);
  } catch (error) {
    res.status(400).send("There has been an error. Check logs for details.");
    console.log(error.message);
  }
});

//INDEX ROUTE
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.render("index.ejs", { recipes });
  } catch (error) {
    res.status(400).send("There was an error. Check logs for details");
    console.log(error.message);
  }
});

//EXPORT
module.exports = router;
