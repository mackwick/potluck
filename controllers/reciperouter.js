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
          "2 packs tofu cut into cubes and airfried with soy sauce",
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
          "2 red peppers chopped bite size",
          "10 little or 2 big eggplants chopped bite size after sweating 20 min w/ kosher salt",
        ],
        instructions: [
          "add everything but the tofu, quinoa, peppers, and eggplant to a bowl",
          "heat in the microwave; and mix with a fork",
          "toss with peppers and eggplant",
          "stir fry ~20 minutes, adding tofu halfway through",
          "add more maple, soy, and sriracha to taste",
          "serve over base",
        ],
      },
      {
        name: "Minimalist Baker's Easy Kitchari (Instant Pot Friendly!)",
        img: "https://minimalistbaker.com/wp-content/uploads/2021/02/EASY-Kitchari-Instant-Pot-Friendly-Comforting-Ayurvedic-inspired-and-just-1-pot-3-ingredients-required.-minimalistbaker-kitchari-instantpot-4.jpg",
        link: "https://minimalistbaker.com/easy-kitchari-instant-pot-friendly/",
        notes:
          "This recipe is a 10/10, but cook for 12 minutes instead of 4 and definitely don't forget the lime, cilantro, and ghee. We love this with steamed kale and carrots.",
      },
      {
        name: "Rainbow Plant Life's Red Lentil Curry",
        img: "https://rainbowplantlife.com/wp-content/uploads/2020/11/red2Blentil2Bcurry2Bangled2B-2B20202Bupdated2B2812Bof2B12928129-500x500.jpg",
        link: "https://rainbowplantlife.com/vegan-red-lentil-curry/",
        notes: "I gave this a 17/10 and it's even better the next day.",
      },
      {
        name: "Rainbow Plant Life's Tahini Pasta",
        img: "https://rainbowplantlife.com/wp-content/uploads/2022/07/Tahini_Pasta_With_Broccoli-11.jpg",
        link: "https://rainbowplantlife.com/tahini-pasta/",
        notes: "Easy and really good.",
      },
      {
        name: "Tex Mex Ceasar Salad",
        ingredients: [
          "Chopped romaine",
          "Chopped kale",
          "Veg Caesar dressing",
          "1/2 avocado per salad",
          "Powder parmesan",
          "Red pepper flakes",
          "Toasted pepitas",
          "Fake chicken (we use Morningstar) cut into pieces",
        ],
        instructions: [
          "Toss romaine, kale, dressing, parmesan, and red pepper flakes",
          "Add everything else",
          "Don't forget to salt your avocado",
        ],
      },
      {
        name: "Badass Tempeh Tacos",
        ingredients: [
          "1 pack tempeh chopped small",
          "2 yellow squash cubed",
          "1 diced red onion",
          "2 tbsp olive oil",
          "2 tbsp soy sauce",
          "2 tbsp lime juice",
          "Paprika",
          "Cumin",
          "Garlic powder",
          "A little cayenne ",
          "Black pepper",
          "Pinch of salt",
          "Corn or flour tortillas",
          "cheese",
          "chopped and massaged kale",
          "Avocado",
          "Salsa",
          "Hot sauce",
        ],
        instructions: [
          "Mix up all the ingredients before the tortillas",
          "Sauté that shit til squash has the teeniest of bite left",
          "Melt some cheese ona tortilla and make a good taco",
          "Eat the taco",
        ],
      },
      {
        name: "Mom Salad",
        img: "https://i.imgur.com/kdz6pBA.jpg",
        img2: "https://i.imgur.com/3Vn4z0t.jpg",
        instructions: [
          "Make farro",
          "Mix up the dressing (I shake it in a mason jar)",
          "Massage dressing into kale",
          "Mix the rest in",
        ],
        notes:
          "Yeah, we call this Mom Salad because my mom gave me the recipe.",
      },
      {
        name: "Dad's Pesto",
        img: "https://i.imgur.com/ynMWFJt.jpg",
        notes:
          "Best when made from basil from my dad's garden. Sorry you probably don't have that.",
      },
      {
        name: "Laurel's Kitchen - Best Split Pea Soup (with some mods)",
        img: "https://i.imgur.com/IOLioWH.jpg",
      },
      {
        name: "Mackenzie's Za'atar Recipe",
        img: "https://i.imgur.com/Uf6U8Os.jpg",
        notes:
          "I actually serve this with quinoa or brown rice, not cauliflower rice. But my mom is my mom.",
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
