const mongoose = require("mongoose");

const registerSchema=new mongoose.Schema({
  lotno:{
    type:String,
    required:true
  },
  cname:{
  type: String,
  required: true,
  },
  caddress:{
    type: String,
    required:true
  },
  staffname:{
    type:String,
    required:true
  },
  department:{
    type:String,
    required:true
  },
  scontact:{
    type:Number,
    required:true,
  },
  studentDetails:{
    type:[
      {name:String,event:String}
    ],
    required:true
  }
})


let Register;
try {
  Register = mongoose.model("Register");
} catch {
  Register= mongoose.model("Register", registerSchema);
}
module.exports=Register;