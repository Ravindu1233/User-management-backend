const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const userSchema = new Scheme({
  id: Number,
  name: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
