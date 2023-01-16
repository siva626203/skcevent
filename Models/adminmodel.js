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
const Admin=mongoose.model("admins", adminSchema);
module.exports=Admin;