const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
    email: {
    type: String,
    default: "@gmail",
  },
  password:{
    type: String,
    required: true,
  }
});
let User ;
try {
  User = mongoose.model("User");
} catch {
  User= mongoose.model("User", UserSchema);
}
module.exports = User;