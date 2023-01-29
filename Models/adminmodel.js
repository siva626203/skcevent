const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  status:{
    type:String
  }
});
let Admin;
try {
  Admin = mongoose.model("admins");
} catch {
  Admin = mongoose.model("admins", adminSchema);
}

module.exports=Admin;