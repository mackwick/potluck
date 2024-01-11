//DEPENDENCIES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

//ENV VARS
const { DATABASE_URL, SECRET, PORT } = process.env;

//DB CONNECTION
mongoose.connect(DATABASE_URL);
mongoose.connection
  .on("open", () => console.log("Mongo connected"))
  .on("closed", () => console.log("Mongo disconnected"))
  .on("error", (error) => console.log(error));

//APP OBJ
const app = express();

//MIDDLEWARE
app.use(morgan("dev"));
app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//ROUTES
app.get("/", (req, res) => {
  res.send("It's working");
});

//SERVER LISTENER
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
