const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    minlength: 8,
    maxlength: 65,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    required: true,
    type: Number,
    min: 18,
    max: 120
  }
});
const User = mongoose.model("user", UserSchema);
module.exports = User;
