//DEPENDENCIES
require("dotenv").config();
const mongoose = require("mongoose");

//DB CONNECTION
mongoose.connect(process.env.DATABASE_URL);

mongoose.connection
  .on("open", () => console.log("Mongo connected"))
  .on("closed", () => console.log("Mongo disconnected"))
  .on("error", (error) => console.log(error));

//EXPORT CONNECTION
module.exports = mongoose;
