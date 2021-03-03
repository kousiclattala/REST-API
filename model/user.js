// * This is a User Model for how to store data in Database.


var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  technology: {
    type: String,
    required: true,
  },
  subscription: Boolean,
});

module.exports = mongoose.model("User", userSchema);
