const express = require("express");
const app = express();

const mongoose = require("mongoose");

const routes = require("./router");

// * Connecting to database using Mongoose
mongoose.connect("mongodb://localhost:27017/aliens", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("CONNECTED TO DB");
});

db.on("error", () => {
  console.log("ERROR IN DB CONNECTION");
});

// * For parsing json data, we have to use this
app.use(express.json());


// * Connecting to route
app.use("/", routes);


// * Listening to the server
const port = 9000;

app.listen(port, () => {
  console.log("SERVER IS RUNNING");
});
