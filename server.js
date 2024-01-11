//DEPENDENCIES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const RecipeRouter = require("./controllers/reciperouter");

//APP OBJ
const app = express();

//MIDDLEWARE
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//ROUTERS
app.use("/", RecipeRouter);

//SERVER LISTENER
const PORT = process.env.PORT || 1313;
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
