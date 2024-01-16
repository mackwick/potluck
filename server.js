//DEPENDENCIES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const RecipeRouter = require("./controllers/reciperouter");
const UserRouter = require("./controllers/userrouter");
const connectMongo = require("connect-mongo");
const session = require("express-session");

//APP OBJ
const app = express();
const SECRET = process.env.SECRET;
const DATABASE_URL = process.env.DATABASE_URL;

//MIDDLEWARE
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: SECRET,
    resave: true,
    saveUnitialized: true,
    store: connectMongo.create({ mongoUrl: DATABASE_URL }),
  })
);

//ROUTERS
app.use("/user", UserRouter);
app.use("/", RecipeRouter);

//SERVER LISTENER
const PORT = process.env.PORT || 1313;
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
