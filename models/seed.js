//DEPENDENCIES
const Recipe = require("./Recipe");
const mongoose = require("./connection");

//SEED CODE
mongoose.connection.on("open", async () => {
  try {
    await Recipe.deleteMany({});
    const recipes = await Recipe.create([
      {
        name: "Minimalist Baker's Easy Kitchari (Instant Pot Friendly!)",
        img: "https://minimalistbaker.com/wp-content/uploads/2021/02/EASY-Kitchari-Instant-Pot-Friendly-Comforting-Ayurvedic-inspired-and-just-1-pot-3-ingredients-required.-minimalistbaker-kitchari-instantpot-4.jpg",
        link: "https://minimalistbaker.com/easy-kitchari-instant-pot-friendly/",
        notes:
          "This recipe is a 10/10, but cook for 12 minutes instead of 4 and definitely don't forget the lime, cilantro, and ghee. We love this with steamed kale and carrots.",
        img2: "",
        ingredients: "",
        instructions: "",
        username: "seed",
      },
      {
        name: "Rainbow Plant Life's Red Lentil Curry",
        img: "https://rainbowplantlife.com/wp-content/uploads/2020/11/red2Blentil2Bcurry2Bangled2B-2B20202Bupdated2B2812Bof2B12928129-500x500.jpg",
        link: "https://rainbowplantlife.com/vegan-red-lentil-curry/",
        notes: "I gave this a 17/10 and it's even better the next day.",
        username: "seed",
      },
      {
        name: "Rainbow Plant Life's Tahini Pasta",
        img: "https://rainbowplantlife.com/wp-content/uploads/2022/07/Tahini_Pasta_With_Broccoli-11.jpg",
        link: "https://rainbowplantlife.com/tahini-pasta/",
        notes: "Easy and really good.",
        username: "seed",
      },
      {
        name: "Tex Mex Ceasar Salad",
        ingredients:
          "Chopped romaine, Chopped kale, Veg Caesar dressing, 1/2 avocado per salad, Powder parmesan, Red pepper flakes, Toasted pepitas, Fake chicken (we use Morningstar patties) cut into pieces",
        instructions:
          "Toss romaine, kale, dressing, parmesan, and red pepper flakes; Add everything else; Don't forget to salt your avocado",
        username: "seed",
      },
      {
        name: "Badass Tempeh Tacos",
        ingredients:
          "1 pack tempeh chopped small, 2 yellow squash cubed, 1 diced red onion, 2 tbsp olive oil, 2 tbsp soy sauce, 2 tbsp lime juice, Paprika, Cumin, Garlic powder, A little cayenne , Black pepper, Pinch of salt, Corn or flour tortillas, cheese, chopped and massaged kale, Avocado, Salsa, Hot sauce",
        instructions:
          "Mix up all the ingredients before the tortillas; Sauté that shit til squash has the teeniest of bite left; Melt some cheese ona tortilla and make a good taco; Eat the taco",
        img: "",
        img2: "",
        link: "",
        notes: "These are the best veg tacos I've ever had.",
        username: "seed",
      },
      {
        name: "Mackenzie's Za'atar Recipe",
        img: "https://i.imgur.com/Uf6U8Os.jpg",
        notes:
          "I actually serve this with quinoa or brown rice, not cauliflower rice. But my mom is my mom.",
        username: "seed",
      },
      {
        name: "Laurel's Kitchen - Best Split Pea Soup (with some mods)",
        img: "https://i.imgur.com/IOLioWH.jpg",
        username: "seed",
      },
      {
        name: "Miso Maple Stirfry",
        ingredients:
          "2 packs tofu cut into cubes and airfried with soy sauce, quinoa or rice as base, Scoop of white miso, sloosh tahini, maple syrup, grated garlic, dash powered ginger, dash powdered garlic, dash salt, 2 red peppers chopped bite size, 10 little or 2 big eggplants chopped bite size after sweating 20 min w/ kosher salt",
        instructions:
          "add everything but the tofu, quinoa, peppers, and eggplant to a bowl; heat in the microwave and mix with a fork; toss with peppers and eggplant; stir fry ~20 minutes, adding tofu halfway through; add more maple, soy, and sriracha to taste; serve over base",
        username: "seed",
      },
      {
        name: "Mom Salad",
        img: "https://i.imgur.com/3Vn4z0t.jpg",
        img2: "https://i.imgur.com/kdz6pBA.jpg",
        instructions:
          "Make farro; Mix up the dressing (I shake it in a mason jar); Massage dressing into kale; Mix the rest in",
        notes:
          "Yeah, we call this Mom Salad because my mom gave me the recipe.",
        username: "seed",
      },
      {
        name: "Dad's Pesto",
        img: "https://i.imgur.com/ynMWFJt.jpg",
        notes:
          "Best when made from basil from my dad's garden. Sorry you probably don't have that.",
        username: "seed",
      },
      {
        name: "Tempeh BBQ Sammy",
        img: "https://i.imgur.com/Pi71OUH.jpg",
        img2: "https://i.imgur.com/hOTKExw.jpg",
        ingredients: "",
        instructions: "",
        link: "",
        notes: "Messy and delightful.",
        username: "seed",
      },
      {
        name: "YouKnowWho's Banana Puddin'",
        img: "https://i.imgur.com/dmL8evf.png",
        img2: "https://i.imgur.com/QuIaceA.png",
        ingredients: "",
        instructions: "",
        link: "",
        notes:
          "Stop stirring the initial mixture when the ghost of your sweet southern aunt taps you on the shoulder. Otherwise, it will literally never thicken.",
        username: "seed",
      },
      {
        name: "Nana's Dill Pickles",
        img: "https://i.imgur.com/L799cwj.jpg",
        img2: "https://i.imgur.com/4Ltqe6L.jpg",
        ingredients: "",
        instructions: "",
        link: "",
        notes: "",
        username: "seed",
      },
      {
        name: "Smashed Brussels Sprouts",
        img: "https://i.imgur.com/BxlM4cM.png",
        img2: "",
        ingredients: "",
        instructions: "",
        link: "https://www.pinterest.com/pin/38069559340131003/",
        notes: "These are ridiculous.",
        username: "seed",
      },
      {
        name: "Yellow curry tofu scramble",
        img: "",
        img2: "",
        ingredients:
          "4 small sweet potatoes, 1 cauliflower, 3 small sweet onions, 2 packs firm or extra firm tofu, Roughly chopped cashews, Nutritional yeast, Turmeric, Garlic powder, Chili powder, Soy sauce, Curry sauce (like Trader Joe's yellow curry)",
        instructions:
          "Cut veggies up.; Roast sweet potatoes and cauliflower on separate pans at 400 for 20 minutes.Toss. Do another 20 minutes. Take sweet potatoes out. Our cauliflower needed an extra ~10 minutes.; Sauté onions in a pan.; Crumble tofu into an oiled pan by hand (could be on top of onions but with Caleb I do it separately).; Add a little soy and all the spices (fairly heavy on nooch and turmeric). Cook and mix with a spatula until it’s all covered/yellow.; Add veggies and mix.; Add sauce and mix.; Cover and simmer for 3-5 minutes to incorporate everything.; Serve topped with cashews. Sriracha optional. ",
        link: "",
        notes:
          "Recipe for like 6-8 servings? - Keep in mind I never measure anything ",
        username: "seed",
      },
      {
        name: "Date Pudding Torte",
        img: "https://i.imgur.com/zHjb1RB.jpg",
        img2: "https://i.imgur.com/i0Ki7Th.jpg",
        ingredients: "",
        instructions: "",
        link: "",
        notes: "This is so much better than it has any right to be.",
        username: "seed",
      },
      {
        name: "Just-Keeps-Getting-Better Lentil Salad",
        img: "https://assets.bonappetit.com/photos/5d66a3a4dbe5930008aaadf9/1:1/w_2240,c_limit/Basically-Lentil-Salad-01.jpg",
        img2: "",
        ingredients: "",
        instructions: "",
        link: "https://www.bonappetit.com/recipe/make-ahead-lentil-salad?epik=dj0yJnU9Z2lqZnJhMWhNNGJWcG1IQkhyVERtV0lwd0owWGRYWjAmcD0wJm49NEl5SXN2Q2FqRUpRQmVUU1gyQ1FLZyZ0PUFBQUFBR1duRXFJ",
        notes: "This is very good, but pretty time-consuming.",
        username: "seed",
      },
      {
        name: "10-Minute Immune Boosting Broth",
        img: "https://www.darngoodveggies.com/wp-content/uploads/2018/10/IMG_1927.jpg",
        img2: "",
        ingredients: "",
        instructions: "",
        link: "https://www.darngoodveggies.com/10-minute-immune-boosting-broth/",
        notes:
          "10/10 made without scallions and horseradish because I didn’t have those. Would include horseradish next time and sub a small amount of sesame oil for coconut as it’s a little oily.",
        username: "seed",
      },
      {
        _id: "65a713620d922bf67d0ad68b",
        name: "Cauliflower Wings",
        img: "https://charlestonwineandfood.com/wp-content/uploads/2020/01/IMG_FCC7491F3CE3-1.jpeg",
        img2: "",
        ingredients: "",
        instructions: "",
        link: "https://charlestonwineandfood.com/2020/01/29/super-bowl-recipe-cauliflower-wings",
        notes: "",
        username: "seed",
      },
      {
        name: "Poached Eggs with Yogurt and Spicy Butter",
        img: "https://www.marthastewart.com/thmb/R-EFueTVGAq_oMoOJCc7dfKErhA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/poached-eggs-with-yogurt-spicy-butter-102940876_horiz-b0a6579796b547cfb9d035b3314a0715.jpgitokIgSpvfYz",
        img2: "",
        ingredients: "",
        instructions: "",
        link: "https://www.marthastewart.com/1515856/poached-eggs-yogurt-and-spicy-butter?utm_source=pinterest&utm_medium=social&utm_campaign=msl_909275958",
        notes: "Really good.",
        username: "seed",
      },
    ]);
  } catch (error) {
    res.status(400).send("There has been an error. Check logs for details.");
    console.log(error.message);
  }
});
